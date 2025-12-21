import { Routes, Route } from "react-router-dom";

import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

import WorkShowcase from "./sections/WorkShowcase.jsx";
import AllWork from "./sections/AllWork.jsx";
import HowIWork from "./sections/HowIWork.jsx";
import SkillsFocus from "./sections/SkillsFocus.jsx";
import About from "./sections/About.jsx";
import WhatLookingFor from "./sections/WhatLookingFor.jsx";
import Contact from "./sections/Contact.jsx";
import ProjectDetail from "./sections/ProjectDetail.jsx";

function HomePage() {
  return (
    <main id="main-content">
      <WorkShowcase />
      <HowIWork />
      <SkillsFocus />
      <About />
      <WhatLookingFor />
      <Contact />
    </main>
  );
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>

      <Header />

      <div className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/work" element={<AllWork />} />
          <Route path="/work/:slug" element={<ProjectDetail />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}
