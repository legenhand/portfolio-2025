'use client';

import { motion } from 'framer-motion';
import { CodeBracketIcon } from '@heroicons/react/24/outline';

export default function Footer() {
    return (
        <motion.footer
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="bg-primary py-8"
        >
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center justify-between mb-6">
                    <div className="flex items-center gap-2 mb-4 md:mb-0">
                        <CodeBracketIcon className="h-6 w-6 text-accent" />
                        <span className="font-semibold">Muhamad Rizki Firmansyah</span>
                    </div>
                    <div className="flex gap-6">
                        <a
                            href="https://linkedin.com/in/your-profile"
                            className="text-gray-400 hover:text-accent transition-colors"
                            target="_blank"
                        >
                            LinkedIn
                        </a>
                        <a
                            href="https://github.com/your-username"
                            className="text-gray-400 hover:text-accent transition-colors"
                            target="_blank"
                        >
                            GitHub
                        </a>
                    </div>
                </div>
                <p className="text-center text-gray-400 text-sm">
                    © {new Date().getFullYear()} All rights reserved
                </p>
            </div>
        </motion.footer>
    );
}