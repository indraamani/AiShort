import { ArrowRight, VideoIcon } from "lucide-react";
import Pricing from "../components/Pricing";
import { FaqSection } from "../components/FaqSection";
import Toolbar from "../components/Toolbar";
import Footer from "../components/Footer";
import BgImg from "../assets/color-splash.svg"

export default function Page() {

    return (
        <>
            <Toolbar />
            <div className="flex flex-col lg:flex-row-reverse items-center gap-10 mt-46 justify-center text-center px-4 md:px-16 lg:px-24 xl:px-32 relative">
            <img id="pricingsection" className="absolute z-[-1] md:left-20 pointer-events-none" src={BgImg} alt="color-splash" />

                <img src="https://plus.unsplash.com/premium_photo-1661284886711-4eaee4fa7771?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="h-[360px] w-[560px] object-cover rounded-2xl "/>

                <div className="flex flex-col items-start gap-4 md:gap-6 p-2 md:p-4 md:pl-8 w-full min-h-[360px]">

                    <div className="flex flex-wrap items-center justify-center gap-3 p-1.5 pr-4 rounded-full border border-slate-300 dark:border-slate-600 bg-white/70 dark:bg-slate-600/20">
                        <div className="flex items-center -space-x-1.5">
                            <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=50" alt="" className="size-7 rounded-full"/>
                            <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=50" alt="" className="size-7 rounded-full"/>
                            <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=50" alt="" className="size-7 rounded-full"/>
                        </div>
                        <span className="text-xs text-white">Trusted by many</span>
                    </div>

                    <div className="">
                        <h2 className="text-start text-3xl md:text-5xl font-bold leading-12 md:leading-16 text-white">Create Viral Ads</h2>
                        <h3 className="text-start text-3xl md:text-5xl font-bold leading-10 md:leading-14 bg-linear-to-l from-[#923FEF] to-[#E1C9FF] bg-clip-text text-transparent">in Seconds</h3>
                    </div>
                    <p className="w-[80%] text-start text-white">
                        Upload product images and a model photo - our AI instantly products professional lifestyle imagery and short form videos optimized for conmmercials & Reels.
                    </p>
                    <div className="">
                        <button className="flex gap-4 bg-blue-700 text-white px-4 py-2 md:px-6 md:py-3 rounded-full">
                            Start generating <ArrowRight />
                        </button>
                    </div>
                </div>
            </div>

            <Pricing />
            <FaqSection />

            <div className="flex flex-col items-center text-center justify-center mt-20">
                <h3 className="text-3xl font-semibold mt-16 mb-4 text-slate-300">Ready to Get Started?</h3>
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
            <Footer />
        </>
    );
}