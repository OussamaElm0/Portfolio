import React, { useRef, useEffect } from 'react';
import { PiHandWaving } from "react-icons/pi";
import { motion } from 'framer-motion';
import "./Home.css";
import Typed from 'typed.js';

import { AiOutlineGithub, AiFillLinkedin } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import { BiLogoGmail } from "react-icons/bi";

export default function Home() {
    const constraintsRef = useRef(null);
    const nameAndJob = useRef(null);

    let github = "https://github.com/OussamaElm0";
    let whatsapp = "https://wa.me/212610373853";
    let linkedin = "https://www.linkedin.com/in/oussama-el-mabrouki-81594b283/";
    var userAgent = navigator.userAgent;
    var isMobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        userAgent
      );
    let gmail = isMobile
      ? "mailto:oussama.elmabrouki26@gmail.com"
      : "https://mail.google.com/mail/?view=cm&to=oussama.elmabrouki26@gmail.com";
    
    useEffect(() => {
      const typed = new Typed(nameAndJob.current, {
        strings: ["Full-Stack Developer.", "Front-End Developer.","Back-End Developer.",],
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
          <div className="links ">
            <a href={github} target="_blank" rel="noreferrer">
              <AiOutlineGithub className="logo" />
            </a>
            <a href={whatsapp} target="_blank" rel="noreferrer">
              <BsWhatsapp className="logo" />
            </a>
            <a href={linkedin} target="_blank" rel="noreferrer">
              <AiFillLinkedin className="logo" />
            </a>
            <a href={gmail} target="_blank" rel="noreferrer">
              <BiLogoGmail className="logo" />
            </a>
          </div>
        </div>
      </>
    );
}