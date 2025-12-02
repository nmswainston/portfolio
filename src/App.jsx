import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import WorkShowcase from "./sections/WorkShowcase.jsx";
import About from "./sections/About.jsx";
import Skills from "./sections/Skills.jsx";
import Contact from "./sections/Contact.jsx";

export default function App() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <Header />

      <main id="main-content">
        <WorkShowcase />
        <About />
        <Skills />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
