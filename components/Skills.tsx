'use client'

import { useState, useEffect } from 'react'

export default function Skills() {
    const [isVisible, setIsVisible] = useState(false)

    const skillCategories = [
        {
            title: 'Frontend Technologies',
            icon: 'fas fa-palette',
            color: 'white',
            skills: [
                { name: 'React.js', level: 95 },
                { name: 'Next.js', level: 90 },
                { name: 'TypeScript', level: 85 },
                { name: 'Tailwind CSS', level: 90 },
                { name: 'Redux', level: 80 },
                { name: 'HTML5/CSS3', level: 95 }
            ]
        },
        {
            title: 'Backend Technologies',
            icon: 'fas fa-server',
            color: 'gray',
            skills: [
                { name: 'Node.js', level: 90 },
                { name: 'Express.js', level: 85 },
                { name: 'MongoDB', level: 80 },
                { name: 'PostgreSQL', level: 75 },
                { name: 'RESTful APIs', level: 90 },
                { name: 'GraphQL', level: 70 }
            ]
        },
        {
            title: 'AI & Automation',
            icon: 'fas fa-brain',
            color: 'dark',
            skills: [
                { name: 'LangChain', level: 85 },
                { name: 'OpenAI API', level: 80 },
                { name: 'Hugging Face', level: 75 },
                { name: 'RAG Systems', level: 80 },
                { name: 'Puppeteer', level: 85 },
                { name: 'Cheerio', level: 90 }
            ]
        },
        {
            title: 'Tools & Platforms',
            icon: 'fas fa-tools',
            color: 'black',
            skills: [
                { name: 'Git/GitHub', level: 90 },
                { name: 'Docker', level: 70 },
                { name: 'AWS', level: 75 },
                { name: 'Vercel', level: 85 },
                { name: 'Firebase', level: 80 },
                { name: 'Stripe', level: 85 }
            ]
        }
    ]

    const softSkills = [
        { name: 'Team Leadership', icon: 'fas fa-users' },
        { name: 'Project Management', icon: 'fas fa-tasks' },
        { name: 'Problem Solving', icon: 'fas fa-lightbulb' },
        { name: 'Communication', icon: 'fas fa-comments' },
        { name: 'Mentoring', icon: 'fas fa-chalkboard-teacher' },
        { name: 'Agile/Scrum', icon: 'fas fa-sync-alt' }
    ]

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                }
            },
            { threshold: 0.3 }
        )

        const skillsSection = document.getElementById('skills')
        if (skillsSection) {
            observer.observe(skillsSection)
        }

        return () => observer.disconnect()
    }, [])

    const getColorClasses = (color: string) => {
        const colors = {
            blue: 'from-white to-gray-300',
            green: 'from-gray-300 to-gray-500',
            purple: 'from-gray-500 to-gray-700',
            orange: 'from-gray-700 to-black'
        }
        return colors[color as keyof typeof colors] || colors.blue
    }

    return (
        <section id="skills" className="py-20 bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold mb-4">
                        My <span className="gradient-text">Skills</span>
                    </h2>
                    <div className="section-divider w-24 mx-auto mb-8"></div>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        A comprehensive toolkit of modern technologies and frameworks that I use to build
                        exceptional digital experiences.
                    </p>
                </div>

                {/* Technical Skills */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                    {skillCategories.map((category, categoryIndex) => (
                        <div key={categoryIndex} className="glass p-6 rounded-xl hover-glow">
                            <div className="flex items-center mb-6">
                                <div className={`text-2xl mr-4 text-white`}>
                                    <i className={category.icon}></i>
                                </div>
                                <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                            </div>

                            <div className="space-y-4">
                                {category.skills.map((skill, skillIndex) => (
                                    <div key={skillIndex} className="skill-item">
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-gray-300 font-medium">{skill.name}</span>
                                            <span className="text-gray-400 text-sm">{skill.level}%</span>
                                        </div>
                                        <div className="skill-progress">
                                            <div
                                                className={`skill-progress-fill bg-gradient-to-r ${getColorClasses(category.color)}`}
                                                style={{
                                                    width: isVisible ? `${skill.level}%` : '0%',
                                                    transitionDelay: `${(categoryIndex * 6 + skillIndex) * 0.1}s`
                                                }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Soft Skills */}
                <div className="mb-16">
                    <h3 className="text-2xl font-bold text-center mb-8 text-white">
                        Leadership & <span className="gradient-text">Soft Skills</span>
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {softSkills.map((skill, index) => (
                            <div
                                key={index}
                                className="glass p-4 rounded-xl text-center hover-glow animate-fadeInUp"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="text-2xl text-white mb-2">
                                    <i className={skill.icon}></i>
                                </div>
                                <p className="text-sm text-gray-300 font-medium">{skill.name}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Technology Stack */}
                <div className="glass p-8 rounded-xl">
                    <h3 className="text-2xl font-bold text-center mb-8 text-white">
                        Technology <span className="gradient-text">Stack</span>
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
                        {[
                            { name: 'React', icon: 'fab fa-react', color: 'text-white' },
                            { name: 'Node.js', icon: 'fab fa-node-js', color: 'text-gray-300' },
                            { name: 'JavaScript', icon: 'fab fa-js-square', color: 'text-gray-400' },
                            { name: 'Python', icon: 'fab fa-python', color: 'text-gray-500' },
                            { name: 'AWS', icon: 'fab fa-aws', color: 'text-gray-600' },
                            { name: 'Docker', icon: 'fab fa-docker', color: 'text-white' },
                            { name: 'Git', icon: 'fab fa-git-alt', color: 'text-gray-300' },
                            { name: 'MongoDB', icon: 'fas fa-database', color: 'text-gray-400' }
                        ].map((tech, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center p-4 rounded-lg hover:bg-gray-800 transition-all duration-300 hover-scale"
                            >
                                <i className={`${tech.icon} text-3xl ${tech.color} mb-2`}></i>
                                <span className="text-xs text-gray-400 font-medium">{tech.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Skills Summary */}
                <div className="mt-16 text-center">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="glass p-6 rounded-xl">
                            <div className="text-3xl font-bold gradient-text mb-2">50+</div>
                            <p className="text-gray-400">Technologies Mastered</p>
                        </div>
                        <div className="glass p-6 rounded-xl">
                            <div className="text-3xl font-bold gradient-text mb-2">4.5+</div>
                            <p className="text-gray-400">Years of Experience</p>
                        </div>
                        <div className="glass p-6 rounded-xl">
                            <div className="text-3xl font-bold gradient-text mb-2">100%</div>
                            <p className="text-gray-400">Commitment to Quality</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}