import type { Route } from "./+types/home";
import ExperiencePage from "~/pages/experience/experience";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Experience" },
    {
      name: "description",
      content:
        "Learn more about Luke Chisnall's professional experience as a Full Stack Software Engineer.",
    },
    {
      name: "keywords",
      content: "React, Router, JavaScript, Full Stack Developer, Experience",
    },
    {
      name: "author",
      content: "Luke Chisnall",
    },
  ];
}

export default function Experience() {
  return <ExperiencePage />;
}
