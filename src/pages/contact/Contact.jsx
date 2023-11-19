import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import "./Contact.css";
import { AiOutlineGithub, AiFillLinkedin } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import { BiLogoGmail } from "react-icons/bi";

export default function Contact() {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

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

  const sendEmail = async (e) => {
    e.preventDefault();
    try {
        await emailjs.send(
          "service_h2shs07",
          "template_f3s2n3r",
          {
            from_name: name,
            to_name: "Oussama",
            email_name: email,
            message: message,
          },
          "K7DTLKEMvk0Ivugoz"
        );
        Swal.fire({
            icon: "success",
            title: "Message sent successfully",
            text: "Thank you for contacting me, I will reply as soon as possible.",
            showConfirmButton: false,
            timer: 3000,
        })
        setName("");
        setEmail("");
        setMessage("");
    } catch (error) {
        console.log(error);
    }
  };

  return (
    <>
      <h1 className="text-center contact-title">
        Contact <span>Me</span>
      </h1>
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
      <form ref={form} onSubmit={sendEmail}>
        <input
          type="text"
          name="user_name"
          id="user_name"
          className="form-control"
          placeholder="Name"
          value={name}
          required={true}
          onChange={({ target: { value } }) => setName(value)}
        />
        <input
          type="email"
          name="user_email"
          id="user_email"
          className="form-control"
          placeholder="Email"
          required={true}
          value={email}
          onChange={({ target: { value } }) => setEmail(value)}
        />
        <textarea
          name="message"
          className="form-control"
          id="message"
          placeholder="Message"
          required={true}
          value={message}
          onChange={({ target: { value } }) => setMessage(value)}
        />
        <input type="submit" value="Send" className="btn btn-submit" />
      </form>
    </>
  );
}
