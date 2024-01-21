import React from 'react';
import { BiShowAlt } from "react-icons/bi";
import { IoCodeSlash } from "react-icons/io5";

export default function Project(props) {
    const { name, picture, code, live_view, description, techs_used } = props;

    return (
      <>
        <div className="project" data-aos="fade-up">
          <img
            src={`${process.env.PUBLIC_URL}${picture}`}
            alt={name}
            width={400}
            className="img-fluid"
          />
          <h3 className="project-title">{name}</h3>
          <p className="project-description">{description}</p>
          <div className="techs-used">
            {techs_used.map((tech, index) => {
              return (
                <span key={index} className="tech">
                  {tech}
                </span>
              );
            })}
          </div>
          <div className='project-links'>
            <a
              className="btn text-light"
              rel="noreferrer"
              href={code}
              target="_blank"
            >
              <IoCodeSlash />
            </a>
            <a
              className="btn text-light"
              rel="noreferrer"
              href={live_view}
              target="_blank"
            >
              <BiShowAlt />
            </a>
          </div>
        </div>
      </>
    );
}