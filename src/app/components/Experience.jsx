'use client';

import { motion } from 'framer-motion';
import { BriefcaseIcon } from '@heroicons/react/24/outline';

const experiences = [
    {
        company: 'Proxycurl',
        role: 'Software Engineer',
        period: 'June 2024 – January 2025',
        points: [
            'Developed Proxycurl APIs using Python/TypeScript',
            'Improved API performance by 30% through optimizations',
            'Collaborated with cross-functional teams on feature development'
        ]
    },
    // Add other experiences from your CV
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
                    Work Experience
                </h2>
                <div className="space-y-8">
                    {experiences.map((exp, idx) => (
                        <div key={idx} className="bg-primary p-8 rounded-lg">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h3 className="text-2xl font-semibold">{exp.role}</h3>
                                    <p className="text-accent text-lg">{exp.company}</p>
                                </div>
                                <p className="text-gray-400">{exp.period}</p>
                            </div>
                            <ul className="list-disc pl-6 space-y-2 text-gray-400">
                                {exp.points.map((point, i) => (
                                    <li key={i}>{point}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
}