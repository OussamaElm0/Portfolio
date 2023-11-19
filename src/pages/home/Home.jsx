import React, { useRef } from 'react';
import { PiHandWaving } from "react-icons/pi";
import { motion } from 'framer-motion';
import "./Home.css";

export default function Home() {
    const constraintsRef = useRef(null);
    

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
              <p className="lead">I'm a Full Stack Web Developer.</p>
            </motion.div>
          </motion.div>
          <div className="picture"></div>
        </div>
      </>
    );
}