const companies = [
  { name: "Microsoft", src: "/company-logo/microsoft-logo-svgrepo-com.svg" },
  { name: "Uber", src: "/company-logo/uber-svgrepo-com.svg" },
  { name: "Atlassian", src: "/company-logo/atlassian.svg" },
  { name: "Walmart", src: "/company-logo/walmart-logo-svgrepo-com.svg" },
];

export const SocialProof = () => {
  return (
    <section className="py-14 border-y border-white/5">
      <div className="container mx-auto px-6">
        <p className="text-center text-sm text-slate-600 uppercase tracking-widest font-medium mb-10">
          Trusted by developers at
        </p>
        <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
          {companies.map(({ name, src }) => (
            <img
              key={name}
              src={src}
              alt={name}
              className="h-7 object-contain opacity-30 grayscale invert hover:opacity-100 hover:grayscale-0 hover:invert-0 transition-all duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  );
};
