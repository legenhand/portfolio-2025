'use client';

import { motion } from 'framer-motion';
import { AcademicCapIcon, BookOpenIcon } from '@heroicons/react/24/outline';

const education = [
    {
        institution: 'Bangkit Academy',
        program: 'Mobile Development Cohort',
        icon: AcademicCapIcon,
        period: '2023-2024',
        achievements: [
            'Certified in Android Development (Basic to Intermediate)',
            'Developed rental marketplace app with cross-functional team',
            'Learned Jetpack Compose and modern Android architecture'
        ]
    },
    {
        institution: 'Universitas Terbuka',
        program: 'Sistem Informasi',
        icon: BookOpenIcon,
        period: '2021-2024',
        achievements: [
            'GPA: 3.38/4.00',
            'Published paper on mobile app development',
            'MSIB Study Independent program participant'
        ]
    },
];

export default function Education() {
    return (
        <motion.section
            id="education"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewTransitionName="section"
            className="py-20 bg-primary"
        >
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-12 text-center">Education & Certifications</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    {education.map((edu, idx) => (
                        <div key={idx} className="bg-secondary p-8 rounded-lg">
                            <div className="flex items-start mb-6">
                                <edu.icon className="h-8 w-8 text-accent mr-4" />
                                <div>
                                    <h3 className="text-2xl font-semibold">{edu.program}</h3>
                                    <p className="text-accent">{edu.institution}</p>
                                </div>
                            </div>
                            <p className="text-gray-400 mb-4">{edu.period}</p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-400">
                                {edu.achievements.map((achievement, i) => (
                                    <li key={i}>{achievement}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
}