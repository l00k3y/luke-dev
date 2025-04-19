import AboutPage from "~/pages/about/about";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About Luke Chisnall | Freelance Web Developer & Engineer" },
    {
      name: "description",
      content:
        "Learn more about Luke Chisnall — a freelance web developer with experience in frontend development, API design, and AWS infrastructure. Skilled in React, UX, and scalable web solutions.",
    },
    {
      name: "keywords",
      content:
        "React, Router, JavaScript, Full Stack Developer, AWS, API Design, UX",
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
