import type { Route } from "./+types/home";
import { Welcome } from "../pages/welcome/welcome";
import { RootLayout } from "~/layout/layout";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Luke Chisnall | Freelance Web Developer & Full Stack Engineer" },
    {
      name: "description",
      content:
        "Luke Chisnall is a freelance web developer specializing in frontend development, responsive design, and full-stack solutions. Available for new projects and collaborations.",
    },
    {
      name: "keywords",
      content:
        "React, Router, JavaScript, Web Development, Full Stack, Engineer",
    },
    {
      name: "author",
      content: "Luke Chisnall",
    },
  ];
}

export default function Home() {
  return <Welcome />;
}
