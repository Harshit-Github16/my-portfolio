'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false)
    const [activeSection, setActiveSection] = useState('home')
    const [scrolled, setScrolled] = useState(false)

    const navItems = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ]

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)

            const sections = navItems.map(item => item.href.substring(1))
            const scrollPosition = window.scrollY + 100

            for (const section of sections) {
                const element = document.getElementById(section)
                if (element) {
                    const offsetTop = element.offsetTop
                    const offsetHeight = element.offsetHeight

                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section)
                        break
                    }
                }
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#0a0a0a]/95 backdrop-blur-sm shadow-lg border-b border-[#2a2a2a]' : 'bg-[#0a0a0a]/50 backdrop-blur-sm'
            }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="#home" className="text-2xl font-bold text-white">
                        Cod<span className="text-[#ff5722]">er</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`text-sm font-medium transition-all uppercase tracking-wide ${activeSection === item.href.substring(1)
                                        ? 'text-[#ff5722]'
                                        : 'text-gray-400 hover:text-white'
                                    }`}
                                onClick={() => setActiveSection(item.href.substring(1))}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className="hidden md:block">
                        <a href="#contact" className="bg-[#ff5722] hover:bg-[#ff6b3d] text-white px-6 py-3 rounded text-xs font-semibold uppercase tracking-wide transition-all">
                            Contact Me
                        </a>
                    </div>

                    {/* Mobile menu button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 text-white"
                    >
                        <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className="md:hidden bg-[#1a1a1a] border-t border-[#2a2a2a]">
                    <div className="px-4 py-4 space-y-2">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`block px-4 py-3 rounded text-sm font-medium uppercase tracking-wide transition-all ${activeSection === item.href.substring(1)
                                        ? 'text-[#ff5722] bg-[#2a2a2a]'
                                        : 'text-gray-400 hover:text-white hover:bg-[#2a2a2a]'
                                    }`}
                                onClick={() => {
                                    setActiveSection(item.href.substring(1))
                                    setIsOpen(false)
                                }}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <a
                            href="#contact"
                            className="block bg-[#ff5722] hover:bg-[#ff6b3d] text-white px-6 py-3 rounded text-center font-semibold uppercase tracking-wide transition-all mt-4"
                            onClick={() => setIsOpen(false)}
                        >
                            Contact Me
                        </a>
                    </div>
                </div>
            )}
        </nav>
    )
}
