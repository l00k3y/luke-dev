import NavBarLink from "~/components/typography/navBarLink";

import MenuIcon from "@mui/icons-material/Menu";

import "./navigationBar.css";
import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import DrawerMenu from "../drawer/drawer";
import { Button, Toolbar, Typography } from "@mui/material";
import { Image } from "@mui/icons-material";

import { Link } from "react-router";

const NavigationBar = () => {
  const [open, setOpen] = useState(false);

  const setDrawerOpen = (open: boolean) => {
    setOpen(open);
  };

  return (
    <div className="nav-bar-container">
      <div id="left-nav-bar">
        <IconButton
          aria-label="open drawer"
          onClick={() => setDrawerOpen(true)}
          edge="start"
          id="nav-bar-drawer-button"
          sx={[
            {
              display: { xs: "block", sm: "none", md: "none", lg: "none" },
              color: "primary.main",
            },
          ]}>
          <MenuIcon />
        </IconButton>

        <DrawerMenu open={open} setOpen={setOpen} />

        <Link id="nav-luke-home" to="/">
          <Typography
            fontFamily={"CodeRegular"}
            noWrap
            sx={{ color: "primary.main", width: "auto" }}>
            Luke Chisnall
          </Typography>
        </Link>
      </div>

      <div className="nav-links-container">
        <NavBarLink path="/about" text="About" />
        <NavBarLink path="/projects" text="Projects" />
        <NavBarLink path="/experience" text="Experience" />
        <NavBarLink path="/contact" text="Contact" />
      </div>
    </div>
  );
};

export default NavigationBar;
