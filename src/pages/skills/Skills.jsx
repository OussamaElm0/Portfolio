import React from 'react';
import {techs, tools} from './skillsData';
import Skill from '../../components/Skill';
import "./Skills.css";

export default function Skills() {

    return (
      <div className="skills-section" data-aos="fade-up">
        <div className="grid-section">
          <h2 className="skill-title">Techs</h2>
          <div className="techs">
            {techs.map((tech) => {
              const { id, name, logo } = tech;

              return (
                <Skill
                  key={id}
                  name={name}
                  logo={logo}
                />
              );
            })}
          </div>
        </div>
        <div className="grid-section">
          <h2 className="skill-title tools-title ">Tools</h2>
          <div className="tools">
            {tools.map((tool) => {
              const { id, name, logo } = tool;

              return (
                <Skill
                  key={id}
                  name={name}
                  logo={logo}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
}