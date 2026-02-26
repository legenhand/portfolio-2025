'use client';

import { motion } from 'framer-motion';
import { CodeBracketIcon } from '@heroicons/react/24/outline';

export default function Footer() {
    return (
        <motion.footer
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="bg-primary py-8 border-t border-tertiary"
        >
            <div className="max-w-6xl mx-auto px-4 font-mono">
                <div className="flex flex-col md:flex-row items-center justify-between mb-6">
                    <div className="flex items-center gap-2 mb-4 md:mb-0 group cursor-default">
                        <CodeBracketIcon className="h-6 w-6 text-accent group-hover:text-info transition-colors" />
                        <span className="font-semibold text-gray-300">Muhamad Rizki Firmansyah</span>
                        <span className="text-accent animate-pulse">_</span>
                    </div>
                    <div className="flex gap-6 text-sm">
                        <a
                            href="https://www.linkedin.com/in/m-rizki-firmansyah/"
                            className="text-gray-500 hover:text-accent transition-colors flex items-center"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span className="text-gray-600 mr-1">{"//"}</span> LinkedIn
                        </a>
                        <a
                            href="https://github.com/legenhand"
                            className="text-gray-500 hover:text-accent transition-colors flex items-center"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span className="text-gray-600 mr-1">{"//"}</span> GitHub
                        </a>
                    </div>
                </div>
                <div className="text-center text-gray-600 text-xs flex flex-col md:flex-row justify-center items-center gap-2">
                    <span>module.exports = {'{'}</span>
                    <span className="text-gray-500">copyright: "{new Date().getFullYear()}"</span>
                    <span>{'}'}</span>
                </div>
            </div>
        </motion.footer>
    );
}