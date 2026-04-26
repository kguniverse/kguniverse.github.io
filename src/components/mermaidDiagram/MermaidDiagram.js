import React, {useEffect, useState} from "react";
import mermaid from "mermaid";

let mermaidIdCounter = 0;
let initialized = false;

function ensureInit() {
  if (initialized) return;
  mermaid.initialize({
    startOnLoad: false,
    theme: "base",
    securityLevel: "loose",
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    themeVariables: {
      background: "transparent",
      primaryColor: "#F3F4F6",
      primaryTextColor: "#111827",
      primaryBorderColor: "#9CA3AF",
      lineColor: "#6B7280",
      secondaryColor: "#E5E7EB",
      tertiaryColor: "#F9FAFB",
      mainBkg: "#F3F4F6",
      clusterBkg: "rgba(0, 0, 0, 0.025)",
      clusterBorder: "#9CA3AF",
      edgeLabelBackground: "#FFFFFF",
      labelTextColor: "#111827"
    },
    flowchart: {
      htmlLabels: true,
      useMaxWidth: true,
      curve: "basis",
      nodeSpacing: 50,
      rankSpacing: 60,
      padding: 16
    }
  });
  initialized = true;
}

export default function MermaidDiagram({chart}) {
  const [svg, setSvg] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    ensureInit();
    const id = `mermaid-${++mermaidIdCounter}`;
    let cancelled = false;
    mermaid
      .render(id, chart)
      .then(({svg: rendered}) => {
        if (!cancelled) {
          setSvg(rendered);
          setError(null);
        }
      })
      .catch(err => {
        if (!cancelled) {
          setError(err.message || String(err));
        }
      });
    return () => {
      cancelled = true;
    };
  }, [chart]);

  if (error) {
    return (
      <pre className="mermaid-error">
        Mermaid render error: {error}
        {"\n\n"}
        {chart}
      </pre>
    );
  }
  return (
    <div className="mermaid-wrap">
      <div
        className="mermaid-diagram"
        dangerouslySetInnerHTML={{__html: svg}}
      />
    </div>
  );
}
