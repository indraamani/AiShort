import { VideoIcon } from "lucide-react";
import Pricing from "../components/Pricing";
import { FaqSection } from "../components/FaqSection";

export default function Page() {

    return (
        <>
            <div className="flex flex-col items-center justify-center text-center px-4 bg-[url('/assets/light-hero-gradient.svg')] dark:bg-[url('/assets/dark-hero-gradient.svg')] bg-no-repeat bg-cover">
                <div className="flex flex-wrap items-center justify-center gap-3 p-1.5 pr-4 mt-46 rounded-full border border-slate-300 dark:border-slate-600 bg-white/70 dark:bg-slate-600/20">
                    <div className="flex items-center -space-x-3">
                        <img className="size-7 rounded-full" height={50} width={50}
                            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=50"
                            alt="userImage1" />
                        <img className="size-7 rounded-full" height={50} width={50}
                            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=50"
                            alt="userImage2" />
                        <img className="size-7 rounded-full" height={50} width={50}
                            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=50&h=50&auto=format&fit=crop"
                            alt="userImage3" />
                    </div>
                    <p className="text-xs">Join community of 1m+ founders </p>
                </div>
                <h1 className="mt-2 text-5xl/15 md:text-[64px]/19 font-semibold max-w-2xl">
                    Every startup begins with{" "}
                    <span className="bg-gradient-to-r from-[#923FEF] dark:from-[#C99DFF] to-[#C35DE8] dark:to-[#E1C9FF] bg-clip-text text-transparent">spark</span>
                </h1>
                <p className="text-base dark:text-slate-300 max-w-lg mt-2">
                    Our latest thoughts, trends, and tools, written to help you learn, build, and grow faster.
                </p>
                <div className="flex items-center gap-4 mt-8">
                    <button className="bg-purple-600 hover:bg-purple-700 transition text-white rounded-md px-6 h-11">
                        Get started
                    </button>
                    <button className="flex items-center gap-2 border border-purple-900 transition text-slate-600 dark:text-white rounded-md px-6 h-11">
                        <VideoIcon strokeWidth={1} />
                        <span>Watch demo</span>
                    </button>
                </div>
                <h3 className="text-base text-center text-slate-400 mt-28 pb-14 font-medium">
                    Trusting by leading brands, including —
                </h3>

            </div>

            <Pricing />
            <FaqSection />

            <div className="flex flex-col items-center text-center justify-center mt-20">
                <h3 className="text-3xl font-semibold mt-16 mb-4">Ready to Get Started?</h3>
                <p className="text-slate-600 dark:text-slate-200 max-w-xl mx-auto">
                    Join thousands of satisfied customers and transform your business today.
                </p>
                <div className="flex items-center gap-4 mt-8">
                    <button className="bg-purple-600 hover:bg-purple-700 transition text-white rounded-md px-6 h-11">
                        Start free trial
                    </button>
                    <button className="border border-purple-900 transition text-slate-600 dark:text-white rounded-md px-6 h-11">
                        Contact sales
                    </button>
                </div>
            </div>

        </>
    );
}