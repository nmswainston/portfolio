import { Routes, Route } from "react-router-dom";

import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

import WorkShowcase from "./sections/WorkShowcase.jsx";
import AllWork from "./sections/AllWork.jsx";
import About from "./sections/About.jsx";
import Skills from "./sections/Skills.jsx";
import Contact from "./sections/Contact.jsx";
import ProjectDetail from "./sections/ProjectDetail.jsx";

function HomePage() {
  return (
    <main id="main-content">
      <WorkShowcase />
      <About />
      <Skills />
      <Contact />
    </main>
  );
}

export default function App() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/work" element={<AllWork />} />
        <Route path="/work/:slug" element={<ProjectDetail />} />
      </Routes>

      <Footer />
    </>
  );
}
