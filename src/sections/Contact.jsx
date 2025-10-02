import Section from "../components/Section.jsx";
export default function Contact() {
  return (
    <Section id="contact" title="Contact">
      <form name="contact" method="POST" data-netlify="true" className="card">
        <input type="hidden" name="form-name" value="contact" />
        <label>Name<input name="name" required style={{ width: "100%", marginTop: 6, marginBottom: 12 }} /></label>
        <label>Email<input name="email" type="email" required style={{ width: "100%", marginTop: 6, marginBottom: 12 }} /></label>
        <label>Message<textarea name="message" rows="5" required style={{ width: "100%", marginTop: 6, marginBottom: 12 }} /></label>
        <button className="btn" type="submit">Send</button>
      </form>
      <p className="hint" style={{ marginTop: 8 }}>
        Or email me at <a href="mailto:nmswainston@gmail.com">hi@nmswainston.com</a>
      </p>
    </Section>
  );
}
