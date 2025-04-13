import { Typography } from "@mui/joy";
import { Link } from "react-router";

import "./navBar.css";

export const NavBarLink = ({ path, text }: { path: string; text: string }) => {
  return (
    <Link to={path}>
      <Typography
        level="h4"
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
