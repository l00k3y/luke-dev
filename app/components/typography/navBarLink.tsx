import { Typography } from "@mui/joy";
import { Link } from "react-router";

import "./navBar.css";

export const NavBarLink = ({ path, text }: { path: string; text: string }) => {
  return (
    <Link to={path}>
      <Typography
        level="h2"
        fontSize="lg"
        textColor="white"
        className="navBarText"
        fontFamily={"Inter"}>
        {text}
      </Typography>
    </Link>
  );
};

export default NavBarLink;
