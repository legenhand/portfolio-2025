import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains' });

export const metadata = {
    metadataBase: new URL('https://rizkifirmansyah.com'),
    title: {
        default: 'Muhamad Rizki Firmansyah | Backend Developer & Software Engineer Indonesia',
        template: '%s | Muhamad Rizki Firmansyah',
    },
    description: 'Muhamad Rizki Firmansyah (Rizki Firmansyah) — Backend Developer & Software Engineer berpengalaman di Indonesia. Spesialisasi Golang, Python, Microservices, dan REST API. Saat ini bekerja di PT Bank Raya Indonesia sebagai Back End Developer.',
    keywords: [
        'Muhamad Rizki Firmansyah', 'Rizki Firmansyah', 'M Rizki Firmansyah',
        'Backend Developer', 'Back End Developer', 'Software Engineer',
        'Golang Developer', 'Python Developer', 'Programmer Indonesia',
        'Backend Developer Indonesia', 'Backend Developer Jakarta',
        'Software Engineer Indonesia', 'Microservices Developer',
        'Full Stack Developer', 'API Developer', 'REST API Developer',
        'rizkifirmansyah', 'rizki firmansyah portfolio',
        'developer golang indonesia', 'backend engineer',
        'programmer backend', 'web developer indonesia',
    ],
    authors: [{ name: 'Muhamad Rizki Firmansyah', url: 'https://rizkifirmansyah.com' }],
    creator: 'Muhamad Rizki Firmansyah',
    publisher: 'Muhamad Rizki Firmansyah',
    alternates: {
        canonical: 'https://rizkifirmansyah.com',
    },
    openGraph: {
        type: 'website',
        locale: 'id_ID',
        alternateLocale: 'en_US',
        url: 'https://rizkifirmansyah.com',
        title: 'Muhamad Rizki Firmansyah | Backend Developer & Software Engineer',
        description: 'Portfolio Muhamad Rizki Firmansyah — Backend Developer & Software Engineer di Indonesia. Spesialisasi Golang, Python, Microservices, dan REST API.',
        siteName: 'Muhamad Rizki Firmansyah — Portfolio',
        images: [
            {
                url: '/opengraph-image',
                width: 1200,
                height: 630,
                alt: 'Muhamad Rizki Firmansyah — Backend Developer & Software Engineer',
                type: 'image/png',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Muhamad Rizki Firmansyah | Backend Developer & Software Engineer',
        description: 'Portfolio Muhamad Rizki Firmansyah — Backend Developer & Software Engineer di Indonesia. Golang, Python, Microservices.',
        images: ['/opengraph-image'],
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
    verification: {
        // Uncomment and add your Google Search Console verification code:
        // google: 'your-google-verification-code',
    },
    category: 'technology',
};

const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    dateModified: new Date().toISOString(),
    mainEntity: {
        '@type': 'Person',
        '@id': 'https://rizkifirmansyah.com/#person',
        name: 'Muhamad Rizki Firmansyah',
        alternateName: ['Rizki Firmansyah', 'M Rizki Firmansyah', 'M. Rizki Firmansyah'],
        givenName: 'Muhamad Rizki',
        familyName: 'Firmansyah',
        jobTitle: 'Backend Developer',
        description: 'Backend Developer & Software Engineer berpengalaman di Indonesia dengan spesialisasi Golang, Python, Microservices, dan REST API. Saat ini bekerja di PT Bank Raya Indonesia.',
        url: 'https://rizkifirmansyah.com',
        image: 'https://rizkifirmansyah.com/opengraph-image',
        email: 'muhamad@rizkifirmansyah.com',
        telephone: '+6285155017225',
        nationality: {
            '@type': 'Country',
            name: 'Indonesia',
        },
        address: {
            '@type': 'PostalAddress',
            addressLocality: 'Jakarta',
            addressRegion: 'DKI Jakarta',
            addressCountry: 'ID',
        },
        sameAs: [
            'https://github.com/legenhand',
            'https://www.linkedin.com/in/m-rizki-firmansyah/',
        ],
        alumniOf: [
            {
                '@type': 'EducationalOrganization',
                name: 'Universitas Terbuka',
                url: 'https://www.ut.ac.id/',
            },
            {
                '@type': 'EducationalOrganization',
                name: 'Bangkit Academy led by Google, Tokopedia, Gojek, & Traveloka',
            },
        ],
        worksFor: {
            '@type': 'Organization',
            name: 'PT Bank Raya Indonesia',
            url: 'https://bankraya.co.id',
        },
        hasOccupation: {
            '@type': 'Occupation',
            name: 'Backend Developer',
            occupationalCategory: '15-1252',
            description: 'Develops and maintains backend systems, APIs, and microservices',
            skills: 'Golang, Python, Node.js, Microservices, REST API, PostgreSQL, Docker',
        },
        knowsAbout: [
            'Backend Development',
            'Software Engineering',
            'Golang',
            'Python',
            'Node.js',
            'PHP',
            'TypeScript',
            'JavaScript',
            'Microservices Architecture',
            'REST API Design',
            'PostgreSQL',
            'CockroachDB',
            'Elasticsearch',
            'Docker',
            'Next.js',
            'React.js',
            'GitLab CI/CD',
        ],
        knowsLanguage: [
            {
                '@type': 'Language',
                name: 'Indonesian',
                alternateName: 'Bahasa Indonesia',
            },
            {
                '@type': 'Language',
                name: 'English',
            },
        ],
    },
};

// WebSite schema for sitelinks search box
const webSiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Muhamad Rizki Firmansyah Portfolio',
    alternateName: 'Rizki Firmansyah Portfolio',
    url: 'https://rizkifirmansyah.com',
};

export default function RootLayout({ children }) {
    return (
        <html lang="id" className="dark">
            <head>
                <link rel="canonical" href="https://rizkifirmansyah.com" />
            </head>
            <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans bg-primary text-gray-200 antialiased selection:bg-accent/30 selection:text-accent min-h-screen relative`}>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteJsonLd) }}
                />
                {children}
                <SpeedInsights />
            </body>
        </html>
    );
}