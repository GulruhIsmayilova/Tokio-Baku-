import React, { useState } from 'react';
import { AppBar, Toolbar, Button, Box, Typography, Menu, MenuItem } from '@mui/material';
import { Link } from 'react-router-dom';
import LanguageIcon from '@mui/icons-material/Language';
import '@fortawesome/fontawesome-free/css/all.min.css';


function Header() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleLanguageClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, backgroundColor: '#ffffff' }}>
      <Toolbar>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <img 
            src="./logo.jpg"
            alt="Logo"
            style={{ width: '120px', height: 'auto', marginRight: '20px' }}
          />
        </Link>

        <Box sx={{ flexGrow: 1 }} />

        <Button 
          sx={{ 
            marginRight: '20px', 
            fontSize: '1.2rem', 
            color: '#555555', // Açık gri rengi
            textTransform: 'none',
            fontWeight: 'bold' // Yazı kalınlığını artır
          }} 
          component={Link} 
          to="/haqqimizda">
          Haqqımızda
        </Button>

        <Button 
          sx={{ 
            marginRight: '20px', 
            fontSize: '1.2rem', 
            color: '#555555', // Açık gri rengi
            textTransform: 'none',
            fontWeight: 'bold' // Yazı kalınlığını artır
          }} 
          component={Link} 
          to="/muellimler">
          Müəllimlər
        </Button>

        <Button 
          color="inherit"
          sx={{ 
            marginRight: '20px', 
            fontSize: '1.1rem', 
            color: '#555555', // Açık gri rengi
            textTransform: 'none',
            borderRadius: '20px', // Daha yuvarlak kenarlar için artır
            boxShadow: 'none',
            backgroundColor: 'transparent',
            fontWeight: 'bold' // Yazı kalınlığını artır
          }} 
          component={Link} 
          to="/yaponiyada-tehsil">
          Yaponiyada təhsil
        </Button>

        <Button 
          color="inherit"
          sx={{ 
            marginRight: '20px', 
            fontSize: '1.1rem', 
            color: '#555555', // Açık gri rengi
            textTransform: 'none',
            borderRadius: '8px',
            boxShadow: 'none',
            backgroundColor: 'transparent',
            fontWeight: 'bold' // Yazı kalınlığını artır
          }} 
          component={Link} 
          to="/yaponiyada-is">
          Yaponiyada iş
        </Button>

        <Button 
          color="inherit"
          sx={{ 
            marginRight: '20px', 
            fontSize: '1.1rem', 
            color: '#555555', // Açık gri rengi
            textTransform: 'none',
            borderRadius: '8px',
            boxShadow: 'none',
            backgroundColor: 'transparent',
            fontWeight: 'bold' // Yazı kalınlığını artır
          }} 
          component={Link} 
          to="/ugurlarimiz">
          Uğurlarımız
        </Button>

        <Button 
          color="inherit"
          sx={{ 
            marginRight: '20px', 
            fontSize: '1.1rem', 
            color: '#555555', // Açık gri rengi
            textTransform: 'none',
            borderRadius: '8px',
            boxShadow: 'none',
            backgroundColor: 'transparent',
            fontWeight: 'bold' // Yazı kalınlığını artır
          }} 
          component={Link} 
          to="/yaponiyada-gormeli-yerler">
          Yaponiyada görməli yerlər
        </Button>

        {/* Blog butonu ve dil ikonu */}
        <Button 
          color="inherit"
          sx={{ 
            marginRight: '10px', 
            fontSize: '1.1rem', 
            color: '#555555', // Açık gri rengi
            textTransform: 'none',
            borderRadius: '8px',
            boxShadow: 'none',
            backgroundColor: 'transparent',
            fontWeight: 'bold' // Yazı kalınlığını artır
          }} 
          component={Link} 
          to="/blog">
          Blog
        </Button>

        <Button
          color="inherit"
          onClick={handleLanguageClick}
          sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            marginRight: '20px', 
            color: 'blue' 
          }}
        >
          <i className="fa-solid fa-globe" style={{ marginRight: '5px', fontSize: '1.5rem' }}></i> {/* Font Awesome dil simgesi */}
        </Button>

        {/* Dil seçimi menüsü */}
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
          PaperProps={{
            sx: {
              backgroundColor: 'transparent', // Arka plan rengini şeffaf yap
              boxShadow: 'none' // İsteğe bağlı: gölgeyi kaldır
            }
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