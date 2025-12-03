import { Features } from "../components/Features";
import { GridBackground } from "../components/GridBackground";
import { Hero } from "../components/Hero";
import SEO from "../components/Seo";
import { SocialProof } from "../components/SocialProof";

function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            <SEO />
            <GridBackground />
            <main className="flex-1">
                <Hero />
                <SocialProof />
                <Features />
            </main>
        </div>
    );
}

export default Home;
