'use client';

import { motion } from 'framer-motion';
import { CodeBracketIcon, ServerIcon, DevicePhoneMobileIcon, DatabaseIcon } from '@heroicons/react/24/outline';

const skills = [
    {
        name: 'Backend',
        icon: ServerIcon,
        items: ['Golang', 'Python', 'Node.js', 'REST APIs']
    },
    // Add other skills from your CV
];

export default function Skills() {
    return (
        <motion.section
            id="skills"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewTransitionName="section"
            className="py-20 bg-primary"
        >
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-12 text-center">Technical Skills</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skills.map((skill) => (
                        <div key={skill.name} className="bg-secondary p-6 rounded-lg">
                            <skill.icon className="h-8 w-8 text-accent mb-4" />
                            <h3 className="text-xl font-semibold mb-4">{skill.name}</h3>
                            <ul className="space-y-2">
                                {skill.items.map((item) => (
                                    <li key={item} className="text-gray-400">{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
}