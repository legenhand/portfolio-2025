'use client';

import { motion, useInView } from 'framer-motion';
import {
    SiGo, SiPython, SiJavascript, SiTypescript, SiPostgresql,
    SiMysql, SiPhp, SiGit, SiCockroachlabs, SiDocker,
    SiGitlab, SiNextdotjs, SiReact, SiElasticsearch, SiNodedotjs
} from 'react-icons/si';
import { useRef } from 'react';
import { Code2 } from "lucide-react";

const skills = [
    {
        name: 'backend',
        items: ['Golang', 'Python', 'Node.js', 'PHP'],
    },
    {
        name: 'fullstack',
        items: ['TypeScript', 'JavaScript', 'Next.js', 'React.js'],
    },
    {
        name: 'database',
        items: ['PostgreSQL', 'CockroachDB', 'Elasticsearch', 'MySQL'],
    },
    {
        name: 'devops',
        items: ['Docker', 'GitLab CI', 'Git'],
    }
];

const iconComponents = {
    Golang: SiGo,
    Python: SiPython,
    JavaScript: SiJavascript,
    TypeScript: SiTypescript,
    PostgreSQL: SiPostgresql,
    MySQL: SiMysql,
    PHP: SiPhp,
    Git: SiGit,
    CockroachDB: SiCockroachlabs,
    Docker: SiDocker,
    'GitLab CI': SiGitlab,
    'Next.js': SiNextdotjs,
    'React.js': SiReact,
    Elasticsearch: SiElasticsearch,
    "Node.js": SiNodedotjs,
};

export default function Skills() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const cardVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 }
    };

    return (
        <motion.section
            id="skills"
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="py-24 bg-[#0d0d0d] relative border-t border-tertiary/50"
        >
            <div className="max-w-6xl mx-auto px-4 z-10 relative">
                <div className="flex items-center mb-16">
                    <Code2 className="w-8 h-8 text-info mr-4" />
                    <h2 className="text-3xl md:text-4xl font-bold font-sans text-white tracking-tight">
                        Dependencies
                    </h2>
                    <div className="h-[1px] bg-tertiary flex-1 ml-8"></div>
                </div>

                <motion.div
                    className="grid md:grid-cols-2 gap-6 font-mono"
                    variants={containerVariants}
                >
                    {skills.map((skill) => (
                        <motion.div
                            key={skill.name}
                            variants={cardVariants}
                            className="bg-[#111113] p-6 rounded-xl border border-tertiary hover:border-info/40 transition-colors group relative overflow-hidden"
                        >
                            {/* JSON structure visual */}
                            <div className="mb-4 pb-4 border-b border-tertiary/60">
                                <span className="text-gray-400">"</span>
                                <span className="text-info font-bold">{skill.name}</span>
                                <span className="text-gray-400">": [</span>
                            </div>

                            <ul className="space-y-3 pl-4">
                                {skill.items.map((item, idx) => {
                                    const Icon = iconComponents[item];
                                    return (
                                        <li
                                            key={item}
                                            className="text-gray-300 flex items-center group/item hover:text-white transition-colors"
                                        >
                                            <span className="text-gray-600 mr-2 opacity-0 group-hover/item:opacity-100 transition-opacity">
                                                {">"}
                                            </span>
                                            {Icon && <Icon className="h-4 w-4 mr-3 text-gray-500 group-hover/item:text-info transition-colors" />}
                                            <span className="text-sm">"{item}"</span>
                                            {idx < skill.items.length - 1 && <span className="text-gray-500 ml-1">,</span>}
                                        </li>
                                    );
                                })}
                            </ul>

                            <div className="mt-4 pt-4 text-gray-400">
                                ]
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.section>
    );
}