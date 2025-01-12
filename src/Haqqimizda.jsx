import React from "react";
import { motion } from "framer-motion";
import {
  Box,
  Container,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Haqqimizda = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        overflow: "hidden",
        backgroundColor: "#ffffff",
        position: "relative",
      }}
    >
      {/* Video Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={{
          width: "100%",
          height: "130vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <video
          src="/photos/JAPAN - Where tradition meets the future .mp4"
          autoPlay
          loop
          muted
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            width: "100%",
            lineHeight: 0,
            zIndex: 1,
          }}
        >
          <svg
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
            style={{ display: "block", width: "100%", height: "200px" }}
          >
            <path
              style={{ fill: "rgba(255,255,255,0.35)" }}
              d="M-108,8s64-36,494,54,429.633,166.352,854,48,332-128,688-88V292H-48Z"
            ></path>
            <path
              style={{ fill: "rgba(255,255,255,0.7)" }}
              d="M0,64s120-40,360,48,480,160,720,32,360-96,720-56v240H0Z"
            ></path>
          </svg>
        </Box>
      </motion.div>

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <Container
          maxWidth="lg"
          sx={{ py: 4, px: 0, mx: "0", paddingLeft: 20, marginLeft: 20 }}
        >
          <Grid container spacing={4} sx={{ justifyContent: "space-between" }}>
            {/* Left Section (Text Content) */}
            <Grid item xs={12} md={6}>
              <Box sx={{ textAlign: "left" }}>
                <Typography
                  variant="h4"
                  component="h1"
                  gutterBottom
                  sx={{ fontWeight: 700, color: "#333333", fontSize: "36px" }}
                >
                  <strong>Haqqımızda</strong>
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: "20px",
                    lineHeight: "1.8em",
                    color: "#555555",
                  }}
                >
                  <strong>Kursumuz Haqqında:</strong>
                  <br />
                  Kursumuzda <em>Yapon dilini fərdi</em> və ya qrup şəklində
                  öyrənmək imkanı təqdim edirik. Təcrübəli müəllimlərimiz
                  Yaponiyada uzun illər yaşamış və Yapon dili üzrə{" "}
                  <em>yüksək səviyyəli mütəxəssislərdir</em>. Tədris prosesimiz
                  yalnız dil öyrənməkdən ibarət deyil; həm də mədəniyyətlə
                  əlaqələrinizi gücləndirmək üçün xüsusi imkanlar yaradırıq.
                  <br />
                  <br />
                  <strong>Danışıq Klubları və Mədəniyyət Dərsləri:</strong>
                  <br />
                  Yapon dilini müəyyən səviyyədə mənimsədikdən sonra sizi
                  müntəzəm olaraq təşkil etdiyimiz danışıq klublarına dəvət
                  edirik.
                </Typography>
                <List>
                  <ListItem>
                    <ListItemText
                      primary={<em>Yaponlarla birgə iştirak etmək</em>}
                      primaryTypographyProps={{
                        fontSize: "20px",
                        color: "#555555",
                      }}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary={<em>Öyrəndiklərinizi müzakirə etmək</em>}
                      primaryTypographyProps={{
                        fontSize: "20px",
                        color: "#555555",
                      }}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary={
                        <em>
                          Yapon mədəniyyəti və gündəlik həyatına dair
                          suallarınıza cavab tapmaq
                        </em>
                      }
                      primaryTypographyProps={{
                        fontSize: "20px",
                        color: "#555555",
                      }}
                    />
                  </ListItem>
                </List>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: "20px",
                    lineHeight: "1.8em",
                    color: "#555555",
                    mt: 2,
                  }}
                >
                  Bu fəaliyyətlər, yalnız dil biliklərinizi inkişaf etdirmir,
                  eyni zamanda{" "}
                  <strong> motivasiya və özünəinamınızı artırır.</strong>
                  <br />
                  <br />
                  <strong>Yaponiyada Təhsil və Karyera Dəstəyi:</strong>
                  <br />
                  Kursumuzun əsas məqsədi, <em>Yaponiyada təhsil almaq</em> və
                  ya işlə təmin olunmaq istəyənlərə dəstək verməkdir.
                  <br />
                  <br />
                  <strong>Kursumuzun Faydaları:</strong>
                </Typography>
                <List>
                  <ListItem>
                    <ListItemText
                      primary={
                        <em>
                          Yapon dilini həm praktik, həm də effektiv şəkildə
                          öyrənmək
                        </em>
                      }
                      primaryTypographyProps={{
                        fontSize: "20px",
                        color: "#555555",
                      }}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary={
                        <em>
                          Yaponiyada təhsil və karyera qurmaq üçün dəstək almaq
                        </em>
                      }
                      primaryTypographyProps={{
                        fontSize: "20px",
                        color: "#555555",
                      }}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary={
                        <em>
                          Mədəniyyətlə əlaqələrinizi genişləndirərək dili daha
                          yaxşı mənimsəmək
                        </em>
                      }
                      primaryTypographyProps={{
                        fontSize: "20px",
                        color: "#555555",
                      }}
                    />
                  </ListItem>
                </List>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: "20px",
                    lineHeight: "1.8em",
                    color: "#555555",
                    mt: 2,
                  }}
                >
                  <strong>
                    Bizimlə Yapon dilini öyrənərək, həm şəxsi, həm də peşəkar
                    həyatınızda yeni bir qapı aça bilərsiniz!
                  </strong>
                </Typography>
              </Box>
            </Grid>

            {/* Right Section (Slider) */}
            <Grid item xs={12} md={5}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  height: "100%",
                  flexDirection: "column",
                }}
              >
                <Box sx={{ width: "140%", paddingLeft: 20, marginLeft: 20 }}>
                <Slider {...sliderSettings}>
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      gap: "20px", // Üst ve alt resimler arasındaki boşluk
    }}
  >
    {/* Üstteki resimler */}
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        gap: "20px", // Resimler arasındaki yatay boşluk
      }}
    >
      <Box>
        <img
          src="/photos/05877f8a-6b50-47bc-8e15-3bdf5b0f19ed.webp"
          alt="Samurai 1"
          style={{
            width: "200px",
            borderRadius: "10px",
            height: "auto",
            transform: "rotate(-10deg)", // Eğiklik
            transition: "transform 0.3s",
          }}
        />
      </Box>
      <Box>
        <img
          src="/photos/samuesaku.webp"
          alt="Samurai 2"
          style={{
            width: "200px",
            borderRadius: "10px",
            height: "auto",
            transform: "rotate(-5deg)", // Eğiklik
            transition: "transform 0.3s",
          }}
        />
      </Box>
    </Box>

    {/* Alttaki resimler */}
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        gap: "20px", // Resimler arasındaki yatay boşluk
      }}
    >
      <Box>
        <img
          src="/photos/azersam.webp"
          alt="Samurai 3"
          style={{
            width: "200px",
            borderRadius: "10px",
            height: "auto",
            transform: "rotate(5deg)", // Eğiklik
            transition: "transform 0.3s",
          }}
        />
      </Box>
      <Box>
        <img
          src="/photos/samuraydesu.webp"
          alt="Samurai 4"
          style={{
            width: "200px",
            borderRadius: "10px",
            height: "auto",
            transform: "rotate(10deg)", // Eğiklik
            transition: "transform 0.3s",
          }}
        />
      </Box>
    </Box>
  </Box>
</Slider>

                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </motion.div>
    </Box>
  );
};

export default Haqqimizda;
