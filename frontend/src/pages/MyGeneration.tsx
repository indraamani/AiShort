import { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Toolbar from "../components/Toolbar";
import type { Project } from "../types";
import { Loader2Icon } from "lucide-react";
import ProjectCard from "../components/ProjectCard";


export default function MyGeneration() {
    const [generation, setGeneration] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true)

    const fetchGeneration = () => {
        setTimeout(() => {
            setGeneration([
                {
                id: "abc",
                name: "domp",
                userId: "a162",
                user: {
                    id: "a162",
                    name: "a",
                    email: "a@gmail.com",

                },
                productName: "domp 096",
                productDesc: " larp larp",
                userPrompt: "string",
                aspectRatio: "string",
                targetLength: 123,
                generatedImg: "string",
                generatedVideo: "string",
                isGenerating: false,
                isPublished: false,
                // error: null,
                createdAt: "12-12-2208",
                updatedAt: "12-12-2012",
                uploadedImg: ["s"],

            }
            ])
            setLoading(false)
        }, 3000)
    }

    useEffect(() => {
        fetchGeneration()
    }, [])

    return (
        <>
            <Toolbar />
            <section className="min-h-screen">
                {
                    loading ? (
                        <div className="flex items-center justify-center min-h-screen">
                            <Loader2Icon className="size-7 animate-spin text-indigo-400" />
                        </div>
                    ) : (
                        <div className="min-h-screen text-white p-6 md:p-12 my-28">
                            <div className="max-w-6xl mx-auto">
                                <header className="mb-12 text-center">
                                    <h1 className="text-3xl md:text-4xl font-semibold mb-4">My Generation</h1>
                                    <p className="text-gray-400">View and Manage your AI generated content.</p>
                                </header>

                                <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
                                    {
                                        generation.map((gen) => (
                                            <ProjectCard gen={gen} key={gen.id} setGenerations={setGeneration} forCommunity={true} />
                                        ))
                                    }
                                </div>

                                {
                                    generation.length === 0 && (
                                        <div className="text-center py-20 bg-white/5 rounded-xl border border-white/10">
                                            <h3 className="text-xl font-medium mb-2">No generation yet!</h3>
                                            <p className="text-gray-400 mb-6">Start creating stunning photos today</p>
                                            <button onClick={_=>window.location.href = "/generate"} className="bg-violet-600/60 px-4 py-2 rounded">Create New Generation</button>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    )
                }
            </section>
            <Footer />
        </>
    )
}