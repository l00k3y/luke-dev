import AboutPage from "~/pages/about/about";
import type { Route } from "./+types/home";
import ContactPage from "~/pages/contact/contact";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Contact | Work With Luke Chisnall" },
    {
      name: "description",
      content:
        "Interested in working together? Reach out to Luke Chisnall for freelance web development, frontend consulting, or technical collaborations.",
    },
    {
      name: "keywords",
      content:
        "React, Router, JavaScript, Full Stack Developer, Contact, Engineer",
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
