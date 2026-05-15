'use client'

import { useState } from 'react'

export default function Projects() {
    const [filter, setFilter] = useState('all')

    const projects = [
        {
            id: 1,
            title: 'Interview AI Platform',
            description: 'AI-powered interview preparation platform with real-time feedback and personalized mock interviews.',
            technologies: ['Next.js', 'OpenAI API', 'TypeScript', 'AI'],
            category: 'ai',
            liveUrl: 'https://interview-ai-livid-seven.vercel.app/',
            featured: true,
            icon: 'fa-user-tie'
        },
        {
            id: 2,
            title: 'Nifty Trader',
            description: 'Advanced stock trading and market analysis platform with live market insights.',
            technologies: ['React.js', 'Node.js', 'WebSocket', 'TradingView'],
            category: 'fintech',
            liveUrl: 'https://niftytrader.in',
            featured: true,
            icon: 'fa-chart-line'
        },
        {
            id: 3,
            title: 'Stockezee',
            description: 'Smart stock market analytics and trading insights platform for investors and traders.',
            technologies: ['Next.js', 'TypeScript', 'Node.js'],
            category: 'fintech',
            liveUrl: 'https://www.stockezee.com/',
            featured: true,
            icon: 'fa-arrow-trend-up'
        },
        {
            id: 4,
            title: 'Performance Tracker',
            description: 'AI-powered website performance and optimization tracking dashboard.',
            technologies: ['Next.js', 'Lighthouse', 'AI'],
            category: 'ai',
            liveUrl: 'https://performance-tracker-testing.vercel.app',
            featured: true,
            icon: 'fa-gauge-high'
        },
        {
            id: 5,
            title: 'E-Commerce Platform',
            description: 'Modern full-stack e-commerce platform with responsive UI and product management.',
            technologies: ['React.js', 'Node.js', 'MongoDB'],
            category: 'web',
            liveUrl: 'https://e-commerce-harshit-testing.vercel.app/',
            featured: false,
            icon: 'fa-cart-shopping'
        },
        {
            id: 6,
            title: 'Muneem Ji POS',
            description: 'POS and billing management software for shops and businesses.',
            technologies: ['Next.js', 'MongoDB', 'TypeScript'],
            category: 'saas',
            liveUrl: 'https://muneemji-pos.vercel.app/',
            featured: true,
            icon: 'fa-cash-register'
        },
        {
            id: 7,
            title: 'Algo Trade Platform',
            description: 'Algorithmic trading dashboard with automated strategy execution and analytics.',
            technologies: ['React.js', 'Node.js', 'WebSocket'],
            category: 'fintech',
            liveUrl: 'https://algo-trade-plum.vercel.app/',
            featured: true,
            icon: 'fa-robot'
        },
        {
            id: 8,
            title: 'OrderKro',
            description: 'Restaurant and food ordering platform with modern UI and seamless order management.',
            technologies: ['Next.js', 'TypeScript', 'MongoDB'],
            category: 'saas',
            liveUrl: 'https://orderkro.vercel.app/',
            featured: true,
            icon: 'fa-utensils'
        },
        {
            id: 9,
            title: 'Tara4U',
            description: 'Professional business and service platform with modern responsive design.',
            technologies: ['Next.js', 'Tailwind CSS', 'TypeScript'],
            category: 'web',
            liveUrl: 'https://www.tara4u.com/',
            featured: false,
            icon: 'fa-globe'
        },
        {
            id: 10,
            title: 'Bill Karo',
            description: 'GST billing and invoice management SaaS platform for businesses.',
            technologies: ['Next.js', 'Stripe', 'TypeScript'],
            category: 'saas',
            liveUrl: 'https://bill-karo.vercel.app/',
            featured: true,
            icon: 'fa-file-invoice-dollar'
        },
        {
            id: 11,
            title: 'AI News Dashboard',
            description: 'AI-powered news aggregation and regeneration platform using LLM workflows.',
            technologies: ['Next.js', 'OpenAI API', 'Puppeteer'],
            category: 'ai',
            liveUrl: 'https://news-dashboard-lnhk.vercel.app/login',
            featured: false,
            icon: 'fa-newspaper'
        },
        {
            id: 12,
            title: 'The Dance Tales',
            description: 'Creative dance academy website with elegant animations and modern UI.',
            technologies: ['React.js', 'Tailwind CSS', 'Framer Motion'],
            category: 'web',
            liveUrl: 'https://www.thedancetales.com/',
            featured: false,
            icon: 'fa-music'
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
                <div className="text-center mb-12 animate-fadeInUp">
                    <span className="badge-orange mb-4 px-6 py-2">PORTFOLIO</span>
                    <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
                        Featured <span className="text-[#ff5722]">Projects</span>
                    </h2>
                    <div className="section-divider mb-4"></div>
                    <p className="text-gray-400 max-w-2xl mx-auto text-sm">
                        Explore my latest work across AI, FinTech, and Enterprise solutions
                    </p>
                </div>

                {/* Featured Projects */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {featuredProjects.map((project, index) => (
                        <div key={project.id} className="project-card animate-fadeInUp group" style={{ animationDelay: `${index * 0.1}s` }}>
                            <div className="h-32 bg-gradient-to-br from-[#ff5722]/10 to-[#ff5722]/5 flex items-center justify-center border-b border-[#2a2a2a] group-hover:from-[#ff5722]/20 group-hover:to-[#ff5722]/10 transition-all duration-300">
                                <i className={`fas ${project.icon} text-5xl text-[#ff5722] group-hover:scale-110 transition-transform duration-300`}></i>
                            </div>
                            <div className="p-5">
                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#ff5722] transition-colors">{project.title}</h3>
                                <p className="text-sm text-gray-400 mb-3 line-clamp-2">{project.description}</p>
                                <div className="flex flex-wrap gap-1.5 mb-4">
                                    {project.technologies.slice(0, 3).map((tech, i) => (
                                        <span key={i} className="badge text-xs px-2 py-1">{tech}</span>
                                    ))}
                                    {project.technologies.length > 3 && (
                                        <span className="badge text-xs px-2 py-1">+{project.technologies.length - 3}</span>
                                    )}
                                </div>
                                <a
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-primary w-full text-center text-sm py-2"
                                >
                                    <i className="fas fa-external-link-alt mr-2"></i>
                                    View Live
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-3 mb-10">
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setFilter(cat.id)}
                            className={`px-5 py-2.5 rounded-lg font-semibold uppercase text-xs tracking-wider transition-all ${filter === cat.id
                                ? 'bg-[#ff5722] text-white shadow-lg shadow-[#ff5722]/30'
                                : 'bg-[#1a1a1a] text-gray-400 border border-[#2a2a2a] hover:border-[#ff5722] hover:text-white'
                                }`}
                        >
                            {cat.name}
                        </button>
                    ))}
                </div>

                {/* All Projects */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {filteredProjects.map((project, index) => (
                        <div key={project.id} className="project-card animate-fadeInUp group hover:scale-105 transition-transform duration-300" style={{ animationDelay: `${index * 0.05}s` }}>
                            <div className="h-28 bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] flex items-center justify-center border-b border-[#2a2a2a]">
                                <i className={`fas ${project.icon} text-4xl text-gray-600 group-hover:text-[#ff5722] transition-colors duration-300`}></i>
                            </div>
                            <div className="p-4">
                                <h4 className="text-lg font-bold text-white mb-1.5 group-hover:text-[#ff5722] transition-colors line-clamp-1">{project.title}</h4>
                                <p className="text-xs text-gray-400 mb-3 line-clamp-2">{project.description}</p>
                                <div className="flex flex-wrap gap-1 mb-3">
                                    {project.technologies.slice(0, 2).map((tech, i) => (
                                        <span key={i} className="badge text-xs px-2 py-0.5">{tech}</span>
                                    ))}
                                </div>
                                <a
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-secondary w-full text-center text-xs py-2"
                                >
                                    <i className="fas fa-arrow-right mr-1"></i>
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
