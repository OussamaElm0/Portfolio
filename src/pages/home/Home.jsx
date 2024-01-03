import React, { useRef, useEffect } from 'react';
import { PiHandWaving } from "react-icons/pi";
import { motion } from 'framer-motion';
import "./Home.css";
import Typed from 'typed.js';

export default function Home() {
    const constraintsRef = useRef(null);
    const nameAndJob = useRef(null);
    
    useEffect(() => {
      const typed = new Typed(nameAndJob.current, {
        strings: ["Full-Stack Web Developer.", "Front-End Developer.","Back-End Developer",],
        typeSpeed: 50,
        backSpeed: 50,
        loop: true,
      });

      return () => {
        typed.destroy();
      };
    }, []);

    return (
      <>
        <div className="home-section">
          <motion.div className="hello drag-area" ref={constraintsRef}>
            <motion.div
              drag
              className="hello-title"
              dragConstraints={constraintsRef}
            >
              <h1>
                Hi There! <PiHandWaving /> <br />
                I'M <span className="text-primary">OUSSAMA EL MABROUKI</span>
              </h1>
              <p className="lead">
                I'm a <span ref={nameAndJob} />
              </p>
            </motion.div>
          </motion.div>
          <div className="picture"></div>
        </div>
      </>
    );
}