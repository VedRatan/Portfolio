import React, { useState } from "react";
import "./qualifications.css";
const Qualifications = () => {
  const [toggleState, setToggleState] = useState(0);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="qualification section">
      <h2 className="section__title">Qualifications</h2>
      <span className="section__subtitle">My educational journey till now</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i
              className="uil uil-briefcase-alt 
                    qualification__icon"
            ></i>
            Experience
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">B.tech CSE</h3>
                <span className="qualification__subtitle">IIITM Gwalior</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>2020 - 2024
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Android Developer Intern
                </h3>
                <span className="qualification__subtitle">NullClass</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>April 2022 - May 2022
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Full Stack Intern</h3>
                <span className="qualification__subtitle">Settyl</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>October 2022 -
                  November 2022
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">DevOps Intern</h3>
                <span className="qualification__subtitle">Flipr</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>April 2023 - May 2023
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Project Contributor</h3>
                <span className="qualification__subtitle">LFX, Nirmata</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>June 2023 - August
                  2023
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">SWE Intern</h3>
                <span className="qualification__subtitle">AccuKnox</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>October 2023 - April
                  2024
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">SWE Intern</h3>
                <span className="qualification__subtitle">Nirmata</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>April 2024 - March
                  2025
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">SWE</h3>
                <span className="qualification__subtitle">Rakuten India</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>July 2025 - Present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualifications;
