'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { AcademicCapIcon, BookOpenIcon, CodeBracketIcon } from '@heroicons/react/24/outline';

const education = [
    {
        institution: 'Bangkit Academy led by Google, Tokopedia, Gojek, & Traveloka',
        program: 'Mobile Development Cohort',
        period: '2023 - 2024',
        icon: AcademicCapIcon,
        achievements: [
            'Learned Android development from basic to intermediate, including Jetpack Compose',
            'Earned certifications in Basic, Fundamental, and Intermediate Android through Dicoding',
            'Collaborated with Machine Learning and Cloud Engineers on rental marketplace project',
            'Enhanced teamwork and mobile development skills through cross-functional collaboration'
        ]
    },
    {
        institution: 'Universitas Terbuka',
        program: 'Sistem Informasi',
        period: '2021 - 2024',
        icon: BookOpenIcon,
        achievements: [
            'Achieved GPA of 3.38',
            'Participated in MSIB Study Independent program with Bangkit Academy',
            'Authored scientific paper on MVVM and Jetpack Compose implementation',
            'Specialized in mobile application development and software engineering'
        ]
    },
    {
        institution: 'DumbWays.id',
        program: 'Fullstack Developer',
        period: '2022',
        icon: CodeBracketIcon,
        achievements: [
            'Gained hands-on experience in React.js and Node.js development',
            'Built and deployed full-stack web applications',
            'Earned Fullstack Developer certification',
            'Completed intensive bootcamp program'
        ]
    },
];

export default function Education() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { type: 'spring', stiffness: 100 }
        }
    };

    return (
        <motion.section
            id="education"
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="py-20 bg-primary"
        >
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-12 text-center">Education & Certifications</h2>

                <motion.div
                    className="space-y-8"
                    variants={containerVariants}
                >
                    {education.map((edu, idx) => (
                        <motion.div
                            key={idx}
                            variants={itemVariants}
                            className="bg-secondary p-8 rounded-lg border-l-4 border-accent hover:shadow-xl transition-shadow"
                        >
                            <div className="flex items-start gap-4 mb-6">
                                <edu.icon className="h-8 w-8 text-accent flex-shrink-0" />
                                <div>
                                    <h3 className="text-2xl font-semibold">{edu.program}</h3>
                                    <p className="text-accent">{edu.institution}</p>
                                </div>
                            </div>

                            <div className="flex justify-between items-start mb-4">
                                <p className="text-gray-400">{edu.period}</p>
                            </div>

                            <ul className="list-disc pl-6 space-y-2 text-gray-400">
                                {edu.achievements.map((achievement, i) => (
                                    <motion.li
                                        key={i}
                                        whileHover={{ x: 5 }}
                                        className="leading-relaxed"
                                    >
                                        {achievement}
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.section>
    );
}