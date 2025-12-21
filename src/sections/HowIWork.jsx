import Section from "../components/Section.jsx";
import Card from "../components/Card.jsx";

export default function HowIWork() {
  return (
    <Section id="how-i-work" title="How I Work">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        <Card>
          <strong className="block mb-1.5 text-base">Design → Code, no translation loss</strong>
          <p className="text-sm opacity-90 leading-relaxed">
            I build interfaces with implementation in mind so what ships matches what was designed.
          </p>
        </Card>

        <Card>
          <strong className="block mb-1.5 text-base">Boring tech, sharp execution</strong>
          <p className="text-sm opacity-90 leading-relaxed">
            I prefer proven tools and clean patterns over clever abstractions.
          </p>
        </Card>

        <Card>
          <strong className="block mb-1.5 text-base">Automation where it actually helps</strong>
          <p className="text-sm opacity-90 leading-relaxed">
            I use AI and automation to remove friction, not to add magic buttons.
          </p>
        </Card>
      </div>
    </Section>
  );
}

