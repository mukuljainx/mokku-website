import { useState } from "react";
import { X, GitCommit, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const entries = [
  {
    version: "v4.x",
    date: "2024",
    changes: [
      "Monaco Editor integration for writing dynamic JavaScript response functions",
      "GraphQL query and mutation mocking support",
      "path-to-regexp dynamic URL matching (e.g. /users/:id)",
      "Projects / Workspaces for grouping mocks by context",
      "Import / Export mocks and headers per project as JSON",
    ],
  },
  {
    version: "v3.x",
    date: "2023",
    changes: [
      "Header modification — global and per-URL",
      "Response delay (latency) simulation per mock",
      "Improved DevTools panel UI and performance",
      "Support for custom HTTP status codes",
    ],
  },
  {
    version: "v2.x",
    date: "2022",
    changes: [
      "Initial Chrome DevTools extension launch",
      "Basic JSON response mocking",
      "Network request interception via Service Worker",
    ],
  },
];

export const Changelog = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="text-sm text-slate-400 hover:text-white transition-colors underline underline-offset-2"
      >
        Changelog
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative w-full max-w-lg bg-[#0f0f1e] border border-white/10 rounded-2xl shadow-2xl overflow-hidden max-h-[80vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/8 shrink-0">
              <div>
                <h2 className="text-lg font-bold text-white">Changelog</h2>
                <p className="text-xs text-slate-500 mt-0.5">
                  What's new in Mokku
                </p>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="text-slate-500 hover:text-white transition-colors p-1"
                aria-label="Close"
              >
                <X size={18} />
              </button>
            </div>

            {/* Modal body */}
            <div className="overflow-y-auto p-6 flex flex-col gap-8">
              {entries.map(({ version, date, changes }) => (
                <div key={version}>
                  <div className="flex items-center gap-2 mb-3">
                    <GitCommit size={14} className="text-violet-400 shrink-0" />
                    <span className="text-sm font-semibold text-white">
                      {version}
                    </span>
                    <span className="text-xs text-slate-600">· {date}</span>
                  </div>
                  <ul className="space-y-1.5 pl-5">
                    {changes.map((c) => (
                      <li
                        key={c}
                        className="text-sm text-slate-400 list-disc marker:text-slate-600"
                      >
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Modal footer */}
            <div className="border-t border-white/8 px-6 py-4 shrink-0">
              <Button asChild variant="outline" size="sm" className="gap-2 border-white/10 text-slate-400 hover:text-white">
                <a
                  href="https://github.com/mukuljainx/Mokku/releases"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Full history on GitHub
                  <ExternalLink size={13} />
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
