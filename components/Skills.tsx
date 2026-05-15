'use client'

import { useState, useEffect } from 'react'

export default function Skills() {
    const [isVisible, setIsVisible] = useState(false)

    const skills = [
        { name: 'React.js', level: 95, icon: 'fab fa-react' },
        { name: 'Next.js', level: 95, icon: 'fas fa-code' },
        { name: 'TypeScript', level: 90, icon: 'fab fa-js' },
        { name: 'JavaScript', level: 95, icon: 'fab fa-js-square' },
        { name: 'Node.js', level: 92, icon: 'fab fa-node-js' },
        { name: 'Express.js', level: 90, icon: 'fas fa-server' },
        { name: 'MongoDB', level: 88, icon: 'fas fa-database' },
        { name: 'Tailwind CSS', level: 95, icon: 'fas fa-paint-brush' },
        { name: 'AI / ML', level: 88, icon: 'fas fa-brain' },
        { name: 'RAG Systems', level: 85, icon: 'fas fa-robot' },
        { name: 'LangChain', level: 85, icon: 'fas fa-link' },
        { name: 'MCP', level: 82, icon: 'fas fa-microchip' },
        { name: 'OpenAI APIs', level: 90, icon: 'fas fa-bolt' },
        { name: 'Puppeteer', level: 84, icon: 'fas fa-spider' },
        { name: 'SEO Optimization', level: 86, icon: 'fas fa-chart-line' },

    ]

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                }
            },
            { threshold: 0.2 }
        )

        const skillsSection = document.getElementById('skills')
        if (skillsSection) {
            observer.observe(skillsSection)
        }

        return () => observer.disconnect()
    }, [])

    return (
        <section id="skills" className="section bg-[#0a0a0a] relative overflow-hidden">
            {/* Geometric Background */}
            <div className="absolute inset-0 opacity-10">
                <div className="geometric-line w-96 h-96 bottom-20 left-10 -rotate-12"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16 animate-fadeInUp">
                    <span className="badge-orange mb-4 px-6 py-2">MY SKILLS</span>
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white">
                        Technical <span className="text-[#ff5722]">Expertise</span>
                    </h2>
                    <div className="section-divider mb-6"></div>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        A comprehensive toolkit of modern technologies and frameworks
                    </p>
                </div>

                {/* Skills Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
                    {skills.map((skill, index) => (
                        <div key={index} className="card text-center animate-fadeInUp" style={{ animationDelay: `${index * 0.1}s` }}>
                            <div className="w-20 h-20 mx-auto mb-4 rounded-lg bg-[#2a2a2a] flex items-center justify-center">
                                <i className={`${skill.icon} text-4xl text-[#ff5722]`}></i>
                            </div>
                            <h4 className="text-lg font-bold text-white mb-3">{skill.name}</h4>
                            <div className="mb-2">
                                <span className="text-2xl font-bold text-[#ff5722]">{skill.level}%</span>
                            </div>
                            <div className="skill-bar">
                                <div
                                    className="skill-bar-fill"
                                    style={{
                                        width: isVisible ? `${skill.level}%` : '0%',
                                        transitionDelay: `${index * 0.1}s`
                                    }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
                    {[
                        { number: '10+', label: 'Technologies', icon: 'fa-code' },
                        { number: '4.5+', label: 'Years Experience', icon: 'fa-calendar' },
                        { number: '20+', label: 'Projects', icon: 'fa-project-diagram' },
                        { number: '100%', label: 'Quality', icon: 'fa-check-circle' }
                    ].map((stat, index) => (
                        <div key={index} className="stat-card animate-fadeInUp" style={{ animationDelay: `${index * 0.1}s` }}>
                            <i className={`fas ${stat.icon} text-3xl text-[#ff5722] mb-4`}></i>
                            <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                            <div className="text-sm text-gray-400 uppercase tracking-wide">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
