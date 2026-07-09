import { UploadIcon, X, XIcon } from "lucide-react"
import type { UploadParams } from "../types"


const Upload = ({ label, file, onClean, onChange }: UploadParams) => {
    return (
        <section className="relative">
            <div className={`relative h-64 border-2 border-dashed rounded-2xl transition-all duration-200 flex flex-col
             justify-center items-center bg-white/2 p-6
             ${file ? 'border-violet-600/50 bg-violet-500/5'
                    : 'border-white/50 hover:border-violet-500/30 hover:bg-white/5'
                }`}>
                {
                    file ? <>
                        <img src={URL.createObjectURL(file)} alt="" className="absolute inset-0 w-full h-full object-cover rounded-xl opacity-60" />
                        <div className="absolute inset-0 flex justify-center items-center opacity-0 hover:opacity-100 transition-opacity bg-black/40 rounded-xl backdrop-blur-sm">
                            <button onClick={onClean} className="p-2 rounded-full bg-white/10 hover:bg-red-400/20 text-white hover:text-red-400 transition-colors">
                                <X className="w-6 h-6" />
                            </button>
                        </div>
                        <div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-md p-3 rounded-lg border border-white/10">
                            <p className="text-sm font-medium truncate">{file.name}</p>
                        </div>
                    </>
                        : <>
                            <div className="size-16 rounded-full bg-white/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                <UploadIcon className="size-8 text-gray-400 group-hover:text-violet-400 transition-colors" />
                            </div>
                            <h3 className="">{label}</h3>
                            <p className="Drag and Drop or click to upload"></p>
                            <input type="file" accept="image/*" onChange={onChange} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                        </>
                }
            </div>
        </section>
    )
}

export default Upload

