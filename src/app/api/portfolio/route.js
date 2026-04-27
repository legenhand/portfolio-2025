import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const DATA_PATH = path.join(process.cwd(), 'data', 'portfolio.json');

export async function GET() {
    try {
        const data = JSON.parse(fs.readFileSync(DATA_PATH, 'utf-8'));
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to read portfolio data' }, { status: 500 });
    }
}

// POST for auth check only
export async function POST(request) {
    const password = request.headers.get('x-admin-password');
    const expectedPassword = process.env.ADMIN_PASSWORD || 'admin123';
    if (password !== expectedPassword) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    return NextResponse.json({ success: true });
}

export async function PUT(request) {
    try {
        const password = request.headers.get('x-admin-password');
        const expectedPassword = process.env.ADMIN_PASSWORD || 'admin123';

        if (password !== expectedPassword) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const body = await request.json();

        // Write locally first (works in dev)
        try {
            fs.writeFileSync(DATA_PATH, JSON.stringify(body, null, 2), 'utf-8');
        } catch (fsError) {
            console.log('Local write skipped (read-only filesystem)');
        }

        // Commit to GitHub if configured
        const githubToken = process.env.GITHUB_TOKEN;
        const githubRepo = process.env.GITHUB_REPO;
        const githubBranch = process.env.GITHUB_BRANCH || 'main';

        if (githubToken && githubRepo) {
            try {
                const filePath = 'data/portfolio.json';
                const apiUrl = `https://api.github.com/repos/${githubRepo}/contents/${filePath}`;

                // Get current file SHA
                const getRes = await fetch(apiUrl, {
                    headers: {
                        'Authorization': `Bearer ${githubToken}`,
                        'Accept': 'application/vnd.github.v3+json',
                    },
                });

                let sha = null;
                if (getRes.ok) {
                    const fileData = await getRes.json();
                    sha = fileData.sha;
                }

                // Commit the updated file
                const content = Buffer.from(JSON.stringify(body, null, 2)).toString('base64');
                const commitRes = await fetch(apiUrl, {
                    method: 'PUT',
                    headers: {
                        'Authorization': `Bearer ${githubToken}`,
                        'Accept': 'application/vnd.github.v3+json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        message: `chore: update portfolio data via admin panel`,
                        content,
                        sha,
                        branch: githubBranch,
                    }),
                });

                if (!commitRes.ok) {
                    const errorData = await commitRes.json();
                    console.error('GitHub API error:', errorData);
                    return NextResponse.json({
                        success: true,
                        warning: 'Saved locally but failed to push to GitHub',
                        error: errorData.message
                    });
                }

                return NextResponse.json({ success: true, message: 'Saved and committed to GitHub' });
            } catch (githubError) {
                console.error('GitHub commit failed:', githubError);
                return NextResponse.json({ success: true, warning: 'Saved locally but failed to push to GitHub' });
            }
        }

        return NextResponse.json({ success: true, message: 'Saved locally' });
    } catch (error) {
        console.error('PUT error:', error);
        return NextResponse.json({ error: 'Failed to save portfolio data' }, { status: 500 });
    }
}
