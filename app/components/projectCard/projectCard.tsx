import { Card, Chip, Divider, Typography } from "@mui/material";
import type { ProjectCardProps } from "~/types/types";

const ProjectCard = ({
  title,
  description,
  dates,
  tags,
  key,
}: ProjectCardProps) => {
  return (
    <Card sx={{ my: 2 }} variant="outlined" key={key}>
      <Typography variant="h6">{title}</Typography>

      <Divider />

      <Typography variant="body1">{description}</Typography>

      {/* <Divider orientation="vertical" /> */}
      <Typography variant="body2">{dates}</Typography>

      <Divider />

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
  );
};

export default ProjectCard;
