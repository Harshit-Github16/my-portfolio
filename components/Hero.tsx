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
        'React.js Expert',
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
                setTimeout(() => setIsDeleting(true), 2000)
            } else if (isDeleting && text === '') {
                setIsDeleting(false)
                setLoopNum(loopNum + 1)
            }
        }

        const timer = setTimeout(handleType, typingSpeed)
        return () => clearTimeout(timer)
    }, [text, isDeleting, loopNum, typingSpeed, roles])

    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden py-20 bg-[#0a0a0a]">
            {/* Geometric Background Lines */}
            <div className="absolute inset-0 opacity-20 hidden lg:block">
                <div className="geometric-line w-96 h-96 top-20 left-10 rotate-45"></div>
                <div className="geometric-line w-64 h-64 bottom-20 right-20 -rotate-12"></div>
            </div>

            {/* Orange Accent Bar - Only on Desktop */}
            <div className="hidden lg:block absolute left-0 top-0 w-20 h-full bg-orange"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left Content */}
                    <div className="text-center lg:text-left space-y-6 lg:space-y-8 animate-fadeInLeft">
                        {/* Badge */}
                        <div className="inline-block">
                            <span className="badge-orange px-6 py-2 text-xs sm:text-sm">FULL-STACK DEVELOPER</span>
                        </div>

                        {/* Main Heading */}
                        <div className="space-y-3 lg:space-y-4">
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-white">
                                Harshit Sharma
                            </h1>
                            <div className="h-12 sm:h-14 lg:h-16 flex items-center justify-center lg:justify-start">
                                <h2 className="text-lg sm:text-xl lg:text-2xl font-medium text-gray-400">
                                    A Professional <span className="text-orange">{text}</span>
                                    <span className="animate-pulse text-orange">|</span>
                                </h2>
                            </div>
                        </div>

                        {/* Description */}
                        <p className="text-base sm:text-lg text-gray-400 leading-relaxed max-w-xl mx-auto lg:mx-0">
                            Senior Full-Stack Developer from Jodhpur, Rajasthan with 4.5+ years
                            of experience crafting exceptional digital experiences and AI-powered solutions.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <a href="#contact" className="btn-primary text-sm sm:text-base">
                                Download CV
                            </a>
                            <a href="#projects" className="btn-secondary text-sm sm:text-base">
                                My Work
                            </a>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-4 sm:gap-8 pt-6 lg:pt-8 border-t border-gray-800">
                            <div className="text-center lg:text-left">
                                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-orange mb-1">4.5+</div>
                                <div className="text-xs sm:text-sm text-gray-500 uppercase tracking-wide">Years</div>
                            </div>
                            <div className="text-center lg:text-left">
                                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-orange mb-1">17+</div>
                                <div className="text-xs sm:text-sm text-gray-500 uppercase tracking-wide">Projects</div>
                            </div>
                            <div className="text-center lg:text-left">
                                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-orange mb-1">75K+</div>
                                <div className="text-xs sm:text-sm text-gray-500 uppercase tracking-wide">Users</div>
                            </div>
                        </div>
                    </div>

                    {/* Right Content - Image */}
                    <div className="relative flex justify-center lg:justify-end animate-fadeInRight mt-8 lg:mt-0">
                        <div className="relative w-64 h-80 sm:w-80 sm:h-96 lg:w-96 lg:h-[500px] xl:w-[450px] xl:h-[600px]">
                            {/* Geometric Frame */}
                            <div className="absolute inset-0 border-2 border-gray-800 -rotate-3"></div>
                            <div className="absolute inset-0 border-2 border-orange rotate-3"></div>

                            {/* Image Container */}
                            <div className="relative w-full h-full overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
                                <Image
                                    src="/myphoto.JPG"
                                    alt="Harshit Sharma"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>

                            {/* Experience Badge */}
                            <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-orange text-white p-4 sm:p-6 rounded-lg shadow-2xl">
                                <div className="text-3xl sm:text-4xl font-bold">06</div>
                                <div className="text-xs sm:text-sm uppercase tracking-wide">Years of<br />Experience</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
