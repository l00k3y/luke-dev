import { Link, Typography } from "@mui/material";

import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-text-container">
        <Typography variant="body2" textAlign={"left"}>
          © 2025 Luke Chisnall.dev
        </Typography>
        <Typography variant="body2" textAlign={"right"}>
          Built with React and TypeScript | Deployed on Vercel |{" "}
          <Link
            href="https://github.com/l00k3y/luke-dev"
            target="_blank"
            rel="noopener noreferrer">
            Source on GitHub
          </Link>
        </Typography>
      </div>
    </footer>
  );
};

export default Footer;
