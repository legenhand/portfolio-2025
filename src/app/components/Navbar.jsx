'use client';

import { useRouter } from 'next/navigation';
import { CodeBracketIcon } from '@heroicons/react/24/outline';
// import CvButton from './CvButton';

export default function Navbar() {
    const router = useRouter();

    const navigateWithTransition = (sectionId) => {
        if (document.startViewTransition) {
            document.startViewTransition(() => {
                router.push(`/#${sectionId}`);
                document.getElementById(sectionId)?.scrollIntoView();
            });
        } else {
            router.push(`/#${sectionId}`);
            document.getElementById(sectionId)?.scrollIntoView();
        }
    };

    return (
        <nav className="fixed w-full bg-primary/90 backdrop-blur z-50">
            <div className="max-w-6xl mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <CodeBracketIcon className="h-8 w-8 text-accent" />
                        <span className="text-xl font-bold">MRF</span>
                    </div>
                    <div className="hidden md:flex items-center space-x-8">
                        <button onClick={() => navigateWithTransition('experience')} className="hover:text-accent transition">
                            Experience
                        </button>
                        {/*<CvButton />*/}
                    </div>
                </div>
            </div>
        </nav>
    );
}