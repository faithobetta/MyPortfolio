import logo from "../assets/logo.png";
import image from "../assets/image.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import { FaGithub } from "react-icons/fa";

const projects = [
    {
        id: 1,
        image: logo,
        title: "Makeup Match",
        demoLink: "http://make-up-match.shop",
        github: "https://github.com/faithobetta/MakeupMatch",
    },
    {
        id: 2,
        image: image,
        title: "CatPals",
        demoLink: "https://cat-pals.vercel.app/",
        github: "https://github.com/faithobetta/CatPals",
    },
    {
        id: 3,
        image: image2,
        title: "Podcast",
        demoLink: "https://podcastapp-psi.vercel.app/",
        github: "https://github.com/faithobetta/frontend-podcast",
    },
    {
        id: 4,
        image: image3,
        title: "EventFinder",
        demoLink: "https://event-finder-zeta.vercel.app/",
        github: "https://github.com/faithobetta/EventFinder",
    },
];

export default function Projects() {
    return (
        <>
            <div className='bg-white m-10 max-w-full' id="projects">
                <div className="grid justify-items-center m-10">
                    <h1 className="text-3xl mt-10">My Projects</h1>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-5">
                    {projects.map((items) => (
                        <div key={items.id} className="max-w-md mx-auto rounded-xl shadow-2xl shadow-black/50 overflow-hidden md:max-w-2xl hover:animate-pulse">
                            <div className="md:flex">
                                <div className="p-16">
                                    <div className="md:shrink-0 p-3">
                                        <img src={items.image} alt={items.title} width={150} height={10} />
                                    </div>
                                    <div className="flex flex-col items-center mt-4"> 
                                        <a href={items.demoLink} className="uppercase tracking-wide  text-center">{items.title}</a>
                                        <a href={items.github} rel="noopener noreferrer" className="text-4xl mt-2"> 
                                            <FaGithub />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <hr />
            </div>
        </>
    );
}
