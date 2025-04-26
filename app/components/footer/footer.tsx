import { Box, Link, Typography } from "@mui/material";

import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-text-container">
        <Typography variant="body2">© 2025 Luke Chisnall.dev</Typography>

        <Box id="footer-right-text" textAlign={"center"}>
          <Typography variant="body2">
            Built with React and TypeScript
          </Typography>
          <Typography ml={1} variant="body2">
            <Link
              href="https://github.com/l00k3y/luke-dev"
              target="_blank"
              rel="noopener noreferrer">
              Source on GitHub
            </Link>
          </Typography>
          <Typography ml={1} variant="body2">
            Deployed on Vercel
          </Typography>
        </Box>
      </div>
    </footer>
  );
};

export default Footer;
