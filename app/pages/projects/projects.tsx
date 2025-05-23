import { Typography } from "@mui/material";
import ProjectCard from "~/components/projectCard/projectCard";
import { ProjectInformation } from "~/content/projects/projectsInformation";

import type { ProjectType } from "~/types/types";

import "./projects.css";

const ProjectsPage = () => {
  return (
    <div className="projects-page">
      <Typography variant="h4" className="projects-page-title" component={"h1"}>
        Projects & Work
      </Typography>
      <Typography
        variant="body2"
        className="projects-page-subtitle"
        component="p">
        Here’s a collection of client projects I’ve delivered — from Shopify
        migrations to frontend enhancements and UX improvements. While these
        showcase my work in freelance, my professional experience extends
        further, including API architecture, AWS infrastructure, and full-stack
        development. So if your project needs more than just a pixel-perfect UI,
        I’ve got the backend chops to match. Open to new work — let’s build
        something together.
      </Typography>

      <div className="projects-page-content">
        {ProjectInformation.map((project: ProjectType, index) => (
          <ProjectCard
            title={project.title}
            description={project.description}
            dates={project.dates}
            tags={project.tags}
            key={index}
          />
        ))}
        {/* Additional project details can be added here */}
      </div>
    </div>
  );
};

export default ProjectsPage;
