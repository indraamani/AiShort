import { SignIn } from "@clerk/react"
import BgImg from "../assets/color-splash.svg"


function Login() {
  return (
    <div className="h-dvh flex justify-center items-center relative">
      <img id="pricingsection" className="absolute h-vh w-full z-[-1] md:left-20 pointer-events-none object-cover" src={BgImg} alt="color-splash" />
      <SignIn
        signUpUrl="/signup"
      />
    </div>
  )
}

export default Login