interface ProjectCardProps {
    project: {
        title: string
        url: string | null
        icon: string
        tech: string
        description: string[]
        tags: string[]
    }
}

export default function ProjectCard({ project }: ProjectCardProps) {
    return (
        <div className="project-card bg-white p-6 rounded-lg shadow-sm border-l-4 border-primary">
            <div className="flex items-center gap-3 mb-4">
                <i className={`${project.icon} text-2xl text-primary`}></i>
                <div>
                    <h4 className="text-lg font-bold text-secondary">{project.title}</h4>
                    {project.url ? (
                        <a
                            href={project.url}
                            className="text-xs text-blue-600 hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {project.url.replace('https://', '')}
                        </a>
                    ) : (
                        <span className="text-xs text-gray-500">Internal Project</span>
                    )}
                </div>
            </div>
            <p className="text-sm text-gray-600 mb-3">{project.tech}</p>
            <ul className="space-y-1 text-sm text-gray-700 mb-4">
                {project.description.map((desc, index) => (
                    <li key={index}>• {desc}</li>
                ))}
            </ul>
            <div className="flex gap-2">
                {project.tags.map((tag, index) => (
                    <span
                        key={index}
                        className={`px-2 py-1 rounded text-xs ${index === 0
                                ? 'bg-blue-50 text-primary'
                                : 'bg-primary text-white'
                            }`}
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    )
}