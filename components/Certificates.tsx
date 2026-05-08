'use client'

import { useState, useEffect } from 'react'

export default function Certificates() {
    const [currentIndex, setCurrentIndex] = useState(0)

    const certificates = [
        {
            title: "Machine Learning",
            issuer: "ML Certification",
            pdfPath: "/certificates/ML.pdf",
            icon: "fa-brain",
            description: "Advanced machine learning algorithms and implementations"
        },
        {
            title: "React.js",
            issuer: "React.js Expert Certification",
            pdfPath: "/certificates/Reactjs.pdf",
            icon: "fa-react",
            description: "Modern React development and best practices"
        },
        {
            title: "Agentic AI",
            issuer: "Agentic AI Specialist",
            pdfPath: "/certificates/agentic-ai.pdf",
            icon: "fa-robot",
            description: "Building intelligent AI agents and systems"
        },
        {
            title: "AI Assistance",
            issuer: "AI Assistant Development",
            pdfPath: "/certificates/ai-assistance.pdf",
            icon: "fa-microchip",
            description: "Creating AI-powered assistance solutions"
        },
        {
            title: "ChatGPT",
            issuer: "ChatGPT Integration Expert",
            pdfPath: "/certificates/chatgpt.pdf",
            icon: "fa-comments",
            description: "Advanced ChatGPT API integration techniques"
        },
        {
            title: "Fundamentals of AI",
            issuer: "AI Fundamentals Certification",
            pdfPath: "/certificates/fundamental-of-ai.pdf",
            icon: "fa-lightbulb",
            description: "Core concepts and principles of artificial intelligence"
        },
        {
            title: "Node.js",
            issuer: "Node.js Professional",
            pdfPath: "/certificates/nodejs.pdf",
            icon: "fa-node-js",
            description: "Backend development with Node.js ecosystem"
        },
        {
            title: "Prompt Engineering",
            issuer: "Prompt Engineering Specialist",
            pdfPath: "/certificates/prompt_engneer.pdf",
            icon: "fa-code",
            description: "Mastering the art of AI prompt engineering"
        },
        {
            title: "RAG Systems",
            issuer: "RAG Implementation Expert",
            pdfPath: "/certificates/rag.pdf",
            icon: "fa-database",
            description: "Retrieval-Augmented Generation systems"
        }
    ]

    // Auto-play slider
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev === certificates.length - 1 ? 0 : prev + 1))
        }, 5000) // Change every 5 seconds

        return () => clearInterval(interval)
    }, [certificates.length])

    const goToSlide = (index: number) => {
        setCurrentIndex(index)
    }

    const goToPrevious = () => {
        setCurrentIndex((prev) => (prev === 0 ? certificates.length - 1 : prev - 1))
    }

    const goToNext = () => {
        setCurrentIndex((prev) => (prev === certificates.length - 1 ? 0 : prev + 1))
    }

    return (
        <section id="certificates" className="section bg-[#050505] relative overflow-hidden">
            {/* Geometric Background */}
            <div className="absolute inset-0 opacity-10">
                <div className="geometric-line w-96 h-96 top-20 right-10 rotate-45"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16 animate-fadeInUp">
                    <span className="badge-orange mb-4 px-6 py-2">CERTIFICATIONS</span>
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white">
                        Professional <span className="text-[#ff5722]">Certifications</span>
                    </h2>
                    <div className="section-divider mb-6"></div>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Continuously learning and earning certifications in cutting-edge technologies
                    </p>
                </div>

                {/* Certificate Slider */}
                <div className="max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-8 items-center">
                        {/* Left - Certificate Preview */}
                        <div className="relative animate-fadeInLeft">
                            <div className="card p-8 text-center">
                                {/* Icon */}
                                <div className="inline-block p-8 rounded-lg bg-[#2a2a2a] mb-6 animate-float">
                                    <i className={`fas ${certificates[currentIndex].icon} text-7xl text-[#ff5722]`}></i>
                                </div>

                                {/* Certificate Info */}
                                <h3 className="text-3xl font-bold text-white mb-3">
                                    {certificates[currentIndex].title}
                                </h3>
                                <p className="text-xl text-gray-400 mb-4">
                                    {certificates[currentIndex].issuer}
                                </p>
                                <p className="text-gray-500 mb-8 max-w-md mx-auto">
                                    {certificates[currentIndex].description}
                                </p>

                                {/* View Button */}
                                <a
                                    href={certificates[currentIndex].pdfPath}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-primary inline-flex items-center gap-2"
                                >
                                    <i className="fas fa-file-pdf text-xl"></i>
                                    View Certificate
                                </a>

                                {/* Counter */}
                                <div className="mt-8 text-gray-500 font-semibold">
                                    Certificate {currentIndex + 1} of {certificates.length}
                                </div>
                            </div>

                            {/* Navigation Arrows */}
                            <button
                                onClick={goToPrevious}
                                className="absolute left-4 top-1/2 -translate-y-1/2 w-14 h-14 bg-[#2a2a2a] hover:bg-[#ff5722] text-white rounded-lg transition-all shadow-lg z-10"
                                aria-label="Previous certificate"
                            >
                                <i className="fas fa-chevron-left text-xl"></i>
                            </button>
                            <button
                                onClick={goToNext}
                                className="absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14 bg-[#2a2a2a] hover:bg-[#ff5722] text-white rounded-lg transition-all shadow-lg z-10"
                                aria-label="Next certificate"
                            >
                                <i className="fas fa-chevron-right text-xl"></i>
                            </button>
                        </div>

                        {/* Right - Certificate Thumbnails Grid */}
                        <div className="animate-fadeInRight">
                            <div className="grid grid-cols-3 gap-4">
                                {certificates.map((cert, index) => (
                                    <button
                                        key={index}
                                        onClick={() => goToSlide(index)}
                                        className={`card p-6 text-center transition-all hover:scale-105 ${index === currentIndex
                                            ? 'border-2 border-[#ff5722] bg-[#2a2a2a]'
                                            : 'border border-[#2a2a2a] hover:border-[#ff5722]'
                                            }`}
                                    >
                                        <i className={`fas ${cert.icon} text-3xl mb-3 ${index === currentIndex ? 'text-[#ff5722]' : 'text-gray-600'
                                            }`}></i>
                                        <p className={`text-xs font-semibold ${index === currentIndex ? 'text-white' : 'text-gray-500'
                                            }`}>
                                            {cert.title}
                                        </p>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Dots Navigation */}
                    <div className="flex justify-center gap-2 mt-12">
                        {certificates.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`transition-all rounded-full ${index === currentIndex
                                    ? 'w-12 h-3 bg-[#ff5722]'
                                    : 'w-3 h-3 bg-[#2a2a2a] hover:bg-[#ff5722]'
                                    }`}
                                aria-label={`Go to certificate ${index + 1}`}
                            />
                        ))}
                    </div>

                    {/* Auto-play Indicator */}
                    <div className="text-center mt-6">
                        <p className="text-sm text-gray-500">
                            <i className="fas fa-play-circle mr-2"></i>
                            Auto-playing every 5 seconds
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
