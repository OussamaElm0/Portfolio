import React from 'react';
import Project from '../../components/Project';
import { projects } from "./projectsData";
import "./Projects.css";

export default function Projects() {

    return (
        <>
           <div className='projects-section'>
                {projects.map((project) => {
                    return (
                        <Project key={project.id} {...project} />
                    )
                })}
           </div>
        </>
    )
}