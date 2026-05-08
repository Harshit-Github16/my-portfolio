'use client'

import { useState } from 'react'

export default function Projects() {
    const [filter, setFilter] = useState('all')

    const projects = [
        {
            id: 1,
            title: 'Interview AI Platform',
            description: 'AI-powered interview preparation with real-time feedback and personalized learning',
            technologies: ['Next.js', 'OpenAI API', 'TypeScript'],
            category: 'ai',
            liveUrl: 'https://interview-ai-livid-seven.vercel.app/',
            featured: true,
            icon: 'fa-user-tie'
        },
        {
            id: 2,
            title: 'Nifty Trader',
            description: 'Advanced trading platform with stock analysis and real-time market data',
            technologies: ['React.js', 'Node.js', 'WebSocket'],
            category: 'fintech',
            liveUrl: 'https://niftytrader.in',
            featured: true,
            icon: 'fa-chart-line'
        },
        {
            id: 3,
            title: 'HAELO - Judiciary System',
            description: 'Comprehensive judiciary management for high court judgments',
            technologies: ['React.js', 'Node.js', 'MongoDB'],
            category: 'enterprise',
            liveUrl: 'https://haeloapp.in/web/login',
            featured: true,
            icon: 'fa-gavel'
        },
        {
            id: 4,
            title: 'AI News Portal',
            description: 'News scraper with LLM-powered content reformation',
            technologies: ['Next.js', 'Puppeteer', 'OpenAI API'],
            category: 'ai',
            liveUrl: 'https://news-dashboard-lnhk.vercel.app/',
            featured: false,
            icon: 'fa-newspaper'
        },
        {
            id: 5,
            title: 'Cyber Security SaaS',
            description: 'Enterprise cybersecurity platform managing DMARC and BIMI',
            technologies: ['React.js', 'Node.js', 'AWS'],
            category: 'enterprise',
            liveUrl: 'https://console.aquilai.io',
            featured: false,
            icon: 'fa-shield-alt'
        },
        {
            id: 6,
            title: 'GST Simulator SaaS',
            description: 'Automated GST filing and finance management',
            technologies: ['Next.js', 'TypeScript', 'Stripe'],
            category: 'fintech',
            liveUrl: 'https://bill-karo.vercel.app',
            featured: false,
            icon: 'fa-file-invoice-dollar'
        }
    ]

    const categories = [
        { id: 'all', name: 'All Projects' },
        { id: 'ai', name: 'AI & ML' },
        { id: 'enterprise', name: 'Enterprise' },
        { id: 'fintech', name: 'FinTech' }
    ]

    const filteredProjects = filter === 'all' ? projects : projects.filter(p => p.category === filter)
    const featuredProjects = projects.filter(p => p.featured)

    return (
        <section id="projects" className="section bg-[#0a0a0a] relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16 animate-fadeInUp">
                    <span className="badge-orange mb-4 px-6 py-2">PORTFOLIO</span>
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white">
                        Featured <span className="text-[#ff5722]">Projects</span>
                    </h2>
                    <div className="section-divider mb-6"></div>
                </div>

                {/* Featured Projects */}
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {featuredProjects.map((project, index) => (
                        <div key={project.id} className="project-card animate-fadeInUp" style={{ animationDelay: `${index * 0.1}s` }}>
                            <div className="project-card-image">
                                <i className={`fas ${project.icon} text-7xl text-[#ff5722]`}></i>
                            </div>
                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                                <p className="text-gray-400 mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.technologies.map((tech, i) => (
                                        <span key={i} className="badge text-xs">{tech}</span>
                                    ))}
                                </div>
                                <a
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-primary w-full text-center text-sm"
                                >
                                    <i className="fas fa-external-link-alt"></i>
                                    View Live
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setFilter(cat.id)}
                            className={`px-6 py-3 rounded font-semibold uppercase text-sm tracking-wide transition-all ${filter === cat.id
                                ? 'bg-[#ff5722] text-white'
                                : 'bg-[#1a1a1a] text-gray-400 border border-[#2a2a2a] hover:border-[#ff5722]'
                                }`}
                        >
                            {cat.name}
                        </button>
                    ))}
                </div>

                {/* All Projects */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProjects.map((project, index) => (
                        <div key={project.id} className="project-card animate-fadeInUp" style={{ animationDelay: `${index * 0.05}s` }}>
                            <div className="h-40 bg-[#0a0a0a] flex items-center justify-center border-b border-[#2a2a2a]">
                                <i className={`fas ${project.icon} text-5xl text-gray-700`}></i>
                            </div>
                            <div className="p-6">
                                <h4 className="text-xl font-bold text-white mb-2">{project.title}</h4>
                                <p className="text-sm text-gray-400 mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-1 mb-4">
                                    {project.technologies.slice(0, 2).map((tech, i) => (
                                        <span key={i} className="badge text-xs">{tech}</span>
                                    ))}
                                </div>
                                <a
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-secondary w-full text-center text-sm"
                                >
                                    View Project
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
