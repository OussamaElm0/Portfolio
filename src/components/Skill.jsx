import React from 'react';

export default function Skill(props) {
    const {name, logo} = props;

    return (
      <>
        <div
          className="skill"
          data-aos="fade-right"
          data-aos-offset="150"
          data-aos-easing="ease-in-sine"
        >
          <div className="skill-logo">
            <img src={logo} alt={name} loading="lazy" width={40} />
          </div>
          <div className="skill-name">{name}</div>
        </div>
      </>
    );
}