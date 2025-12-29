'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function Hero() {
    const [text, setText] = useState('')
    const [isDeleting, setIsDeleting] = useState(false)
    const [loopNum, setLoopNum] = useState(0)
    const [typingSpeed, setTypingSpeed] = useState(150)

    const roles = [
        'Full-Stack Developer',
        'AI Solutions Architect',
        'MERN Stack Expert',
        'Team Lead',
        'Tech Innovator'
    ]

    useEffect(() => {
        const handleType = () => {
            const current = loopNum % roles.length
            const fullText = roles[current]

            setText(
                isDeleting
                    ? fullText.substring(0, text.length - 1)
                    : fullText.substring(0, text.length + 1)
            )

            setTypingSpeed(isDeleting ? 30 : 150)

            if (!isDeleting && text === fullText) {
                setTimeout(() => setIsDeleting(true), 500)
            } else if (isDeleting && text === '') {
                setIsDeleting(false)
                setLoopNum(loopNum + 1)
            }
        }

        const timer = setTimeout(handleType, typingSpeed)
        return () => clearTimeout(timer)
    }, [text, isDeleting, loopNum, typingSpeed, roles])

    const scrollToContact = () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
    }

    const scrollToProjects = () => {
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
            {/* Background Animation */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -inset-10 opacity-50">
                    <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-float"></div>
                    <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-gray-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-float" style={{ animationDelay: '2s' }}></div>
                    <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-gray-600 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-float" style={{ animationDelay: '4s' }}></div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="text-center lg:text-left animate-fadeInLeft">
                        <div className="mb-6">
                            <p className="text-gray-400 text-lg mb-2">Hello, I'm</p>
                            <h1 className="text-5xl lg:text-6xl font-bold mb-4">
                                <span className="gradient-text">Harshit Sharma</span>
                            </h1>
                            <div className="text-2xl lg:text-3xl text-gray-300 mb-6 h-12">
                                <span className="typing-animation">{text}</span>
                            </div>
                        </div>

                        <p className="text-xl text-gray-400 mb-8 max-w-2xl">
                            Senior Full-Stack Developer in <span className="text-white font-semibold">Jodhpur, Rajasthan</span> with <span className="text-white font-semibold">4.5+ years</span> of experience
                            building cutting-edge web applications and AI-powered solutions. Expert in Next.js, React.js, and modern web technologies
                            serving clients across Rajasthan and India.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <button
                                onClick={scrollToContact}
                                className="btn-primary px-8 py-3 text-lg font-semibold"
                            >
                                <i className="fas fa-envelope mr-2"></i>
                                Get In Touch
                            </button>
                            <button
                                onClick={scrollToProjects}
                                className="px-8 py-3 text-lg font-semibold border-2 border-white text-white rounded-lg hover:bg-white hover:text-black transition-all duration-300"
                            >
                                <i className="fas fa-eye mr-2"></i>
                                View My Work
                            </button>
                        </div>

                        {/* Social Links */}
                        <div className="flex justify-center lg:justify-start space-x-6 mt-8">
                            <a
                                href="https://github.com/harshit-sharma"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-white hover-glow p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-all duration-300"
                            >
                                <i className="fab fa-github text-xl"></i>
                            </a>
                            <a
                                href="https://linkedin.com/in/harshit-sharma"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-white hover-glow p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-all duration-300"
                            >
                                <i className="fab fa-linkedin text-xl"></i>
                            </a>
                            <a
                                href="mailto:harshit0150@gmail.com"
                                className="text-gray-400 hover:text-white hover-glow p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-all duration-300"
                            >
                                <i className="fas fa-envelope text-xl"></i>
                            </a>
                            <a
                                href="tel:+919928005564"
                                className="text-gray-400 hover:text-white hover-glow p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-all duration-300"
                            >
                                <i className="fas fa-phone text-xl"></i>
                            </a>
                        </div>
                    </div>

                    {/* Right Content - Profile Image */}
                    <div className="flex justify-center lg:justify-end animate-fadeInRight">
                        <div className="relative">
                            <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white shadow-2xl hover-glow">
                                <Image
                                    src="/myphoto.JPG"
                                    alt="Harshit Sharma"
                                    width={400}
                                    height={400}
                                    className="w-full h-full object-cover"
                                    priority
                                />
                            </div>
                            {/* Floating Elements */}
                            <div className="absolute -top-4 -right-4 w-20 h-20 bg-white rounded-full flex items-center justify-center animate-float">
                                <i className="fas fa-code text-black text-2xl"></i>
                            </div>
                            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center animate-float" style={{ animationDelay: '1s' }}>
                                <i className="fas fa-brain text-white text-xl"></i>
                            </div>
                            <div className="absolute top-1/2 -left-8 w-12 h-12 bg-gray-400 rounded-full flex items-center justify-center animate-float" style={{ animationDelay: '2s' }}>
                                <i className="fas fa-rocket text-black text-sm"></i>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
                        <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}