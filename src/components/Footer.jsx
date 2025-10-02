export default function Footer() {
    return (
      <footer className="container" style={{ marginTop: 48, paddingBottom: 24 }}>
        <p className="hint">© {new Date().getFullYear()} Nick Swainston • <a href="https://www.consolelogic.net" target="_blank">Console.Log(ic)</a></p>
      </footer>
    );
  }
  