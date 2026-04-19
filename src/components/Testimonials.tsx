import { Star } from "lucide-react";

// Source: https://chromewebstore.google.com/detail/mokku/llflfcikklhgamfmnjkgpdadpmdplmji
// 161 total ratings · 4.1/5 overall
const testimonials = [
    {
        name: "Light Lai",
        initials: "LL",
        stars: 5,
        text: "Perfect extension!",
        date: "Apr 2026",
    },
    {
        name: "Hayho yu",
        initials: "HY",
        stars: 5,
        text: "very good",
        date: "Apr 2026",
    },
    {
        name: "Egor Proskuryakov",
        initials: "EP",
        stars: 5,
        text: "very good",
        date: "Apr 2026",
    },
    {
        name: "Stuart Connall",
        initials: "SC",
        stars: 5,
        text: "A very useful tool.",
        date: "Mar 2026",
    },
    {
        name: "Yiyuan",
        initials: "Y",
        stars: 5,
        text: "This tool is amazing after the update. Mocking is super easy.",
        date: "Feb 2026",
    },
    {
        name: "Siddharth Rawat",
        initials: "SR",
        stars: 5,
        text: "Amazing tool for mocking and debugging",
        date: "Feb 2026",
    },
];

const Stars = ({ count }: { count: number }) => (
    <div className="flex items-center gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
            <Star
                key={i}
                size={12}
                className={
                    i < count
                        ? "fill-amber-400 text-amber-400"
                        : "text-slate-700"
                }
            />
        ))}
    </div>
);

export const Testimonials = () => {
    return (
        <section className="py-24 md:py-28">
            <div className="container mx-auto px-6">
                <div className="text-center mb-14">
                    <p className="text-sm font-semibold text-violet-400 uppercase tracking-widest mb-3">
                        Reviews
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                        Loved by developers worldwide
                    </h2>
                    <div className="mt-4 flex items-center justify-center gap-2">
                        <Stars count={4} />
                        <span className="text-slate-400 text-sm">
                            4.1 / 5 · 161 ratings on the Chrome Web Store
                        </span>
                    </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {testimonials.map(
                        ({ name, initials, stars, text, date }) => (
                            <div
                                key={name}
                                className="rounded-xl border border-white/8 bg-white/3 p-6 flex flex-col gap-4"
                            >
                                <Stars count={stars} />
                                <p className="text-slate-300 text-sm leading-relaxed flex-1">
                                    "{text}"
                                </p>
                                <div className="flex items-center gap-3 pt-2 border-t border-white/5">
                                    <div className="w-8 h-8 rounded-full bg-violet-500/20 text-violet-400 text-xs font-bold flex items-center justify-center shrink-0">
                                        {initials}
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-white">
                                            {name}
                                        </p>
                                        <p className="text-xs text-slate-600">
                                            {date}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ),
                    )}
                </div>

                <p className="mt-8 text-center text-xs text-slate-700">
                    Reviews sourced from the{" "}
                    <a
                        href="https://chromewebstore.google.com/detail/mokku/llflfcikklhgamfmnjkgpdadpmdplmji"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline hover:text-slate-500 transition-colors"
                    >
                        Chrome Web Store
                    </a>
                </p>
            </div>
        </section>
    );
};
