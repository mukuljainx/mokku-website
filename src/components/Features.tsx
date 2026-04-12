import { Code2, GitBranch, Globe, FolderOpen, Zap, Shield } from "lucide-react";

const features = [
  {
    icon: Code2,
    title: "Dynamic JavaScript Responses",
    description:
      "Write real JavaScript functions in a built-in Monaco Editor to return conditional, computed responses. Supports dynamic URL matching via path-to-regexp — handle /users/:id and branch logic per request.",
    accent: "text-violet-400",
    glow: "group-hover:shadow-violet-500/20",
    border: "group-hover:border-violet-500/30",
  },
  {
    icon: GitBranch,
    title: "GraphQL Native",
    description:
      "Full support for mocking GraphQL queries and mutations. Intercept operation-specific requests and return custom payloads — no extra setup, works out of the box.",
    accent: "text-pink-400",
    glow: "group-hover:shadow-pink-500/20",
    border: "group-hover:border-pink-500/30",
  },
  {
    icon: Globe,
    title: "Header Modification",
    description:
      "Modify request headers globally across all network requests or scope them to specific URLs. Perfect for auth tokens, feature flags, and CORS workarounds during development.",
    accent: "text-sky-400",
    glow: "group-hover:shadow-sky-500/20",
    border: "group-hover:border-sky-500/30",
  },
  {
    icon: FolderOpen,
    title: "Workspaces & Projects",
    description:
      "Group mocks and headers into named Projects. Switch contexts instantly, and import/export projects as JSON — share mock configs with your team or port them across machines.",
    accent: "text-amber-400",
    glow: "group-hover:shadow-amber-500/20",
    border: "group-hover:border-amber-500/30",
  },
  {
    icon: Zap,
    title: "Latency Simulation",
    description:
      "Add per-mock response delays to simulate slow or unreliable network conditions. Test loading states, skeleton UIs, and timeouts without touching the backend.",
    accent: "text-emerald-400",
    glow: "group-hover:shadow-emerald-500/20",
    border: "group-hover:border-emerald-500/30",
  },
  {
    icon: Shield,
    title: "Error State Testing",
    description:
      "Return any HTTP status code — 401, 403, 500, 503 — on demand. Verify that your UI handles errors gracefully without needing to intentionally break your server.",
    accent: "text-red-400",
    glow: "group-hover:shadow-red-500/20",
    border: "group-hover:border-red-500/30",
  },
];

export const Features = () => {
  return (
    <section id="features" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-violet-400 uppercase tracking-widest mb-3">
            Capabilities
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            Everything you need to test edge cases
          </h2>
          <p className="mt-4 text-lg text-slate-400 max-w-xl mx-auto">
            Mokku lives inside DevTools and gives you full control over every
            network response — without a mock server.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, description, accent, glow, border }) => (
            <div
              key={title}
              className={`group relative rounded-xl border border-white/8 bg-white/3 p-6 hover:bg-white/5 transition-all duration-300 shadow-xl hover:shadow-2xl ${glow} ${border}`}
            >
              <div
                className={`inline-flex items-center justify-center w-10 h-10 rounded-lg bg-white/5 mb-4 ${accent}`}
              >
                <Icon size={20} />
              </div>
              <h3 className="text-base font-semibold text-white mb-2">{title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
