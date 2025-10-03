import Hero from './sections/Hero.jsx'
import Skills from './sections/Skills.jsx'
import About from './sections/About.jsx'
import Projects from './sections/Projects.jsx'
import Contact from './sections/Contact.jsx'
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import Link from './sections/Link.jsx'
export default function App() {
  return (
    <main>
      {/* Header */}
      <Header />

      {/* Hero */}
      <Hero />
      
      {/* About */}
      <About />

      {/* Skills */}
      <Skills />

      {/* Projects */}
      <Projects />

      {/* Link to your business site */}
      <Link />

      {/* Contact */}
      <Contact />

      {/* Footer */}
      <Footer />
      
    </main>
  );
}
