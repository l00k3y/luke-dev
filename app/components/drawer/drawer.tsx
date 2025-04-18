import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import { IconButton, Typography, Divider, ListItem, ListItemButton } from "@mui/joy";
import {
  ListItemIcon,
  ListItemText,
  Drawer,
  Divider,
  IconButton,
} from "@mui/material";

import "./drawer.css";

import { Typography } from "@mui/joy";

import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import CloseIcon from "@mui/icons-material/Close";
import MailIcon from "@mui/icons-material/Mail";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";

interface DrawerProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const DrawerMenu = ({ open, setOpen }: DrawerProps) => {
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Drawer
      id="nav-bar-drawer"
      open={open}
      onClose={handleDrawerClose}
      variant="temporary">
      <div className="row-align-left" style={{ height: "8vh" }}>
        <IconButton onClick={handleDrawerClose}>
          <CloseIcon />
        </IconButton>
        <Typography level="body-sm" sx={{ my: 2, mx: 2 }}>
          Navigation
        </Typography>
      </div>
      <Divider />

      {["About", "Projects", "Services", "Contact"].map((text, index) => (
        <ListItem key={text} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              {text === "Contact" ? (
                <ConnectWithoutContactIcon />
              ) : (
                <MailIcon />
              )}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItemButton>
        </ListItem>
      ))}

      <div className="row-push-to-bottom">
        <IconButton onClick={loadLinkedIn}>
          <LinkedInIcon fontSize="large" />
        </IconButton>
        <IconButton onClick={loadGitHub}>
          <GitHubIcon fontSize="large" />
        </IconButton>
      </div>
    </Drawer>
  );
};

export default DrawerMenu;

// Add ENV var for this
const loadLinkedIn = () => {
  window.open("https://www.linkedin.com/in/lukechisnall", "_blank");
};

// Add ENV var for this
const loadGitHub = () => {
  window.open("https://github.com/l00k3y", "_blank");
};
