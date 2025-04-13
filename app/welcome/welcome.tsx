import { Button, Typography } from "@mui/joy";
import avatar from "./avatar.png";

import "./welcome.css";

export const Welcome = () => {
  return (
    <main>
      <div className="main-div">
        <div className="left-main-div">
          <div className="left-main-div-text">
            <Typography className="title-lg">Luke Chisnall</Typography>

            <Typography level="h3">Software Engineer</Typography>
            <Typography level="h4">Welcome to My Portfolio.</Typography>
            <Typography level="body-md">
              Explore my features and enjoy your stay!
            </Typography>
          </div>

          <div className="call-to-action-row">
            <Button className="padded-button">Download Resume</Button>
            <Button className="padded-button">View Projects</Button>
            <Button className="padded-button">Contact Me</Button>
          </div>
        </div>

        <div className="right-main-div">
          <img src={avatar} alt="Luke Chisnall's Avatar" className="avatar" />
        </div>
      </div>
    </main>
  );
};
