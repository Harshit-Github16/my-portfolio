export default function CoreCompetencies() {
    const competencies = [
        {
            title: "Technical Leadership",
            skills: [
                "Team Leadership & Mentoring",
                "Agile Project Management",
                "Code Architecture & Review",
                "Performance Optimization"
            ]
        },
        {
            title: "AI & Innovation",
            skills: [
                "Generative AI Integration",
                "LLM API Development",
                "Workflow Automation",
                "Machine Learning Pipelines"
            ]
        }
    ]

    return (
        <section className="mb-10">
            <h2 className="text-2xl font-bold text-secondary mb-4 flex items-center gap-3">
                <i className="fas fa-cogs text-primary"></i>
                CORE COMPETENCIES
            </h2>
            <div className="section-divider mb-6"></div>
            <div className="grid md:grid-cols-2 gap-6">
                {competencies.map((competency, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                        <h3 className="font-semibold text-lg mb-4 text-primary">{competency.title}</h3>
                        <ul className="space-y-2 text-sm">
                            {competency.skills.map((skill, skillIndex) => (
                                <li key={skillIndex} className="flex items-center gap-2">
                                    <i className="fas fa-check-circle text-primary"></i>
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    )
}