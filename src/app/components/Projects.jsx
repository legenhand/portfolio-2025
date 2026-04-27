'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { CommandLineIcon, ServerIcon, DevicePhoneMobileIcon } from '@heroicons/react/24/outline';
import { FolderGit2, ExternalLink } from 'lucide-react';
import portfolioData from '../../../data/portfolio.json';

const iconMap = {
    ServerIcon,
    CommandLineIcon,
    DevicePhoneMobileIcon,
};

const projects = portfolioData.projects.map(p => ({
    ...p,
    icon: iconMap[p.icon] || ServerIcon,
}));

export default function Projects() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.2 }
        }
    };

    const cardVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } }
    };

    return (
        <motion.section
            id="projects"
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="py-24 bg-[#0d0d0d] relative border-t border-tertiary/50"
        >
            <div className="max-w-6xl mx-auto px-4 z-10 relative">
                <div className="flex items-center mb-16">
                    <FolderGit2 className="w-8 h-8 text-warning mr-4" />
                    <h2 className="text-3xl md:text-4xl font-bold font-sans text-white tracking-tight">
                        Projects
                    </h2>
                    <div className="h-[1px] bg-tertiary flex-1 ml-8"></div>
                </div>

                <motion.div
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                    variants={containerVariants}
                >
                    {projects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            variants={cardVariants}
                            className="bg-[#111113] rounded-xl border border-tertiary hover:border-warning/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(245,158,11,0.05)] group overflow-hidden"
                        >
                            {/* Card Header */}
                            <div className="px-6 pt-6 pb-4 border-b border-tertiary/50">
                                <div className="flex items-start justify-between mb-3">
                                    <div className="p-2 bg-primary rounded-lg border border-tertiary group-hover:border-warning/40 transition-colors">
                                        <project.icon className="h-6 w-6 text-warning" />
                                    </div>
                                    <div className="inline-block bg-primary border border-tertiary px-2.5 py-1 rounded-md text-accent text-xs font-mono">
                                        {project.period}
                                    </div>
                                </div>
                                <h3 className="text-xl font-semibold text-white group-hover:text-warning transition-colors font-mono">
                                    {project.title}
                                </h3>
                            </div>

                            {/* Card Body */}
                            <div className="px-6 py-4">
                                <p className="text-gray-400 text-sm leading-relaxed mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-2 font-mono">
                                    {project.tech.map((tech) => (
                                        <span key={tech} className="px-2.5 py-1 bg-primary border border-tertiary text-gray-300 rounded-md text-xs">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Card Footer */}
                            {project.website && (
                                <div className="px-6 pb-5 pt-2">
                                    <a
                                        href={project.website}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-sm font-mono text-gray-500 hover:text-warning transition-colors"
                                    >
                                        <ExternalLink className="w-3.5 h-3.5" />
                                        {project.website.replace(/^https?:\/\//, '')}
                                    </a>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.section>
    );
}