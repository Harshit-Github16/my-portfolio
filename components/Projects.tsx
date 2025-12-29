'use client'

import { useState } from 'react'

export default function Projects() {
    const [filter, setFilter] = useState('all')

    const projects = [
        {
            id: 1,
            title: 'Nifty Trader - Stock Analysis',
            description: 'Advanced trading platform with comprehensive stock analysis, screeners, technical indicators, and real-time market data for informed trading decisions.',
            image: '/api/placeholder/400/250',
            technologies: ['React.js', 'Node.js', 'WebSocket', 'Chart.js', 'Redis'],
            category: 'fintech',
            liveUrl: 'https://niftytrader.in',
            githubUrl: '#',
            featured: true,
            status: 'Live'
        },
        {
            id: 2,
            title: 'HAELO - Judiciary Management System',
            description: 'A comprehensive judiciary project for high court judgments where we manage all judgments of court for advocates. Features advanced search, case tracking, and document management.',
            image: '/api/placeholder/400/250',
            technologies: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'JWT'],
            category: 'enterprise',
            liveUrl: 'https://haeloapp.in/web/login',
            githubUrl: '#',
            featured: false,
            status: 'Live'
        },
        {
            id: 3,
            title: 'AI News Portal & Scraper',
            description: 'Advanced news scraper using Puppeteer and Cheerio to scrape news from various websites. Reformed content using LLM models for enhanced readability and categorization.',
            image: '/api/placeholder/400/250',
            technologies: ['Next.js', 'Puppeteer', 'Cheerio', 'OpenAI API', 'MongoDB'],
            category: 'ai',
            liveUrl: 'https://news-dashboard-lnhk.vercel.app/',
            githubUrl: '#',
            featured: false,
            status: 'Live'
        },
        {
            id: 3,
            title: 'Cyber Security SaaS Platform',
            description: 'Enterprise-grade cybersecurity SaaS managing DMARC, BIMI, Domain monitoring, Email archival, and BAS. Comprehensive security dashboard for companies.',
            image: '/api/placeholder/400/250',
            technologies: ['React.js', 'Node.js', 'AWS', 'PostgreSQL', 'Redis'],
            category: 'enterprise',
            liveUrl: 'https://console.aquilai.io',
            githubUrl: '#',
            featured: true,
            status: 'Live'
        },
        {
            id: 4,
            title: 'GST Simulator & Finance SaaS',
            description: 'POC for a SaaS product where users can auto-fill GST and manage all finance problems. Eliminates the need for CA with automated compliance features.',
            image: '/api/placeholder/400/250',
            technologies: ['Next.js', 'TypeScript', 'Stripe', 'MongoDB', 'Tailwind CSS'],
            category: 'fintech',
            liveUrl: 'https://bill-karo.vercel.app',
            githubUrl: '#',
            featured: false,
            status: 'Live'
        },
        {
            id: 5,
            title: 'Gausetu - Gaushala Management',
            description: 'Complete management system for Gaushala (cow shelter) operations including animal tracking, health records, donation management, and volunteer coordination.',
            image: '/api/placeholder/400/250',
            technologies: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'Socket.io'],
            category: 'management',
            liveUrl: 'https://gausetu.vercel.app/',
            githubUrl: '#',
            featured: false,
            status: 'Live'
        },
        {
            id: 6,
            title: 'We Are Dogs - Pet Store',
            description: 'Modern e-commerce platform for pet products built with Next.js. Features product catalog, shopping cart, user authentication, and order management.',
            image: '/api/placeholder/400/250',
            technologies: ['Next.js', 'TypeScript', 'Stripe', 'Tailwind CSS', 'Vercel'],
            category: 'ecommerce',
            liveUrl: 'https://wearedogs.com',
            githubUrl: '#',
            featured: false,
            status: 'Live'
        },
        {
            id: 7,
            title: 'Muneemji POS - Restaurant System',
            description: 'Complete Point of Sale system for restaurants with order management, inventory tracking, billing, and analytics dashboard for business insights.',
            image: '/api/placeholder/400/250',
            technologies: ['React.js', 'Node.js', 'MongoDB', 'Socket.io', 'Chart.js'],
            category: 'management',
            liveUrl: 'https://muneemji-pos.vercel.app/',
            githubUrl: '#',
            featured: false,
            status: 'Live'
        },
        {
            id: 8,
            title: 'Yuva Kabaddi Premier League',
            description: 'Official website for Yuva Kabaddi Premier League featuring team profiles, match schedules, live scores, player statistics, and tournament management.',
            image: '/api/placeholder/400/250',
            technologies: ['React.js', 'Node.js', 'MongoDB', 'Socket.io', 'AWS'],
            category: 'sports',
            liveUrl: 'https://www.yuvakabaddi.com/',
            githubUrl: '#',
            featured: false,
            status: 'Live'
        },
        {
            id: 9,
            title: 'Nifty Trader - Stock Analysis',
            description: 'Advanced trading platform with comprehensive stock analysis, screeners, technical indicators, and real-time market data for informed trading decisions.',
            image: '/api/placeholder/400/250',
            technologies: ['React.js', 'Node.js', 'WebSocket', 'Chart.js', 'Redis'],
            category: 'fintech',
            liveUrl: 'https://niftytrader.in',
            githubUrl: '#',
            featured: false,
            status: 'Live'
        },
        {
            id: 10,
            title: 'TARA - AI Emotional Support',
            description: 'AI-based emotional companion platform providing support for loneliness and mental health. Features chatbot, mood tracking, and personalized recommendations.',
            image: '/api/placeholder/400/250',
            technologies: ['React.js', 'OpenAI API', 'Node.js', 'MongoDB', 'Socket.io'],
            category: 'ai',
            liveUrl: 'https://tara4u.com',
            githubUrl: '#',
            featured: false,
            status: 'Live'
        },
        {
            id: 11,
            title: 'The Dance Tales Academy',
            description: 'Professional dance academy website with class schedules, instructor profiles, student portal, event management, and online registration system.',
            image: '/api/placeholder/400/250',
            technologies: ['Next.js', 'TypeScript', 'Stripe', 'MongoDB', 'Tailwind CSS'],
            category: 'education',
            liveUrl: 'https://thedancetales.com/',
            githubUrl: '#',
            featured: false,
            status: 'Live'
        },
        {
            id: 12,
            title: 'Stokezee - AI Trading Platform',
            description: 'AI-powered trading platform with intelligent stock screener, intraday booster, advanced charting tools, and automated trading strategies.',
            image: '/api/placeholder/400/250',
            technologies: ['React.js', 'Python', 'TensorFlow', 'WebSocket', 'Redis'],
            category: 'fintech',
            liveUrl: 'https://stokezee.com',
            githubUrl: '#',
            featured: true,
            status: 'Live'
        },
        {
            id: 13,
            title: 'LMS - Learning Management System',
            description: 'Comprehensive learning platform where users can access video courses, interactive games for cybersecurity awareness, progress tracking, and certifications.',
            image: '/api/placeholder/400/250',
            technologies: ['React.js', 'Node.js', 'MongoDB', 'AWS S3', 'Socket.io'],
            category: 'education',
            liveUrl: 'https://lms.aquilai.io',
            githubUrl: '#',
            featured: false,
            status: 'Live'
        },
        {
            id: 14,
            title: 'Aquila Cybersecurity Website',
            description: 'Corporate website for cybersecurity company showcasing services, solutions, case studies, and security consulting offerings with modern design.',
            image: '/api/placeholder/400/250',
            technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vercel'],
            category: 'corporate',
            liveUrl: 'https://aquilai.io',
            githubUrl: '#',
            featured: false,
            status: 'Live'
        },
        {
            id: 15,
            title: 'Hospital Management SaaS',
            description: 'Complete hospital management system with patient records, appointment scheduling, billing, inventory management, and staff coordination.',
            image: '/api/placeholder/400/250',
            technologies: ['React.js', 'Node.js', 'PostgreSQL', 'Redis', 'AWS'],
            category: 'management',
            liveUrl: '#',
            githubUrl: '#',
            featured: false,
            status: 'In Development'
        },
        {
            id: 16,
            title: 'Finance Management SaaS',
            description: 'Enterprise finance management platform with accounting, budgeting, financial reporting, expense tracking, and multi-currency support.',
            image: '/api/placeholder/400/250',
            technologies: ['React.js', 'Node.js', 'MongoDB', 'Chart.js', 'Stripe'],
            category: 'fintech',
            liveUrl: '#',
            githubUrl: '#',
            featured: false,
            status: 'In Development'
        }
    ]

    const categories = [
        { id: 'all', name: 'All Projects', count: projects.length },
        { id: 'enterprise', name: 'Enterprise', count: projects.filter(p => p.category === 'enterprise').length },
        { id: 'ai', name: 'AI & ML', count: projects.filter(p => p.category === 'ai').length },
        { id: 'fintech', name: 'FinTech', count: projects.filter(p => p.category === 'fintech').length },
        { id: 'management', name: 'Management', count: projects.filter(p => p.category === 'management').length },
        { id: 'ecommerce', name: 'E-commerce', count: projects.filter(p => p.category === 'ecommerce').length }
    ]

    const filteredProjects = filter === 'all' ? projects : projects.filter(project => project.category === filter)
    const featuredProjects = projects.filter(project => project.featured)

    return (
        <section id="projects" className="py-20 bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold mb-4">
                        My <span className="gradient-text">Projects</span>
                    </h2>
                    <div className="section-divider w-24 mx-auto mb-8"></div>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        A showcase of innovative solutions I've built across various industries,
                        from AI-powered platforms to enterprise-grade applications.
                    </p>
                </div>

                {/* Featured Projects */}
                <div className="mb-16">
                    <h3 className="text-2xl font-bold mb-8 text-center text-white">
                        Featured <span className="gradient-text">Projects</span>
                    </h3>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {featuredProjects.map((project, index) => (
                            <div key={project.id} className="project-card p-6 rounded-xl animate-fadeInUp" style={{ animationDelay: `${index * 0.1}s` }}>
                                <div className="relative mb-4 overflow-hidden rounded-lg">
                                    <div className="w-full h-48 bg-gradient-to-br from-gray-800 to-black flex items-center justify-center">
                                        <i className="fas fa-laptop-code text-4xl text-white"></i>
                                    </div>
                                    <div className="absolute top-2 right-2">
                                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${project.status === 'Live' ? 'bg-green-500 text-white' : 'bg-yellow-500 text-black'
                                            }`}>
                                            {project.status}
                                        </span>
                                    </div>
                                </div>

                                <h4 className="text-xl font-bold text-white mb-2">{project.title}</h4>
                                <p className="text-gray-400 text-sm mb-4 leading-relaxed">{project.description}</p>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                                        <span key={techIndex} className="px-2 py-1 bg-gray-800 text-gray-300 rounded text-xs">
                                            {tech}
                                        </span>
                                    ))}
                                    {project.technologies.length > 3 && (
                                        <span className="px-2 py-1 bg-gray-700 text-gray-400 rounded text-xs">
                                            +{project.technologies.length - 3} more
                                        </span>
                                    )}
                                </div>

                                <div className="flex space-x-3">
                                    {project.liveUrl !== '#' && (
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 bg-white hover:bg-gray-200 text-black py-2 px-4 rounded-lg text-center text-sm font-medium transition-colors duration-200"
                                        >
                                            <i className="fas fa-external-link-alt mr-1"></i>
                                            Live Demo
                                        </a>
                                    )}
                                    <button className="flex-1 border border-gray-600 hover:border-gray-500 text-gray-300 py-2 px-4 rounded-lg text-center text-sm font-medium transition-colors duration-200">
                                        <i className="fas fa-info-circle mr-1"></i>
                                        Details
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Project Filter */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setFilter(category.id)}
                            className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${filter === category.id
                                ? 'bg-white text-black'
                                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                                }`}
                        >
                            {category.name} ({category.count})
                        </button>
                    ))}
                </div>

                {/* All Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project, index) => (
                        <div key={project.id} className="project-card p-6 rounded-xl animate-fadeInUp" style={{ animationDelay: `${index * 0.05}s` }}>
                            <div className="relative mb-4 overflow-hidden rounded-lg">
                                <div className="w-full h-40 bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                                    <i className="fas fa-code text-3xl text-gray-400"></i>
                                </div>
                                <div className="absolute top-2 right-2">
                                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${project.status === 'Live' ? 'bg-green-500 text-white' : 'bg-yellow-500 text-black'
                                        }`}>
                                        {project.status}
                                    </span>
                                </div>
                            </div>

                            <h4 className="text-lg font-bold text-white mb-2">{project.title}</h4>
                            <p className="text-gray-400 text-sm mb-3 leading-relaxed line-clamp-3">{project.description}</p>

                            <div className="flex flex-wrap gap-1 mb-4">
                                {project.technologies.slice(0, 4).map((tech, techIndex) => (
                                    <span key={techIndex} className="px-2 py-1 bg-gray-800 text-gray-300 rounded text-xs">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex space-x-2">
                                {project.liveUrl !== '#' && (
                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 bg-white hover:bg-gray-200 text-black py-2 px-3 rounded text-center text-sm font-medium transition-colors duration-200"
                                    >
                                        <i className="fas fa-external-link-alt mr-1"></i>
                                        Live
                                    </a>
                                )}
                                <button className="flex-1 border border-gray-600 hover:border-gray-500 text-gray-300 py-2 px-3 rounded text-center text-sm font-medium transition-colors duration-200">
                                    <i className="fas fa-info-circle mr-1"></i>
                                    Info
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Project Stats */}
                <div className="mt-16 glass p-8 rounded-xl">
                    <h3 className="text-2xl font-bold text-center mb-8 text-white">
                        Project <span className="gradient-text">Statistics</span>
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        <div className="text-center">
                            <div className="text-3xl font-bold gradient-text mb-2">16+</div>
                            <p className="text-gray-400">Total Projects</p>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold gradient-text mb-2">75K+</div>
                            <p className="text-gray-400">Users Served</p>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold gradient-text mb-2">8+</div>
                            <p className="text-gray-400">Industries</p>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold gradient-text mb-2">99.5%</div>
                            <p className="text-gray-400">Uptime</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}