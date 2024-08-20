import React from 'react';
import './skill.css'

function Skills ({skills , titles}){

    return(
        <div className="container" data-aos="fade-up" data-aos-delay="200" id='skills'>
            <h1 className="section-heading">Skills</h1>
            <div className="skills">
                {
                    skills.map((skill,index) => <Skill key={index} skill={skill} title={titles[index]} i={index}/>)
                }
            </div>
        </div>
    )
}

function Skill ({skill,title ,i}){
    const delayTime = i*200 + 200;
    return (
        <div className="skill" data-aos="zoom-in-up" data-aos-delay={delayTime}>
            <h1>{title}</h1>
            <div className='skill-list'>
                {
                    skill.map(item => <span key={item}>{item}</span>)
                }
            </div>
        </div>
    )
}

export default Skills;