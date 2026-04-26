import React, {useContext} from "react";
import "./WorkExperience.scss";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import {workExperiences} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function WorkExperience() {
  const {isDark} = useContext(StyleContext);
  if (!workExperiences.display) return null;
  return (
    <section
      id="experience"
      className={isDark ? "section experience dark-mode" : "section experience"}
    >
      <p className="section-label">04 — Experience</p>
      <h2 className="section-title">Where I've worked</h2>
      <p className="section-lede">
        Selected roles in research, infrastructure, and applied AI.
      </p>

      <ol className="experience__list">
        {workExperiences.experience.map((card, i) => (
          <li key={i} className="experience__item">
            <ExperienceCard isDark={isDark} cardInfo={card} />
          </li>
        ))}
      </ol>
    </section>
  );
}
