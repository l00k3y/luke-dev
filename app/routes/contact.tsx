import AboutPage from "~/pages/about/about";
import type { Route } from "./+types/home";
import ContactPage from "~/pages/contact/contact";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Contact Me" },
    {
      name: "description",
      content:
        "Learn more about Luke Chisnall, a Full Stack Software Engineer.",
    },
    {
      name: "keywords",
      content: "React, Router, JavaScript, Full Stack Developer, Contact",
    },
    {
      name: "author",
      content: "Luke Chisnall",
    },
  ];
}

export default function Contact() {
  return <ContactPage />;
}
