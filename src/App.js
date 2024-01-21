import React, { useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Skills from './pages/skills/Skills';
import Projects from './pages/projects/Projects';
import Contact from './pages/contact/Contact';
import AOS from "aos";
import "aos/dist/aos.css";

export default function App() {

    useEffect(() => {
      AOS.init()
    },[])
    
    return (
      <>
        <BrowserRouter>
            <Header />
            {/* <Routes>
                <Route path='/'>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="skills" element={<Skills />} />
                    <Route path='projects' element={<Projects />} />
                    <Route path='contact' element={<Contact />} />
                </Route>
          </Routes> */}
          <Home />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </BrowserRouter>
      </>
    );
}