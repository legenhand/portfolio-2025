'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { AcademicCapIcon, BookOpenIcon, CodeBracketIcon } from '@heroicons/react/24/outline';
import { GraduationCap } from 'lucide-react';
import portfolioData from '../../../data/portfolio.json';

function formatPeriod(item) {
    const start = item.startYear
        ? (item.startMonth ? `${item.startYear}.${String(item.startMonth).padStart(2, '0')}` : `${item.startYear}`)
        : '';
    const end = item.endYear
        ? (item.endMonth ? `${item.endYear}.${String(item.endMonth).padStart(2, '0')}` : `${item.endYear}`)
        : null;
    if (start && end) return `${start} - ${end}`;
    if (start) return start;
    if (end) return end;
    return '';
}

const iconMap = {
    AcademicCapIcon,
    BookOpenIcon,
    CodeBracketIcon,
};

const education = portfolioData.education.map(edu => ({
    ...edu,
    icon: iconMap[edu.icon] || AcademicCapIcon,
}));

export default function Education() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.3 }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0, opacity: 1,
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
            <div className="absolute inset-0 bg-dot-grid opacity-50 pointer-events-none"></div>
            <div className="max-w-6xl mx-auto px-4 relative z-10">
                <div className="flex items-center mb-16">
                    <GraduationCap className="w-8 h-8 text-accent mr-4" />
                    <h2 className="text-3xl md:text-4xl font-bold font-sans text-white tracking-tight">
                        Education & Training
                    </h2>
                    <div className="h-[1px] bg-tertiary flex-1 ml-8"></div>
                </div>

                <motion.div className="space-y-6" variants={containerVariants}>
                    {education.map((edu, idx) => (
                        <motion.div
                            key={idx}
                            variants={itemVariants}
                            className="bg-[#111113] p-6 md:p-8 rounded-xl border border-tertiary relative group hover:border-accent/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(16,185,129,0.05)]"
                        >
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
                                        {formatPeriod(edu)}
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