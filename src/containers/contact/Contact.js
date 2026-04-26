import React, {useContext} from "react";
import "./Contact.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import {contactInfo} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Contact() {
  const {isDark} = useContext(StyleContext);
  return (
    <section
      id="contact"
      className={isDark ? "section contact dark-mode" : "section contact"}
    >
      <p className="section-label">07 — Contact</p>
      <h2 className="section-title">Say hi</h2>
      <p className="section-lede">
        Have a project in mind, want to collaborate, or just want to chat about
        AI, infra, or imaging? My inbox is open.
      </p>

      <div className="contact__lines">
        <a
          className="contact__email"
          href={"mailto:" + contactInfo.email_address}
        >
          {contactInfo.email_address}
          <span aria-hidden="true">↗</span>
        </a>
        {contactInfo.number && (
          <a className="contact__phone" href={"tel:" + contactInfo.number}>
            {contactInfo.number}
          </a>
        )}
      </div>

      <div className="contact__social">
        <SocialMedia />
      </div>
    </section>
  );
}
