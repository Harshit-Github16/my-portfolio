export default function Header() {
    return (
        <header className="gradient-bg text-white">
            <div className="max-w-6xl mx-auto px-6 py-12">
                <div className="text-center">
                    <h1 className="text-5xl font-bold mb-4 tracking-tight">
                        HARSHIT SHARMA
                    </h1>
                    <p className="text-xl font-medium mb-6 opacity-90">
                        Senior Full-Stack Developer & AI Solutions Architect
                    </p>
                    <div className="flex flex-wrap justify-center gap-6 text-sm">
                        <div className="flex items-center gap-2">
                            <i className="fas fa-map-marker-alt"></i>
                            <span>Jodhpur, Rajasthan, India</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <i className="fas fa-envelope"></i>
                            <a href="mailto:harshit0150@gmail.com" className="hover:underline">
                                harshit0150@gmail.com
                            </a>
                        </div>
                        <div className="flex items-center gap-2">
                            <i className="fas fa-phone"></i>
                            <span>+91-9928005564</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <i className="fab fa-linkedin"></i>
                            <a
                                href="https://linkedin.com/in/harshit-sharma"
                                className="hover:underline"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                linkedin.com/in/harshit-sharma
                            </a>
                        </div>
                        <div className="flex items-center gap-2">
                            <i className="fab fa-github"></i>
                            <a
                                href="https://github.com/harshit-sharma"
                                className="hover:underline"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                github.com/harshit-sharma
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}