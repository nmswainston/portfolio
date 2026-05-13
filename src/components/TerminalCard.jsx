function Line({ children }) {
  return <div className="leading-7">{children}</div>;
}

function Kw({ children }) {
  return <span className="text-violet-400">{children}</span>;
}

function Key({ children }) {
  return <span className="text-sky-300">{children}</span>;
}

function Str({ children }) {
  return <span className="text-emerald-400">&quot;{children}&quot;</span>;
}

function Punct({ children }) {
  return <span className="text-slate-500">{children}</span>;
}

export default function TerminalCard() {
  return (
    <div className="w-full max-w-sm lg:max-w-md rounded-2xl overflow-hidden border border-slate-700/60" style={{ boxShadow: "0 24px 64px rgba(0,0,0,0.4)" }}>
      {/* Window chrome */}
      <div className="flex items-center gap-2 px-4 py-3 bg-slate-800 border-b border-slate-700/60">
        <span className="w-3 h-3 rounded-full bg-red-500/80" />
        <span className="w-3 h-3 rounded-full bg-amber-400/80" />
        <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
        <span className="ml-3 text-xs text-slate-500 font-mono">~/portfolio</span>
      </div>

      {/* Code body */}
      <div className="bg-slate-900 px-6 py-6 font-mono text-sm text-slate-300">
        <Line>
          <Kw>const</Kw>
          <span className="text-white"> nick </span>
          <Punct>= &#123;</Punct>
        </Line>

        <Line>
          <span className="ml-4"><Key>role</Key><Punct>: </Punct><Str>Frontend Developer</Str><Punct>,</Punct></span>
        </Line>

        <Line>
          <span className="ml-4"><Key>based</Key><Punct>: </Punct><Str>Connecticut, USA</Str><Punct>,</Punct></span>
        </Line>

        <Line>
          <span className="ml-4">
            <Key>stack</Key><Punct>: [</Punct>
            <Str>React</Str><Punct>, </Punct>
            <Str>TypeScript</Str><Punct>, </Punct>
            <Str>Tailwind</Str>
            <Punct>],</Punct>
          </span>
        </Line>

        <Line>
          <span className="ml-4">
            <Key>focus</Key><Punct>: [</Punct>
            <Str>Clean UI</Str><Punct>, </Punct>
            <Str>Automation</Str><Punct>, </Punct>
            <Str>AI</Str>
            <Punct>],</Punct>
          </span>
        </Line>

        <Line>
          <span className="ml-4"><Key>status</Key><Punct>: </Punct><Str>Open to opportunities</Str></span>
        </Line>

        <Line><Punct>&#125;</Punct></Line>

        <div className="mt-4 flex items-center gap-1 text-slate-500">
          <span>&gt;</span>
          <span className="cursor-blink w-2 h-4 bg-slate-400 inline-block ml-0.5" />
        </div>
      </div>
    </div>
  );
}
