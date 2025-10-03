import Section from "../components/Section.jsx";
export default function Link() {
    return (
        <section className="container" style={{ marginTop: 32 }}>
            <h2>Hire me</h2>
            <p style={{ maxWidth: 720, opacity: 0.9 }}>
                For client work, visit <a href="https://www.consolelogic.net" target="_blank" rel="noreferrer">Console.Log(ic)</a>.
                Small business sites, makeovers, and automation tools.
            </p>
        </section>
    );
}