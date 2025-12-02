import Section from "../components/Section.jsx";

export default function Contact() {
  return (
    <Section id="contact" title="Contact">
      <p style={{ maxWidth: 720, opacity: 0.9 }}>
        Have a role, project, or idea you'd like help with? Send me a message with a
        bit of context and I'll get back to you.
      </p>

      <form className="mt-4 grid gap-3 max-w-md">
        <div className="grid gap-1">
          <label htmlFor="name" className="text-sm">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            className="rounded-md border border-[color:var(--line)] bg-[color:var(--card)] px-3 py-2 text-sm"
          />
        </div>

        <div className="grid gap-1">
          <label htmlFor="email" className="text-sm">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="rounded-md border border-[color:var(--line)] bg-[color:var(--card)] px-3 py-2 text-sm"
          />
        </div>

        <div className="grid gap-1">
          <label htmlFor="message" className="text-sm">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            className="rounded-md border border-[color:var(--line)] bg-[color:var(--card)] px-3 py-2 text-sm"
            placeholder="Tell me a bit about what you’re looking for."
          />
        </div>

        <button type="submit" className="btn">
          Send
        </button>
      </form>
    </Section>
  );
}
