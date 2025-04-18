import { Typography } from "@mui/material";
import ProjectCard from "~/components/projectCard/projectCard";
import { ProjectInformation } from "~/content/projects/projectsInformation";

import type { ProjectType } from "~/types/types";

const ProjectsPage = () => {
  return (
    <div className="projects-page">
      <Typography variant="h1" className="projects-page-title">
        Projects
      </Typography>
      <Typography variant="h2" className="projects-page-subtitle">
        Here's a list of the projects I've worked on so far. I am open to
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
