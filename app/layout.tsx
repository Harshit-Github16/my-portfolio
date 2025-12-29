import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
    title: 'Harshit Sharma - Full-Stack Developer & AI Solutions Architect',
    description: 'Senior Full-Stack Developer & AI Solutions Architect with 4.5+ years of experience. Specializing in MERN Stack, Next.js, AI/ML, and modern web technologies.',
    keywords: 'Full-Stack Developer, React, Next.js, Node.js, AI, LangChain, MERN Stack, Portfolio, Web Developer, JavaScript, TypeScript',
    authors: [{ name: 'Harshit Sharma' }],
    openGraph: {
        title: 'Harshit Sharma - Full-Stack Developer & AI Solutions Architect',
        description: 'Senior Full-Stack Developer with expertise in AI-driven development and modern web technologies.',
        type: 'website',
        locale: 'en_US',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Harshit Sharma - Full-Stack Developer',
        description: 'Senior Full-Stack Developer & AI Solutions Architect',
    }
}

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className="scroll-smooth">
            <head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
                <link rel="icon" href="/favicon.ico" />
            </head>
            <body className="bg-black text-white font-inter antialiased">
                {children}
            </body>
        </html>
    )
}