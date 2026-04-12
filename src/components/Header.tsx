import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5">
          <img src="/logo.svg" alt="Mokku" className="h-8 w-8" />
          <span className="text-lg font-bold text-white tracking-tight">Mokku</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {[
            { label: "How it works", href: "#how-it-works" },
            { label: "Features", href: "#features" },
            { label: "Compare", href: "#comparison" },
            { label: "GitHub", href: "https://github.com/mukuljainx/Mokku" },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Button
            asChild
            className="bg-violet-600 hover:bg-violet-500 text-white font-semibold shadow-lg shadow-violet-500/20 transition-all"
          >
            <a href="https://chrome.google.com/webstore/detail/mokku-mock-api-calls-seam/llflfcikklhgamfmnjkgpdadpmdplmji">
              Add to Chrome — Free
            </a>
          </Button>
        </div>

        <button
          className="md:hidden text-slate-400 hover:text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-white/5 bg-background px-6 pb-4 flex flex-col gap-4">
          {[
            { label: "How it works", href: "#how-it-works" },
            { label: "Features", href: "#features" },
            { label: "Compare", href: "#comparison" },
            { label: "GitHub", href: "https://github.com/mukuljainx/Mokku" },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {label}
            </a>
          ))}
          <Button
            asChild
            className="bg-violet-600 hover:bg-violet-500 text-white font-semibold w-full"
          >
            <a href="https://chrome.google.com/webstore/detail/mokku-mock-api-calls-seam/llflfcikklhgamfmnjkgpdadpmdplmji">
              Add to Chrome — Free
            </a>
          </Button>
        </div>
      )}
    </header>
  );
};
