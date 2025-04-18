import { Card, Chip, Divider, Paper, Typography } from "@mui/material";
import type { ProjectCardProps } from "~/types/types";

import "./projectCard.css";

const ProjectCard = ({
  title,
  description,
  dates,
  tags,
  key,
}: ProjectCardProps) => {
  return (
    <Paper sx={{ my: 2, width: "80%", mx: "auto" }} elevation={3}>
      <Card sx={{ width: "100%", padding: 2 }} variant="outlined" key={key}>
        <Typography variant="h6">{title}</Typography>

        <Divider />

        <div className="row-3-columns">
          <div className="project-card-column-1">
            {/* <Divider orientation="vertical" /> */}
            <Typography variant="body2">{dates}</Typography>
          </div>

          <div className="project-card-column-2">
            <Typography variant="body1">{description}</Typography>
          </div>

          <div className="project-card-column-3">
            {/* <Image src="path/to/image.jpg" alt="Project Image"></Image> */}
          </div>
        </div>

        <div>
          <ul>
            {tags.map((tag, tagIndex) => (
              <Chip
                sx={{ mx: 1, my: 0.5 }}
                label={tag}
                key={tagIndex}
                variant="filled"
              />
            ))}
          </ul>
        </div>
      </Card>
    </Paper>
  );
};

export default ProjectCard;
