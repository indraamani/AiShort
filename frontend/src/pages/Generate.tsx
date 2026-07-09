import { useState } from "react";
import Footer from "../components/Footer";
import Toolbar from "../components/Toolbar";
import Upload from "../components/Upload";
import { Loader2Icon, RectangleHorizontalIcon, RectangleVerticalIcon, Wand2Icon } from "lucide-react";

export default function Generate() {

    const [name, setName] = useState('')
    const [productName, setProductName] = useState('')
    const [productDesc, setProductDesc] = useState('')
    const [aspectRatio, setAspectRatio] = useState('9:16')
    const [productImage, setProductImage] = useState<File | null>(null)
    const [modelImage, setModelImage] = useState<File | null>(null)
    const [userPrompt, setUserPrompt] = useState('')
    const [isGenerating, setIsGenerating] = useState(false)

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, type: 'product' | 'model') => {
        if (e.target.files && e.target.files[0]) {
            if (type === 'product')
                setProductImage(e.target.files[0])
            else
                setModelImage(e.target.files[0])
        }
    }

    // const handleGenerate = async (e: React.FormEvent<>)
    return (
        <>
            <Toolbar />
            <section className="min-h-48 mt-46 text-white px-4 md:px-16 lg:px-24 xl:px-32">
                <div className="flex items-center flex-col gap-4">
                    <h2 className="text-3xl font-bold">Create In-context Image</h2>
                    <p className="w-[80%] md:w-[80%] lg:w-[40%] text-center text-sm">Upload your model and product image to generate stunning UGC,short form video and social media posts.</p>
                </div>
                <form className="lg:mx-40">
                    <div className="flex gap-20 max-sm:flex-col items-start justify-between">
                        <div className="flex flex-col w-full sm:max-w-60 gap-8 mt-8 mb-12">
                            <Upload label="Produce Image" file={productImage} onClean={() => setProductImage(null)} onChange={(e) => handleFileChange(e, 'product')} />
                            <Upload label="Model Image" file={modelImage} onClean={() => setModelImage(null)} onChange={(e) => handleFileChange(e, "model")} />

                        </div>
                        <div className="flex flex-col w-full gap-8 mt-8 mb-12">
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-sm mb-4">
                                    Project Name
                                </label>
                                <input type="text" id="name" value={name} onChange={e => setName(e.target.value)} placeholder="Name your project" className="w-full bg-white/3 rounded-lg border-2 p-4 text-sm border-violet-200/10 focus:border-violet-500/50 outline-none transition-all" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="product" className="block text-sm mb-4">
                                    Product Name
                                </label>
                                <input type="text" id="product" value={productName} onChange={e => setProductName(e.target.value)} placeholder="Enter the name your product" className="w-full bg-white/3 rounded-lg border-2 p-4 text-sm border-violet-200/10 focus:border-violet-500/50 outline-none transition-all" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="desc" className="block text-sm mb-4">
                                    Description
                                </label>
                                <textarea rows={4} id="desc" value={productDesc} onChange={e => setProductDesc(e.target.value)} placeholder="Name your Project" className="resize-none w-full bg-white/3 rounded-lg border-2 p-4 text-sm border-violet-200/10 focus:border-violet-500/50 outline-none transition-all" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm mb-4">
                                    Aspect Ratio
                                </label>
                                <div className="flex gap-3">
                                    <RectangleVerticalIcon onClick={_ => setAspectRatio('9:16')} className={`p-2.5 size-13 bg-white/6 rounded transition-all ring-2 ring-transparent cursor-pointer ${aspectRatio === "9:16" ? "ring-violet-500/50 bg-white/10" : ""}`} />
                                    <RectangleHorizontalIcon onClick={_ => setAspectRatio('16:9')} className={`p-2.5 size-13 bg-white/6 rounded transition-all ring-2 ring-transparent cursor-pointer ${aspectRatio === "16:9" ? "ring-violet-500/50 bg-white/10" : ""}`} />
                                </div>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="userPrompt" className="block text-sm mb-4">
                                    User Prompt
                                </label>
                                <textarea rows={4} id="userPrompt" value={userPrompt} onChange={e => setUserPrompt(e.target.value)} placeholder="Describe how product should be" className="resize-none w-full bg-white/3 rounded-lg border-2 p-4 text-sm border-violet-200/10 focus:border-violet-500/50 outline-none transition-all" />
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center mt-10">
                        <button className="flex gap-4 bg-violet-500 py-3 px-6 rounded">
                            {
                                isGenerating ?
                                    <>
                                        <Loader2Icon className="size-5 animate-spin" />
                                    </>
                                    :
                                    <>
                                        <Wand2Icon className="size-5" /> Generate Image
                                    </>
                            }
                        </button>
                    </div>
                </form>
            </section>
            <Footer />
        </>
    )
}