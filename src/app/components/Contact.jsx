'use client';

import { motion } from 'framer-motion';
import { EnvelopeIcon, PhoneIcon, GlobeAltIcon } from '@heroicons/react/24/outline';

export default function Contact() {
    return (
        <motion.section
            id="contact"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewTransitionName="section"
            className="py-20 bg-secondary"
        >
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-12 text-center">Get in Touch</h2>

                <div className="grid md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <div className="flex items-start gap-4">
                            <EnvelopeIcon className="h-8 w-8 text-accent flex-shrink-0" />
                            <div>
                                <h3 className="text-xl font-semibold mb-2">Email</h3>
                                <a
                                    href="mailto:firmansyah720.fs@gmail.com"
                                    className="text-gray-400 hover:text-accent transition-colors"
                                >
                                    firmansyah720.fs@gmail.com
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <PhoneIcon className="h-8 w-8 text-accent flex-shrink-0" />
                            <div>
                                <h3 className="text-xl font-semibold mb-2">Phone</h3>
                                <a
                                    href="tel:+6285155017225"
                                    className="text-gray-400 hover:text-accent transition-colors"
                                >
                                    +62 851-5501-7225
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <GlobeAltIcon className="h-8 w-8 text-accent flex-shrink-0" />
                            <div>
                                <h3 className="text-xl font-semibold mb-2">Website</h3>
                                <a
                                    href="https://rizkifirmansyah.com"
                                    target="_blank"
                                    className="text-gray-400 hover:text-accent transition-colors"
                                >
                                    rizkifirmansyah.com
                                </a>
                            </div>
                        </div>
                    </div>

                    <form className="space-y-6">
                        <div>
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full p-3 bg-primary rounded-lg focus:ring-2 focus:ring-accent outline-none"
                            />
                        </div>
                        <div>
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="w-full p-3 bg-primary rounded-lg focus:ring-2 focus:ring-accent outline-none"
                            />
                        </div>
                        <div>
              <textarea
                  placeholder="Your Message"
                  rows="5"
                  className="w-full p-3 bg-primary rounded-lg focus:ring-2 focus:ring-accent outline-none"
              ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="px-6 py-3 bg-accent text-primary rounded-lg hover:bg-accent/90 transition-colors font-semibold"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </motion.section>
    );
}