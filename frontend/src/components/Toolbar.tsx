import { Menu, X } from "lucide-react"
import Logo from "../assets/logo.svg"
import { useState } from "react"

function Toolbar() {

  const [phoneMenu, setPhoneMenu] = useState<boolean>(false)

  return (
    <nav className="h-14 m-4 md:flex lg:w-[70dvw] w-[95%] mx-auto bg-black/50 backdrop-blur-md border border-white/4 rounded-2xl p-3">

      <div className="icon h-full mx-4 flex justify-between items-center">
        <img src={Logo} alt="Logo" />
        <Menu color="white" className="md:hidden" onClick={_=> setPhoneMenu(true)}/>
      </div>

      <section className={`${phoneMenu ? "flex" : "hidden"} absolute top-0 left-0 w-full h-dvh md:static md:h-auto justify-center items-center flex-col md:flex md:flex-row gap-4 md:gap-16 text-white`}>
          <menu type="toolbar" className="flex flex-col md:flex-row gap-4 text-center text-lg md:text-sm font-semibold">
            <a><li>Home</li></a>
            <a><li>Features</li></a>
            <a><li>Pricing</li></a>
            <a><li>FAQ</li></a>
          </menu>
          <menu type="toolbar" className="flex flex-col md:flex-row gap-4 text-center items-center md:text-sm md:font-semibold">
            <li>Sign in</li>
            <li className="bg-blue-500 rounded-full px-6 py-2">Get Started</li>
            <li className="md:hidden bg-white w-10 h-10 rounded-lg flex text-center justify-center items-center" onClick={_=> setPhoneMenu(false)}>
              <X color="black" />
            </li>
          </menu>
        </section>
    </nav>
  )
}

export default Toolbar