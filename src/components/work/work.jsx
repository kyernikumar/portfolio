import React from "react";
import "./work.css";

// import myImage from "../images/myImage.png";

function Work({ projects, heading }) {
  return (
    <div
      className='container'
      data-aos='fade-up'
      data-aos-delay='200'
      id='work'
    >
      <h1 className='section-heading'>{heading}</h1>
      <div>
        <div className='work-list'>
          {projects.map((project, index) => (
            <Project key={index} project={project} i={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

function Project({ project, i }) {
  const delayTime = i * 200 + 200;

  return (
    <div className='work' data-aos='zoom-in-up' data-aos-delay={delayTime}>
      <img className='project-img' src={project.image} alt='' />
      <div className='layer'>
        <h2>{project.name} Website</h2>
        <p>{project.tool} </p>
        <a href='#'>
          <i class='fab fa-github'></i>
        </a>
      </div>
    </div>
  );
}

export default Work;
