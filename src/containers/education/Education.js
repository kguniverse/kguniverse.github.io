import React, {useContext} from "react";
import "./Education.scss";
import EducationCard from "../../components/educationCard/EducationCard";
import {educationInfo} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Education() {
  const {isDark} = useContext(StyleContext);
  if (!educationInfo.display) return null;
  return (
    <section
      id="education"
      className={isDark ? "section education dark-mode" : "section education"}
    >
      <p className="section-label">05 — Education</p>
      <h2 className="section-title">Education</h2>
      <p className="section-lede">
        Where I trained as an engineer and researcher.
      </p>

      <ol className="education__list">
        {educationInfo.schools.map((school, i) => (
          <li key={i} className="education__item">
            <EducationCard school={school} />
          </li>
        ))}
      </ol>
    </section>
  );
}
