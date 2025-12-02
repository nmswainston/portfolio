import Section from "../components/Section.jsx";

export default function Contact() {
  return (
    <Section id="contact" title="Contact">
      <p style={{ maxWidth: 720, opacity: 0.9 }}>
        Have a role, project, or idea you'd like help with? Send me a message with a
        bit of context and I'll get back to you.
      </p>

      <form
        style={{
          marginTop: 16,
          display: "grid",
          gap: 12,
          maxWidth: 480
        }}
      >
        <div>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            autoComplete="name"
            required
            type="text"
          />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            autoComplete="email"
            required
            type="email"
          />
        </div>

        <div>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            placeholder="Tell me a bit about what you're looking for."
          />
        </div>

        <button type="submit" className="btn">
          Send
        </button>
      </form>
    </Section>
  );
}
