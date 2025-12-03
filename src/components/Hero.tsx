import { Button } from "@/components/ui/button";

export const Hero = () => {
    return (
        <section className="py-20 md:py-32">
            <div className="container mx-auto text-center">
                <h1 className="text-4xl md:text-6xl font-bold">
                    Mock API Calls Seamlessly
                </h1>
                <p className="mt-4 text-lg md:text-xl text-muted-foreground">
                    Mokku helps you by mocking API calls and changing their
                    response, response time, and status.
                </p>
                <div className="mt-8 flex justify-center gap-4">
                    <Button size="lg" asChild>
                        <a href="https://chrome.google.com/webstore/detail/mokku-mock-api-calls-seam/llflfcikklhgamfmnjkgpdadpmdplmji?hl=en&authuser=1">
                            Add to Chrome
                        </a>
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                        <a href="https://github.com/mukuljainx/Mokku">GitHub</a>
                    </Button>
                </div>
                <div className="mt-12">
                    <img
                        src="https://raw.githubusercontent.com/mukuljainx/mokku/master/docs/store/small-promo.png"
                        alt="Mokku Promo Banner"
                        className="mx-auto rounded-lg shadow-lg"
                    />
                </div>
            </div>
        </section>
    );
};
