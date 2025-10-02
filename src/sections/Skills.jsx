import Section from "../components/Section.jsx";
import Card from "../components/Card.jsx";

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="grid" style={{ marginTop: 16 }}>
        <Card title="Frontend"><p>HTML, CSS, JavaScript, React</p></Card>
        <Card title="Backend"><p>Node.js, REST APIs, basic databases</p></Card>
        <Card title="Other"><p>Automation tools, AV systems, Control4</p></Card>
      </div>
    </Section>
  );
}
