export default function robots() {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/admin', '/api/'],
            },
        ],
        sitemap: 'https://rizkifirmansyah.com/sitemap.xml',
    };
}
