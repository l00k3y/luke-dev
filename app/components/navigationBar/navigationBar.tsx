import { Avatar, Divider, Drawer, List, Typography } from "@mui/joy";
import NavBarLink from "~/components/typography/navBarLink";

import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

import "./navigationBar.css";
import { useState } from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

const NavigationBar = () => {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className="nav-bar-container">
      <IconButton
        color="neutral"
        aria-label="open drawer"
        onClick={handleDrawerOpen}
        edge="start"
        sx={[
          {
            ml: 2,
          },
          open && { display: "none" },
        ]}>
        <MenuIcon />
      </IconButton>

      <Drawer id="nav-bar-drawer" open={open} onClose={handleDrawerClose}>
        <Typography level="body-sm" sx={{ my: 2, mx: 2 }}>
          Navigation
        </Typography>

        <IconButton onClick={handleDrawerClose}>
          <ChevronLeftIcon />
        </IconButton>
        <Divider />
        {/* <List>
          <NavBarLink path="/about" text="About" />
          <NavBarLink path="/projects" text="Projects" />
          <NavBarLink path="/services" text="Services" />
          <NavBarLink path="/contact" text="Contact" />
        </List> */}
        {/* <List> */}
        {["About", "Projects", "Services", "Contact"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <MailIcon />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </Drawer>
      {/* // </List> */}
      {/* <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List> */}
      <div id="navigation-row-links" className="nav-bar-container">
        <NavBarLink path="/about" text="About" />
        <NavBarLink path="/projects" text="Projects" />
        <NavBarLink path="/services" text="Services" />
        <NavBarLink path="/contact" text="Contact" />
      </div>

      <div>
        {" "}
        {/* Added missing div to wrap Avatar and nav */}
        <Avatar src="/favicon.png" alt="Logo" variant="outlined" size="lg">
          LC
        </Avatar>
      </div>
    </div>
  );

  {
    /* <nav className="flex space-x-10">
        <NavBarLink path="/about" text="About" />
        <NavBarLink path="/projects" text="Projects" />
        <NavBarLink path="/services" text="Services" />
        <NavBarLink path="/contact" text="Contact" />
      </nav> */
  }

  // );
};

export default NavigationBar;
