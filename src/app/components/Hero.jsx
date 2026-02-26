'use client';

import { useRef } from 'react';
import Typewriter from 'typewriter-effect';
import { ChevronDoubleDownIcon } from '@heroicons/react/24/outline';
import { useInView } from 'framer-motion';
import { GithubIcon, LinkedinIcon, TerminalSquare } from 'lucide-react';
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
            className="min-h-screen flex items-center justify-center relative overflow-hidden bg-dot-grid pt-20"
            style={{
                transform: isInView ? "none" : "translateY(20px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s"
            }}
        >
            {/* Ambient Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-accent/10 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="w-full max-w-4xl px-4 z-10 flex flex-col items-center">
                {/* IDE Window */}
                <div className="w-full bg-[#0d0d0d] rounded-xl border border-tertiary shadow-[0_0_50px_rgba(16,185,129,0.1)] overflow-hidden mb-12">
                    {/* Window Header */}
                    <div className="flex items-center px-4 py-3 bg-[#161618] border-b border-tertiary">
                        <div className="flex space-x-2">
                            <div className="w-3 h-3 rounded-full bg-error"></div>
                            <div className="w-3 h-3 rounded-full bg-warning"></div>
                            <div className="w-3 h-3 rounded-full bg-accent"></div>
                        </div>
                        <div className="flex-1 flex justify-center items-center text-xs text-gray-500 font-mono opacity-80">
                            <TerminalSquare className="w-4 h-4 mr-2" />
                            rizki@backend-srv: ~
                        </div>
                    </div>
                    {/* Window Body */}
                    <div className="p-6 md:p-8 font-mono text-sm md:text-base leading-relaxed">
                        <div className="mb-2">
                            <span className="text-accent">rizki@backend-srv</span>
                            <span className="text-gray-500">:</span>
                            <span className="text-info">~</span>
                            <span className="text-gray-500">$ </span>
                            <span className="text-gray-300">./start-portfolio.sh</span>
                        </div>
                        <div className="text-gray-500 mb-6">
                            [INFO] Booting system... <br />
                            [INFO] Loading dependencies... OK <br />
                            [INFO] Establishing connection... OK
                        </div>

                        <div className="mb-8">
                            <h1 className="text-4xl md:text-6xl font-bold font-sans text-white mb-4 tracking-tight">
                                Muhamad Rizki Firmansyah
                            </h1>
                            <div className="flex text-xl md:text-2xl text-accent h-8 font-mono font-medium">
                                <span className="text-gray-600 mr-3">{">"}</span>
                                <Typewriter
                                    options={{
                                        strings: [
                                            'Backend Specialist',
                                            'API Architect',
                                            'Software Engineer',
                                            'Full Stack Developer'
                                        ],
                                        autoStart: true,
                                        loop: true,
                                        delay: 50,
                                        deleteSpeed: 30,
                                    }}
                                />
                            </div>
                        </div>

                        <div className="mb-2">
                            <span className="text-accent">rizki@backend-srv</span>
                            <span className="text-gray-500">:</span>
                            <span className="text-info">~</span>
                            <span className="text-gray-500">$ </span>
                            <span className="text-gray-300">cat profile.json</span>
                        </div>
                        <div className="text-warning mb-8">
                            <pre className="whitespace-pre-wrap font-mono text-sm md:text-base">
                                {`{
  "status": "ready",
  "passion": "building scalable backend systems",
  "location": "Indonesia"
}`}
                            </pre>
                        </div>

                        {/* Social Links */}
                        <div className="flex items-center space-x-6 border-t border-tertiary pt-6 mt-4">
                            <a
                                href="https://github.com/legenhand"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center text-gray-400 hover:text-white transition-colors group"
                            >
                                <GithubIcon className="h-5 w-5 mr-2 group-hover:text-white" />
                                <span className="font-sans group-hover:underline">GitHub</span>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/m-rizki-firmansyah/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center text-gray-400 hover:text-info transition-colors group"
                            >
                                <LinkedinIcon className="h-5 w-5 mr-2 group-hover:text-info" />
                                <span className="font-sans group-hover:underline">LinkedIn</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Scroll Down Button */}
                <button
                    onClick={scrollToExperience}
                    className="group animate-bounce"
                    aria-label="Scroll to Experience Section"
                >
                    <ChevronDoubleDownIcon className="h-10 w-10 text-gray-500 group-hover:text-accent transition-colors" />
                </button>
            </div>
        </section>
    );
}