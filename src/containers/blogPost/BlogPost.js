import React, {useEffect, useState, useContext} from "react";
import {Link, useParams} from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import "./BlogPost.scss";
import {StyleProvider} from "../../contexts/StyleContext";
import StyleContext from "../../contexts/StyleContext";
import {useLocalStorage} from "../../hooks/useLocalStorage";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import ScrollToTopButton from "../topbutton/Top";
import MermaidDiagram from "../../components/mermaidDiagram/MermaidDiagram";

function BlogPostContent() {
  const {isDark} = useContext(StyleContext);
  const {slug} = useParams();
  const [markdown, setMarkdown] = useState("");
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    window.scrollTo(0, 0);
    setStatus("loading");
    fetch(`${process.env.PUBLIC_URL}/blogs/${slug}.md`)
      .then(res => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.text();
      })
      .then(text => {
        setMarkdown(text);
        setStatus("ready");
      })
      .catch(() => setStatus("error"));
  }, [slug]);

  const components = {
    code({inline, className, children, ...props}) {
      const match = /language-(\w+)/.exec(className || "");
      const lang = match && match[1];
      const value = String(children).replace(/\n$/, "");
      if (!inline && lang === "mermaid") {
        return <MermaidDiagram chart={value} />;
      }
      if (!inline) {
        return (
          <pre className={`code-block ${className || ""}`}>
            <code className={className} {...props}>
              {children}
            </code>
          </pre>
        );
      }
      return (
        <code className={className} {...props}>
          {children}
        </code>
      );
    }
  };

  return (
    <div className={isDark ? "page dark-mode blog-post-page" : "page blog-post-page"}>
      <Header />
      <article
        className={isDark ? "blog-post-article dark-mode" : "blog-post-article"}
      >
        <Link to="/" className="blog-post-back">
          ← Back to portfolio
        </Link>
        {status === "loading" && (
          <p className="blog-post-status">Loading post…</p>
        )}
        {status === "error" && (
          <p className="blog-post-status">
            Couldn't load this post. <Link to="/">Go home</Link>.
          </p>
        )}
        {status === "ready" && (
          <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
            {markdown}
          </ReactMarkdown>
        )}
      </article>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

export default function BlogPost() {
  const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
  const [isDark, setIsDark] = useLocalStorage("isDark", darkPref.matches);
  const changeTheme = () => setIsDark(!isDark);
  return (
    <div className={isDark ? "page dark-mode" : "page"}>
      <StyleProvider value={{isDark, changeTheme}}>
        <BlogPostContent />
      </StyleProvider>
    </div>
  );
}
