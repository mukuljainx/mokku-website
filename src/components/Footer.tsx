import { Github, Coffee, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/Logo";

export const Footer = () => {
  return (
    <footer id="support" className="border-t border-white/5 bg-background/80 mt-8">
      <div className="container mx-auto px-6 py-14">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand column */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <Logo className="h-7 w-7" />
              <span className="text-base font-bold text-white">Mokku</span>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed">
              A free, open-source Chrome DevTools extension for mocking API
              calls — with zero telemetry and full local storage.
            </p>
          </div>

          {/* Community */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Community</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://github.com/mukuljainx/Mokku/issues/new?template=bug_report.md"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
                >
                  <Github size={14} />
                  Report a Bug
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/mukuljainx/Mokku/issues/new?template=bug_report.md"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-slate-400 hover:text-white transition-colors"
                >
                  Report a Bug
                </a>
              </li>
              <li>
                <Link
                  to="/changelog"
                  className="text-sm text-slate-400 hover:text-white transition-colors"
                >
                  Changelog
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-2">Support Us</h3>
            <p className="text-sm text-slate-500 mb-4 leading-relaxed">
              Mokku is free to use. If it saves you time, consider buying a
              coffee or supporting via UPI.
            </p>
            <div className="flex flex-col gap-2.5">
              <Button
                asChild
                variant="outline"
                size="sm"
                className="border-white/10 bg-white/3 text-slate-300 hover:bg-white/8 hover:text-white gap-2 justify-start w-fit"
              >
                <a
                  href="https://www.buymeacoffee.com/mukuljainx"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Coffee size={14} />
                  Buy Me a Coffee
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="sm"
                className="border-white/10 bg-white/3 text-slate-300 hover:bg-white/8 hover:text-white gap-2 justify-start w-fit"
              >
                <a
                  href="https://paypal.me/mukuljainx"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Heart size={14} />
                  PayPal / UPI
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-600">
            &copy; {new Date().getFullYear()} Mokku. Open source under MIT.
          </p>
          <a
            href="https://chrome.google.com/webstore/detail/mokku-mock-api-calls-seam/llflfcikklhgamfmnjkgpdadpmdplmji"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-slate-600 hover:text-slate-400 transition-colors"
          >
            Chrome Web Store
          </a>
        </div>
      </div>
    </footer>
  );
};
