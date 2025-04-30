import { Button, Typography } from "@mui/material";
import avatar from "./headshot.png";

const AboutPage = () => {
  return (
    <main>
      <header>
        <Typography component="h1" variant="h4" className="title-lg">
          About Me
        </Typography>
      </header>
      <section className="about-main-div">
        <img
          src={avatar}
          alt="A headshot of Luke Chisnall"
          className="avatar"
          width={300}
        />
        <Typography component="h2" variant="h5">
          I build websites and do martial arts!
        </Typography>
        <Button
          variant="outlined"
          aria-label="Contact me via email"
          onClick={() =>
            (window.location.href = "mailto:lukebretherton11@gmail.com")
          }>
          Contact Me
        </Button>
        <Typography component="p" variant="body1">
          I specialize in building responsive and accessible web applications.
        </Typography>
      </section>
    </main>
  );
};

export default AboutPage;
