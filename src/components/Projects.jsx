import logo from "../assets/logo.png"

export default function Projects(){

    return(
        <>
            <div className='bg-white m-20  max-w-full' id="project">
                <div className="grid justify-items-center m-10">
                    <h1 className="text-3xl mt-10">My Projects</h1>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-5">
                    <div className="max-w-md mx-auto rounded-xl shadow-2xl shadow-black/50 overflow-hidden md:max-w-2xl hover:animate-pulse">
                        <div className="md:flex">
                            <div className="p-8">
                                <div className="md:shrink-0 p-5">
                                    <img src={logo} alt="" width={150} height={150} />
                                </div>
                                <a href="#" className="uppercase tracking-wide">Makeup Match</a>
                            </div>
                        </div>

                    </div>

                    <div className="max-w-md mx-auto rounded-xl shadow-2xl shadow-black/50 overflow-hidden md:max-w-2xl hover:animate-pulse">
                        <div className="md:flex">
                            <div className="p-8">
                                <div className="md:shrink-0 p-5">
                                    <img src={logo} alt="" width={150} height={150} />
                                </div>
                                <a href="#" className="uppercase tracking-wide">Makeup Match</a>
                            </div>
                        </div>

                    </div>
                    <div className="max-w-md mx-auto rounded-xl shadow-2xl shadow-black/50 overflow-hidden md:max-w-2xl hover:animate-pulse">
                        <div className="md:flex">
                            <div className="p-8">
                                <div className="md:shrink-0 p-5">
                                    <img src={logo} alt="" width={150} height={150} />
                                </div>
                                <a href="#" className="uppercase tracking-wide">Makeup Match</a>
                            </div>
                        </div>

                    </div>
                    <div className="max-w-md mx-auto rounded-xl shadow-2xl shadow-black/50 overflow-hidden md:max-w-2xl hover:animate-pulse">
                        <div className="md:flex">
                            <div className="p-8">
                                <div className="md:shrink-0 p-5">
                                    <img src={logo} alt="" width={150} height={150} />
                                </div>
                                <a href="#" className="uppercase tracking-wide">Makeup Match</a>
                            </div>
                        </div>

                    </div>
                </div>
                <hr />

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-5">

                </div>
            </div>
        </>
    )
}

