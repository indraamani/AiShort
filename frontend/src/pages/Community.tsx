import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Toolbar from "../components/Toolbar";
import ProjectCard from "../components/ProjectCard";
import type { Project } from "../types";
import { Loader2Icon } from "lucide-react";

export default function Community() {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true)

    const fetchData = () => {
        setTimeout(() => {
            setProjects([{
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

            }])
            setLoading(false)
        }, 3000)
    }

    useEffect(() => {
        fetchData()
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
                                    <h1 className="text-3xl md:text-4xl font-semibold mb-4">Community</h1>
                                    <p className="text-gray-400">See what otheers are creating with this website</p>
                                </header>

                                <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
                                    {
                                        projects.map((project) => (
                                            <ProjectCard gen={project} key={project.id} setGenerations={setProjects} forCommunity={true} />
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    )
                }
            </section>
            <Footer />
        </>
    )
}