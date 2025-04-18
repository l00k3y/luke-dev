import { Typography } from "@mui/joy";
import { Link } from "react-router";

import "./navBarTypography.css";

export const NavBarLink = ({ path, text }: { path: string; text: string }) => {
  return (
    <Link to={path}>
      <Typography
        level="h4"
        fontSize="lg"
        className="nav-bar-text"
        width="auto">
        {text}
      </Typography>
    </Link>
  );
};

export default NavBarLink;
