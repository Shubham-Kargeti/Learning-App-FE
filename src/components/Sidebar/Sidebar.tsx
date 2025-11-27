import { useState } from "react";
import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Person,
  Settings,
  Dashboard,
} from "@mui/icons-material";
import { useNavigate, useLocation } from "react-router-dom";
import "./Sidebar.scss";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const menuItems = [
    { text: "Dashboard", icon: <Dashboard />, path: "/app/dashboard" },
    { text: "Profile", icon: <Person />, path: "/app/profile-setup" },
    { text: "Settings", icon: <Settings />, path: "/app/settings" },
  ];

  return (
    <Drawer
      variant="permanent"
      open={open}
      className={`sidebar-drawer ${open ? "open" : "collapsed"}`}
    >
      <IconButton onClick={() => setOpen(!open)} className="sidebar-toggle-btn">
        <MenuIcon />
      </IconButton>

      <List className="sidebar-list">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <ListItemButton
              key={item.text}
              onClick={() => navigate(item.path)}
              className={`sidebar-item ${isActive ? "active" : ""}`}
            >
              <ListItemIcon
                className={`sidebar-icon ${isActive ? "active" : ""}`}
              >
                {item.icon}
              </ListItemIcon>
              {open && (
                <ListItemText
                  primary={item.text}
                  className={`sidebar-text ${isActive ? "active" : ""}`}
                />
              )}
            </ListItemButton>
          );
        })}
      </List>
    </Drawer>
  );
};

export default Sidebar;
