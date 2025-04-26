import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import {
  ListItemIcon,
  ListItemText,
  Drawer,
  Divider,
  IconButton,
  Typography,
  Box,
  List,
} from "@mui/material";

import "./drawer.css";

import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import CloseIcon from "@mui/icons-material/Close";
import MailIcon from "@mui/icons-material/Mail";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import { Link } from "react-router";

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
      </div>

      <List sx={{ width: "100%", minWidth: 250, py: 0 }}>
        {["About", "Projects", "Experience", "Contact"].map((text) => (
          <ListItem
            sx={{
              py: 2,
              mx: "auto",
              width: "auto",
              boxSizing: "border-box",
            }}
            key={text}>
            <Link
              style={{ textAlign: "center", width: "100%" }}
              to={`/${text.toLowerCase()}`}
              onClick={handleDrawerClose}>
              {text}
            </Link>
          </ListItem>
        ))}
      </List>

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
