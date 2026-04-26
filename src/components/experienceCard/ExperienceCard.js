import React from "react";
import "./ExperienceCard.scss";

export default function ExperienceCard({cardInfo, isDark}) {
  return (
    <article className={isDark ? "exp-row dark-mode" : "exp-row"}>
      <div className="exp-row__when">{cardInfo.date}</div>
      <div className="exp-row__body">
        <header className="exp-row__head">
          <h3 className="exp-row__role">{cardInfo.role}</h3>
          <span className="exp-row__company">
            <img
              className="exp-row__logo"
              src={cardInfo.companylogo}
              alt={cardInfo.company}
            />
            {cardInfo.company}
          </span>
        </header>
        {cardInfo.desc && <p className="exp-row__desc">{cardInfo.desc}</p>}
        {cardInfo.descBullets && cardInfo.descBullets.length > 0 && (
          <ul className="exp-row__bullets">
            {cardInfo.descBullets.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}
