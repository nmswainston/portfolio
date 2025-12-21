import Section from "../components/Section.jsx";

export default function Contact() {
  return (
    <Section id="contact" title="Contact">
      <p className="copy">
        Have a role, project, or idea you'd like help with? Send me a message with a
        bit of context and I'll get back to you.
      </p>

      <form
        name="contact"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        className="mt-4 grid gap-3 max-w-md"
        onSubmit={(e) => {
          e.preventDefault();
          const form = e.target;
          const formData = new FormData(form);
          
          fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams(formData).toString(),
          })
            .then(() => {
              alert("Thank you! Your message has been sent.");
              form.reset();
            })
            .catch((error) => {
              alert("Sorry, there was an error sending your message. Please try again.");
              console.error(error);
            });
        }}
      >
        <input type="hidden" name="form-name" value="contact" />
        <p className="hidden">
          <label>
            Don't fill this out if you're human: <input name="bot-field" />
          </label>
        </p>
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
            className="rounded-md border border-(--line) bg-(--card) px-3 py-2 text-sm"
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
            className="rounded-md border border-(--line) bg-(--card) px-3 py-2 text-sm"
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
            className="rounded-md border border-(--line) bg-(--card) px-3 py-2 text-sm"
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
