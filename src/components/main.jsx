import Navbar from "./Navbar";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import image1 from "../assets/image1.jpg";
import Home from "./Home";
import Projects from "./Projects"
import About from "./About";
import Skills from "./Skills"
import Contact from "./Contact";
import Footer from "./Footer";

const Main = () => {
  return (
    <div className="relative bg-cover bg-center min-h-screen" style={{ backgroundImage: `url(${image1})` }}>
      <div className="absolute inset-0 bg-black opacity-90 z-10"></div>
      <div className="relative z-20">
        <Router>
          <Navbar />
          <Home />
          <Projects />
          <About />
          <Skills />
          <Contact />
          <Footer />
          <Routes>

            {/* <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/project" element={<Projects />} />
            <Route path="/skill" element={<Skills />} />
            <Route path="/contact" element={<Contact />} /> */}
            
          </Routes>
         
        
        </Router>
      </div>
    </div>
  );
}

export default Main;
