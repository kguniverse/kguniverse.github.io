import React, {useContext} from "react";
import "./Skills.scss";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import {skillsSection} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

function splitLeader(text) {
  const idx = text.indexOf(":");
  if (idx === -1) return {head: null, body: text};
  return {head: text.slice(0, idx).trim(), body: text.slice(idx + 1).trim()};
}

export default function Skills() {
  const {isDark} = useContext(StyleContext);
  if (!skillsSection.display) {
    return null;
  }
  return (
    <section
      id="skills"
      className={isDark ? "section skills dark-mode" : "section skills"}
    >
      <p className="section-label">01 — What I do</p>
      <h2 className="section-title">{skillsSection.title}</h2>
      <p className="section-lede">{skillsSection.subTitle}</p>

      <ul className="skills__list">
        {skillsSection.skills.map((skill, i) => {
          const {head, body} = splitLeader(skill);
          return (
            <li key={i} className="skills__item">
              {head && <span className="skills__head">{head}.</span>}
              <span className="skills__body">{body}</span>
            </li>
          );
        })}
      </ul>

      <SoftwareSkill />
    </section>
  );
}
