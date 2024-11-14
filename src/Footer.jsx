import React from "react";
import { Box, Typography, IconButton, Grid, Avatar, Divider } from "@mui/material";
import { Link } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import MovieIcon from "@mui/icons-material/Movie"; // TikTok simgesi için Movie ikonu kullanıldı
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { styled } from '@mui/material/styles';

const Root = styled('div')(({ theme }) => ({
  width: '100%',
  ...theme.typography.body2,
  color: theme.palette.text.secondary,
  '& > :not(style) ~ :not(style)': {
    marginTop: theme.spacing(2),
  },
}));

function Footer() {
  return (
    <Box
      sx={{
        padding: "40px",
        backgroundColor: "#FFFFFF",
        textAlign: "center",
      }}
    >
      <Grid
        container
        spacing={2}
        justifyContent="space-around"
        alignItems="center"
      >
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Root>
            <Divider>
              <Link to="/">
                <Avatar
                  src="/logo.jpg"
                  alt="Logo"
                  sx={{ width: 105, height: 105, cursor: "pointer" }}
                />
              </Link>
            </Divider>
          </Root>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center", // Merkezi hizalama
              marginLeft: "20%",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                marginBottom: "15px",
                fontSize: "20px",
                fontWeight: "bold",
                color: "#000000",
              }}
            >
              Bizimlə Əlaqə Vasitələri
            </Typography>
            <Typography
              variant="body1"
              sx={{
                display: "flex",
                alignItems: "center",
                marginBottom: "15px",
                fontSize: "17px",
              }}
            >
              <LocationOnIcon sx={{ marginRight: "5px" }} />
              Dogenzaka, Shibuya-ku, Tokyo bottom, 150-0043
            </Typography>
            <Typography
              variant="body1"
              sx={{
                display: "flex",
                alignItems: "center",
                marginBottom: "5px",
                fontSize: "17px",
                marginTop: "10px",
              }}
            >
              <PhoneIcon sx={{ marginRight: "5px" }} />
              Zəng: +994 704051905
            </Typography>
            <Typography
              variant="body1"
              sx={{
                display: "flex",
                alignItems: "center",
                marginBottom: "5px",
                fontSize: "17px",
              }}
            >
              <WhatsAppIcon sx={{ marginRight: "5px" }} />
              WhatsApp: <a href="https://wa.me/994507975193">+994 507975193</a>
            </Typography>
            <Typography
              variant="body1"
              sx={{
                display: "flex",
                alignItems: "center",
                marginBottom: "5px",
                fontSize: "17px",
              }}
            >
              <MailOutlineIcon sx={{ marginRight: "5px" }} />
              Email:{" "}
              <a href="mailto:tokyobaku.jp@gmail.com">tokyobaku.jp@gmail.com</a>
            </Typography>
            <Typography
              variant="body2"
              sx={{ fontSize: "16px", fontWeight: "bold", color: "#000000" }}
            >
              Bütün hüquqlar qorunur &copy; {new Date().getFullYear()}
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={6}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                marginBottom: "5px",
                fontSize: "18px",
                fontWeight: "bold",
                color: "#000000",
              }}
            >
              Bizi izləyin
            </Typography>
            <Typography
              variant="body1"
              sx={{
                marginBottom: "15px",
                fontSize: "18px",
                color: "#000000",
              }}
            >
              Yeniliklərdən xəbərdar olun!
            </Typography>
            <Box
              sx={{ display: "flex", justifyContent: "center", gap: "25px" }}
            >
              <IconButton
                href="https://www.facebook.com/share/PAxhJbPGwKvzdmtm/?mibextid=LQQJ4d"
                target="_blank"
                sx={{ color: "#3b5998" }} // Facebook rengi
              >
                <FacebookIcon />
              </IconButton>
              <IconButton
                href="https://www.instagram.com/tokyobaku/profilecard/?igsh=b2phNnk3eDNteHNt"
                target="_blank"
                sx={{ color: "#E1306C" }} // Instagram rengi
              >
                <InstagramIcon />
              </IconButton>
              <IconButton
                href="https://youtube.com/@tokyobaku?si=GtM_wr-O-UwvAISe"
                target="_blank"
                sx={{ color: "#FF0000" }} // YouTube rengi
              >
                <YouTubeIcon />
              </IconButton>
              <IconButton
                href="https://www.tiktok.com/@tokyobaku?_t=8qGs7Fe5NpP&_r=1"
                target="_blank"
                sx={{ color: "#69C9D0" }} // TikTok rengi
              >
                <MovieIcon />
              </IconButton>
              <IconButton
                href="https://wa.me/994507975193"
                target="_blank"
                sx={{ color: "#25D366" }} // WhatsApp rengi
              >
                <WhatsAppIcon />
              </IconButton>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Footer;
