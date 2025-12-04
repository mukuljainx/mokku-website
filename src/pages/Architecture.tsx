import Seo from "@/components/Seo";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function Architecture() {
    return (
        <>
            <Seo
                title="Mokku - Architecture"
                description="Understand the architecture of Mokku and how it works under the hood."
            />

            <div className="container mx-auto px-4 py-8">
                <h1 className="text-4xl font-bold mb-4 text-center">
                    Mokku's Architecture
                </h1>
                <p className="text-lg text-gray-600 mb-8 text-center">
                    An overview of how Mokku operates behind the scenes for
                    different flows.
                </p>

                <div className="space-y-12">
                    {/* API Mocking Flow */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-center text-2xl">
                                API Mocking Flow
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-col lg:flex-row items-center justify-center gap-8 text-center">
                                <div className="p-6 border rounded-lg shadow-lg bg-blue-100 w-60">
                                    <h3 className="text-xl font-semibold">
                                        User Website
                                    </h3>
                                </div>
                                <div className="text-2xl font-bold text-gray-500 hidden lg:block">
                                    ↔
                                </div>
                                <div className="text-2xl font-bold text-gray-500 lg:hidden">
                                    ↕
                                </div>
                                <div className="p-6 border rounded-lg shadow-lg bg-gray-100 grow">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="p-4 border rounded-md bg-yellow-200">
                                            Hook
                                        </div>
                                        <div className="p-4 border rounded-md bg-green-200">
                                            Content Script
                                        </div>
                                        <div className="p-4 border rounded-md bg-green-200">
                                            Service Worker
                                        </div>
                                        <div className="p-4 border rounded-md bg-purple-200">
                                            DB
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Header Modification Flow */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-center text-2xl">
                                Header Modification Flow
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-col lg:flex-row items-center justify-center gap-4 text-center">
                                <div className="p-4 border rounded-lg shadow-lg bg-red-100">
                                    <h3 className="text-lg font-semibold">
                                        Chrome
                                    </h3>
                                </div>
                                <div className="text-2xl font-bold text-gray-500">
                                    →
                                </div>
                                <div className="p-4 border rounded-lg shadow-lg bg-orange-100">
                                    <h3 className="text-lg font-semibold">
                                        Modify Headers Rules
                                    </h3>
                                </div>
                                <div className="text-2xl font-bold text-gray-500">
                                    →
                                </div>
                                <div className="p-4 border rounded-lg shadow-lg bg-indigo-100">
                                    <h3 className="text-lg font-semibold">
                                        Adds Header if Matches
                                    </h3>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Data Synchronization with Mokku.app */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-center text-2xl">
                                Data Synchronization with Mokku.app
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-col lg:flex-row items-center justify-center gap-8 text-center">
                                <div className="p-6 border rounded-lg shadow-lg bg-blue-100 w-60">
                                    <h3 className="text-xl font-semibold">
                                        Mokku.app
                                    </h3>
                                </div>
                                <div className="text-2xl font-bold text-gray-500 hidden lg:block">
                                    ↔
                                </div>
                                <div className="text-2xl font-bold text-gray-500 lg:hidden">
                                    ↕
                                </div>
                                <div className="p-6 border rounded-lg shadow-lg bg-gray-100 grow">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="p-4 border rounded-md bg-yellow-200">
                                            App Script
                                        </div>
                                        <div className="p-4 border rounded-md bg-green-200">
                                            Service Worker
                                        </div>
                                        <div className="p-4 border rounded-md bg-purple-200">
                                            DB
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </>
    );
}

export default Architecture;
