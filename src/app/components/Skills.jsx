'use client';

import { motion, useInView } from 'framer-motion';
import {
    SiGo, SiPython, SiJavascript, SiTypescript, SiPostgresql,
    SiMysql, SiPhp, SiKotlin, SiGit, SiCockroachlabs, SiDocker,
    SiGitlab, SiNextdotjs, SiReact, SiElasticsearch, SiNodedotjs
} from 'react-icons/si';
import { TbReport } from 'react-icons/tb';
import { useRef } from 'react';
import {MonitorIcon, ServerIcon, DatabaseIcon, SmartphoneIcon} from "lucide-react";

const skills = [
    {
        name: 'Backend',
        items: ['Golang', 'Python', 'PHP', 'Node.js'],
        icon: ServerIcon
    },
    {
        name: 'Frontend',
        items: ['JavaScript', 'TypeScript', 'Next.js', 'React.js'],
        icon: MonitorIcon
    },
    {
        name: 'Databases',
        items: ['PostgreSQL', 'MySQL', 'Elasticsearch', 'CockroachDB'],
        icon: DatabaseIcon
    },
    {
        name: 'DevOps',
        items: ['Docker', 'GitLab CI', 'Git'],
        icon: ServerIcon
    },
    {
        name: 'Mobile',
        items: ['Kotlin', 'Android Development', 'Jetpack Compose'],
        icon: SmartphoneIcon
    },
    {
        name: 'Reporting',
        items: ['JasperReport', 'Data Visualization', 'Analytics'],
        icon: TbReport
    },
];

const iconComponents = {
    Golang: SiGo,
    Python: SiPython,
    JavaScript: SiJavascript,
    TypeScript: SiTypescript,
    PostgreSQL: SiPostgresql,
    MySQL: SiMysql,
    PHP: SiPhp,
    Kotlin: SiKotlin,
    Git: SiGit,
    CockroachDB: SiCockroachlabs,
    Docker: SiDocker,
    'GitLab CI': SiGitlab,
    'Next.js': SiNextdotjs,
    'React.js': SiReact,
    Elasticsearch: SiElasticsearch,
    SQL: SiPostgresql,
    JasperReport: TbReport,
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

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { type: 'spring', stiffness: 100 }
        }
    };

    const cardVariants = {
        hidden: { scale: 0.95, opacity: 0 },
        visible: { scale: 1, opacity: 1 }
    };

    return (
        <motion.section
            id="skills"
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="py-20 bg-primary"
        >
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-12 text-center">Technical Skills</h2>
                <motion.div
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={containerVariants}
                >
                    {skills.map((skill) => (
                        <motion.div
                            key={skill.name}
                            variants={cardVariants}
                            className="bg-secondary p-6 rounded-lg hover:shadow-xl transition-shadow"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <skill.icon className="h-8 w-8 text-accent" />
                                <h3 className="text-xl font-semibold">{skill.name}</h3>
                            </div>
                            <motion.ul className="space-y-2">
                                {skill.items.map((item) => {
                                    const Icon = iconComponents[item];
                                    return (
                                        <motion.li
                                            key={item}
                                            variants={itemVariants}
                                            className="text-gray-400 flex items-center gap-2 p-2 hover:bg-primary/50 rounded transition-colors"
                                            whileHover={{ scale: 1.02 }}
                                        >
                                            {Icon && <Icon className="h-5 w-5 flex-shrink-0" />}
                                            <span>{item}</span>
                                        </motion.li>
                                    );
                                })}
                            </motion.ul>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.section>
    );
}