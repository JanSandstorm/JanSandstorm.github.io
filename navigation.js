document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("nav-container");
  if (!container) return;

  const links = [
    { label: "ABOUT",   href: "about.html" },
    { label: "PRACTICE",    href: "practice.html" },
    { label: "LETTERS", href: "newsletters.html" },
  ];

  // Resolve current page filename from pathname
  const path = window.location.pathname;
  const currentFile = path === "/" || path.endsWith("index.html")
    ? "index.html"
    : path.split("/").pop();

  const nav = links.map(link => {
    const isCurrent = link.href === currentFile;
    return isCurrent
      ? `<a class="active" href="${link.href}">${link.label}</a>`
      : `<a href="${link.href}">${link.label}</a>`;
  }).join(" &nbsp;·&nbsp; ");

  container.innerHTML = `<nav style="text-align: center;" aria-label="Main navigation">${nav}</nav>`;
});

