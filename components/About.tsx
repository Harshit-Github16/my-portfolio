'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function About() {
    const [activeImage, setActiveImage] = useState(2)

    const images = [
        { src: '/image3.jpeg', alt: 'Harshit Sharma - Professional Photo 3' },
        { src: '/image2.jpeg', alt: 'Harshit Sharma - Professional Photo 2' },
        { src: '/image4.PNG', alt: 'Harshit Sharma - Professional Photo 2' },

    ]

    return (
        <section id="about" className="section bg-[#050505] relative overflow-hidden">
            {/* Geometric Background */}
            <div className="absolute inset-0 opacity-10">
                <div className="geometric-line w-96 h-96 top-20 right-10 rotate-12"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16 animate-fadeInUp">
                    <span className="badge-orange mb-4 px-6 py-2">ABOUT ME</span>
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white">
                        Read About My Life<br />
                        <span className="text-[#ff5722]">Struggle Story!</span>
                    </h2>
                    <div className="section-divider mb-6"></div>
                </div>

                {/* Main Content */}
                <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
                    {/* Left - Image */}
                    <div className="animate-fadeInLeft">
                        <div className="relative">
                            {/* Main Image */}
                            <div className="relative h-[500px] rounded-lg overflow-hidden border-2 border-[#2a2a2a] hover:border-[#ff5722] transition-all">
                                <Image
                                    src={images[activeImage].src}
                                    alt={images[activeImage].alt}
                                    fill
                                    className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                                />
                            </div>

                            {/* Thumbnail Gallery */}
                            {/* <div className="grid grid-cols-3 gap-4 mt-6">
                                {images.map((image, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setActiveImage(index)}
                                        className={`relative h-24 rounded-lg overflow-hidden border-2 transition-all ${activeImage === index
                                            ? 'border-[#ff5722]'
                                            : 'border-[#2a2a2a] hover:border-[#ff5722]'
                                            }`}
                                    >
                                        <Image
                                            src={image.src}
                                            alt={image.alt}
                                            fill
                                            className="object-cover grayscale"
                                        />
                                    </button>
                                ))}
                            </div> */}


                        </div>
                    </div>

                    {/* Right - Content */}
                    <div className="space-y-6 animate-fadeInRight">
                        <div>
                            <h3 className="text-3xl font-bold text-white mb-6">
                                I'm a <span className="text-[#ff5722]">Senior Full-Stack Developer</span>
                            </h3>
                            <div className="space-y-4 text-gray-400 leading-relaxed">
                                <p>
                                    Based in <span className="text-white font-semibold">Jodhpur, Rajasthan</span>, with over 4.5 years
                                    of hands-on experience building scalable web applications that serve thousands of users daily.
                                </p>
                                <p>
                                    Currently leading a talented team at <span className="text-white font-semibold">Now a Wave Technologies</span>,
                                    where I architect enterprise-grade solutions and mentor developers to achieve their full potential.
                                </p>
                                <p>
                                    My expertise lies in the <span className="text-white font-semibold">MERN stack</span>, with
                                    a special focus on <span className="text-white font-semibold">AI integration</span> using
                                    LangChain and OpenAI APIs.
                                </p>
                            </div>
                        </div>

                        {/* Skills Progress */}
                        <div className="space-y-4 pt-6">
                            {[
                                { name: 'Reactjs', level: 90 },
                                { name: 'HTML / CSS', level: 90 },
                                { name: 'Nextjs', level: 95 },
                                { name: 'Express JS', level: 80 }
                            ].map((skill, index) => (
                                <div key={index}>
                                    <div className="flex justify-between mb-2">
                                        <span className="text-sm font-semibold text-white uppercase tracking-wide">{skill.name}</span>
                                        <span className="text-sm text-gray-400">{skill.level}%</span>
                                    </div>
                                    <div className="skill-bar">
                                        <div className="skill-bar-fill" style={{ width: `${skill.level}%` }}></div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Buttons */}
                        <div className="flex gap-4 pt-6">
                            <a href="#contact" className="btn-primary">
                                Hire Me
                            </a>
                            <a href="#projects" className="btn-secondary">
                                About Me
                            </a>
                        </div>
                    </div>
                </div>

                {/* Education */}
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="card animate-fadeInUp">
                        <div className="flex gap-4">
                            <div className="w-16 h-16 rounded-lg bg-[#ff5722] flex items-center justify-center flex-shrink-0">
                                <i className="fas fa-university text-white text-2xl"></i>
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-white mb-2">Master of Computer Applications</h4>
                                <p className="text-gray-400 mb-2">Bikaner University • 2024 - Present</p>
                                <span className="badge-orange text-xs">CGPA: 8.7/10</span>
                            </div>
                        </div>
                    </div>
                    <div className="card animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
                        <div className="flex gap-4">
                            <div className="w-16 h-16 rounded-lg bg-[#2a2a2a] flex items-center justify-center flex-shrink-0">
                                <i className="fas fa-user-graduate text-[#ff5722] text-2xl"></i>
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-white mb-2">Bachelor of Computer Applications</h4>
                                <p className="text-gray-400 mb-2">Jai Narain Vyas University • 2019 - 2021</p>
                                <span className="badge text-xs">First Class with Distinction</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
