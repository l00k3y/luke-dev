import { Typography } from "@mui/joy";

import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-text-container">
        <Typography level="body-sm" textAlign={"left"}>
          © 2025 Luke Chisnall.dev
        </Typography>
        <Typography level="body-sm" textAlign={"right"}>
          Built with React and TypeScript | Deployed on Pages | Source on GitHub
        </Typography>
      </div>
    </footer>
  );
};

export default Footer;
