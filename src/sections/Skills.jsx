import Section from "../components/Section.jsx";
import Card from "../components/Card.jsx";

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="grid" style={{ marginTop: 16 }}>
        <Card title="Frontend">
          <p>
            HTML, CSS, modern JavaScript, React, responsive layouts, semantic
            markup, basic accessibility.
          </p>
        </Card>

        <Card title="Tooling & APIs">
          <p>
            Vite, Node basics, REST APIs & JSON, Git & GitHub, environment
            setup, simple CI.
          </p>
        </Card>

        <Card title="AI & Automation">
          <p>
            ChatGPT, prompt design, integrating AI into workflows, n8n /
            no-code automation for repetitive tasks.
          </p>
        </Card>

        <Card title="Background">
          <p>
            Home automation and AV since 2007, Control4, networks, client
            communication, on-site troubleshooting.
          </p>
        </Card>
      </div>
    </Section>
  );
}
