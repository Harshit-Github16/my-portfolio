export default function Experience() {
    const experiences = [
        {
            title: 'Team Lead / MERN Stack Developer',
            company: 'Now a Wave Technologies Pvt. Ltd.',
            duration: 'Aug 2023 – Present',
            location: 'Jodhpur, India',
            current: true,
            achievements: [
                'Leading 8+ developers in AI-powered enterprise applications',
                'Architected 12+ AI automation systems reducing processing by 65%',
                'Serving 25K+ concurrent users with sub-200ms response times',
                'Improved deployment frequency by 300%'
            ],
            technologies: ['React.js', 'Next.js', 'Node.js', 'MongoDB', 'LangChain', 'OpenAI']
        },
        {
            title: 'Web Developer',
            company: 'Latnip IT Solutions',
            duration: 'Jun 2023 – Nov 2023',
            location: 'Remote',
            current: false,
            achievements: [
                'Built 15+ responsive React applications',
                'Reduced bundle size by 45% through optimization',
                'Implemented pixel-perfect UI components',
                'Integrated payment gateways and APIs'
            ],
            technologies: ['React.js', 'JavaScript', 'Tailwind CSS', 'REST APIs']
        },
        {
            title: 'Assistant Software Developer',
            company: 'Viddius Solutions Pvt. Ltd.',
            duration: 'Dec 2021 – Jun 2023',
            location: 'Jodhpur, India',
            current: false,
            achievements: [
                'Built 20+ production websites serving 15K+ daily users',
                'Improved search rankings by 75% through SEO',
                'Developed scalable MERN stack applications',
                'Ensured data consistency across systems'
            ],
            technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB']
        },
        {
            title: 'Junior Frontend Developer',
            company: 'Aquila Solution Pvt. Ltd.',
            duration: '2019 – 2021',
            location: 'Jodhpur, India',
            current: false,
            achievements: [
                'Built responsive interfaces using HTML, CSS, JavaScript',
                'Learned React.js and component architecture',
                'Participated in code reviews',
                'Understood software development lifecycle'
            ],
            technologies: ['HTML5', 'CSS3', 'JavaScript', 'React.js']
        }
    ]

    return (
        <section id="experience" className="section bg-[#050505] relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16 animate-fadeInUp">
                    <span className="badge-orange mb-4 px-6 py-2">EXPERIENCE</span>
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white">
                        Professional <span className="text-[#ff5722]">Journey</span>
                    </h2>
                    <div className="section-divider mb-6"></div>
                </div>

                {/* Timeline */}
                <div className="max-w-4xl mx-auto space-y-8">
                    {experiences.map((exp, index) => (
                        <div key={index} className="timeline-item animate-fadeInUp" style={{ animationDelay: `${index * 0.1}s` }}>
                            <div className="timeline-dot"></div>

                            <div className="card">
                                <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                                    <div>
                                        <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                                        <p className="text-lg font-semibold text-[#ff5722] mb-2">{exp.company}</p>
                                        <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                                            <span><i className="fas fa-calendar mr-2"></i>{exp.duration}</span>
                                            <span><i className="fas fa-map-marker-alt mr-2"></i>{exp.location}</span>
                                        </div>
                                    </div>
                                    {exp.current && (
                                        <span className="badge-orange">CURRENT</span>
                                    )}
                                </div>

                                <ul className="space-y-2 mb-6">
                                    {exp.achievements.map((achievement, achIndex) => (
                                        <li key={achIndex} className="flex items-start gap-3 text-gray-400">
                                            <i className="fas fa-check text-[#ff5722] mt-1"></i>
                                            <span>{achievement}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="flex flex-wrap gap-2">
                                    {exp.technologies.map((tech, techIndex) => (
                                        <span key={techIndex} className="badge">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
