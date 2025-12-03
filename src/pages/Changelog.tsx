import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { Skeleton } from "@/components/ui/skeleton";
import "./changelog.css";

const Changelog = () => {
    const [markdown, setMarkdown] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchChangelog = async () => {
            try {
                const response = await fetch(
                    "https://raw.githubusercontent.com/mukuljainx/Mokku/refs/heads/master/CHANGELOG.md",
                );
                const text = await response.text();
                setMarkdown(text);
            } catch (error) {
                console.error("Error fetching changelog:", error);
                setMarkdown("Failed to load changelog.");
            } finally {
                setLoading(false);
            }
        };

        fetchChangelog();
    }, []);

    return (
        <div className="dark:bg-grid-white/[0.05] bg-grid-black/[0.05] relative">
            <div className="container mx-auto px-4 py-12 sm:py-16 md:py-20">
                <div className="mt-12">
                    {loading ? (
                        <div className="space-y-8 max-w-4xl mx-auto">
                            <Skeleton className="h-8 w-1/4" />
                            <div className="space-y-4">
                                <Skeleton className="h-4 w-full" />
                                <Skeleton className="h-4 w-full" />
                                <Skeleton className="h-4 w-3/4" />
                            </div>
                            <Skeleton className="h-8 w-1/3" />
                            <div className="space-y-4">
                                <Skeleton className="h-4 w-full" />
                                <Skeleton className="h-4 w-5/6" />
                            </div>
                        </div>
                    ) : (
                        <div className="prose prose-lg dark:prose-invert mx-auto">
                            <ReactMarkdown>{markdown}</ReactMarkdown>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Changelog;
