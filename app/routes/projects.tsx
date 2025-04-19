import type { Route } from "./+types/home";
import ProjectsPage from "~/pages/projects/projects";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Web Development Projects | Luke Chisnall Portfolio" },
    {
      name: "description",
      content:
        "Explore freelance web development projects by Luke Chisnall. From Shopify migrations to frontend optimization and UX improvements — see real client work and results.",
    },
    { name: "keywords", content: "Projects, React, JavaScript, Engineer" },
    {
      name: "author",
      content: "Luke Chisnall",
    },
  ];
}

export default function Projects() {
  return <ProjectsPage />;
}
