import ProjectCard from './ProjectCard'

export default function ProjectPortfolio() {
    const aiProjects = [
        {
            title: "TARA - AI Emotional Companion",
            url: "https://tara4u.com",
            icon: "fas fa-robot",
            tech: "Next.js • OpenAI API • LangChain • PostgreSQL • WebRTC",
            description: [
                "Built AI-powered emotional support platform for mental wellness",
                "Integrated advanced NLP models for empathetic conversations",
                "Implemented real-time chat with sentiment analysis",
                "Achieved 85% user satisfaction in emotional support delivery"
            ],
            tags: ["AI-Powered", "Production"]
        },
        {
            title: "Stokezee - AI Trading Platform",
            url: "https://stokezee.com",
            icon: "fas fa-chart-line",
            tech: "React • Python • TensorFlow • WebSockets • Chart.js",
            description: [
                "Developed AI-based stock screener with machine learning algorithms",
                "Built intraday trading booster with predictive analytics",
                "Integrated real-time market data with advanced charting",
                "Achieved 78% accuracy in stock trend predictions"
            ],
            tags: ["AI Trading", "FinTech"]
        },
        {
            title: "AI News Portal & Scraper",
            url: "https://news-dashboard-lnhk.vercel.app/",
            icon: "fas fa-newspaper",
            tech: "Node.js • Puppeteer • Cheerio • OpenAI • MongoDB",
            description: [
                "Built automated news scraping system using Puppeteer & Cheerio",
                "Integrated LLM models for content reformation and summarization",
                "Implemented real-time news aggregation from multiple sources",
                "Processed 1000+ articles daily with 95% accuracy"
            ],
            tags: ["AI Content", "Automation"]
        },
        {
            title: "HAELO - Judiciary Management",
            url: "https://haeloapp.in/web/login",
            icon: "fas fa-balance-scale",
            tech: "MERN Stack • ElasticSearch • PDF Processing • JWT",
            description: [
                "Developed comprehensive judgment management system for High Court",
                "Implemented advanced search and categorization for legal documents",
                "Built advocate portal with case tracking and notifications",
                "Managed 10K+ legal documents with efficient retrieval system"
            ],
            tags: ["Legal Tech", "Government"]
        }
    ]

    const saasProjects = [
        {
            title: "Cyber Security SaaS Platform",
            url: "https://console.aquilai.io",
            icon: "fas fa-shield-alt",
            tech: "Next.js • Node.js • MongoDB • AWS • Docker",
            description: [
                "Built comprehensive DMARC, BIMI & domain monitoring system",
                "Implemented email archival and BAS (Brand Abuse System)",
                "Developed multi-tenant architecture for enterprise clients",
                "Secured 50+ companies with automated threat detection"
            ],
            tags: ["CyberSec", "Enterprise"]
        },
        {
            title: "GST Simulator & Finance SaaS",
            url: "https://bill-karo.vercel.app",
            icon: "fas fa-calculator",
            tech: "React • Node.js • PostgreSQL • Stripe • PDF Generation",
            description: [
                "Developed automated GST filing and finance management system",
                "Built intelligent tax calculation with compliance automation",
                "Integrated payment processing and invoice generation",
                "Reduced CA dependency by 80% for small businesses"
            ],
            tags: ["FinTech", "Automation"]
        },
        {
            title: "Hospital Management SaaS",
            url: null,
            icon: "fas fa-hospital",
            tech: "MERN Stack • Socket.io • AWS S3 • JWT • Charts.js",
            description: [
                "Built comprehensive hospital management with patient records",
                "Implemented appointment scheduling and billing system",
                "Developed real-time notifications for staff coordination",
                "Managed 5K+ patient records with HIPAA compliance"
            ],
            tags: ["Healthcare", "SaaS"]
        },
        {
            title: "MuneemJi - Restaurant POS",
            url: "https://muneemji-pos.vercel.app",
            icon: "fas fa-cash-register",
            tech: "Next.js • Node.js • MongoDB • Stripe • PWA",
            description: [
                "Developed complete POS system for restaurant management",
                "Built inventory tracking and sales analytics dashboard",
                "Implemented offline-first PWA with sync capabilities",
                "Increased restaurant efficiency by 40% with automated billing"
            ],
            tags: ["POS System", "Live"]
        }
    ]

    const educationProjects = [
        {
            title: "LMS - Cyber Security Learning",
            url: "https://lms.aquilai.io",
            icon: "fas fa-play-circle",
            tech: "Next.js • Node.js • MongoDB • AWS S3 • Video Streaming",
            description: [
                "Built comprehensive LMS with video streaming capabilities",
                "Developed interactive cyber security awareness games",
                "Implemented progress tracking and certification system",
                "Served 2K+ learners with 95% course completion rate"
            ],
            tags: ["EdTech", "CyberSec"]
        },
        {
            title: "Dance Academy Platform",
            url: "https://thedancetales.com",
            icon: "fas fa-music",
            tech: "React • Node.js • MongoDB • Stripe • Video Integration",
            description: [
                "Developed dance academy website with class booking system",
                "Built instructor profiles and student progress tracking",
                "Integrated payment processing for course enrollments",
                "Enhanced student engagement with interactive features"
            ],
            tags: ["Education", "Live"]
        }
    ]

    const businessProjects = [
        {
            title: "We Are Dogs - Pet Store",
            url: "https://wearedogs.com",
            icon: "fas fa-paw",
            tech: "Next.js • MongoDB • Stripe • Tailwind CSS • Node.js",
            description: [
                "Built complete e-commerce platform for pet products",
                "Integrated inventory management and order tracking",
                "Implemented customer reviews and recommendation system",
                "Achieved 60% increase in online sales conversion"
            ],
            tags: ["E-commerce", "Production"]
        },
        {
            title: "Yuva Kabaddi Premier League",
            url: "https://www.yuvakabaddi.com",
            icon: "fas fa-trophy",
            tech: "React • Node.js • MongoDB • Socket.io • AWS",
            description: [
                "Developed sports league website with live scoring system",
                "Built player profiles, team management, and match scheduling",
                "Implemented real-time match updates and statistics",
                "Engaged 10K+ sports enthusiasts with live features"
            ],
            tags: ["Sports", "Live"]
        },
        {
            title: "Nifty Trader - Stock Analysis",
            url: "https://niftytrader.in",
            icon: "fas fa-chart-bar",
            tech: "React • Python • TradingView • WebSockets • Redis",
            description: [
                "Built comprehensive stock analysis and screening platform",
                "Integrated real-time market data with advanced charting",
                "Developed custom stock screeners with multiple filters",
                "Provided actionable insights to 5K+ active traders"
            ],
            tags: ["Trading", "Analytics"]
        },
        {
            title: "Aquila Cyber Security",
            url: "https://aquilai.io",
            icon: "fas fa-shield-virus",
            tech: "Next.js • Node.js • MongoDB • AWS • Security APIs",
            description: [
                "Developed corporate cyber security solutions website",
                "Built threat assessment and security audit tools",
                "Implemented client portal for security monitoring",
                "Secured 100+ enterprise clients with custom solutions"
            ],
            tags: ["CyberSec", "Corporate"]
        },
        {
            title: "Gausetu - Gaushala Management",
            url: "https://gausetu.vercel.app/",
            icon: "fas fa-leaf",
            tech: "Next.js • MongoDB • Node.js • Tailwind CSS • JWT",
            description: [
                "Built comprehensive gaushala (cow shelter) management system",
                "Implemented donation tracking and volunteer management",
                "Developed cattle health monitoring and feeding schedules",
                "Created transparency portal for donors and supporters"
            ],
            tags: ["Social Impact", "Non-Profit"]
        }
    ]

    return (
        <section className="mb-10">
            <h2 className="text-2xl font-bold text-secondary mb-4 flex items-center gap-3">
                <i className="fas fa-rocket text-primary"></i>
                PROJECT PORTFOLIO
            </h2>
            <div className="section-divider mb-6"></div>

            {/* AI & Machine Learning Projects */}
            <div className="mb-8">
                <h3 className="text-lg font-semibold text-primary mb-4 flex items-center gap-2">
                    <i className="fas fa-brain"></i>
                    AI & Machine Learning Solutions
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                    {aiProjects.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </div>
            </div>

            {/* SaaS & Enterprise Solutions */}
            <div className="mb-8">
                <h3 className="text-lg font-semibold text-primary mb-4 flex items-center gap-2">
                    <i className="fas fa-cloud"></i>
                    SaaS & Enterprise Solutions
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                    {saasProjects.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </div>
            </div>

            {/* Educational & Learning Platforms */}
            <div className="mb-8">
                <h3 className="text-lg font-semibold text-primary mb-4 flex items-center gap-2">
                    <i className="fas fa-graduation-cap"></i>
                    Educational & Learning Platforms
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                    {educationProjects.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </div>
            </div>

            {/* Business & E-commerce Solutions */}
            <div className="mb-8">
                <h3 className="text-lg font-semibold text-primary mb-4 flex items-center gap-2">
                    <i className="fas fa-store"></i>
                    Business & E-commerce Solutions
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                    {businessProjects.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </div>
            </div>

            {/* Project Statistics */}
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-secondary mb-4 text-center">Project Impact Summary</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                    <div>
                        <div className="text-2xl font-bold text-primary">16+</div>
                        <div className="text-sm text-gray-600">Live Projects</div>
                    </div>
                    <div>
                        <div className="text-2xl font-bold text-primary">75K+</div>
                        <div className="text-sm text-gray-600">Total Users</div>
                    </div>
                    <div>
                        <div className="text-2xl font-bold text-primary">8+</div>
                        <div className="text-sm text-gray-600">Industries</div>
                    </div>
                    <div>
                        <div className="text-2xl font-bold text-primary">99.5%</div>
                        <div className="text-sm text-gray-600">Uptime</div>
                    </div>
                </div>
            </div>
        </section>
    )
}