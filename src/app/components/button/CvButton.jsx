'use client';

import { DocumentArrowDownIcon } from '@heroicons/react/24/outline';

export default function CvButton() {
    return (
        <a
            href="/cv_m_rizki_f.pdf"
            download="CV_Muhamad_Rizki_Firmansyah_2025.pdf"
            className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 text-accent rounded-lg hover:bg-accent hover:text-primary transition-all duration-300 font-mono text-sm font-semibold group"
            aria-label="Download CV"
        >
            <DocumentArrowDownIcon className="h-5 w-5 transition-transform group-hover:scale-110" />
            <span className="hidden sm:inline-block">download_cv()</span>
        </a>
    );
}