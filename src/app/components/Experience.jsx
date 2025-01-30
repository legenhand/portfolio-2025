'use client';

import { motion } from 'framer-motion';
import { BriefcaseIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

const experiences = [
    {
        company: 'Proxycurl',
        role: 'Software Engineer',
        period: 'June 2024 – January 2025',
        location: 'Singapore, Remote',
        website: 'https://nubela.co/proxycurl',
        logo: '/logo/proxycurl.webp',
        points: [
            'Developed and maintained Proxycurl APIs, frontend, and products including Sapiengraph',
            'Implemented and monitored Search API features, resolving technical issues and customer inquiries',
            'Collaborated cross-functionally to design and enhance product features',
            'Tech Stack: Python, TypeScript, CockroachDB, TimeScaleDB, ElasticSearch, GitLab CI',
            'Contributed to revenue growth through customer-driven feature development'
        ]
    },
    {
        company: 'PT Zahir Internasional',
        role: 'Back End Developer',
        period: 'July 2023 – June 2024',
        location: 'Jakarta, Indonesia',
        website: 'https://www.zahironline.com/',
        logo: '/logo/zahir.webp',
        points: [
            'Led core backend infrastructure development for Zahir Online SaaS platform',
            'Improved application performance by 40% through PHP to Go Lang migration',
            'Developed backend system for Zahir Consolidation app from ground up',
            'Collaborated with frontend teams to enhance UX and system responsiveness',
            'Implemented scalable solutions supporting product innovation and expansion'
        ]
    },
    {
        company: 'PT Zahir Internasional',
        role: 'Frontend Developer',
        period: 'August 2022 – July 2023',
        location: 'Jakarta, Indonesia',
        website: 'https://www.zahironline.com/',
        logo: '/logo/zahir.webp',
        points: [
            'Managed feature development for ZahirHR and ZahirOnline products',
            'Created new reporting features and UI components using React.js',
            'Integrated systems between ZahirHR and ZahirOnline platforms',
            'Tech Stack: React.js, Material UI, Redux.js, JasperReport Generator',
            'Optimized application performance through close collaboration with UX designers'
        ]
    },
    {
        company: 'SMK Bina Profesi',
        role: 'Teacher',
        period: 'January 2021 – August 2022',
        location: 'Bogor, Indonesia',
        website: 'https://smk-binaprofesibgr.sch.id/',
        logo: '/logo/smkbp.webp',
        points: [
            'Taught Computer and Network Engineering (Routing, Mikrotik, Linux servers)',
            'Managed school network infrastructure and computer-based exam systems',
            'Developed curriculum and improved teaching methodologies',
            'Increased post-pandemic student attendance through engaging lesson plans',
            'Collaborated with faculty to enhance technical education quality'
        ]
    },
];

export default function Experience() {
    return (
        <motion.section
            id="experience"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewTransitionName="section"
            className="py-20 bg-secondary"
        >
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-12 text-center flex items-center justify-center">
                    <BriefcaseIcon className="h-8 w-8 mr-2 text-accent" />
                    Professional Experience
                </h2>
                <div className="space-y-12">
                    {experiences.map((exp, idx) => (
                        <div key={idx} className="bg-primary p-8 rounded-lg border-l-4 border-accent">
                            <div className="flex justify-between items-start mb-4 flex-col md:flex-row">
                                <div className="flex items-center mb-4 md:mb-0 gap-4">
                                    <a
                                        href={exp.website}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:opacity-80 transition-opacity"
                                    >
                                        <Image
                                            src={exp.logo}
                                            alt={`${exp.company} logo`}
                                            width={48}
                                            height={48}
                                            className="h-12 w-12 object-contain rounded-lg"
                                        />
                                    </a>
                                    <div>
                                        <h3 className="text-2xl font-semibold">{exp.role}</h3>
                                        <a
                                            href={exp.website}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-accent text-lg hover:underline"
                                        >
                                            {exp.company}
                                        </a>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="text-gray-400">{exp.period}</p>
                                    <p className="text-sm text-gray-400">{exp.location}</p>
                                </div>
                            </div>
                            <ul className="list-disc pl-6 space-y-2 text-gray-400">
                                {exp.points.map((point, i) => (
                                    <li key={i} className="leading-relaxed">{point}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
}