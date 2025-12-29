'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false)
    const [activeSection, setActiveSection] = useState('home')

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
        <nav className="fixed top-0 w-full z-50 glass">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link href="#home" className="text-2xl font-bold gradient-text">
                            HS
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={`nav-link px-3 py-2 text-sm font-medium ${activeSection === item.href.substring(1) ? 'active' : ''
                                        }`}
                                    onClick={() => setActiveSection(item.href.substring(1))}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-blue-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                        >
                            <span className="sr-only">Open main menu</span>
                            {!isOpen ? (
                                <i className="fas fa-bars text-xl"></i>
                            ) : (
                                <i className="fas fa-times text-xl"></i>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            <div className={`md:hidden mobile-menu ${isOpen ? 'open' : ''} fixed top-16 right-0 w-64 h-screen glass`}>
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={`nav-link block px-3 py-2 text-base font-medium ${activeSection === item.href.substring(1) ? 'active' : ''
                                }`}
                            onClick={() => {
                                setActiveSection(item.href.substring(1))
                                setIsOpen(false)
                            }}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    )
}