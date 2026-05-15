'use client'

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-[#0a0a0a] border-t border-[#2a2a2a] py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                    {/* Brand */}
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-4">
                            Har<span className="text-[#ff5722]">shit</span>
                        </h3>
                        <p className="text-gray-400 mb-4">
                            Senior Full-Stack Developer from Jodhpur, Rajasthan, specializing in AI-powered solutions.
                        </p>
                        <div className="flex gap-3">
                            {[
                                { icon: 'fab fa-linkedin', url: 'https://www.linkedin.com/in/harshit-sharma-9722a51a5' },
                                { icon: 'fab fa-github', url: 'https://github.com/Harshit-Github16' },
                                { icon: 'fas fa-envelope', url: 'mailto:harshit0150@gmail.com' }
                            ].map((social, index) => (
                                <a
                                    key={index}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-lg bg-[#1a1a1a] flex items-center justify-center text-gray-400 hover:bg-[#ff5722] hover:text-white transition-all"
                                >
                                    <i className={social.icon}></i>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold text-white mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            {['Home', 'About', 'Skills', 'Experience', 'Projects', 'Contact'].map((link, index) => (
                                <li key={index}>
                                    <a href={`#${link.toLowerCase()}`} className="text-gray-400 hover:text-[#ff5722] transition-colors">
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-lg font-bold text-white mb-4">Contact</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li><i className="fas fa-envelope mr-2 text-[#ff5722]"></i>harshit0150@gmail.com</li>
                            <li><i className="fas fa-phone mr-2 text-[#ff5722]"></i>+91 99280 05564</li>
                            <li><i className="fas fa-map-marker-alt mr-2 text-[#ff5722]"></i>Jodhpur, Rajasthan</li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-[#2a2a2a] text-center">
                    <p className="text-gray-400 text-sm">
                        © {currentYear} Harshit Sharma. All rights reserved. Made with <span className="text-[#ff5722]">❤</span> in Jodhpur
                    </p>
                </div>

                {/* Back to Top */}
                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="fixed bottom-8 right-8 w-12 h-12 bg-[#ff5722] rounded-lg flex items-center justify-center text-white hover:bg-[#ff6b3d] transition-all shadow-lg"
                >
                    <i className="fas fa-chevron-up"></i>
                </button>
            </div>
        </footer>
    )
}
