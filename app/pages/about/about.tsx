import { Button, Typography } from "@mui/material";
import avatar from "./headshot.png";

const AboutPage = () => {
  return (
    <main>
      <div className="about-main-div">
        <Typography className="title-lg">About Me</Typography>
        <img
          src={avatar}
          alt="Luke Chisnall's Avatar"
          className="avatar"
          // height={50}
          width={300}
        />
        <Typography variant="h3">
          I build websites and do martial arts!
        </Typography>
        {/* <img src={avatar} alt="Luke Chisnall" className="avatar" /> */}
        <Button variant="outlined">Contact Me</Button>
        <Typography variant="body1">
          I specialize in building responsive and accessible web applications.
        </Typography>
      </div>
    </main>
  );
};

export default AboutPage;
