export default function About() {
    const stats = [
        { number: '4.5+', label: 'Years Experience' },
        { number: '16+', label: 'Projects Completed' },
        { number: '75K+', label: 'Users Served' },
        { number: '8+', label: 'Industries' },
    ]

    const highlights = [
        {
            icon: 'fas fa-users',
            title: 'Team Leadership',
            description: 'Leading cross-functional teams of 8+ developers in delivering enterprise-grade applications'
        },
        {
            icon: 'fas fa-brain',
            title: 'AI Innovation',
            description: 'Specialized in integrating cutting-edge AI technologies like LangChain and OpenAI APIs'
        },
        {
            icon: 'fas fa-rocket',
            title: 'Performance',
            description: 'Optimized applications serving 25K+ concurrent users with sub-200ms response times'
        },
        {
            icon: 'fas fa-award',
            title: 'Recognition',
            description: 'Employee of the Year 2024 for outstanding leadership and technical excellence'
        }
    ]

    return (
        <section id="about" className="py-20 bg-gray-900/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold mb-4">
                        About <span className="gradient-text">Me</span>
                    </h2>
                    <div className="section-divider w-24 mx-auto mb-8"></div>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Passionate about creating innovative solutions that bridge the gap between
                        cutting-edge technology and real-world business needs.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                    {/* Left Content */}
                    <div className="animate-fadeInLeft">
                        <h3 className="text-2xl font-bold mb-6 text-white">My Journey</h3>
                        <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                            <p>
                                I'm a <span className="text-white font-semibold">Senior Full-Stack Developer</span> with over
                                4.5 years of experience in architecting and delivering cutting-edge web applications.
                                My journey began as a Junior Frontend Developer, and through continuous learning and
                                dedication, I've evolved into a technical leader specializing in AI-driven development.
                            </p>
                            <p>
                                Currently serving as a <span className="text-gray-300 font-semibold">Team Lead</span> at
                                Now a Wave Technologies, I lead cross-functional teams in building enterprise-grade
                                applications that serve thousands of users worldwide. My expertise spans the entire
                                development lifecycle, from concept to deployment.
                            </p>
                            <p>
                                I'm particularly passionate about <span className="text-gray-400 font-semibold">AI integration</span> and
                                have successfully implemented numerous automation systems using LangChain, OpenAI APIs,
                                and other cutting-edge technologies that have reduced manual processing time by up to 65%.
                            </p>
                        </div>

                        <div className="mt-8">
                            <h4 className="text-xl font-semibold mb-4 text-white">Core Values</h4>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="flex items-center space-x-2">
                                    <i className="fas fa-check-circle text-white"></i>
                                    <span className="text-gray-300">Innovation</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <i className="fas fa-check-circle text-white"></i>
                                    <span className="text-gray-300">Quality</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <i className="fas fa-check-circle text-white"></i>
                                    <span className="text-gray-300">Collaboration</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <i className="fas fa-check-circle text-white"></i>
                                    <span className="text-gray-300">Growth</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Content - Stats */}
                    <div className="animate-fadeInRight">
                        <div className="grid grid-cols-2 gap-6">
                            {stats.map((stat, index) => (
                                <div key={index} className="glass p-6 rounded-xl text-center hover-glow">
                                    <div className="text-3xl lg:text-4xl font-bold gradient-text mb-2">
                                        {stat.number}
                                    </div>
                                    <div className="text-gray-400 font-medium">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Highlights */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {highlights.map((highlight, index) => (
                        <div key={index} className="glass p-6 rounded-xl hover-glow animate-fadeInUp" style={{ animationDelay: `${index * 0.1}s` }}>
                            <div className="text-3xl text-white mb-4">
                                <i className={highlight.icon}></i>
                            </div>
                            <h4 className="text-xl font-semibold mb-3 text-white">
                                {highlight.title}
                            </h4>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {highlight.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Education */}
                <div className="mt-16 glass p-8 rounded-xl">
                    <h3 className="text-2xl font-bold mb-6 text-center text-white">Education & Certifications</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h4 className="text-lg font-semibold text-white mb-2">Education</h4>
                            <div className="space-y-4">
                                <div className="border-l-2 border-white pl-4">
                                    <h5 className="font-semibold text-white">Master of Computer Applications (MCA)</h5>
                                    <p className="text-gray-400">Bikaner University • Aug 2024 – Present</p>
                                    <p className="text-sm text-gray-500">CGPA: 8.7/10</p>
                                </div>
                                <div className="border-l-2 border-gray-400 pl-4">
                                    <h5 className="font-semibold text-white">Bachelor of Computer Applications (BCA)</h5>
                                    <p className="text-gray-400">Jai Narain Vyas University • 2019 – 2021</p>
                                    <p className="text-sm text-gray-500">First Class with Distinction</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold text-gray-300 mb-2">Certifications</h4>
                            <div className="space-y-2">
                                <div className="flex items-center space-x-2">
                                    <i className="fas fa-certificate text-white"></i>
                                    <span className="text-gray-300">AWS Solutions Architect Associate</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <i className="fas fa-certificate text-gray-400"></i>
                                    <span className="text-gray-300">Meta React Advanced Certification</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <i className="fas fa-certificate text-gray-300"></i>
                                    <span className="text-gray-300">Google Cloud Professional Developer</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <i className="fas fa-trophy text-gray-200"></i>
                                    <span className="text-gray-300">Employee of the Year 2024</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}