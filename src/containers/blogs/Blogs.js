import React, {useContext} from "react";
import "./Blog.scss";
import BlogCard from "../../components/blogCard/BlogCard";
import {blogSection} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Blogs() {
  const {isDark} = useContext(StyleContext);
  if (!blogSection.display) {
    return null;
  }
  return (
    <section
      id="blogs"
      className={isDark ? "section blog dark-mode" : "section blog"}
    >
      <p className="section-label">02 — Writing</p>
      <h2 className="section-title">{blogSection.title}</h2>
      <p className="section-lede">{blogSection.subtitle}</p>

      <ul className="blog__list">
        {blogSection.blogs.map((blog, i) => (
          <li key={i} className="blog__item">
            <BlogCard
              isDark={isDark}
              blog={{
                url: blog.url,
                image: blog.image,
                title: blog.title,
                description: blog.description
              }}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
