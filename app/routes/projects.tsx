import type { Route } from "./+types/home";
import ProjectsPage from "~/pages/projects/projects";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Luke C - Projects" },
    { name: "description", content: "Welcome to the Projects Page!" },
    { name: "keywords", content: "Projects, React, JavaScript" },
    {
      name: "author",
      content: "Luke Chisnall",
    },
  ];
}

export default function Projects() {
  return <ProjectsPage />;
}
