import { Typography } from "@mui/material";

import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-text-container">
        <Typography variant="body2" textAlign={"left"}>
          © 2025 Luke Chisnall.dev
        </Typography>
        <Typography variant="body2" textAlign={"right"}>
          Built with React and TypeScript | Deployed on Pages | Source on GitHub
        </Typography>
      </div>
    </footer>
  );
};

export default Footer;
