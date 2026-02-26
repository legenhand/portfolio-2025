import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains' });

export const metadata = {
    title: 'Muhamad Rizki Firmansyah - Backend/Software Engineer',
    description: 'Portfolio of Muhamad Rizki Firmansyah, a software engineer based in Indonesia.',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className="dark">
        <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans bg-primary text-gray-200 antialiased selection:bg-accent/30 selection:text-accent min-h-screen relative`}>
            {children}
            <SpeedInsights />
        </body>
        </html>
    );
}