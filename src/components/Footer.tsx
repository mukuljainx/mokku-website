import { Button } from "./ui/button";

export const Footer = () => {
    return (
        <footer
            id="support"
            className="bg-muted text-muted-foreground py-8 px-6 mt-20"
        >
            <div className="container mx-auto grid gap-8 md:grid-cols-2">
                <div>
                    <h3 className="text-lg font-semibold">Support Us</h3>
                    <p className="mt-2">
                        Developing and maintaining Mokku is a significant
                        effort! Please consider supporting the extension if it
                        helps your workflow.
                    </p>
                    <div className="mt-4 flex gap-4">
                        <Button asChild variant="outline">
                            <a
                                href="https://paypal.me/mukuljainx"
                                target="_blank"
                            >
                                PayPal
                            </a>
                        </Button>
                        <Button asChild variant="outline">
                            <a
                                href="https://www.buymeacoffee.com/mukuljainx"
                                target="_blank"
                            >
                                Buy Me A Coffee
                            </a>
                        </Button>
                    </div>
                </div>
                <div>
                    <h3 className="text-lg font-semibold">
                        Bugs / Request a Feature
                    </h3>
                    <p className="mt-2">
                        Please use our GitHub issues page to report any bug or
                        feature request.
                    </p>
                    <div className="mt-4">
                        <Button asChild variant="outline">
                            <a
                                href="https://github.com/mukuljainx/Mokku/issues"
                                target="_blank"
                            >
                                GitHub Issues
                            </a>
                        </Button>
                    </div>
                </div>
            </div>
            <div className="container mx-auto mt-8 text-center text-sm">
                <p>&copy; 2025 Mokku. All rights reserved.</p>
            </div>
        </footer>
    );
};
