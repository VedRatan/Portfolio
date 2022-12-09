import React from "react";
import "./skills.css";
import Frontend from "./Frontend"
import Backend from "./Backend"
import Cloud_DevOps from "./Cloud_DevOps";
const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My technical skills</span>
      <div className="skills__container container grid">
        <Frontend/>
        <Backend/>
        <Cloud_DevOps/>
      </div>
    </section>
  );
};

export default Skills;
