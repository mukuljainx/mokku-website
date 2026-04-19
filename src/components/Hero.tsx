import { Button } from "@/components/ui/button";
import { Chrome, ArrowRight, Star } from "lucide-react";
import { DevToolsMockup } from "./DevToolsMockup";

const CHROME_STORE_URL =
    "https://chrome.google.com/webstore/detail/mokku-mock-api-calls-seam/llflfcikklhgamfmnjkgpdadpmdplmji";

export const Hero = () => {
    return (
        <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
            <div className="container mx-auto px-6 text-center">
                {/* Ghost mascot */}
                <div className="flex justify-center mb-6">
                    <img
                        src="/logos/mokku-logo.svg"
                        alt="Mokku mascot"
                        className="h-28 md:h-36 w-auto drop-shadow-[0_0_40px_rgba(173,97,222,0.4)]"
                    />
                </div>

                {/* Badge */}
                <div className="inline-flex items-center gap-2 border border-violet-500/30 bg-violet-500/10 text-violet-300 text-xs font-medium px-3.5 py-1.5 rounded-full mb-8">
                    <Star size={11} className="fill-violet-300" />
                    4.1/5 rating · Trusted by 15,000+ developers
                </div>

                {/* Headline */}
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.08] tracking-tight max-w-4xl mx-auto">
                    Mock API Calls Seamlessly{" "}
                    <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
                        inside Chrome DevTools.
                    </span>
                </h1>

                {/* Subheadline */}
                <p className="mt-6 text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
                    Stop waiting for the backend. Intercept network requests,
                    write dynamic JavaScript responses, and simulate latency —
                    entirely locally.
                </p>

                {/* CTAs */}
                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Button
                        asChild
                        size="lg"
                        className="bg-violet-600 hover:bg-violet-500 text-white font-semibold text-base px-7 h-12 shadow-lg shadow-violet-500/25 transition-all gap-2"
                    >
                        <a
                            href={CHROME_STORE_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Chrome size={18} />
                            Add to Chrome — Free
                        </a>
                    </Button>
                    <Button
                        asChild
                        size="lg"
                        variant="outline"
                        className="border-white/10 bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white font-medium text-base px-7 h-12 gap-2 transition-all"
                    >
                        <a
                            href="https://github.com/mukuljainx/Mokku"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View on GitHub
                            <ArrowRight size={16} />
                        </a>
                    </Button>
                </div>

                {/* Trust line */}
                <p className="mt-5 text-sm text-slate-600">
                    No signup required · Zero telemetry · Works offline
                </p>

                {/* DevTools mockup */}
                <div className="mt-16 md:mt-20 relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent pointer-events-none z-10 bottom-0 h-1/3 top-auto" />
                    <div className="relative z-0 px-0 md:px-8">
                        <DevToolsMockup />
                    </div>
                </div>
            </div>
        </section>
    );
};
