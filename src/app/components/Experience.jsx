'use client';

import { motion } from 'framer-motion';
import { BriefcaseIcon, Terminal } from 'lucide-react';
import Image from 'next/image';

const experiences = [
    {
        company: 'PT Bank Raya Indonesia',
        role: 'Back End Developer',
        period: '2025.03 - Present',
        location: 'Jakarta, Indonesia',
        website: 'https://bankraya.co.id',
        logo: '/logo/bankraya.png',
        points: [
            'Modernized legacy systems by migrating a monolithic .NET framework application into highly scalable Golang microservices',
            'Developed robust and secure middleware services to facilitate cash withdrawals at branch offices',
            'Engineered and integrated the QRIS-Tap middleware functionality to enhance digital payment capabilities',
            'Optimized core middleware infrastructure to ensure high availability and seamless data flow'
        ],
        techlog: 'stack: ["Go", ".NET", "Microservices", "REST API"]'
    },
    {
        company: 'Proxycurl',
        role: 'Software Engineer',
        period: '2024.06 - 2025.02',
        location: 'Singapore, Remote',
        website: 'https://nubela.co/proxycurl',
        logo: '/logo/proxycurl.webp',
        points: [
            'Developed and maintained APIs and frontend components for Proxycurl and Sapiengraph',
            'Built and optimized Search API features while resolving customer technical issues',
            'Collaborated with cross-functional teams to design and ship product enhancements',
            'Contributed to revenue growth by delivering customer-requested features'
        ],
        techlog: 'stack: ["Python", "TypeScript", "CockroachDB", "TimeScaleDB", "ElasticSearch", "GitLab CI"]'
    },
    {
        company: 'PT Zahir Internasional',
        role: 'Back End Developer',
        period: '2022.08 - 2024.06',
        location: 'Jakarta, Indonesia',
        website: 'https://www.zahironline.com/',
        logo: '/logo/zahir.webp',
        points: [
            'Led the backend infrastructure development for the Zahir Online SaaS platform',
            'Improved system performance by 40% by migrating core services from PHP to Golang',
            'Developed the backend microservices for the Zahir Consolidation app from scratch',
            'Managed API integrations and feature development across ZahirHR and ZahirOnline',
            'Designed database schemas and services to support product scalability'
        ],
        techlog: 'stack: ["Go", "PHP", "React.js", "JasperReport"]'
    },
    {
        company: 'SMK Bina Profesi',
        role: 'Teacher',
        period: '2021.01 - 2022.08',
        location: 'Bogor, Indonesia',
        website: 'https://smk-binaprofesibgr.sch.id/',
        logo: '/logo/smkbp.webp',
        points: [
            'Taught Computer and Network Engineering, focusing on Routing, MikroTik, and Linux servers',
            'Managed the school\'s network infrastructure and computer-based exam systems',
            'Developed technical curriculum and teaching methodologies',
            'Improved post-pandemic student engagement through practical lesson plans',
            'Collaborated with faculty to improve technical education quality'
        ]
    },
];

export default function Experience() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2, // Stagger effect between items
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -30 }, // Slide from the left
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                type: "spring", stiffness: 50, damping: 10
            }
        }
    };

    return (
        <motion.section
            id="experience"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="py-24 bg-primary relative border-t border-tertiary/50"
        >
            {/* Background grid */}
            <div className="absolute inset-0 bg-dot-grid opacity-50 pointer-events-none"></div>

            <div className="max-w-6xl mx-auto px-4 relative z-10">
                <div className="flex items-center mb-16">
                    <Terminal className="w-8 h-8 text-accent mr-4" />
                    <h2 className="text-3xl md:text-4xl font-bold font-sans text-white tracking-tight">
                        Experience Log
                    </h2>
                    <div className="h-[1px] bg-tertiary flex-1 ml-8"></div>
                </div>

                {/* Continuous Timeline Container */}
                <motion.div
                    className="relative border-l-2 border-tertiary ml-4 md:ml-6 pl-8 md:pl-12 space-y-12 pb-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {/* Bottom Line Fade */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 1 }}
                        className="absolute bottom-0 left-[-2px] w-0.5 h-24 bg-gradient-to-t from-primary to-transparent"
                    ></motion.div>

                    {experiences.map((exp, idx) => (
                        <motion.div key={idx} variants={itemVariants} className="relative group">
                            {/* Timeline Dot */}
                            <div className="absolute -left-[41px] md:-left-[57px] top-10 w-4 h-4 rounded-full bg-primary border-2 border-tertiary group-hover:border-accent transition-colors duration-300 flex items-center justify-center shadow-[0_0_10px_rgba(16,185,129,0)] group-hover:shadow-[0_0_15px_rgba(16,185,129,0.3)] z-10">
                                <div className="w-1.5 h-1.5 rounded-full bg-tertiary group-hover:bg-accent transition-colors duration-300"></div>
                            </div>

                            <div className="bg-[#111113] p-8 rounded-xl border border-tertiary hover:border-accent/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(16,185,129,0.05)]">
                                <div className="flex justify-between items-start mb-6 flex-col md:flex-row gap-6">
                                    <div className="flex items-start gap-4">
                                        <a
                                            href={exp.website}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="mt-1 bg-primary p-2 rounded-lg border border-tertiary hidden sm:block hover:border-accent/50 transition-colors"
                                        >
                                            <Image
                                                src={exp.logo}
                                                alt={`${exp.company} logo`}
                                                width={40}
                                                height={40}
                                                className="h-10 w-10 object-contain"
                                            />
                                        </a>
                                        <div>
                                            <h3 className="text-xl md:text-2xl font-semibold text-white mb-1 group-hover:text-accent transition-colors">{exp.role}</h3>
                                            <a
                                                href={exp.website}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-gray-400 font-mono text-sm hover:text-white transition-colors flex items-center"
                                            >
                                                <span className="text-info mr-2">@</span>
                                                {exp.company}
                                            </a>
                                        </div>
                                    </div>
                                    <div className="text-left md:text-right font-mono">
                                        <div className="inline-block bg-primary border border-tertiary px-3 py-1 rounded-md text-accent text-sm mb-2">
                                            {exp.period}
                                        </div>
                                        <p className="text-xs text-gray-500">{exp.location}</p>
                                    </div>
                                </div>

                                <ul className="space-y-4 text-gray-400 font-sans pl-1">
                                    {exp.points.map((point, i) => (
                                        <li key={i} className="leading-relaxed flex items-start">
                                            <span className="text-accent mr-3 mt-1.5 opacity-70">▹</span>
                                            <span className="flex-1 text-gray-300">{point}</span>
                                        </li>
                                    ))}
                                </ul>

                                {exp.techlog && (
                                    <div className="mt-8 pt-4 border-t border-tertiary/50">
                                        <code className="text-xs md:text-sm font-mono text-warning bg-primary px-3 py-2 rounded-md border border-tertiary block w-full overflow-x-auto">
                                            {">"} {exp.techlog}
                                        </code>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.section>
    );
}