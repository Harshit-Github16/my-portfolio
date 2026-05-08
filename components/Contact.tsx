'use client'

import { useState } from 'react'

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Handle form submission
        console.log(formData)
    }

    return (
        <section id="contact" className="section bg-[#050505] relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16 animate-fadeInUp">
                    <span className="badge-orange mb-4 px-6 py-2">CONTACT ME</span>
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white">
                        I'm Available For <span className="text-[#ff5722]">Freelancing</span>
                    </h2>
                    <div className="section-divider mb-6"></div>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Left - Contact Info */}
                    <div className="space-y-8 animate-fadeInLeft">
                        <div className="card">
                            <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-lg bg-[#ff5722] flex items-center justify-center flex-shrink-0">
                                        <i className="fas fa-envelope text-white"></i>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-white mb-1">Email</h4>
                                        <a href="mailto:harshit0150@gmail.com" className="text-gray-400 hover:text-[#ff5722]">
                                            harshit0150@gmail.com
                                        </a>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-lg bg-[#ff5722] flex items-center justify-center flex-shrink-0">
                                        <i className="fas fa-phone text-white"></i>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-white mb-1">Phone</h4>
                                        <a href="tel:+919928005564" className="text-gray-400 hover:text-[#ff5722]">
                                            +91 99280 05564
                                        </a>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-lg bg-[#ff5722] flex items-center justify-center flex-shrink-0">
                                        <i className="fas fa-map-marker-alt text-white"></i>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-white mb-1">Location</h4>
                                        <p className="text-gray-400">Jodhpur, Rajasthan, India</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="card">
                            <h4 className="font-bold text-white mb-4">Follow Me</h4>
                            <div className="flex gap-4">
                                {[
                                    { icon: 'fab fa-linkedin', url: 'https://www.linkedin.com/in/harshit-sharma-9722a51a5' },
                                    { icon: 'fab fa-github', url: 'https://github.com/harshit-sharma' },
                                    { icon: 'fas fa-envelope', url: 'mailto:harshit0150@gmail.com' },
                                    { icon: 'fas fa-phone', url: 'tel:+919928005564' }
                                ].map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 rounded-lg bg-[#2a2a2a] flex items-center justify-center text-gray-400 hover:bg-[#ff5722] hover:text-white transition-all"
                                    >
                                        <i className={`${social.icon} text-xl`}></i>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right - Contact Form */}
                    <div className="animate-fadeInRight">
                        <div className="card">
                            <h3 className="text-2xl font-bold text-white mb-6">Send Message</h3>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Your Name"
                                        className="form-input"
                                        required
                                    />
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Your Email"
                                        className="form-input"
                                        required
                                    />
                                </div>
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    placeholder="Subject"
                                    className="form-input"
                                    required
                                />
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Your Message"
                                    rows={6}
                                    className="form-input resize-none"
                                    required
                                ></textarea>
                                <button type="submit" className="btn-primary w-full">
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
