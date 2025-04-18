import { Button, Typography } from "@mui/material";
const AboutPage = () => {
  return (
    <main>
      <div className="main-div">
        <div className="left-main-div">
          <div className="left-main-div-text">
            <Typography className="title-lg">About Me</Typography>

            <Typography variant="h3">
              I build websites and do martial arts!
            </Typography>
            {/* <img src={avatar} alt="Luke Chisnall" className="avatar" /> */}
            <Button variant="outlined">Contact Me</Button>
            <Typography variant="body1">
              I specialize in building responsive and accessible web
              applications.
            </Typography>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutPage;
