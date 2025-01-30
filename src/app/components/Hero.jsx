'use client';

import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';
import { ChevronDoubleDownIcon } from '@heroicons/react/24/outline';

export default function Hero() {
    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen flex items-center justify-center"
        >
            <div className="text-center px-4">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                    Hi, I'm <span className="text-accent">Muhamad Rizki Firmansyah</span>
                </h1>
                <div className="text-2xl md:text-4xl mb-8">
                    <Typewriter
                        options={{
                            strings: [
                                'Full Stack Developer',
                                'Backend Specialist',
                                'API Developer',
                                'Mobile Developer'
                            ],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </div>
                <ChevronDoubleDownIcon className="h-12 w-12 mx-auto animate-bounce" />
            </div>
        </motion.section>
    );
}