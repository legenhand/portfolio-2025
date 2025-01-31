'use client';

import { useRef } from 'react';
import Typewriter from 'typewriter-effect';
import { ChevronDoubleDownIcon } from '@heroicons/react/24/outline';
import { useInView } from 'framer-motion';
import { GithubIcon, LinkedinIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function Hero() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const router = useRouter();

    const scrollToExperience = () => {
        if (document.startViewTransition) {
            document.startViewTransition(() => {
                router.push('/#experience');
                document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
            });
        } else {
            router.push('/#experience');
            document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section
            ref={ref}
            className="min-h-screen flex items-center justify-center bg-primary text-white"
            style={{
                transform: isInView ? "none" : "translateY(20px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s"
            }}
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

                {/* Social Icons */}
                <div className="flex justify-center space-x-6 mb-8">
                    <a
                        href="https://github.com/legenhand"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-accent transition-colors"
                        aria-label="GitHub Profile"
                    >
                        <GithubIcon className="h-8 w-8" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/m-rizki-firmansyah/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-accent transition-colors"
                        aria-label="LinkedIn Profile"
                    >
                        <LinkedinIcon className="h-8 w-8" />
                    </a>
                </div>

                {/* Scroll Down Button */}
                <button
                    onClick={scrollToExperience}
                    className="group animate-bounce"
                    aria-label="Scroll to Experience Section"
                >
                    <ChevronDoubleDownIcon className="h-12 w-12 mx-auto text-gray-400 group-hover:text-accent transition-colors" />
                </button>
            </div>
        </section>
    );
}