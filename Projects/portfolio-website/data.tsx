import type { Project } from "./types";

export const projects: Project[] = [
  {
    id: "p1",
    title: "Project One",
    description: "A React project built to showcase XYZ.",
    tech: ["React", "TypeScript", "CSS"],
    liveurl:"https://example.com",
    repourl: "https://github.com/achuthanadarsh977"
  },
  {
    id: "p2",
    title: "Project Two",
    description: "Another project demo.",
    tech: ["React", "Node", "Express"],
    liveurl:"https://example1.com",
    repourl: "https://github.com/achuthanadarsh977"

  }
];

export const navItems = [
  { id: "home", label: "Home", href: "#home" },
  { id: "about", label: "About", href: "#about" },
  { id: "projects", label: "Projects", href: "#projects" },
  { id: "contact", label: "Contact", href: "#contact" }
] as const;
