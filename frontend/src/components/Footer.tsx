import React from 'react'

function Footer() {
    return (
        <section className='bg-black/50 backdrop-blur-md border border-white/4 text-white lg:flex lg:flex-col lg:justify-center lg:items-center'>

            <section className='flex flex-col md:flex-row px-8 py-12 lg:w-[70dvw]'>
                <div className="max-w-[50%] lg:max-w-[30%] flex flex-col gap-4">
                    <img className='' src="" alt="Icon" />
                    <p className="text-sm tracking-tighter font-semibold">We are a digital agency focused on strategy, design and development—helping brands build meaningful digital experiences and grow sustainably.</p>
                </div>

                <div className="md:w-[50vw] flex justify-between lg:justify-around">

                    <div className="">
                        <h3 className="font-bold py-2">Company</h3>
                        <ul className="text-xs lg:text-sm flex flex-col gap-2">
                            <a><li className="">Home</li></a>
                            <a><li className="">Services</li></a>
                            <a><li className="">Work</li></a>
                            <a><li className="">Contact</li></a>
                        </ul>
                    </div>

                    <div className="">
                        <h3 className="font-bold py-2">Legal</h3>
                        <ul className="text-xs lg:text-sm flex flex-col gap-2">
                            <a><li className="">Privacy Policy</li></a>
                            <a><li className="">Terms of Service</li></a>
                        </ul>
                    </div>

                    <div className="">
                        <h3 className="font-bold py-2">Connect</h3>
                        <ul className="text-xs lg:text-sm flex flex-col gap-2">
                            <a><li className="">Instagram</li></a>
                            <a><li className="">LinkedIn</li></a>
                            <a><li className="">GitHub</li></a>
                        </ul>
                    </div>

                </div>
            </section>
            <div className="border-t border-t-gray-400">
                <h3 className='w-full text-center p-4'>@ 2026 AiShort. All rigts reserved</h3>
            </div>
        </section>
    )
}

export default Footer