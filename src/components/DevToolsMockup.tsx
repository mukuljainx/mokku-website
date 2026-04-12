const mocks = [
  { method: "GET", url: "/api/user/profile", status: 200, active: true },
  { method: "POST", url: "/api/auth/login", status: 401, active: false },
  { method: "GET", url: "/api/orders", status: 500, active: false },
  { method: "GET", url: "/api/products", status: 200, active: false },
];

const methodColor = (m: string) =>
  m === "GET"
    ? "bg-blue-500/20 text-blue-400"
    : m === "POST"
    ? "bg-orange-500/20 text-orange-400"
    : "bg-purple-500/20 text-purple-400";

const statusColor = (s: number) =>
  s < 300 ? "text-emerald-400" : s < 500 ? "text-yellow-400" : "text-red-400";

export const DevToolsMockup = () => {
  return (
    <div className="w-full max-w-4xl mx-auto rounded-xl overflow-hidden border border-white/10 shadow-2xl shadow-violet-500/10">
      {/* Browser chrome */}
      <div className="bg-[#1a1a2e] px-4 py-2.5 flex items-center gap-3 border-b border-white/8">
        <div className="flex gap-1.5 shrink-0">
          <div className="w-3 h-3 rounded-full bg-red-400/70" />
          <div className="w-3 h-3 rounded-full bg-yellow-400/70" />
          <div className="w-3 h-3 rounded-full bg-emerald-400/70" />
        </div>
        <div className="flex-1 mx-2 bg-white/5 rounded-md px-3 py-1 text-xs text-slate-500 font-mono truncate">
          localhost:3000
        </div>
        <div className="w-3 h-3 shrink-0" />
      </div>

      {/* Fake page */}
      <div className="bg-[#0d0d1a] h-16 flex items-center justify-center gap-6 border-b border-white/5">
        <div className="w-20 h-3 bg-white/5 rounded-full" />
        <div className="w-32 h-3 bg-white/5 rounded-full" />
        <div className="w-24 h-3 bg-white/5 rounded-full" />
        <div className="w-16 h-3 bg-violet-500/20 rounded-full" />
      </div>

      {/* DevTools panel */}
      <div className="bg-[#13131f]">
        {/* DevTools tab bar */}
        <div className="flex items-end bg-[#0d0d1a] border-b border-white/8 px-2 overflow-x-auto scrollbar-none">
          {["Elements", "Console", "Sources", "Network"].map((tab) => (
            <div
              key={tab}
              className="px-3 py-2 text-xs text-slate-600 whitespace-nowrap cursor-default select-none"
            >
              {tab}
            </div>
          ))}
          <div className="px-3 py-2 text-xs text-violet-400 font-semibold border-b-2 border-violet-500 bg-[#13131f] whitespace-nowrap cursor-default select-none -mb-px">
            Mokku
          </div>
        </div>

        {/* Mokku content */}
        <div className="flex" style={{ height: "280px" }}>
          {/* Sidebar: mock list */}
          <div className="w-64 shrink-0 border-r border-white/8 flex flex-col overflow-hidden">
            <div className="px-3 py-2 flex items-center justify-between border-b border-white/8 shrink-0">
              <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                Mocks
              </span>
              <span className="text-[10px] bg-violet-500/20 text-violet-400 px-2 py-0.5 rounded-full cursor-pointer hover:bg-violet-500/30">
                + New
              </span>
            </div>
            <div className="overflow-y-auto flex-1">
              {mocks.map((mock, i) => (
                <div
                  key={i}
                  className={`px-3 py-2.5 flex items-center gap-2 border-b border-white/5 cursor-pointer transition-colors ${
                    i === 0 ? "bg-violet-500/10" : "hover:bg-white/3"
                  }`}
                >
                  <span
                    className={`text-[9px] font-bold px-1.5 py-0.5 rounded shrink-0 ${methodColor(mock.method)}`}
                  >
                    {mock.method}
                  </span>
                  <span className="text-[11px] text-slate-400 truncate flex-1 font-mono">
                    {mock.url}
                  </span>
                  <span
                    className={`text-[10px] font-mono shrink-0 ${statusColor(mock.status)}`}
                  >
                    {mock.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Main: mock editor */}
          <div className="flex-1 flex flex-col overflow-hidden">
            {/* Mock meta */}
            <div className="px-4 py-2 border-b border-white/8 flex items-center gap-6 shrink-0 bg-[#10101c]">
              <div className="text-[11px] text-slate-500">
                URL{" "}
                <span className="text-violet-300 font-mono ml-1">
                  /api/user/profile
                </span>
              </div>
              <div className="text-[11px] text-slate-500">
                Status{" "}
                <span className="text-emerald-400 font-mono ml-1">200</span>
              </div>
              <div className="text-[11px] text-slate-500">
                Delay{" "}
                <span className="text-slate-300 font-mono ml-1">500ms</span>
              </div>
              <div className="ml-auto flex items-center gap-1.5">
                <div className="w-7 h-4 bg-violet-600 rounded-full flex items-center justify-end pr-0.5">
                  <div className="w-3 h-3 bg-white rounded-full" />
                </div>
                <span className="text-[10px] text-slate-500">Active</span>
              </div>
            </div>

            {/* Code editor */}
            <div className="flex-1 overflow-hidden font-mono text-[11px] leading-relaxed p-4 bg-[#0d0d1a] select-none">
              <div className="text-slate-600">{"// Dynamic response — Monaco Editor"}</div>
              <div className="mt-1">
                <span className="text-violet-400">const</span>{" "}
                <span className="text-blue-300">handler</span>{" "}
                <span className="text-slate-400">=</span>{" "}
                <span className="text-slate-300">(</span>
                <span className="text-orange-300">req</span>
                <span className="text-slate-300">)</span>{" "}
                <span className="text-violet-400">=&gt;</span>{" "}
                <span className="text-slate-300">{"{"}</span>
              </div>
              <div className="pl-5">
                <span className="text-violet-400">if</span>{" "}
                <span className="text-slate-300">(</span>
                <span className="text-orange-300">req</span>
                <span className="text-slate-400">.</span>
                <span className="text-blue-300">headers</span>
                <span className="text-slate-300">[</span>
                <span className="text-emerald-400">'x-role'</span>
                <span className="text-slate-300">]</span>{" "}
                <span className="text-slate-400">===</span>{" "}
                <span className="text-emerald-400">'admin'</span>
                <span className="text-slate-300">{")"} {"{"}</span>
              </div>
              <div className="pl-10">
                <span className="text-violet-400">return</span>{" "}
                <span className="text-slate-300">{"{"}</span>{" "}
                <span className="text-blue-300">id</span>
                <span className="text-slate-400">:</span>{" "}
                <span className="text-amber-300">1</span>
                <span className="text-slate-400">,</span>{" "}
                <span className="text-blue-300">role</span>
                <span className="text-slate-400">:</span>{" "}
                <span className="text-emerald-400">'admin'</span>
                <span className="text-slate-400">,</span>{" "}
                <span className="text-blue-300">perms</span>
                <span className="text-slate-400">:</span>{" "}
                <span className="text-slate-300">[]</span>{" "}
                <span className="text-slate-300">{"}"}</span>
                <span className="text-slate-400">;</span>
              </div>
              <div className="pl-5">
                <span className="text-slate-300">{"}"}</span>
              </div>
              <div className="pl-5">
                <span className="text-violet-400">return</span>{" "}
                <span className="text-slate-300">{"{"}</span>{" "}
                <span className="text-blue-300">id</span>
                <span className="text-slate-400">:</span>{" "}
                <span className="text-amber-300">2</span>
                <span className="text-slate-400">,</span>{" "}
                <span className="text-blue-300">role</span>
                <span className="text-slate-400">:</span>{" "}
                <span className="text-emerald-400">'user'</span>{" "}
                <span className="text-slate-300">{"}"}</span>
                <span className="text-slate-400">;</span>
              </div>
              <div>
                <span className="text-slate-300">{"}"}</span>
                <span className="text-slate-400">;</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
