import React, {useContext} from "react";
import "./Greeting.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import {greeting} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Greeting() {
  const {isDark} = useContext(StyleContext);
  if (!greeting.displayGreeting) {
    return null;
  }
  return (
    <section
      id="greeting"
      className={
        isDark
          ? "section section--no-divider hero dark-mode"
          : "section section--no-divider hero"
      }
    >
      <p className="hero__eyebrow">Software engineer · Toronto, Canada</p>
      <h1 className="hero__title">{greeting.title}.</h1>
      <p className="hero__lede">{greeting.subTitle}</p>

      <div className="hero__meta">
        <SocialMedia />
        <a className="hero__cta" href="#contact">
          Get in touch
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  );
}
