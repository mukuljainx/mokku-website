const steps = [
  {
    number: "01",
    title: "Install the extension",
    description:
      "Add Mokku to Chrome from the Web Store. No account, no signup, no configuration — it's ready the moment it installs.",
    tag: "30 seconds",
  },
  {
    number: "02",
    title: "Open Chrome DevTools",
    description:
      'Open DevTools on any page (F12 or ⌘⌥I), then click the "Mokku" tab that appears in the panel. You\'re now inside the tool.',
    tag: "In your browser",
  },
  {
    number: "03",
    title: "Create a mock",
    description:
      "Hit \"+ New\" and enter the URL to intercept. Choose a status code, set a delay, and write your response — plain JSON or a dynamic JavaScript function.",
    tag: "Monaco Editor",
  },
  {
    number: "04",
    title: "Enable and test",
    description:
      "Toggle the mock on and reload your app. Mokku intercepts matching requests and returns your response. The real call never leaves the browser.",
    tag: "Fully local",
  },
];

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 md:py-28">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-violet-400 uppercase tracking-widest mb-3">
            How it works
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Up and running in under a minute
          </h2>
          <p className="mt-4 text-slate-400 max-w-lg mx-auto">
            No mock server to spin up. No proxies to configure. Just install,
            open DevTools, and start mocking.
          </p>
        </div>

        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="hidden md:block absolute top-8 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/20 to-transparent" />

          <div className="grid gap-8 md:grid-cols-4 relative">
            {steps.map(({ number, title, description, tag }) => (
              <div key={number} className="relative flex flex-col">
                {/* Step number bubble */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-violet-500/15 border border-violet-500/30 flex items-center justify-center shrink-0">
                    <span className="text-xs font-bold text-violet-400">
                      {number}
                    </span>
                  </div>
                  <span className="text-[10px] font-semibold text-violet-500/70 uppercase tracking-widest">
                    {tag}
                  </span>
                </div>
                <h3 className="text-base font-semibold text-white mb-2">
                  {title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
