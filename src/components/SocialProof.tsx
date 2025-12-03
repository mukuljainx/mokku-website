export const SocialProof = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto text-center">
        <p className="text-sm uppercase text-muted-foreground">
          Trusted by over 15,000 users from
        </p>
        <div className="mt-6 flex justify-center gap-8">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/2560px-Microsoft_logo_%282012%29.svg.png"
            alt="Microsoft"
            className="h-8"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Uber_logo_2018.png/2560px-Uber_logo_2018.png"
            alt="Uber"
            className="h-8"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Atlassian_logo.svg/2560px-Atlassian_logo.svg.png"
            alt="Atlassian"
            className="h-8"
          />
        </div>
      </div>
    </section>
  );
};
