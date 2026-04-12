import { Check, X, Minus } from "lucide-react";

// Data sourced from research/competitor-comparison.md (fetched 2026-04-12)
// Sources: requestly.com, tweak-extension.com, postman.com, Chrome Web Store listings

type CellValue = true | false | "partial" | string;

interface Feature {
  label: string;
  tooltip?: string;
  mokku: CellValue;
  requestly: CellValue;
  tweak: CellValue;
  postman: CellValue;
}

const features: Feature[] = [
  {
    label: "Lives inside Chrome DevTools",
    mokku: true,
    requestly: false,
    tweak: false,
    postman: false,
  },
  {
    label: "Free — no rule limits",
    mokku: true,
    requestly: false,
    tweak: false,       // capped at 12 rules on free
    postman: false,     // 1 user, monitoring limits
  },
  {
    label: "No account required",
    mokku: true,
    requestly: true,
    tweak: true,
    postman: false,
  },
  {
    label: "Zero telemetry",
    mokku: true,
    requestly: "partial",  // not stated
    tweak: "partial",      // not stated
    postman: false,        // account-linked data
  },
  {
    label: "Dynamic JS responses",
    tooltip: "Write real JavaScript functions, not just static JSON or template variables",
    mokku: true,
    requestly: true,
    tweak: true,
    postman: "partial",    // template variables only, not arbitrary JS
  },
  {
    label: "GraphQL mocking — free",
    mokku: true,
    requestly: true,
    tweak: false,           // paid only ($36/yr)
    postman: true,
  },
  {
    label: "Mocks visible in Network tab",
    tooltip: "Can you see intercepted requests in DevTools Network panel?",
    mokku: true,
    requestly: true,
    tweak: true,
    postman: false,         // N/A — not a browser interceptor
  },
  {
    label: "Open source",
    mokku: true,
    requestly: "partial",   // AGPLv3, partial Enterprise proprietary
    tweak: false,
    postman: false,
  },
  {
    label: "Header modification",
    mokku: true,
    requestly: true,
    tweak: true,
    postman: true,
  },
  {
    label: "Import / Export mocks",
    mokku: true,
    requestly: true,
    tweak: false,
    postman: true,
  },
];

const tools = [
  { key: "mokku", label: "Mokku", highlight: true },
  { key: "requestly", label: "Requestly", highlight: false },
  { key: "tweak", label: "Tweak", highlight: false },
  { key: "postman", label: "Postman", highlight: false },
] as const;

type ToolKey = (typeof tools)[number]["key"];

const Cell = ({ value }: { value: CellValue }) => {
  if (value === true)
    return (
      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-emerald-500/15">
        <Check size={13} className="text-emerald-400" />
      </span>
    );
  if (value === false)
    return (
      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-red-500/10">
        <X size={13} className="text-red-500/70" />
      </span>
    );
  if (value === "partial")
    return (
      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-yellow-500/10">
        <Minus size={13} className="text-yellow-500/70" />
      </span>
    );
  return <span className="text-xs text-slate-500">{value}</span>;
};

export const Comparison = () => {
  return (
    <section id="comparison" className="py-24 md:py-28">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-violet-400 uppercase tracking-widest mb-3">
            Comparison
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Mokku vs the alternatives
          </h2>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto">
            The only API mocker that lives <em>inside</em> DevTools — no extra
            windows, no accounts, no paywalls.
          </p>
        </div>

        <div className="overflow-x-auto rounded-xl border border-white/8">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/8 bg-white/2">
                <th className="text-left py-4 px-5 text-slate-500 font-medium w-1/2">
                  Feature
                </th>
                {tools.map(({ key, label, highlight }) => (
                  <th
                    key={key}
                    className={`text-center py-4 px-4 font-semibold ${
                      highlight ? "text-violet-400" : "text-slate-400"
                    }`}
                  >
                    {highlight && (
                      <span className="block text-[9px] uppercase tracking-widest text-violet-500/70 mb-0.5 font-normal">
                        This tool
                      </span>
                    )}
                    {label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {features.map(({ label, tooltip, ...values }, i) => (
                <tr
                  key={label}
                  className={`border-b border-white/5 transition-colors hover:bg-white/2 ${
                    i % 2 === 0 ? "" : "bg-white/1"
                  }`}
                >
                  <td className="py-3.5 px-5 text-slate-300">
                    {label}
                    {tooltip && (
                      <span className="block text-xs text-slate-600 font-normal mt-0.5">
                        {tooltip}
                      </span>
                    )}
                  </td>
                  {tools.map(({ key, highlight }) => (
                    <td
                      key={key}
                      className={`py-3.5 px-4 text-center ${
                        highlight ? "bg-violet-500/5" : ""
                      }`}
                    >
                      <Cell value={values[key as ToolKey] as CellValue} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Legend */}
        <div className="mt-5 flex flex-wrap items-center gap-5 justify-end">
          {[
            { icon: <Check size={11} className="text-emerald-400" />, bg: "bg-emerald-500/15", label: "Yes" },
            { icon: <X size={11} className="text-red-500/70" />, bg: "bg-red-500/10", label: "No" },
            { icon: <Minus size={11} className="text-yellow-500/70" />, bg: "bg-yellow-500/10", label: "Partial / unclear" },
          ].map(({ icon, bg, label }) => (
            <div key={label} className="flex items-center gap-1.5 text-xs text-slate-500">
              <span className={`inline-flex items-center justify-center w-5 h-5 rounded-full ${bg}`}>
                {icon}
              </span>
              {label}
            </div>
          ))}
        </div>

        <p className="mt-4 text-xs text-slate-700 text-right">
          Data sourced from official product pages · Last verified Apr 2026
        </p>
      </div>
    </section>
  );
};
