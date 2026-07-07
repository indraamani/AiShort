import { Menu, Sun, X } from "lucide-react"
//import Logo from "../assets/logo.svg"
import { useState } from "react"

function Toolbar() {

  const [phoneMenu, setPhoneMenu] = useState<boolean>(false)

  return (
    <nav className="flex items-center justify-between fixed z-50 top-0 w-full px-6 md:px-16 lg:px-24 xl:px-32 py-4 backdrop-blur">
      <a href="">
        <img src="https://landing.prebuiltui.com/assets/logo-light.svg" alt="" className="bg-transparent h-9 md:h-9.5 w-auto shrink-0" />
      </a>
      <div className="hidden items-center md:gap-8 lg:gap-9 md:flex lg:pl-20 text-white">
        <a href="" className="hover:text-slate-600 dark:hover:text-slate-300">Home</a>
        <a href="" className="hover:text-slate-600 dark:hover:text-slate-300">Features</a>
        <a href="" className="hover:text-slate-600 dark:hover:text-slate-300">Pricing</a>
        <a href="" className="hover:text-slate-600 dark:hover:text-slate-300">FAQs</a>
      </div>

      <div className={`absolute h-dvh inset-0 ${phoneMenu ? "flex" : "hidden"} flex-col items-center justify-center gap-6 text-lg font-medium bg-white/60 dark:bg-black/40 backdrop-blur-md md:hidden transition duration-300 translate-x-0`}>
        <a href="" className="hover:text-slate-600 dark:hover:text-slate-300">Home</a>
        <a href="" className="hover:text-slate-600 dark:hover:text-slate-300">Features</a>
        <a href="" className="hover:text-slate-600 dark:hover:text-slate-300">Pricing</a>
        <a href="" className="hover:text-slate-600 dark:hover:text-slate-300">FAQs</a>

        <button onClick={_=> setPhoneMenu(false)} className="aspect-square size-10 p-1 items-center justify-center bg-purple-600 hover:bg-purple-700 transition text-white rounded-md flex">
          <X />
        </button>
      </div>
      <div className="flex items-center gap-4 ">
        <button className="flex items-center justify-center size-9 p-2 rounded-full bg-slate-950/5 hover:bg-slate-950/10 dark:bg-white/10 dark:hover:bg-white/20 transition-colors duration-200 ease-in-out">
          <Sun color="white"/>
        </button>
        <button className="hidden md:block hover:bg-slate-100 dark:hover:bg-purple-400 transition px-4 py-2 border border-purple-600 rounded-md text-white">
          Sign In
        </button>
        <button className="hidden md:block px-4 py-2 bg-purple-600 hover:bg-purple-700 transition text-white rounded-md">Get Started</button>
        <button onClick={_=> setPhoneMenu(true)} className="md:hidden flex items-center justify-center size-9 p-2 rounded-full bg-slate-950/5 hover:bg-slate-950/10 dark:bg-white/10 dark:hover:bg-white/20 transition-colors duration-200 ease-in-out">
          <Menu color="white" />
        </button>
      </div>
    </nav>
  )
}

export default Toolbar