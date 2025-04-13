import { Typography } from "@mui/joy";
import NavBarLink from "~/components/typography/navBarLink";

import "./navigationBar.css";

const NavigationBar = () => {
  return (
    <div className="nav-bar-container">
      <Typography textColor="#333333">Luke Chisnall</Typography>
      <nav className="flex space-x-10">
        <NavBarLink path="/about" text="About" />
        <NavBarLink path="/projects" text="Projects" />
        <NavBarLink path="/services" text="Services" />
        <NavBarLink path="/contact" text="Contact" />
      </nav>
    </div>
  );
};

export default NavigationBar;
