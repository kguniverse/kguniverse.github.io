import React, {useContext} from "react";
import "./EducationCard.scss";
import StyleContext from "../../contexts/StyleContext";

export default function EducationCard({school}) {
  const {isDark} = useContext(StyleContext);
  return (
    <article className={isDark ? "edu-row dark-mode" : "edu-row"}>
      <div className="edu-row__when">{school.duration}</div>
      <div className="edu-row__body">
        <header className="edu-row__head">
          <h3 className="edu-row__school">
            {school.logo && (
              <img
                className="edu-row__logo"
                src={school.logo}
                alt={school.schoolName}
              />
            )}
            {school.schoolName}
          </h3>
          {school.subHeader && (
            <p className="edu-row__degree">{school.subHeader}</p>
          )}
        </header>
        {school.desc && <p className="edu-row__desc">{school.desc}</p>}
        {school.descBullets && school.descBullets.length > 0 && (
          <ul className="edu-row__bullets">
            {school.descBullets.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}
