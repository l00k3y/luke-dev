import { Button, Typography } from "@mui/material";

import "./welcome.css";
import { useNavigate } from "react-router";

export const Welcome = () => {
  const navigate = useNavigate();

  return (
    <main>
      <div className="main-div">
        <div style={{ textAlign: "center" }}>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "15vw", sm: "15vw", md: "10vw", lg: "10vw" },
              marginBottom: "1rem",
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
          <Button variant="outlined" className="padded-button">
            Download Resume
          </Button>
          <Button
            variant="outlined"
            className="padded-button"
            onClick={() => {
              navigate("/projects");
            }}>
            View Projects
          </Button>
          <Button
            variant="outlined"
            className="padded-button"
            onClick={() => {
              navigate("/contact");
            }}>
            Contact Me
          </Button>
        </div>
      </div>
    </main>
  );
};
