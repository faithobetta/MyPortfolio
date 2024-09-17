import { FaEnvelope } from "react-icons/fa"
import { FaPhone } from "react-icons/fa"
import { FaMapMarkedAlt } from "react-icons/fa"

const Contact = () => {
  return (
    <>
        <div className='lg:border lg:border-white lg:mx-20 text-white py-20' id="contact">
            <div className="container mx-auto px-8 md:px-16 lg:px-24">
                <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>

                <div className="flex flex-col md:flex-row items-center space-x-12">
                
                   <div className="flex-1">
                        <h3 className="text-2xl font-bold">My Infor</h3>
                        

                        <div className='mb-4 mt-8'>
                            <FaEnvelope className="inline-block text-indigo-800 mr-2"></FaEnvelope>
                            <a href="obettafaith24@gmail.com" className="hover:underline">
                                obettafaith24@gmail.com
                            </a>
                        </div>

                        <div className='mb-4 '>
                            <FaPhone className="inline-block text-indigo-800 mr-2"></FaPhone>
                            <span>+44 07721810275</span>
                        </div>

                        <div className='mb-8 '>
                            <FaMapMarkedAlt className="inline-block text-indigo-800 mr-2"></FaMapMarkedAlt>
                            <span className=""> 32 Ludovick Walk, SW15 5LE, London, United Kingdom</span>
                        </div>
                   </div>
                   <div className='flex-1 w-full'>
                        <form action=""className="space-y-4" >
                            <h2 className="text-4xl">Get in Touch</h2>
                           <div>
                                <label htmlFor="name" className="block mb-2"> Enter Your Name</label>
                                <input type="text" className="w-full p-2 rounded text-black bg-white border border-gray-600 focus:outline-none focus:border-green-400" placeholder="Enter Your Name"/>
                           </div>

                           <div>
                                <label htmlFor="email" className="block mb-2"> Email</label>
                                <input type="text" className="w-full p-2 rounded text-black bg-white border border-gray-600 focus:outline-none focus:border-green-400" placeholder="Enter Your Email"/>
                           </div>

                           <div>
                                <label htmlFor="message" className="block mb-2"> Message</label>
                                <textarea type="text" className="w-full p-2 text-black rounded bg-white border border-gray-600 focus:outline-none focus:border-green-400" rows="10" placeholder="Enter Your Message"/>
                           </div>
                           <button className="bg-white hover:bg-indigo-800 hover:text-white text-black rounded-full h-12 w-32">
                            Send
                           </button>
                        </form>
                   </div>

                </div>

            </div>      
        </div>

    </>
  )
}

export default Contact
