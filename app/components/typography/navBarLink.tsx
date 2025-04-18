import { Typography } from "@mui/material";
import { Link } from "react-router";

import "./navBarTypography.css";

export const NavBarLink = ({ path, text }: { path: string; text: string }) => {
  return (
    <Link to={path}>
      <Typography
        variant="subtitle1"
        color="primary.main"
        className="nav-bar-text"
        width="auto">
        {text}
      </Typography>
    </Link>
  );
};

export default NavBarLink;
