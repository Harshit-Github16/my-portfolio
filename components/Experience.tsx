export default function Experience() {
    const experiences = [
        {
            title: 'Team Lead / MERN Stack Developer',
            company: 'Now a Wave Technologies Pvt. Ltd.',
            duration: 'Aug 2023 – Present',
            location: 'Jodhpur, India',
            type: 'Full-time',
            current: true,
            description: 'Leading cross-functional teams in delivering AI-powered enterprise applications with exceptional performance and scalability.',
            achievements: [
                'Leading a cross-functional team of 8+ developers in delivering AI-powered enterprise applications with 99.5% uptime',
                'Architected and deployed 12+ AI-driven automation systems using LangChain and OpenAI, reducing manual processing time by 65%',
                'Implemented microservices architecture serving 25K+ concurrent users with sub-200ms response times',
                'Established CI/CD pipelines and code review processes, improving deployment frequency by 300%',
                'Mentored junior developers and conducted technical interviews, maintaining 95% client satisfaction rate'
            ],
            technologies: ['React.js', 'Next.js', 'Node.js', 'MongoDB', 'LangChain', 'OpenAI API', 'AWS', 'Docker']
        },
        {
            title: 'Web Developer',
            company: 'Latnip IT Solutions',
            duration: 'Jun 2023 – Nov 2023',
            location: 'Remote',
            type: 'Full-time',
            current: false,
            description: 'Focused on developing responsive React applications with modern UI/UX principles and performance optimization.',
            achievements: [
                'Developed 15+ responsive React applications with modern UI/UX, achieving 98% mobile compatibility',
                'Optimized application performance through code splitting and lazy loading, reducing bundle size by 45%',
                'Collaborated with design teams to implement pixel-perfect UI components and interactive features',
                'Integrated third-party APIs and payment gateways for enhanced functionality'
            ],
            technologies: ['React.js', 'JavaScript', 'CSS3', 'Tailwind CSS', 'REST APIs', 'Git']
        },
        {
            title: 'Assistant Software Developer',
            company: 'Viddius Solutions Pvt. Ltd.',
            duration: 'Dec 2021 – Jun 2023',
            location: 'Jodhpur, India',
            type: 'Full-time',
            current: false,
            description: 'Developed and maintained production-ready websites while implementing SEO best practices and performance optimizations.',
            achievements: [
                'Built and maintained 20+ production websites serving 15K+ daily active users',
                'Implemented SEO best practices and performance optimizations, improving search rankings by 75%',
                'Developed full-stack applications using MERN stack with focus on scalability and maintainability',
                'Collaborated with backend teams to integrate RESTful APIs and ensure data consistency'
            ],
            technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'HTML5', 'CSS3', 'JavaScript']
        },
        {
            title: 'Junior Frontend Developer',
            company: 'Aquila Solution Pvt. Ltd.',
            duration: '2019 – 2021',
            location: 'Jodhpur, India',
            type: 'Full-time',
            current: false,
            description: 'Started my career as a frontend developer, building responsive web interfaces and learning modern development practices.',
            achievements: [
                'Started career as frontend developer, building responsive web interfaces using HTML, CSS, and JavaScript',
                'Learned and implemented React.js fundamentals, contributing to component-based architecture',
                'Participated in code reviews and gained experience in version control with Git',
                'Worked closely with senior developers to understand software development lifecycle and best practices'
            ],
            technologies: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Bootstrap', 'Git']
        }
    ]

    return (
        <section id="experience" className="py-20 bg-gray-900/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold mb-4">
                        Work <span className="gradient-text">Experience</span>
                    </h2>
                    <div className="section-divider w-24 mx-auto mb-8"></div>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        My professional journey showcasing growth from Junior Developer to Team Lead,
                        with a focus on delivering exceptional results and leading innovative projects.
                    </p>
                </div>

                <div className="relative">
                    {/* Timeline Line */}
                    <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-white via-gray-400 to-gray-600"></div>

                    {experiences.map((exp, index) => (
                        <div key={index} className={`relative mb-12 ${index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:ml-auto'}`}>
                            {/* Timeline Dot */}
                            <div className={`absolute w-4 h-4 bg-gradient-to-r from-white to-gray-400 rounded-full border-4 border-black ${index % 2 === 0
                                ? 'left-2 md:left-auto md:right-0 md:transform md:translate-x-1/2'
                                : 'left-2 md:left-0 md:transform md:-translate-x-1/2'
                                } top-8`}></div>

                            {/* Content Card */}
                            <div className={`ml-12 md:ml-0 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                                <div className={`glass p-6 rounded-xl hover-glow animate-fadeInUp ${exp.current ? 'border-l-4 border-white' : ''}`}>
                                    {/* Header */}
                                    <div className="flex flex-wrap justify-between items-start mb-4">
                                        <div>
                                            <h3 className={`${exp.current ? 'text-xl' : 'text-lg'} font-bold text-white mb-1`}>
                                                {exp.title}
                                            </h3>
                                            <p className="text-white font-semibold mb-1">{exp.company}</p>
                                            <div className="flex flex-wrap gap-2 text-sm text-gray-400">
                                                <span className="flex items-center">
                                                    <i className="fas fa-calendar mr-1"></i>
                                                    {exp.duration}
                                                </span>
                                                <span className="flex items-center">
                                                    <i className="fas fa-map-marker-alt mr-1"></i>
                                                    {exp.location}
                                                </span>
                                                <span className="flex items-center">
                                                    <i className="fas fa-briefcase mr-1"></i>
                                                    {exp.type}
                                                </span>
                                            </div>
                                        </div>
                                        {exp.current && (
                                            <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                                                Current
                                            </span>
                                        )}
                                    </div>

                                    {/* Description */}
                                    <p className="text-gray-300 mb-4 leading-relaxed">
                                        {exp.description}
                                    </p>

                                    {/* Achievements */}
                                    <div className="mb-6">
                                        <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wide">
                                            Key Achievements
                                        </h4>
                                        <ul className="space-y-2">
                                            {exp.achievements.map((achievement, achIndex) => (
                                                <li key={achIndex} className="flex items-start text-sm text-gray-300">
                                                    <i className="fas fa-chevron-right text-white mr-2 mt-1 text-xs"></i>
                                                    <span dangerouslySetInnerHTML={{
                                                        __html: achievement.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white">$1</strong>')
                                                    }} />
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Technologies */}
                                    <div>
                                        <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wide">
                                            Technologies Used
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {exp.technologies.map((tech, techIndex) => (
                                                <span
                                                    key={techIndex}
                                                    className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-xs font-medium hover:bg-gray-700 transition-colors duration-200"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Career Progression Summary */}
                <div className="mt-16 glass p-8 rounded-xl">
                    <h3 className="text-2xl font-bold text-center mb-8 text-white">
                        Career <span className="gradient-text">Progression</span>
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-gradient-to-r from-white to-gray-300 rounded-full flex items-center justify-center mx-auto mb-4">
                                <i className="fas fa-seedling text-black text-xl"></i>
                            </div>
                            <h4 className="font-semibold text-white mb-2">Junior Developer</h4>
                            <p className="text-sm text-gray-400">Started with HTML, CSS, JS</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-gradient-to-r from-gray-300 to-gray-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                <i className="fas fa-code text-white text-xl"></i>
                            </div>
                            <h4 className="font-semibold text-white mb-2">Full-Stack Developer</h4>
                            <p className="text-sm text-gray-400">Mastered MERN Stack</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-gradient-to-r from-gray-500 to-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                                <i className="fas fa-laptop-code text-white text-xl"></i>
                            </div>
                            <h4 className="font-semibold text-white mb-2">Senior Developer</h4>
                            <p className="text-sm text-gray-400">Advanced React & Performance</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-gradient-to-r from-gray-700 to-black rounded-full flex items-center justify-center mx-auto mb-4">
                                <i className="fas fa-users text-white text-xl"></i>
                            </div>
                            <h4 className="font-semibold text-white mb-2">Team Lead</h4>
                            <p className="text-sm text-gray-400">AI Integration & Leadership</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}