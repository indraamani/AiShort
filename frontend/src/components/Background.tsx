import BgImg from "../assets/color-splash.svg"

const Background = () => {
    return (
        <div className="fixed top-0 left-0 w-full h-dvh bg-[#030712] z-[-1]">
            <img src={BgImg} className="absolute right-0 " />
        </div>
    )
}

export default Background