import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TikTokIcon from '@mui/icons-material/Movie'; // TikTok simgesi için Movie ikonu kullanıldı

function Footer() {
  return (
    <Box 
      sx={{ 
        display: 'flex', 
        justifyContent: 'space-around', 
        alignItems: 'center', 
        padding: '40px', 
        backgroundColor: '#E9EFEC', 
        borderTop: '4px solid #ddd',
        position: 'fixed',
        bottom: 0,
        width: '100%',
      }}
    >
      {/* Sol Taraf - Logo, Yazı, Telefon ve Mail */}
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
        <Typography variant="h6" sx={{ marginBottom: '10px' }}>
          Logo {/* Buraya logonuzu ekleyebilirsiniz */}
        </Typography>
        <Typography variant="body2" sx={{ marginBottom: '5px' }}>
          Bütün hüquqlar qorunur &copy; {new Date().getFullYear()}
        </Typography>
        <Typography variant="body2" sx={{ marginBottom: '5px' }}>
          Tel: 051 9096611
        </Typography>
        <Typography variant="body2">
          Email: g.mehdiyeva@outlook.com
        </Typography>
      </Box>

      {/* Sağ Taraf - Sosyal Medya İkonları */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
        <IconButton href="https://www.facebook.com/share/PAxhJbPGwKvzdmtm/?mibextid=LQQJ4d" target="_blank" color="primary">
          <FacebookIcon />
        </IconButton>
        <IconButton href="https://www.instagram.com/tokyobaku/profilecard/?igsh=b2phNnk3eDNteHNt" target="_blank" color="primary">
          <InstagramIcon />
        </IconButton>
        <IconButton href="https://youtube.com/@tokyobaku?si=GtM_wr-O-UwvAISe" target="_blank" color="primary">
          <YouTubeIcon />
        </IconButton>
        <IconButton href="https://www.tiktok.com/@tokyobaku?_t=8qGs7Fe5NpP&_r=1" target="_blank" color="primary">
          <TikTokIcon />
        </IconButton>
        <IconButton href="https://wa.me/994507975193" target="_blank" color="primary">
          <WhatsAppIcon />
        </IconButton>
      </Box>
    </Box>
  );
}

export default Footer;
