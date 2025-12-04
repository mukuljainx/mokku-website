import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Header = () => {
    return (
        <header className="bg-background text-foreground py-4 px-6 flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
                <img src="/logo.svg" alt="Mokku" className="h-8 w-8" />
                <span className="text-lg font-semibold">Mokku</span>
            </Link>
            <nav className="hidden md:flex items-center gap-6">
                <a
                    href="/#features"
                    className="text-sm font-medium hover:underline"
                >
                    Features
                </a>
                <Link
                    to="/changelog"
                    className="text-sm font-medium hover:underline"
                >
                    Changelog
                </Link>
                <Link to="/faq" className="text-sm font-medium hover:underline">
                    FAQ's
                </Link>
                <a
                    href="/#support"
                    className="text-sm font-medium hover:underline"
                >
                    Support
                </a>
                <a
                    href="https://github.com/mukuljainx/Mokku/issues"
                    className="text-sm font-medium hover:underline"
                >
                    Bugs/Request a feature
                </a>
            </nav>
            <Button asChild>
                <a href="https://chrome.google.com/webstore/detail/mokku-mock-api-calls-seam/llflfcikklhgamfmnjkgpdadpmdplmji?hl=en&authuser=1">
                    Add to Chrome
                </a>
            </Button>
        </header>
    );
};
