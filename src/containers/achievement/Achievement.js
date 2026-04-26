import React, {useContext} from "react";
import "./Achievement.scss";
import AchievementCard from "../../components/achievementCard/AchievementCard";
import {achievementSection} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Achievement() {
  const {isDark} = useContext(StyleContext);
  if (!achievementSection.display) return null;

  return (
    <section
      id="achievements"
      className={
        isDark ? "section achievement dark-mode" : "section achievement"
      }
    >
      <p className="section-label">06 — Recognition</p>
      <h2 className="section-title">Awards & certifications</h2>
      <p className="section-lede">{achievementSection.subtitle}</p>

      <ul className="achievement__list">
        {achievementSection.achievementsCards.map((card, i) => (
          <li key={i} className="achievement__item">
            <AchievementCard
              isDark={isDark}
              cardInfo={{
                title: card.title,
                description: card.subtitle,
                image: card.image,
                imageAlt: card.imageAlt,
                footer: card.footerLink
              }}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
