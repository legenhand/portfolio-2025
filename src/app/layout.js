import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains' });

export const metadata = {
    metadataBase: new URL('https://rizkifirmansyah.com'),
    title: 'Muhamad Rizki Firmansyah | Backend Developer & Programmer',
    description: 'Portfolio of Muhamad Rizki Firmansyah, a Backend Developer and Software Engineer based in Indonesia specializing in Golang, Python, and Microservices.',
    keywords: ['Muhamad Rizki Firmansyah', 'Rizki Firmansyah', 'Programmer', 'Backend Developer', 'Software Engineer', 'Golang Developer', 'Indonesia', 'Jakarta'],
    authors: [{ name: 'Muhamad Rizki Firmansyah' }],
    creator: 'Muhamad Rizki Firmansyah',
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://rizkifirmansyah.com',
        title: 'Muhamad Rizki Firmansyah | Backend Developer & Programmer',
        description: 'Portfolio of Muhamad Rizki Firmansyah, a Backend Developer and Software Engineer based in Indonesia specializing in Golang, Python, and Microservices.',
        siteName: 'Muhamad Rizki Firmansyah Portfolio',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Muhamad Rizki Firmansyah | Backend Developer',
        description: 'Portfolio of Muhamad Rizki Firmansyah, a Backend Developer and Software Engineer based in Indonesia.',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
};

const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Muhamad Rizki Firmansyah',
    jobTitle: 'Backend Developer',
    url: 'https://rizkifirmansyah.com',
    sameAs: [
        'https://github.com/legenhand',
        'https://www.linkedin.com/in/m-rizki-firmansyah/'
    ],
    alumniOf: 'SMK Bina Profesi',
    worksFor: {
        '@type': 'Organization',
        name: 'PT Bank Raya Indonesia'
    },
    knowsAbout: [
        'Backend Development',
        'Software Engineering',
        'Golang',
        'Python',
        'Microservices'
    ]
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className="dark">
            <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans bg-primary text-gray-200 antialiased selection:bg-accent/30 selection:text-accent min-h-screen relative`}>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
                {children}
                <SpeedInsights />
            </body>
        </html>
    );
}