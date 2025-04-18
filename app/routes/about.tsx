import AboutPage from "~/pages/about/about";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About Me" },
    {
      name: "description",
      content:
        "Learn more about Luke Chisnall, a Full Stack Software Engineer.",
    },
    {
      name: "keywords",
      content: "React, Router, JavaScript, Full Stack Developer",
    },
    {
      name: "author",
      content: "Luke Chisnall",
    },
  ];
}

export default function About() {
  return <AboutPage />;
}
