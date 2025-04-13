import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import { RootLayout } from "~/layout/layout";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Luke C - Dev" },
    { name: "description", content: "Welcome to React Router!" },
    { name: "keywords", content: "React, Router, JavaScript" },
  ];
}

export default function Home() {
  return <Welcome />;
}
