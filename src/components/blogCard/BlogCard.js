import React from "react";
import {Link} from "react-router-dom";
import "./BlogCard.scss";

function isInternal(url) {
  return typeof url === "string" && url.startsWith("/");
}

export default function BlogCard({blog, isDark}) {
  function openExternal(url, name) {
    if (!url) {
      console.log(`URL for ${name} not found`);
      return;
    }
    var win = window.open(url, "_blank");
    win.focus();
  }

  const cardInner = (
    <a
      className={isDark ? "dark-mode blog-card blog-card-shadow" : "blog-card"}
      href={isInternal(blog.url) ? blog.url : "#blog"}
      onClick={e => {
        if (!isInternal(blog.url)) e.preventDefault();
      }}
    >
      <h3 className={isDark ? "small-dark blog-title" : "blog-title"}>
        {blog.title}
      </h3>
      <p className={isDark ? "small-dark small" : "small"}>
        {blog.description}
      </p>
      <div className="go-corner">
        <div className="go-arrow">→</div>
      </div>
    </a>
  );

  if (isInternal(blog.url)) {
    return (
      <Link to={blog.url} className="blog-card-link">
        <div className={isDark ? "blog-container dark-mode" : "blog-container"}>
          {cardInner}
        </div>
      </Link>
    );
  }

  return (
    <div onClick={() => openExternal(blog.url, blog.title)}>
      <div className={isDark ? "blog-container dark-mode" : "blog-container"}>
        {cardInner}
      </div>
    </div>
  );
}
