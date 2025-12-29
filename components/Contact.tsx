'use client'

import { useState } from 'react'

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        // Simulate form submission
        setTimeout(() => {
            setIsSubmitting(false)
            setSubmitStatus('success')
            setFormData({ name: '', email: '', subject: '', message: '' })

            // Reset status after 3 seconds
            setTimeout(() => setSubmitStatus('idle'), 3000)
        }, 1000)
    }

    const contactInfo = [
        {
            icon: 'fas fa-envelope',
            title: 'Email',
            value: 'harshit0150@gmail.com',
            link: 'mailto:harshit0150@gmail.com',
            color: 'text-white'
        },
        {
            icon: 'fas fa-phone',
            title: 'Phone',
            value: '+91 99280 05564',
            link: 'tel:+919928005564',
            color: 'text-gray-300'
        },
        {
            icon: 'fas fa-map-marker-alt',
            title: 'Location',
            value: 'Jodhpur, Rajasthan, India',
            link: '#',
            color: 'text-gray-400'
        },
        {
            icon: 'fas fa-calendar',
            title: 'Availability',
            value: 'Available for new projects',
            link: '#',
            color: 'text-gray-500'
        }
    ]

    const socialLinks = [
        {
            name: 'GitHub',
            icon: 'fab fa-github',
            url: 'https://github.com/harshit-sharma',
            color: 'hover:text-white'
        },
        {
            name: 'LinkedIn',
            icon: 'fab fa-linkedin',
            url: 'https://linkedin.com/in/harshit-sharma',
            color: 'hover:text-gray-300'
        },
        {
            name: 'Twitter',
            icon: 'fab fa-twitter',
            url: 'https://twitter.com/harshit_dev',
            color: 'hover:text-gray-400'
        },
        {
            name: 'Instagram',
            icon: 'fab fa-instagram',
            url: 'https://instagram.com/harshit.dev',
            color: 'hover:text-gray-500'
        }
    ]

    return (
        <section id="contact" className="py-20 bg-gray-900/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold mb-4">
                        Get In <span className="gradient-text">Touch</span>
                    </h2>
                    <div className="section-divider w-24 mx-auto mb-8"></div>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Ready to bring your ideas to life? Let's discuss your next project and create
                        something amazing together. Based in Jodhpur, Rajasthan, I serve clients across India
                        and globally with cutting-edge web development solutions.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Information */}
                    <div className="animate-fadeInLeft">
                        <h3 className="text-2xl font-bold mb-8 text-white">Let's Connect</h3>

                        <div className="space-y-6 mb-8">
                            {contactInfo.map((info, index) => (
                                <div key={index} className="flex items-center space-x-4 glass p-4 rounded-lg hover-glow">
                                    <div className={`text-2xl ${info.color}`}>
                                        <i className={info.icon}></i>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-white">{info.title}</h4>
                                        {info.link !== '#' ? (
                                            <a
                                                href={info.link}
                                                className="text-gray-400 hover:text-white transition-colors duration-200"
                                            >
                                                {info.value}
                                            </a>
                                        ) : (
                                            <p className="text-gray-400">{info.value}</p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>



                        {/* Quick Stats */}
                        <div className="glass p-6 rounded-xl">
                            <h4 className="text-lg font-semibold mb-4 text-white">Why Work With Me?</h4>
                            <div className="space-y-3">
                                <div className="flex items-center space-x-2">
                                    <i className="fas fa-check-circle text-white"></i>
                                    <span className="text-gray-300">4.5+ Years of Experience</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <i className="fas fa-check-circle text-white"></i>
                                    <span className="text-gray-300">16+ Successful Projects</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <i className="fas fa-check-circle text-white"></i>
                                    <span className="text-gray-300">99.5% Client Satisfaction</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <i className="fas fa-check-circle text-white"></i>
                                    <span className="text-gray-300">24/7 Support & Maintenance</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <i className="fas fa-check-circle text-white"></i>
                                    <span className="text-gray-300">AI & Modern Tech Expertise</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="animate-fadeInRight">
                        <div className="glass p-8 rounded-xl">
                            <h3 className="text-2xl font-bold mb-6 text-white">Send Me a Message</h3>

                            {submitStatus === 'success' && (
                                <div className="mb-6 p-4 bg-white/20 border border-white rounded-lg">
                                    <div className="flex items-center space-x-2">
                                        <i className="fas fa-check-circle text-white"></i>
                                        <span className="text-white font-medium">Message sent successfully! I'll get back to you soon.</span>
                                    </div>
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                                            Full Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors duration-200"
                                            placeholder="Your full name"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors duration-200"
                                            placeholder="your.email@example.com"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                                        Subject *
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors duration-200"
                                        placeholder="Project inquiry, collaboration, etc."
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                                        Message *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={6}
                                        className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors duration-200 resize-none"
                                        placeholder="Tell me about your project, requirements, timeline, and budget..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full btn-primary py-3 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <i className="fas fa-spinner fa-spin mr-2"></i>
                                            Sending Message...
                                        </>
                                    ) : (
                                        <>
                                            <i className="fas fa-paper-plane mr-2"></i>
                                            Send Message
                                        </>
                                    )}
                                </button>
                            </form>

                            <div className="mt-6 pt-6 border-t border-gray-700">
                                <p className="text-sm text-gray-400 text-center">
                                    Prefer email? Reach me directly at{' '}
                                    <a href="mailto:harshit0150@gmail.com" className="text-white hover:text-gray-300">
                                        harshit0150@gmail.com
                                    </a>
                                </p>
                            </div>
                        </div>

                        {/* Response Time */}
                        <div className="mt-6 glass p-4 rounded-lg">
                            <div className="flex items-center space-x-2">
                                <i className="fas fa-clock text-white"></i>
                                <span className="text-gray-300 text-sm">
                                    <strong className="text-white">Quick Response:</strong> I typically respond within 2-4 hours during business hours
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="mt-16 text-center">
                    <div className="glass p-8 rounded-xl">
                        <h3 className="text-2xl font-bold mb-4 text-white">
                            Ready to Start Your <span className="gradient-text">Next Project?</span>
                        </h3>
                        <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
                            Whether you need a full-stack web application, AI integration, or technical consultation,
                            I'm here to help bring your vision to life with cutting-edge technology and best practices.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="mailto:harshit0150@gmail.com"
                                className="btn-primary px-8 py-3 text-lg font-semibold inline-block"
                            >
                                <i className="fas fa-envelope mr-2"></i>
                                Start a Project
                            </a>
                            <a
                                href="tel:+919928005564"
                                className="px-8 py-3 text-lg font-semibold border-2 border-white text-white rounded-lg hover:bg-white hover:text-black transition-all duration-300 inline-block"
                            >
                                <i className="fas fa-phone mr-2"></i>
                                Schedule a Call
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}