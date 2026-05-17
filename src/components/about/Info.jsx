import React from 'react'

const Info = () => {
  return (
    <div className="about__info grid">
        <div className="about__box">
            <i className="bx bx-award about__icon"></i>
            <h3 className="about__title">Experience</h3>
            <span className="about__subtitle">LFX Conributor CNCF(Kyverno), SWE Intern at AccuKnox, SWE Intern at Nirmata, SWE at Rakuten, SWE at Menlo Security</span>
        </div>

        <div className="about__box">
            <i className="bx bx-briefcase-alt about__icon"></i>
            <h3 className="about__title">Completed</h3>
            <span className="about__subtitle">8+ Projects</span>
        </div>
    </div>
  )
}

export default Info