import { Features } from "./components/Features";
import { Footer } from "./components/Footer";
import { GridBackground } from "./components/GridBackground";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Privacy } from "./components/Privacy";
import { SocialProof } from "./components/SocialProof";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <GridBackground />
      <Header />
      <main className="flex-1">
        <Hero />
        <SocialProof />
        <Features />
        <Privacy />
      </main>
      <Footer />
    </div>
  );
}

export default App;
