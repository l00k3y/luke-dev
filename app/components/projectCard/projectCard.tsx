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
    <Paper
      sx={{ my: 2 }}
      className="project-card"
      elevation={3}
      role="region"
      aria-labelledby={`project-title-${key}`}>
      <Card
        sx={{ width: "100%", padding: 2 }}
        variant="outlined"
        key={key}
        tabIndex={0} // Makes the card focusable for keyboard users
      >
        <Typography
          id={`project-title-${key}`}
          variant="h6"
          component="h3"
          tabIndex={0} // Allows screen readers to focus on the title
        >
          {title}
        </Typography>

        <Divider aria-hidden="true" />

        <div className="row-3-columns">
          <div className="project-card-column-1">
            <Typography
              variant="body2"
              component="p"
              aria-label={`Project dates: ${dates}`}>
              {dates}
            </Typography>
          </div>

          <Divider aria-hidden="true" />
          <div className="project-card-column-2">
            <Typography
              variant="body2"
              component="p"
              aria-label={`Project description: ${description}`}>
              {description}
            </Typography>
          </div>
        </div>

        <div>
          <ul className="horizontal-list" aria-label="Project tags">
            {tags.map((tag, tagIndex) => (
              <li className="project-tag" key={tagIndex}>
                <Chip
                  sx={{ mx: 1, my: 0.5 }}
                  label={tag}
                  variant="filled"
                  tabIndex={0} // Makes each tag focusable
                  aria-label={`Tag: ${tag}`}
                />
              </li>
            ))}
          </ul>
        </div>
      </Card>
    </Paper>
  );
};

export default ProjectCard;
