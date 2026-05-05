import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Muhamad Rizki Firmansyah — Backend Developer & Software Engineer';
export const size = {
    width: 1200,
    height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: '#09090b',
                    padding: '60px 80px',
                    fontFamily: 'monospace',
                    position: 'relative',
                    overflow: 'hidden',
                }}
            >
                {/* Background gradient glow */}
                <div
                    style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '600px',
                        height: '600px',
                        background: 'radial-gradient(circle, rgba(16,185,129,0.15) 0%, transparent 70%)',
                        borderRadius: '50%',
                    }}
                />

                {/* Dot grid pattern overlay */}
                <div
                    style={{
                        position: 'absolute',
                        inset: 0,
                        backgroundImage: 'radial-gradient(circle, #27272a 1px, transparent 1px)',
                        backgroundSize: '24px 24px',
                        opacity: 0.3,
                    }}
                />

                {/* Terminal window */}
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        backgroundColor: '#0d0d0d',
                        borderRadius: '16px',
                        border: '1px solid #27272a',
                        flex: 1,
                        overflow: 'hidden',
                        position: 'relative',
                    }}
                >
                    {/* Window header */}
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            padding: '16px 24px',
                            backgroundColor: '#161618',
                            borderBottom: '1px solid #27272a',
                        }}
                    >
                        <div style={{ display: 'flex', gap: '8px' }}>
                            <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#ef4444' }} />
                            <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#f59e0b' }} />
                            <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#10b981' }} />
                        </div>
                        <div
                            style={{
                                flex: 1,
                                display: 'flex',
                                justifyContent: 'center',
                                color: '#6b7280',
                                fontSize: '14px',
                            }}
                        >
                            rizki@backend-srv: ~/portfolio
                        </div>
                    </div>

                    {/* Window body */}
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            padding: '40px 48px',
                            flex: 1,
                            justifyContent: 'center',
                        }}
                    >
                        {/* Command line */}
                        <div style={{ display: 'flex', marginBottom: '8px', fontSize: '16px' }}>
                            <span style={{ color: '#10b981' }}>rizki@backend-srv</span>
                            <span style={{ color: '#6b7280' }}>:</span>
                            <span style={{ color: '#3b82f6' }}>~</span>
                            <span style={{ color: '#6b7280' }}>$ </span>
                            <span style={{ color: '#d1d5db' }}>cat profile.json</span>
                        </div>

                        {/* Name */}
                        <div
                            style={{
                                fontSize: '56px',
                                fontWeight: 'bold',
                                color: '#ffffff',
                                lineHeight: 1.2,
                                marginTop: '20px',
                                marginBottom: '12px',
                                letterSpacing: '-0.02em',
                            }}
                        >
                            Muhamad Rizki Firmansyah
                        </div>

                        {/* Title with cursor */}
                        <div
                            style={{
                                display: 'flex',
                                fontSize: '28px',
                                color: '#10b981',
                                alignItems: 'center',
                            }}
                        >
                            <span style={{ color: '#4b5563', marginRight: '12px' }}>{'>'}</span>
                            Backend Developer & Software Engineer
                            <span
                                style={{
                                    display: 'inline-block',
                                    width: '3px',
                                    height: '28px',
                                    backgroundColor: '#10b981',
                                    marginLeft: '4px',
                                }}
                            />
                        </div>

                        {/* Tech tags */}
                        <div style={{ display: 'flex', gap: '12px', marginTop: '32px' }}>
                            {['Golang', 'Python', 'Microservices', 'REST API'].map((tech) => (
                                <div
                                    key={tech}
                                    style={{
                                        padding: '6px 16px',
                                        backgroundColor: '#09090b',
                                        border: '1px solid #27272a',
                                        borderRadius: '8px',
                                        color: '#9ca3af',
                                        fontSize: '16px',
                                    }}
                                >
                                    {tech}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* URL at bottom */}
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginTop: '20px',
                        position: 'relative',
                    }}
                >
                    <span style={{ color: '#6b7280', fontSize: '18px' }}>
                        rizkifirmansyah.com
                    </span>
                    <span style={{ color: '#4b5563', fontSize: '14px' }}>
                        Jakarta, Indonesia 🇮🇩
                    </span>
                </div>
            </div>
        ),
        {
            ...size,
        }
    );
}
