import './globals.css';

export const metadata = {
    title: 'Muhamad Rizki Firmansyah - Software Engineer',
    description: 'Portfolio of Muhamad Rizki Firmansyah, a software engineer based in Indonesia.',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body className="bg-primary text-white">
        {children}
        </body>
        </html>
    );
}