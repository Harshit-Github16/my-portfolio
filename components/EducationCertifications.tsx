export default function EducationCertifications() {
    const education = [
        {
            degree: "Master of Computer Applications (MCA)",
            institution: "Bikaner University",
            details: "Aug 2024 – Present • CGPA: 8.7/10"
        },
        {
            degree: "Bachelor of Computer Applications (BCA)",
            institution: "Jai Narain Vyas University",
            details: "2019 – 2021 • First Class with Distinction"
        }
    ]

    const certifications = [
        {
            title: "AWS Solutions Architect Associate",
            issuer: "Amazon Web Services • 2024"
        },
        {
            title: "Meta React Advanced Certification",
            issuer: "Meta (Facebook) • 2023"
        },
        {
            title: "Google Cloud Professional Developer",
            issuer: "Google Cloud • 2023"
        },
        {
            title: "Employee of the Year 2024",
            issuer: "Now a Wave Technologies - Outstanding Leadership"
        }
    ]

    return (
        <section className="mb-10">
            <div className="grid md:grid-cols-2 gap-8">
                <div>
                    <h2 className="text-2xl font-bold text-secondary mb-4 flex items-center gap-3">
                        <i className="fas fa-graduation-cap text-primary"></i>
                        EDUCATION
                    </h2>
                    <div className="section-divider mb-6"></div>
                    <div className="space-y-4">
                        {education.map((edu, index) => (
                            <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                                <h3 className="font-bold text-secondary">{edu.degree}</h3>
                                <p className="text-primary font-medium">{edu.institution}</p>
                                <p className="text-sm text-gray-600">{edu.details}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div>
                    <h2 className="text-2xl font-bold text-secondary mb-4 flex items-center gap-3">
                        <i className="fas fa-certificate text-primary"></i>
                        CERTIFICATIONS & ACHIEVEMENTS
                    </h2>
                    <div className="section-divider mb-6"></div>
                    <div className="space-y-3">
                        {certifications.map((cert, index) => (
                            <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                                <h3 className="font-semibold text-secondary">{cert.title}</h3>
                                <p className="text-sm text-gray-600">{cert.issuer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}