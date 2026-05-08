export default function EducationCertifications() {
    const education = [
        {
            degree: "Master of Computer Applications (MCA)",
            institution: "Bikaner University",
            duration: "Aug 2024 – Present",
            cgpa: "8.7/10",
            icon: "fa-university",
            color: "from-purple-500 to-pink-500"
        },
        {
            degree: "Bachelor of Computer Applications (BCA)",
            institution: "Jai Narain Vyas University",
            duration: "2019 – 2021",
            cgpa: "First Class with Distinction",
            icon: "fa-user-graduate",
            color: "from-blue-500 to-cyan-500"
        }
    ]

    return (
        <section className="py-20 lg:py-32 section-gradient relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200 rounded-full filter blur-3xl opacity-20 -z-10"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16 animate-fadeInDown">
                    <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-4">
                        Education
                    </span>
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                        Academic <span className="gradient-text">Background</span>
                    </h2>
                    <div className="section-divider mb-6"></div>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Strong academic foundation in computer applications and software development
                    </p>
                </div>

                {/* Education Cards */}
                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {education.map((edu, index) => (
                        <div key={index} className="glass-card p-8 hover-lift animate-fadeInUp" style={{ animationDelay: `${index * 0.1}s` }}>
                            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${edu.color} flex items-center justify-center mb-6 shadow-lg`}>
                                <i className={`fas ${edu.icon} text-white text-3xl`}></i>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">{edu.degree}</h3>
                            <p className="text-lg font-semibold text-purple-600 mb-2">{edu.institution}</p>
                            <div className="flex items-center gap-2 text-gray-600 mb-4">
                                <i className="fas fa-calendar text-sm"></i>
                                <span>{edu.duration}</span>
                            </div>
                            <div className="inline-block px-4 py-2 bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 rounded-full font-semibold">
                                <i className="fas fa-star mr-2"></i>
                                {edu.cgpa}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
