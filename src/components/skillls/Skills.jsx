import React from "react";
import "./skills.css";
import Backend from "./Backend"
import CloudDevOps from "./CloudDevOps";
const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My technical skills</span>
      <div className="skills__container container grid">
        {/* <Frontend/> */}
        <Backend/>
        <CloudDevOps/>
      </div>
    </section>
  );
};

export default Skills;
