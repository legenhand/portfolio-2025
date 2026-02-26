'use client';

import { motion } from 'framer-motion';
import { EnvelopeIcon, PhoneIcon, GlobeAltIcon } from '@heroicons/react/24/outline';
import { TerminalSquare, Send } from 'lucide-react';

export default function Contact() {
    return (
        <motion.section
            id="contact"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="py-24 bg-[#0d0d0d] relative border-t border-tertiary/50"
        >
            <div className="max-w-6xl mx-auto px-4 z-10 relative">
                <div className="flex items-center mb-16">
                    <TerminalSquare className="w-8 h-8 text-accent mr-4" />
                    <h2 className="text-3xl md:text-4xl font-bold font-sans text-white tracking-tight">
                        Establish Connection
                    </h2>
                    <div className="h-[1px] bg-tertiary flex-1 ml-8"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    <div className="space-y-8 font-mono">
                        <div className="mb-8">
                            <p className="text-gray-400 mb-2">{"// Contact Information"}</p>
                            <p className="text-gray-500 text-sm">
                                Feel free to reach out for collaborations, opportunities, or just to say hello.
                            </p>
                        </div>

                        <div className="flex items-center gap-4 group">
                            <div className="p-3 bg-primary rounded-lg border border-tertiary group-hover:border-accent/50 transition-colors">
                                <EnvelopeIcon className="h-6 w-6 text-accent" />
                            </div>
                            <div>
                                <h3 className="text-sm text-gray-400 mb-1">email_address:</h3>
                                <a
                                    href="mailto:firmansyah720.fs@gmail.com"
                                    className="text-white hover:text-accent transition-colors"
                                >
                                    "firmansyah720.fs@gmail.com"
                                </a>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 group">
                            <div className="p-3 bg-primary rounded-lg border border-tertiary group-hover:border-info/50 transition-colors">
                                <PhoneIcon className="h-6 w-6 text-info" />
                            </div>
                            <div>
                                <h3 className="text-sm text-gray-400 mb-1">phone_number:</h3>
                                <a
                                    href="tel:+6285155017225"
                                    className="text-white hover:text-info transition-colors"
                                >
                                    "+62 851-5501-7225"
                                </a>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 group">
                            <div className="p-3 bg-primary rounded-lg border border-tertiary group-hover:border-warning/50 transition-colors">
                                <GlobeAltIcon className="h-6 w-6 text-warning" />
                            </div>
                            <div>
                                <h3 className="text-sm text-gray-400 mb-1">website_url:</h3>
                                <a
                                    href="https://rizkifirmansyah.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white hover:text-warning transition-colors"
                                >
                                    "rizkifirmansyah.com"
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="bg-[#111113] p-8 rounded-xl border border-tertiary relative group">
                        {/* Terminal Header */}
                        <div className="flex items-center mb-6 pb-4 border-b border-tertiary/50">
                            <div className="flex space-x-2 mr-4">
                                <div className="w-3 h-3 rounded-full bg-error"></div>
                                <div className="w-3 h-3 rounded-full bg-warning"></div>
                                <div className="w-3 h-3 rounded-full bg-accent"></div>
                            </div>
                            <span className="text-xs text-gray-500 font-mono">guest@visitor: ~/send_message</span>
                        </div>

                        <form className="space-y-5 font-mono text-sm">
                            <div>
                                <label className="block text-gray-400 mb-2">{"<Name />"}</label>
                                <input
                                    type="text"
                                    placeholder="Enter your name..."
                                    className="w-full p-3 bg-primary border border-tertiary rounded-lg focus:ring-1 focus:ring-accent focus:border-accent outline-none text-white placeholder-gray-600 transition-all font-sans"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-400 mb-2">{"<Email />"}</label>
                                <input
                                    type="email"
                                    placeholder="Enter your email..."
                                    className="w-full p-3 bg-primary border border-tertiary rounded-lg focus:ring-1 focus:ring-accent focus:border-accent outline-none text-white placeholder-gray-600 transition-all font-sans"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-400 mb-2">{"<Message />"}</label>
                                <textarea
                                    placeholder="Type your message here..."
                                    rows="4"
                                    className="w-full p-3 bg-primary border border-tertiary rounded-lg focus:ring-1 focus:ring-accent focus:border-accent outline-none text-white placeholder-gray-600 transition-all font-sans resize-none"
                                ></textarea>
                            </div>
                            <button
                                type="button"
                                className="w-full mt-2 px-6 py-3 bg-accent/10 text-accent border border-accent/20 rounded-lg hover:bg-accent hover:text-primary transition-all font-semibold flex items-center justify-center group/btn"
                            >
                                <Send className="w-4 h-4 mr-2 group-hover/btn:-translate-y-1 group-hover/btn:translate-x-1 transition-transform" />
                                Execute .send()
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}