export default function ProfessionalExperience() {
    const experiences = [
        {
            title: "Team Lead / MERN Stack Developer",
            company: "Now a Wave Technologies Pvt. Ltd.",
            duration: "Aug 2023 – Present",
            current: true,
            responsibilities: [
                "Leading a cross-functional team of 8+ developers in delivering AI-powered enterprise applications with 99.5% uptime",
                "Architected and deployed 12+ AI-driven automation systems using LangChain and OpenAI, reducing manual processing time by 65%",
                "Implemented microservices architecture serving 25K+ concurrent users with sub-200ms response times",
                "Established CI/CD pipelines and code review processes, improving deployment frequency by 300%",
                "Mentored junior developers and conducted technical interviews, maintaining 95% client satisfaction rate"
            ]
        },
        {
            title: "Web Developer",
            company: "Latnip IT Solutions",
            duration: "Jun 2023 – Nov 2023",
            current: false,
            responsibilities: [
                "Developed 15+ responsive React applications with modern UI/UX, achieving 98% mobile compatibility",
                "Optimized application performance through code splitting and lazy loading, reducing bundle size by 45%",
                "Collaborated with design teams to implement pixel-perfect UI components and interactive features",
                "Integrated third-party APIs and payment gateways for enhanced functionality"
            ]
        },
        {
            title: "Assistant Software Developer",
            company: "Viddius Solutions Pvt. Ltd.",
            duration: "Dec 2021 – Jun 2023",
            current: false,
            responsibilities: [
                "Built and maintained 20+ production websites serving 15K+ daily active users",
                "Implemented SEO best practices and performance optimizations, improving search rankings by 75%",
                "Developed full-stack applications using MERN stack with focus on scalability and maintainability",
                "Collaborated with backend teams to integrate RESTful APIs and ensure data consistency"
            ]
        },
        {
            title: "Junior Frontend Developer",
            company: "Aquila Solution Pvt. Ltd.",
            duration: "2019 – 2021",
            current: false,
            responsibilities: [
                "Started career as frontend developer, building responsive web interfaces using HTML, CSS, and JavaScript",
                "Learned and implemented React.js fundamentals, contributing to component-based architecture",
                "Participated in code reviews and gained experience in version control with Git",
                "Worked closely with senior developers to understand software development lifecycle and best practices"
            ]
        }
    ]

    return (
        <section className="mb-10">
            <h2 className="text-2xl font-bold text-secondary mb-4 flex items-center gap-3">
                <i className="fas fa-briefcase text-primary"></i>
                PROFESSIONAL EXPERIENCE
            </h2>
            <div className="section-divider mb-6"></div>

            <div className="space-y-6">
                {experiences.map((exp, index) => (
                    <div
                        key={index}
                        className={`bg-white p-6 rounded-lg shadow-sm ${exp.current ? 'border-l-4 border-primary' : ''}`}
                    >
                        <div className="flex flex-wrap justify-between items-start mb-4">
                            <div>
                                <h3 className={`${exp.current ? 'text-xl' : 'text-lg'} font-bold text-secondary`}>
                                    {exp.title}
                                </h3>
                                <p className="text-primary font-semibold">{exp.company}</p>
                            </div>
                            <span className={`px-3 py-1 rounded-full text-sm font-medium ${exp.current
                                    ? 'bg-primary text-white'
                                    : 'bg-gray-200 text-gray-700'
                                }`}>
                                {exp.duration}
                            </span>
                        </div>
                        <ul className="space-y-2 text-gray-700">
                            {exp.responsibilities.map((responsibility, respIndex) => (
                                <li key={respIndex} className="flex items-start gap-2">
                                    <i className="fas fa-arrow-right text-primary mt-1 text-sm"></i>
                                    <span dangerouslySetInnerHTML={{
                                        __html: responsibility.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                                    }} />
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    )
}