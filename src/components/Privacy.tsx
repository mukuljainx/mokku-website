import { ShieldCheck, Star, Users, Lock } from "lucide-react";

const stats = [
    {
        icon: Users,
        value: "15,000+",
        label: "Active developers",
        color: "text-violet-400",
    },
    {
        icon: Star,
        value: "4.1 / 5",
        label: "Chrome Web Store rating",
        color: "text-amber-400",
    },
    {
        icon: Lock,
        value: "Zero",
        label: "Telemetry collected",
        color: "text-emerald-400",
    },
];

export const Privacy = () => {
    return (
        <section id="privacy" className="py-24 md:py-32">
            <div className="container mx-auto px-6">
                <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-10 md:p-16 relative overflow-hidden">
                    {/* Background glow */}
                    <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />

                    <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                        {/* Left: copy */}
                        <div>
                            <div className="inline-flex items-center gap-2 border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-semibold px-3.5 py-1.5 rounded-full mb-6">
                                <ShieldCheck size={13} />
                                Privacy First
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
                                Your data never leaves your machine.
                            </h2>
                            <p className="text-slate-400 leading-relaxed mb-4">
                                Mokku collects{" "}
                                <span className="text-white font-medium">
                                    zero telemetry
                                </span>{" "}
                                and does not track personal information of any
                                kind. All mocks, headers, and project
                                configurations are stored exclusively in your
                                browser's{" "}
                                <span className="text-white font-medium">
                                    Chrome local storage
                                </span>{" "}
                                — they never touch an external server.
                            </p>
                            <p className="text-slate-400 leading-relaxed">
                                No accounts. No sign-up. No analytics. Just a
                                tool that works exactly as expected, with full
                                respect for your privacy.
                            </p>
                        </div>

                        {/* Right: stats */}
                        <div className="grid gap-4">
                            {stats.map(
                                ({ icon: Icon, value, label, color }) => (
                                    <div
                                        key={label}
                                        className="flex items-center gap-4 rounded-xl border border-white/8 bg-white/3 p-5"
                                    >
                                        <div
                                            className={`w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0 ${color}`}
                                        >
                                            <Icon size={20} />
                                        </div>
                                        <div>
                                            <div
                                                className={`text-2xl font-bold ${color}`}
                                            >
                                                {value}
                                            </div>
                                            <div className="text-sm text-slate-400">
                                                {label}
                                            </div>
                                        </div>
                                    </div>
                                ),
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
