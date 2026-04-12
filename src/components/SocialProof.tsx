const companies = [
  {
    name: "Microsoft",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/2560px-Microsoft_logo_%282012%29.svg.png",
  },
  {
    name: "Uber",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Uber_logo_2018.png/2560px-Uber_logo_2018.png",
  },
  {
    name: "Atlassian",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Atlassian_logo.svg/2560px-Atlassian_logo.svg.png",
  },
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
              className="h-7 object-contain opacity-30 hover:opacity-50 transition-opacity grayscale invert"
            />
          ))}
        </div>
      </div>
    </section>
  );
};
