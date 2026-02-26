'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { AcademicCapIcon, BookOpenIcon, CodeBracketIcon } from '@heroicons/react/24/outline';
import { GraduationCap } from 'lucide-react';

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
            className="py-24 bg-primary relative border-t border-tertiary/50"
        >
            {/* Background grid */}
            <div className="absolute inset-0 bg-dot-grid opacity-50 pointer-events-none"></div>

            <div className="max-w-6xl mx-auto px-4 relative z-10">
                <div className="flex items-center mb-16">
                    <GraduationCap className="w-8 h-8 text-accent mr-4" />
                    <h2 className="text-3xl md:text-4xl font-bold font-sans text-white tracking-tight">
                        Education & Training
                    </h2>
                    <div className="h-[1px] bg-tertiary flex-1 ml-8"></div>
                </div>

                <motion.div
                    className="space-y-6"
                    variants={containerVariants}
                >
                    {education.map((edu, idx) => (
                        <motion.div
                            key={idx}
                            variants={itemVariants}
                            className="bg-[#111113] p-6 md:p-8 rounded-xl border border-tertiary relative group hover:border-accent/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(16,185,129,0.05)]"
                        >
                            {/* Accent Line */}
                            <div className="absolute top-0 left-0 w-1 h-full bg-tertiary group-hover:bg-accent transition-colors duration-300 rounded-l-xl"></div>

                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-6">
                                <div className="flex items-start gap-4">
                                    <div className="mt-1 bg-primary p-3 rounded-lg border border-tertiary hidden sm:flex items-center justify-center group-hover:border-accent/50 transition-colors">
                                        <edu.icon className="h-6 w-6 text-accent" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl md:text-2xl font-semibold text-white mb-1 group-hover:text-accent transition-colors">{edu.program}</h3>
                                        <div className="text-gray-400 font-mono text-sm flex items-center">
                                            <span className="text-info mr-2">@</span>
                                            {edu.institution}
                                        </div>
                                    </div>
                                </div>
                                <div className="text-left md:text-right font-mono self-start md:self-center">
                                    <div className="inline-block bg-primary border border-tertiary px-3 py-1 rounded-md text-accent text-sm">
                                        {edu.period}
                                    </div>
                                </div>
                            </div>

                            <ul className="space-y-3 text-gray-400 font-sans pl-1 md:pl-16">
                                {edu.achievements.map((achievement, i) => (
                                    <li key={i} className="leading-relaxed flex items-start">
                                        <span className="text-accent mr-3 mt-1.5 opacity-70">▹</span>
                                        <span className="flex-1">{achievement}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.section>
    );
}