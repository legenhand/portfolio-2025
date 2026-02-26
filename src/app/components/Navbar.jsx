'use client';

import { useState, useEffect } from 'react';
import { CodeBracketIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import CvButton from './button/CvButton';
import Link from 'next/link';

const navigation = [
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section');
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (window.scrollY >= sectionTop - sectionHeight / 3) {
                    setActiveSection(section.id);
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavigation = (href) => {
        setIsOpen(false);
        if (document.startViewTransition) {
            document.startViewTransition(() => {
                document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
            });
        } else {
            document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className="fixed top-0 md:top-4 left-0 md:left-1/2 md:-translate-x-1/2 w-full md:w-[95%] md:max-w-5xl bg-[#111113]/80 backdrop-blur-lg z-50 border-b md:border border-tertiary md:rounded-2xl shadow-xl">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="flex items-center justify-between h-16">
                    {/* Logo Section */}
                    <Link href="/" className="flex items-center gap-2 group" onClick={() => window.scrollTo(0, 0)}>
                        <div className="bg-primary border border-tertiary p-1.5 rounded-lg group-hover:border-accent transition-colors">
                            <CodeBracketIcon className="h-6 w-6 text-accent" />
                        </div>
                        <span className="text-xl font-bold font-mono text-white tracking-wider">
                            R<span className="text-accent">.</span>F
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-6">
                        <div className="flex items-center gap-2 font-mono text-sm">
                            {navigation.map((item) => (
                                <button
                                    key={item.name}
                                    onClick={() => handleNavigation(item.href)}
                                    className={`${activeSection === item.href.slice(1)
                                            ? 'text-accent bg-accent/10 border-accent/20'
                                            : 'text-gray-400 hover:text-white hover:bg-white/5 border-transparent'
                                        } px-3 py-1.5 rounded-md border transition-all`}
                                >
                                    {item.name}
                                </button>
                            ))}
                        </div>
                        <div className="ml-2 pl-4 border-l border-tertiary/60">
                            <CvButton />
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 rounded-md text-gray-400 hover:text-white focus:outline-none"
                        >
                            {isOpen ? (
                                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                            ) : (
                                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden absolute w-full bg-[#111113]/95 backdrop-blur-xl border-b border-tertiary shadow-xl transition-all duration-300 origin-top overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-4 py-4 space-y-2 font-mono text-sm border-t border-tertiary">
                    {navigation.map((item) => (
                        <button
                            key={item.name}
                            onClick={() => handleNavigation(item.href)}
                            className={`${activeSection === item.href.slice(1)
                                    ? 'bg-accent/10 text-accent border-l-2 border-accent'
                                    : 'text-gray-400 hover:bg-white/5 hover:text-white border-l-2 border-transparent'
                                } block px-4 py-3 w-full text-left transition-all`}
                        >
                            {/* Command palette style arrows */}
                            <span className="text-xs mr-2 opacity-50">{">"}</span>
                            {item.name}
                        </button>
                    ))}
                    <div className="pt-4 mt-2 border-t border-tertiary">
                        <CvButton />
                    </div>
                </div>
            </div>
        </nav>
    );
}