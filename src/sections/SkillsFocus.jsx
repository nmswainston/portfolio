import Section from "../components/Section.jsx";

export default function SkillsFocus() {
  return (
    <Section id="skills-focus" title="Skills & Focus">
      <div className="mt-4 space-y-6">
        <div>
          <h3 className="text-sm font-semibold mb-2 opacity-90">Frontend</h3>
          <div className="flex flex-wrap gap-2">
            <span className="tag">React</span>
            <span className="tag">Tailwind CSS</span>
            <span className="tag">Semantic HTML</span>
            <span className="tag">Accessibility-first UI</span>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold mb-2 opacity-90">Tooling</h3>
          <div className="flex flex-wrap gap-2">
            <span className="tag">Vite</span>
            <span className="tag">GitHub</span>
            <span className="tag">Netlify</span>
            <span className="tag">Modern build workflows</span>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold mb-2 opacity-90">Automation</h3>
          <div className="flex flex-wrap gap-2">
            <span className="tag">API integrations</span>
            <span className="tag">Internal tools</span>
            <span className="tag">AI-assisted workflows</span>
          </div>
        </div>
      </div>
    </Section>
  );
}

