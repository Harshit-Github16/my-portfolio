import Navigation from '../components/Navigation'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Experience from '../components/Experience'
import Certificates from '../components/Certificates'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
    return (
        <main className="min-h-screen bg-[#0a0a0a]">
            <Navigation />
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Certificates />
            <Projects />
            <Contact />
            <Footer />
        </main>
    )
}
