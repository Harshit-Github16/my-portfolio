'use client'

export default function Footer() {
    const currentYear = new Date().getFullYear()

    const socialLinks = [
        {
            name: 'GitHub',
            icon: 'fab fa-github',
            url: 'https://github.com/harshit-sharma',
        },
        {
            name: 'LinkedIn',
            icon: 'fab fa-linkedin',
            url: 'https://linkedin.com/in/harshit-sharma',
        },
        {
            name: 'Email',
            icon: 'fas fa-envelope',
            url: 'mailto:harshit0150@gmail.com',
        },
        {
            name: 'Phone',
            icon: 'fas fa-phone',
            url: 'tel:+919928005564',
        }
    ]

    const quickLinks = [
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' }
    ]

    return (
        <footer className="bg-black border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Brand Section */}
                    <div className="text-center md:text-left">
                        <h3 className="text-2xl font-bold gradient-text mb-4">Harshit Sharma</h3>
                        <p className="text-gray-400 mb-4 leading-relaxed">
                            Senior Full-Stack Developer specializing in AI-powered solutions and modern web technologies.
                            Passionate about creating innovative digital experiences.
                        </p>
                        <div className="flex justify-center md:justify-start space-x-4">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-white hover:text-black transition-all duration-300"
                                    aria-label={social.name}
                                >
                                    <i className={social.icon}></i>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="text-center">
                        <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            {quickLinks.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="text-gray-400 hover:text-white transition-colors duration-200"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="text-center md:text-right">
                        <h4 className="text-lg font-semibold text-white mb-4">Get In Touch</h4>
                        <div className="space-y-2 text-gray-400">
                            <p className="flex items-center justify-center md:justify-end">
                                <i className="fas fa-envelope mr-2 text-white"></i>
                                <a href="mailto:harshit0150@gmail.com" className="hover:text-white transition-colors duration-200">
                                    harshit0150@gmail.com
                                </a>
                            </p>
                            <p className="flex items-center justify-center md:justify-end">
                                <i className="fas fa-phone mr-2 text-gray-300"></i>
                                <a href="tel:+919928005564" className="hover:text-white transition-colors duration-200">
                                    +91 99280 05564
                                </a>
                            </p>
                            <p className="flex items-center justify-center md:justify-end">
                                <i className="fas fa-map-marker-alt mr-2 text-gray-400"></i>
                                <span>Jodhpur, Rajasthan, India</span>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="mt-8 pt-8 border-t border-gray-800">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-400 text-sm mb-4 md:mb-0">
                            © {currentYear} Harshit Sharma. All rights reserved. Crafted with ❤️ and cutting-edge technology.
                        </p>

                    </div>
                </div>

                {/* Back to Top */}
                <div className="text-center mt-8">
                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-white hover:text-black transition-all duration-300 mx-auto"
                        aria-label="Back to top"
                    >
                        <i className="fas fa-chevron-up"></i>
                    </button>
                </div>
            </div>
        </footer>
    )
}