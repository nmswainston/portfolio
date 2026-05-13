export default function Contact() {
  return (
    <section
      id="contact"
      className="container section"
      aria-labelledby="contact-heading"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

        {/* Left — info */}
        <div>
          <p className="text-[0.65rem] uppercase tracking-[0.25em] opacity-70 mb-3">Get In Touch</p>
          <h2 id="contact-heading" className="text-3xl md:text-4xl font-semibold leading-tight mb-4">
            Let&apos;s work<br />together.
          </h2>
          <p className="text-sm leading-relaxed opacity-80 mb-8 max-w-sm">
            Have a role, project, or idea you&apos;d like help with? Send me a message
            with a bit of context and I&apos;ll get back to you.
          </p>

          <div className="flex flex-col gap-4">
            <a
              href="mailto:nmswainston@gmail.com"
              className="flex items-center gap-3 text-sm opacity-80 hover:opacity-100 transition-opacity group"
            >
              <span className="w-8 h-8 rounded-full border border-(--line) flex items-center justify-center flex-shrink-0 group-hover:border-(--accent) transition-colors">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4" aria-hidden="true">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m2 7 10 7 10-7" />
                </svg>
              </span>
              nmswainston@gmail.com
            </a>

            <a
              href="https://github.com/nmswainston"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm opacity-80 hover:opacity-100 transition-opacity group"
            >
              <span className="w-8 h-8 rounded-full border border-(--line) flex items-center justify-center flex-shrink-0 group-hover:border-(--accent) transition-colors">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844a9.59 9.59 0 012.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </span>
              github.com/nmswainston
            </a>

            {/* Add your LinkedIn URL below */}
            <a href="www.linkedin.com/in/nmswainston" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm opacity-80 hover:opacity-100 transition-opacity group">
              <span className="w-8 h-8 rounded-full border border-(--line) flex items-center justify-center flex-shrink-0 group-hover:border-(--accent) transition-colors">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </span>
              www.linkedin.com/in/nmswainston
            </a>
          </div>
        </div>

        {/* Right — form */}
        <div>
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            className="grid gap-4"
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.target;
              fetch("/", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: new URLSearchParams(new FormData(form)).toString(),
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
              <label>Don&apos;t fill this out if you&apos;re human: <input name="bot-field" /></label>
            </p>

            <div className="grid gap-1.5">
              <label htmlFor="name" className="text-sm font-medium">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                placeholder="Your name"
                className="rounded-lg border border-(--line) bg-(--card) px-4 py-2.5 text-sm focus:outline-none focus:border-(--accent) transition-colors"
              />
            </div>

            <div className="grid gap-1.5">
              <label htmlFor="email" className="text-sm font-medium">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                placeholder="you@example.com"
                className="rounded-lg border border-(--line) bg-(--card) px-4 py-2.5 text-sm focus:outline-none focus:border-(--accent) transition-colors"
              />
            </div>

            <div className="grid gap-1.5">
              <label htmlFor="message" className="text-sm font-medium">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                placeholder="Tell me a bit about what you're looking for."
                className="rounded-lg border border-(--line) bg-(--card) px-4 py-2.5 text-sm focus:outline-none focus:border-(--accent) transition-colors resize-none"
              />
            </div>

            <button type="submit" className="btn w-full justify-center py-3">
              Send Message
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
