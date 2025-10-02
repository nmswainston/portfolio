import Section from "../components/Section.jsx";
import Card from "../components/Card.jsx";
import { projects } from "../data/projects.js";

export default function Projects() {
  return (
    <Section id="projects" title="Projects" hint="Case studies use a simple format: Goal → Build → Result → Link.">
      <div className="grid" style={{ marginTop: 16 }}>
        {projects.map(p => (
          <Card key={p.name} title={p.name}
            actions={
              <>
                {p.live && <a className="btn" href={p.live} target="_blank" rel="noreferrer">Live</a>}
                {p.repo && <a className="btn" href={p.repo} target="_blank" rel="noreferrer">GitHub</a>}
              </>
            }>
            <p><em>Goal:</em> {p.goal}</p>
            <p><em>Build:</em> {p.build}</p>
            <p><em>Result:</em> {p.result}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
