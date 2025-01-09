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

const Haqqimizda = () => {
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

      {/* Content Section */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <Container maxWidth="lg" sx={{ py: 4 }}>
          <Grid container spacing={4} alignItems="center">
            {/* Text Section */}
            <Grid item xs={12} md={7}>
              <Box sx={{ textAlign: "left" }}>
                <Typography
                  variant="h4"
                  component="h1"
                  gutterBottom
                  sx={{ fontWeight: 700, color: "#333333", textAlign: "center" }}
                >
                  Haqqımızda
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ fontSize: "16px", lineHeight: "1.8em", color: "#555555", textAlign: "justify" }}
                >
                  <strong>Kursumuz Haqqında:</strong>
                  <br />
                  Kursumuzda Yapon dilini fərdi və ya qrup şəklində öyrənmək imkanı təqdim edirik. Təcrübəli
                  müəllimlərimiz Yaponiyada uzun illər yaşamış və Yapon dili üzrə yüksək səviyyəli mütəxəssislərdir.
                  Tədris prosesimiz yalnız dil öyrənməkdən ibarət deyil; həm də mədəniyyətlə əlaqələrinizi gücləndirmək
                  üçün xüsusi imkanlar yaradırıq.
                  <br />
                  <br />
                  <strong>Danışıq Klubları və Mədəniyyət Dərsləri:</strong>
                  <br />
                  Yapon dilini müəyyən səviyyədə mənimsədikdən sonra sizi müntəzəm olaraq təşkil etdiyimiz danışıq
                  klublarına dəvət edirik. Bu klublarda:
                </Typography>
                <List>
                  <ListItem>
                    <ListItemText primary="Yaponlarla birgə iştirak etmək" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Öyrəndiklərinizi müzakirə etmək" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Yapon mədəniyyəti və gündəlik həyatına dair suallarınıza cavab tapmaq" />
                  </ListItem>
                </List>
                <Typography
                  variant="body1"
                  sx={{ fontSize: "16px", lineHeight: "1.8em", color: "#555555", mt: 2 }}
                >
                  Bu fəaliyyətlər, yalnız dil biliklərinizi inkişaf etdirmir, eyni zamanda motivasiya və
                  özünəinamınızı artırır.
                  <br />
                  <br />
                  <strong>Yaponiyada Təhsil və Karyera Dəstəyi:</strong>
                  <br />
                  Kursumuzun əsas məqsədi, dil biliklərini praktikaya tətbiq edərək Yaponiyada təhsil almaq və ya işlə
                  təmin olunmaq istəyənlərə dəstək verməkdir.
                  <br />
                  <br />
                  <strong>Kursumuzun Faydaları:</strong>
                </Typography>
                <List>
                  <ListItem>
                    <ListItemText primary="Yapon dilini həm praktik, həm də effektiv şəkildə öyrənmək" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Yaponiyada təhsil və karyera qurmaq üçün dəstək almaq" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Mədəniyyətlə əlaqələrinizi genişləndirərək dili daha yaxşı mənimsəmək" />
                  </ListItem>
                </List>
                <Typography
                  variant="body1"
                  sx={{ fontSize: "16px", lineHeight: "1.8em", color: "#555555", mt: 2 }}
                >
                  Bizimlə Yapon dilini öyrənərək, həm şəxsi, həm də peşəkar həyatınızda yeni bir qapı aça bilərsiniz!
                </Typography>
              </Box>
            </Grid>

            {/* Image Section */}
            <Grid item xs={12} md={5}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                }}
              >
                <img
                  src="/photos/sakuraa.webp"
                  alt="Haqqımızda Şəkil"
                  style={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                    objectFit: "cover",
                    borderRadius: "10px",
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </motion.div>
    </Box>
  );
};

export default Haqqimizda; 