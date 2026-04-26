import React, {useContext} from "react";
import "./Footer.scss";
import StyleContext from "../../contexts/StyleContext";
import {greeting} from "../../portfolio";

export default function Footer() {
  const {isDark} = useContext(StyleContext);
  const year = new Date().getFullYear();
  return (
    <footer className={isDark ? "site-footer dark-mode" : "site-footer"}>
      <div className="site-footer__inner">
        <p className="site-footer__line">
          © {year} {greeting.username}
        </p>
        <p className="site-footer__line">
          <a
            href="https://github.com/kguniverse/kguniverse.github.io"
            target="_blank"
            rel="noreferrer"
          >
            Source on GitHub
          </a>
        </p>
      </div>
    </footer>
  );
}
