import { Typography } from "@mui/joy";
import NavBarLink from "~/components/typography/navBarLink";

import "./navigationBar.css";

const NavigationBar = () => {
  return (
    <div className="nav-bar-container">
      <Typography fontWeight="bold" textColor="white">
        Luke Chisnall
      </Typography>
      <nav className="flex space-x-10">
        <NavBarLink path="/" text="Home" />
        <NavBarLink path="/projects" text="Projects" />
        <NavBarLink path="/services" text="Services" />
        <NavBarLink path="/contact" text="Contact" />
        <NavBarLink path="/about" text="About" />
      </nav>
    </div>
  );
};

export default NavigationBar;
