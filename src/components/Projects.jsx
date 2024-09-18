import logo from "../assets/logo.png"
import image from "../assets/image.png"
import image2 from "../assets/image2.png"
import image3 from "../assets/image3.png"
import {FaGithub} from "react-icons/fa"

export default function Projects(){

    return(
        <>
            <div className='bg-white m-10  max-w-full' id="projects">
                <div className="grid justify-items-center m-10">
                    <h1 className="text-3xl mt-10">My Projects</h1>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-5">
                    <div className="max-w-md mx-auto rounded-xl shadow-2xl shadow-black/50 overflow-hidden md:max-w-2xl hover:animate-pulse">
                        <div className="md:flex">
                            <div className="p-16">
                                <div className="md:shrink-0 p-3">
                                    <img src={logo} alt="" width={150} height={10} />
                                </div>
                                <a href="http://make-up-match.shop" className="uppercase tracking-wide p-6">Makeup Match</a>
                                <a href="https://github.com/faithobetta/MakeupMatch" className="text-4xl"><FaGithub /></a>
                            </div>
                        </div>

                    </div>

                    <div className="max-w-md mx-auto rounded-xl shadow-2xl shadow-black/50 overflow-hidden md:max-w-2xl hover:animate-pulse">
                        <div className="md:flex">
                            <div className="p-16">
                                <div className="md:shrink-0 p-5">
                                    <img src={image} alt="" width={250} height={200} />
                                </div>
                                <a href="https://cat-pals.vercel.app/" className="uppercase tracking-wide p-2">CatPals</a>
                                <a href="https://github.com/faithobetta/CatPals" className="text-4xl"><FaGithub /></a>
                            </div>
                        </div>

                    </div>
                    <div className="max-w-md mx-auto rounded-xl shadow-2xl shadow-black/50 overflow-hidden md:max-w-2xl hover:animate-pulse">
                        <div className="md:flex">
                            <div className="p-16">
                                <div className="md:shrink-0 p-5">
                                    <img src={image2} alt="" width={150} height={150} />
                                </div>
                                <a href="podcastapp-psi.vercel.app" className="uppercase tracking-wide p-6">Podcast</a>
                                <a href="https://github.com/faithobetta/frontend-podcast" className="text-4xl"><FaGithub /></a>
                            </div>
                        </div>

                    </div>
                    <div className="max-w-md mx-auto rounded-xl shadow-2xl shadow-black/50 overflow-hidden md:max-w-2xl hover:animate-pulse">
                        <div className="md:flex">
                            <div className="p-16">
                                <div className="md:shrink-0 p-5">
                                    <img src={image3} alt="" width={150} height={150} />
                                </div>
                                <a href="https://event-finder-zeta.vercel.app/" className="uppercase tracking-wide p-6">EventFinder</a>
                                <a href="https://github.com/faithobetta/EventFinder" className="text-4xl"><FaGithub /></a>
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

