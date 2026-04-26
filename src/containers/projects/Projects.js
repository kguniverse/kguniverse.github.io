import React, {useContext, useEffect, useState} from "react";
import "./Project.scss";
import {openSource} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

const STATUS = {
  LOADING: "loading",
  READY: "ready",
  EMPTY: "empty",
  ERROR: "error"
};

export default function Projects() {
  const {isDark} = useContext(StyleContext);
  const [repos, setRepos] = useState([]);
  const [status, setStatus] = useState(STATUS.LOADING);

  useEffect(() => {
    if (!openSource.display) return;
    const username = openSource.username;
    let cancelled = false;

    fetchPinned(username)
      .then(data => {
        if (cancelled) return;
        if (!Array.isArray(data) || data.length === 0) {
          setStatus(STATUS.EMPTY);
          return;
        }
        setRepos(data);
        setStatus(STATUS.READY);
      })
      .catch(() => {
        if (!cancelled) setStatus(STATUS.ERROR);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  if (!openSource.display) return null;

  return (
    <section
      id="opensource"
      className={isDark ? "section projects dark-mode" : "section projects"}
    >
      <p className="section-label">03 — Open Source</p>
      <h2 className="section-title">{openSource.title}</h2>
      <p className="section-lede">{openSource.subtitle}</p>

      {status === STATUS.LOADING && (
        <ul className="projects__list" aria-busy="true">
          {Array.from({length: 6}).map((_, i) => (
            <li key={i} className="projects__item">
              <div className="proj-row proj-row--skeleton">
                <span className="proj-row__lang skeleton skeleton--sm" />
                <div className="proj-row__body">
                  <span className="skeleton skeleton--md" />
                  <span className="skeleton skeleton--lg" />
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}

      {status === STATUS.ERROR && (
        <p className="projects__status">
          Couldn't reach GitHub right now.{" "}
          <a
            href={`https://github.com/${openSource.username}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            View profile →
          </a>
        </p>
      )}

      {status === STATUS.EMPTY && (
        <p className="projects__status">
          No pinned projects yet.{" "}
          <a
            href={`https://github.com/${openSource.username}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            View profile →
          </a>
        </p>
      )}

      {status === STATUS.READY && (
        <ul className="projects__list">
          {repos.map(repo => (
            <li key={repo.name} className="projects__item">
              <a
                className="proj-row"
                href={repo.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="proj-row__lang">{repo.language || "—"}</span>
                <div className="proj-row__body">
                  <h3 className="proj-row__name">
                    {repo.name}
                    <span className="proj-row__arrow" aria-hidden="true">
                      ↗
                    </span>
                  </h3>
                  {repo.description && (
                    <p className="proj-row__desc">{repo.description}</p>
                  )}
                  {(Number(repo.stars) > 0 || Number(repo.forks) > 0) && (
                    <p className="proj-row__meta">
                      {Number(repo.stars) > 0 && <span>★ {repo.stars}</span>}
                      {Number(repo.forks) > 0 && <span>⑂ {repo.forks}</span>}
                    </p>
                  )}
                </div>
              </a>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

async function fetchPinned(username) {
  const u = encodeURIComponent(username);

  // Primary: berrysauce — currently reliable.
  try {
    const res = await fetch(`https://pinned.berrysauce.dev/get/${u}`);
    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data) && data.length > 0) {
        return data.map(r => ({
          name: r.name,
          link: `https://github.com/${r.author}/${r.name}`,
          description: r.description,
          language: r.language,
          stars: r.stars,
          forks: r.forks
        }));
      }
    }
  } catch (e) {
    // fall through to egoist
  }

  // Fallback: egoist
  const res = await fetch(`https://gh-pinned-repos.egoist.dev/?username=${u}`);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const data = await res.json();
  if (!Array.isArray(data)) return [];
  return data.map(r => ({
    name: r.repo,
    link: r.link,
    description: r.description,
    language: r.language,
    stars: r.stars,
    forks: r.forks
  }));
}
