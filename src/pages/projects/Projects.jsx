import React from 'react';
import Project from '../../components/Project';
import { projects } from "./projectsData";
import "./Projects.css";

export default function Projects() {

    return (
      <>
        <div id="projects" className="sections">
          <h1 className="projects-title" data-aos="fade-left">
            Projects
          </h1>
          <div className="projects-section">
            {projects.map((project) => {
              return <Project key={project.id} {...project} />;
            })}
          </div>
        </div>
      </>
    );
}