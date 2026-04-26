import React from "react";
import "./AchievementCard.scss";

export default function AchievementCard({cardInfo, isDark}) {
  function openUrlInNewTab(url, name) {
    if (!url) {
      console.log(`URL for ${name} not found`);
      return;
    }
    const win = window.open(url, "_blank");
    win.focus();
  }

  const hasLinks = Array.isArray(cardInfo.footer) && cardInfo.footer.length > 0;

  return (
    <article className={isDark ? "award-row dark-mode" : "award-row"}>
      {cardInfo.image && (
        <img
          className="award-row__icon"
          src={cardInfo.image}
          alt={cardInfo.imageAlt || cardInfo.title}
        />
      )}
      <div className="award-row__body">
        <h3 className="award-row__title">{cardInfo.title}</h3>
        <p className="award-row__desc">{cardInfo.description}</p>
        {hasLinks && (
          <div className="award-row__links">
            {cardInfo.footer.map((link, i) => (
              <button
                key={i}
                type="button"
                className="award-row__link"
                onClick={() => openUrlInNewTab(link.url, link.name)}
              >
                {link.name}
              </button>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
