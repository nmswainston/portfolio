import { useState } from "react";
import { GitHubIcon, LinkedInIcon } from "../components/SocialIcons.jsx";

export default function Contact() {
  const [status, setStatus] = useState("idle");

  return (
    <section
      id="contact"
      className="container section"
      aria-labelledby="contact-heading"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

        {/* Left — info */}
        <div data-reveal>
          <p className="text-[0.65rem] uppercase tracking-[0.25em] opacity-70 mb-3">Get In Touch</p>
          <h2 id="contact-heading" className="text-3xl md:text-4xl font-semibold leading-tight mb-4">
            Let&apos;s work<br />together.
          </h2>
          <p className="text-sm leading-relaxed opacity-80 mb-8 max-w-sm">
            Have a role, project, or idea you&apos;d like help with? Send me a message
            with a bit of context and I&apos;ll get back to you.
          </p>

          <div className="flex flex-col gap-4">
            <p className="flex items-center gap-3 text-sm opacity-80">
              <span className="w-8 h-8 rounded-full border border-(--line) flex items-center justify-center flex-shrink-0">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4" aria-hidden="true">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </span>
              Avondale, AZ (Greater Phoenix)
            </p>

            <a
              href="https://github.com/nmswainston"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm opacity-80 hover:opacity-100 transition-opacity group"
            >
              <span className="w-8 h-8 rounded-full border border-(--line) flex items-center justify-center flex-shrink-0 group-hover:border-(--accent) transition-colors">
                <GitHubIcon className="w-4 h-4" />
              </span>
              github.com/nmswainston
            </a>

            <a href="https://www.linkedin.com/in/nmswainston" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm opacity-80 hover:opacity-100 transition-opacity group">
              <span className="w-8 h-8 rounded-full border border-(--line) flex items-center justify-center flex-shrink-0 group-hover:border-(--accent) transition-colors">
                <LinkedInIcon className="w-4 h-4" />
              </span>
              linkedin.com/in/nmswainston
            </a>
          </div>
        </div>

        {/* Right — form */}
        <div data-reveal="1">
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            className="grid gap-4"
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.target;
              setStatus("sending");
              fetch("/", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: new URLSearchParams(new FormData(form)).toString(),
              })
                .then((response) => {
                  if (!response.ok) {
                    throw new Error(`Form submission failed with status ${response.status}`);
                  }
                  setStatus("success");
                  form.reset();
                })
                .catch((error) => {
                  setStatus("error");
                  console.error(error);
                });
            }}
          >
            <input type="hidden" name="form-name" value="contact" />
            <p className="hidden">
              <label>Don&apos;t fill this out if you&apos;re human: <input name="bot-field" autoComplete="off" /></label>
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
                autoComplete="off"
                placeholder="Tell me a bit about what you're looking for."
                className="rounded-lg border border-(--line) bg-(--card) px-4 py-2.5 text-sm focus:outline-none focus:border-(--accent) transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="btn w-full justify-center py-3 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && (
              <p role="status" className="text-sm text-center opacity-90">
                Thanks for reaching out! I&apos;ll get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p role="alert" className="text-sm text-center opacity-90">
                Something went wrong sending your message. Please try again, or
                reach out on{" "}
                <a
                  href="https://www.linkedin.com/in/nmswainston"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-text"
                >
                  LinkedIn
                </a>.
              </p>
            )}
          </form>
        </div>

      </div>
    </section>
  );
}
