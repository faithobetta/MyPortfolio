
import { AiOutlineClose } from 'react-icons/ai';
import { useState } from 'react';
import { Link } from 'react-router-dom'; 

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <div className="flex items-center justify-between p-10 lg:flex-row  ">
        <div>
          <a href="#" className="text-white font-mono text-3xl flex items-center">
             Faith Obetta
          </a>
        </div>

        <div className="space-x-4">
          <div className="ssm:hidden lg:block space-x-2">
            <Link to="/" className="text-white hover:bg-indigo-800 rounded-full px-5 py-2 text-xl">Home</Link>
            <Link to="/about" className="text-white hover:bg-indigo-800 rounded-full px-5 py-2 text-xl">About</Link>
            <Link to="/project" className="text-white hover:bg-indigo-800 rounded-full px-5 py-2 text-xl">Projects</Link>
            <Link to="/skill" className="text-white hover:bg-indigo-800 rounded-full px-5 py-2 text-xl">Skills</Link>
            <Link to="/contact" className="text-white hover:bg-indigo-800 rounded-full px-5 py-2 text-xl">Contact</Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden">
            <button onClick={toggleMobileMenu} className="text-white text-3xl">
              {isMobileMenuOpen ? <AiOutlineClose /> : <AiOutlineClose />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="flex flex-col space-y-4 lg:hidden px-20">
          <Link to="/" className="text-white hover:bg-indigo-800 rounded-full px-5 py-2 text-xl">Home</Link>
          <Link to="/about" className="text-white hover:bg-indigo-800 rounded-full px-5 py-2 text-xl">About</Link>
          <Link to="/project" className="text-white hover:bg-indigo-800 rounded-full px-5 py-2 text-xl">Projects</Link>
          <Link to="/skill" className="text-white hover:bg-indigo-800 rounded-full px-5 py-2 text-xl">Skills</Link>
          <Link to="contact" className="text-white hover:bg-indigo-800 rounded-full px-5 py-2 text-xl">Contact</Link>
        </div>
      )}
    </>
  );
};

export default Navbar;
