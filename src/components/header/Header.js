import React, {useContext} from "react";
import "./Header.scss";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import StyleContext from "../../contexts/StyleContext";
import {
  greeting,
  workExperiences,
  skillsSection,
  educationInfo,
  blogSection,
  achievementSection,
  openSource
} from "../../portfolio";

function Header() {
  const {isDark} = useContext(StyleContext);
  const items = [
    skillsSection.display && {href: "#skills", label: "Work"},
    blogSection.display && {href: "#blogs", label: "Writing"},
    openSource.display && {href: "#opensource", label: "Open Source"},
    workExperiences.display && {href: "#experience", label: "Experience"},
    educationInfo.display && {href: "#education", label: "Education"},
    achievementSection.display && {href: "#achievements", label: "Awards"},
    {href: "#contact", label: "Contact"}
  ].filter(Boolean);

  return (
    <header className={isDark ? "site-header dark-mode" : "site-header"}>
      <div className="site-header__inner">
        <a href="/" className="site-header__brand" aria-label="Home">
          <span className="site-header__brand-mark">{getInitials(greeting.username)}</span>
          <span className="site-header__brand-name">{greeting.username}</span>
        </a>

        <input
          className="site-header__menu-btn"
          type="checkbox"
          id="site-menu"
        />
        <label
          className="site-header__menu-icon"
          htmlFor="site-menu"
          aria-label="Open menu"
        >
          <span className="site-header__navicon" />
        </label>

        <nav className="site-header__nav">
          <ul>
            {items.map(item => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
            <li className="site-header__toggle">
              <ToggleSwitch />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

function getInitials(name) {
  if (!name) return "";
  return name
    .split(" ")
    .filter(Boolean)
    .map(part => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export default Header;
