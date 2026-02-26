'use client';

import { motion } from 'framer-motion';
import { CommandLineIcon, ServerIcon, DevicePhoneMobileIcon } from '@heroicons/react/24/outline';

const projects = [
    {
        title: 'Proxycurl APIs',
        description: 'Developed and maintained LinkedIn data APIs handling 50M+ monthly requests',
        icon: ServerIcon,
        tech: ['Python', 'TypeScript', 'ElasticSearch', 'CockroachDB'],
        period: '2024-2025'
    },
    {
        title: 'Zahir Online Backend',
        description: 'Rebuilt core infrastructure in Go, improving performance by 40%',
        icon: CommandLineIcon,
        tech: ['Golang', 'PostgreSQL', 'Microservices', 'REST API'],
        period: '2023-2024'
    },
    {
        title: 'Costume Rental Marketplace',
        description: 'Mobile app with Jetpack Compose and MVVM architecture',
        icon: DevicePhoneMobileIcon,
        tech: ['Kotlin', 'Jetpack Compose', 'Firebase', 'MVVM'],
        period: '2023'
    },
];

export default function Projects() {
    return (
        <motion.section
            id="projects"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="py-20 bg-secondary"
        >
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ y: 20 }}
                            whileInView={{ y: 0 }}
                            className="bg-primary p-6 rounded-lg hover:shadow-accent/10 hover:shadow-xl transition-all"
                        >
                            <project.icon className="h-12 w-12 text-accent mb-4" />
                            <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                            <p className="text-gray-400 mb-4">{project.description}</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tech.map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <p className="text-sm text-gray-400">{project.period}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
}