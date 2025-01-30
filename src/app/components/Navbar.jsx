'use client';

import { useState, useEffect } from 'react';
import { CodeBracketIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import CvButton from './button/CvButton';
import Link from 'next/link';

const navigation = [
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
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
        <nav className="fixed w-full bg-primary/90 backdrop-blur z-50 border-b border-secondary">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo Section */}
                    <Link href="/" className="flex items-center gap-2" onClick={() => window.scrollTo(0, 0)}>
                        <CodeBracketIcon className="h-8 w-8 text-accent" />
                        <span className="text-xl font-bold text-white">RizkiF</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        <div className="flex items-center gap-6">
                            {navigation.map((item) => (
                                <button
                                    key={item.name}
                                    onClick={() => handleNavigation(item.href)}
                                    className={`${
                                        activeSection === item.href.slice(1)
                                            ? 'text-accent border-b-2 border-accent'
                                            : 'text-gray-300 hover:text-accent'
                                    } px-2 py-4 text-sm font-medium transition-all`}
                                >
                                    {item.name}
                                </button>
                            ))}
                        </div>
                        <div className="ml-4">
                            <CvButton />
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 rounded-md text-gray-300 hover:text-accent focus:outline-none"
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
            <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
                <div className="px-2 pt-2 pb-3 space-y-1">
                    {navigation.map((item) => (
                        <button
                            key={item.name}
                            onClick={() => handleNavigation(item.href)}
                            className={`${
                                activeSection === item.href.slice(1)
                                    ? 'bg-secondary text-accent'
                                    : 'text-gray-300 hover:bg-secondary hover:text-accent'
                            } block px-3 py-2 rounded-md text-base font-medium w-full text-left`}
                        >
                            {item.name}
                        </button>
                    ))}
                    <div className="px-3 py-2">
                        <CvButton />
                    </div>
                </div>
            </div>
        </nav>
    );
}