import { ExternalLink, ArrowLeft, Plus, Wrench, RefreshCw } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { GridBackground } from "@/components/GridBackground";
import { changelogList } from "@/components/changeLogList";
import { Logo } from "@/components/Logo";

const categoryConfig: Record<
  string,
  { label: string; icon: React.ReactNode; color: string; bg: string }
> = {
  Adds: {
    label: "Added",
    icon: <Plus size={11} />,
    color: "text-emerald-400",
    bg: "bg-emerald-500/15 border-emerald-500/20",
  },
  Fixes: {
    label: "Fixed",
    icon: <Wrench size={11} />,
    color: "text-amber-400",
    bg: "bg-amber-500/15 border-amber-500/20",
  },
  Updated: {
    label: "Updated",
    icon: <RefreshCw size={11} />,
    color: "text-sky-400",
    bg: "bg-sky-500/15 border-sky-500/20",
  },
};

export const ChangelogPage = () => {
  const latest = changelogList[0]?.version;

  return (
    <div className="min-h-screen flex flex-col">
      <GridBackground />

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/5 bg-background/80 backdrop-blur-xl">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5">
            <Logo className="h-7 w-7" />
            <span className="text-base font-bold text-white">Mokku</span>
          </Link>
          <Button
            asChild
            size="sm"
            className="bg-violet-600 hover:bg-violet-500 text-white font-semibold shadow-lg shadow-violet-500/20"
          >
            <a
              href="https://chrome.google.com/webstore/detail/mokku-mock-api-calls-seam/llflfcikklhgamfmnjkgpdadpmdplmji"
              target="_blank"
              rel="noopener noreferrer"
            >
              Add to Chrome
            </a>
          </Button>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-6 py-16 max-w-2xl">
        {/* Back */}
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-white transition-colors mb-10"
        >
          <ArrowLeft size={14} />
          Back to home
        </Link>

        {/* Title */}
        <div className="mb-14">
          <h1 className="text-4xl font-bold text-white tracking-tight">Changelog</h1>
          <p className="mt-2 text-slate-400">
            Release history for the Mokku Chrome extension.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-violet-500/50 via-violet-500/10 to-transparent" />

          <div className="flex flex-col gap-10">
            {changelogList.map(({ version, date, changes, skip }) => (
              <div key={version} className="flex gap-6">
                {/* Dot */}
                <div className="mt-1 shrink-0">
                  <div
                    className={`w-3.5 h-3.5 rounded-full border-2 bg-background ${
                      version === latest
                        ? "border-violet-400"
                        : "border-slate-700"
                    }`}
                  />
                </div>

                {/* Content */}
                <div className={`flex-1 pb-2 ${skip ? "opacity-60" : ""}`}>
                  {/* Version row */}
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span className="text-base font-bold text-white font-mono">
                      v{version}
                    </span>
                    <span className="text-sm text-slate-600">· {date}</span>
                    {version === latest && (
                      <span className="text-[10px] font-semibold uppercase tracking-widest bg-violet-500/20 text-violet-400 px-2 py-0.5 rounded-full border border-violet-500/20">
                        Latest
                      </span>
                    )}
                  </div>

                  {/* Change groups */}
                  <div className="flex flex-col gap-4">
                    {Object.entries(changes).map(([category, items]) => {
                      const cfg = categoryConfig[category];
                      if (!cfg) return null;
                      return (
                        <div key={category}>
                          <div
                            className={`inline-flex items-center gap-1.5 text-[11px] font-semibold px-2 py-0.5 rounded border mb-2.5 ${cfg.color} ${cfg.bg}`}
                          >
                            {cfg.icon}
                            {cfg.label}
                          </div>
                          <ul className="flex flex-col gap-1.5">
                            {items.map((item) => (
                              <li
                                key={item}
                                className="flex items-start gap-2.5"
                              >
                                <span className="mt-2 w-1 h-1 rounded-full bg-slate-600 shrink-0" />
                                <span className="text-sm text-slate-400 leading-relaxed">
                                  {item}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 border-t border-white/5 pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            Full commit history on GitHub.
          </p>
          <Button
            asChild
            variant="outline"
            size="sm"
            className="gap-2 border-white/10 text-slate-400 hover:text-white"
          >
            <a
              href="https://github.com/mukuljainx/Mokku/releases"
              target="_blank"
              rel="noopener noreferrer"
            >
              View releases on GitHub
              <ExternalLink size={13} />
            </a>
          </Button>
        </div>
      </main>
    </div>
  );
};
