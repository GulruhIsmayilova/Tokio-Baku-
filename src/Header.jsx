import React, { useState } from "react";
import {AppBar,Toolbar,Button,Box,Menu,MenuItem,IconButton,Drawer,List,ListItem,ListItemText,} from "@mui/material";
import { Link } from "react-router-dom";
import LanguageIcon from "@mui/icons-material/Language";
import MenuIcon from "@mui/icons-material/Menu"; // Hamburger ikonu
import { useMediaQuery } from "@mui/material"; // Responsive için gerekli hook
import "@fortawesome/fontawesome-free/css/all.min.css";

function Header() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false); // Drawer menüsü için state
  const isMobile = useMediaQuery("(max-width: 768px)"); // Ekran genişliğini kontrol etme

  const handleLanguageClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  // Menü öğeleri için ortak yapı
  const menuItems = [
    { text: "Haqqımızda", link: "/haqqimizda" },
    { text: "Müəllimlər", link: "/muellimler" },
    { text: "Yaponiyada təhsil", link: "/yaponiyada-tehsil" },
    { text: "Yaponiyada iş", link: "/yaponiyada-is" },
    { text: "Uğurlarımız", link: "/ugurlarimiz" },
    { text: "Yaponiyada görməli yerlər", link: "/yaponiyada-gormeli-yerler" },
    { text: "Blog", link: "/blog" },
  ];

  return (
    <AppBar
      position="fixed"
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        backgroundColor: "#ffffff",
      }}
    >
      <Toolbar>
        <Link to="/" style={{ textDecoration: "none" }}>
          <img
            src="./logo.jpg"
            alt="Logo"
            style={{ width: "95px", height: "auto", marginRight: "20px" }}
          />
        </Link>

        <Box sx={{ flexGrow: 1 }} />

        {isMobile ? (
          <>
            {/* Mobil cihazlar için Hamburger menü ikonu */}
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
              sx={{ color: "#555555" }}
            >
              <MenuIcon />
            </IconButton>

            {/* Drawer (Hamburger menü) */}
            <Drawer
              anchor="right"
              open={drawerOpen}
              onClose={toggleDrawer(false)}
            >
              <List>
                {menuItems.map((item) => (
                  <ListItem
                    button
                    key={item.text}
                    component={Link}
                    to={item.link}
                    onClick={toggleDrawer(false)}
                  >
                    <ListItemText primary={item.text} />
                  </ListItem>
                ))}
              </List>
            </Drawer>
          </>
        ) : (
          <>
            {/* Masaüstü görünüm için menü butonları */}
            {menuItems.map((item) => (
              <Button
                key={item.text}
                sx={{
                  marginRight: "20px",
                  fontSize: "1.1rem",
                  color: "#555555",
                  textTransform: "none",
                  fontWeight: "bold",
                }}
                component={Link}
                to={item.link}
              >
                {item.text}
              </Button>
            ))}
          </>
        )}

        {/* Dil seçimi butonu */}
        <Button
          color="inherit"
          onClick={handleLanguageClick}
          sx={{
            display: "flex",
            alignItems: "center",
            marginRight: "20px",
            color: "blue",
          }}
        >
          <i
            className="fa-solid fa-globe"
            style={{ marginRight: "5px", fontSize: "1.5rem" }}
          ></i>
        </Button>

        {/* Dil seçimi menüsü */}
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
          PaperProps={{
            sx: {
              backgroundColor: "transparent", // Arka plan rengini şeffaf yap
              boxShadow: "none", // İsteğe bağlı: gölgeyi kaldır
            },
          }}
        >
          <MenuItem onClick={handleClose}>Azerbaycan dili</MenuItem>
          <MenuItem onClick={handleClose}>English</MenuItem>
          <MenuItem onClick={handleClose}>日本語</MenuItem> {/* Japonca */}
        </Menu>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
