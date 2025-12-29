export default function TechnicalSkills() {
    const skillCategories = [
        {
            title: "Frontend Technologies",
            skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Redux", "HTML5/CSS3"]
        },
        {
            title: "Backend Technologies",
            skills: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "RESTful APIs", "GraphQL"]
        },
        {
            title: "AI & Automation",
            skills: ["LangChain", "OpenAI API", "Hugging Face", "RAG Systems", "Puppeteer", "Cheerio"]
        }
    ]

    return (
        <section className="mb-10">
            <h2 className="text-2xl font-bold text-secondary mb-4 flex items-center gap-3">
                <i className="fas fa-code text-primary"></i>
                TECHNICAL EXPERTISE
            </h2>
            <div className="section-divider mb-6"></div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="grid md:grid-cols-3 gap-6">
                    {skillCategories.map((category, index) => (
                        <div key={index}>
                            <h3 className="font-semibold text-primary mb-3">{category.title}</h3>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, skillIndex) => (
                                    <span
                                        key={skillIndex}
                                        className="skill-tag bg-blue-50 text-primary px-3 py-1 rounded-full text-sm font-medium"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}