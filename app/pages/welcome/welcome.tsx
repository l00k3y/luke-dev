import { Button, Typography } from "@mui/material";

import "./welcome.css";

export const Welcome = () => {
  return (
    <main>
      <div className="main-div">
        <div className="left-main-div">
          <div className="left-main-div-text">
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "15vw", sm: "15vw", md: "10vw", lg: "10vw" },
              }}>
              Luke Chisnall
            </Typography>

            <Typography
              variant="h3"
              sx={{
                fontSize: { xs: "4vw", sm: "4vw", md: "3vw", lg: "3vw" },
              }}>
              Full Stack Software Engineer
            </Typography>
          </div>

          <div className="call-to-action-row">
            <Button className="padded-button">Download Resume</Button>
            <Button className="padded-button">View Projects</Button>
            <Button className="padded-button">Contact Me</Button>
          </div>
        </div>
      </div>
    </main>
  );
};
