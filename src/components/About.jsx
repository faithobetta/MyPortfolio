import me from "../assets/me.jpg"

const About = () => {

  return (
    <>
        <div className='lg:mx-40 bg-white  py-20' id="about">
            <div className="container mx-auto px-8 md:px-16 lg:px-24">
                <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>

                <div className="flex flex-col md:flex-row items-center space-x-12">
                    <img src={me} alt="" className="w-72 h-80 rounded object-cover mb-8 md:mb-0 "/>
                    <div className="flex-1">
                        <p className="text-lg mb-8">
                        Hi, I’m Faith Obetta, a passionate Front-End Developer and UI/UX Designer with a knack for turning complex problems into intuitive and visually appealing solutions. I specialize in creating responsive, user-friendly interfaces that bring ideas to life through clean code and thoughtful design.
                        </p>
                    </div> 
                </div>

                <h3 className="text-2xl font-bold text-center mt-12 mb-8">Education</h3>
                <div className="flex flex-col md:flex-row items-center space-x-0 md:space-x-12 ">
                    <div className="flex-1">
                        <h4 className="text-2xl mb-2">Roehampton University London</h4>
                        <p className=" font-sans mb-8">Master's Degree, Web Development</p>
                    </div>

                    <div className="flex-1">
                        <h4 className="text-2xl mb-2">University of Nigeria, Nsukka</h4>
                        <p className=" font-sans">Bachelor's Degree, Sociology & Anthropology</p>
                    </div>
                </div>
                
            </div>
        </div>
    </>
  )
}

export default About
