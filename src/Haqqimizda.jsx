import React, { useState, useEffect } from "react";
import { Container, Grid, Typography } from "@mui/material";
import "./Haqqimizda.css";

const Haqqimizda = () => {
  const images = [
    "./photos/vadasiraj.jpeg",
    "./photos/back.jpg",
    "./photos/istockphoto-991471024-2048x2048.jpg",
    "./photos/Japan_Work-Life_Balance_3.jpg",
    "./photos/photo1 (1).jpeg",
    "./photos/photo1 (3).jpeg",
    "./photos/photo1 (2).jpeg",
    "./photos/japan.jpeg",
    "./photos/image-01-10-24-01-46.jpeg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <Container className="about-container" maxWidth>
      {" "}
      {/* Container'a arka plan resmini ekledik */}
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item xs={12} md={6} className="text-section">
          <Typography variant="h2" component="h2" className="header-title">
            Haqqımızda
          </Typography>

          <Typography variant="body1" className="custom-text">
            Bu kursda, Yapon dilini fərdi və qrup şəklində öyrənmək mümkündür.
            Müəllimlərimizin hamısı Yaponiyada bir neçə il yaşamış, Azərbaycanda
            Yapon dili üzrə ən yüksək səviyyəyə malik mütəxəssislərdir. Yapon
            dilini müəyyən qədər öyrəndikdən sonra, müntəzəm olaraq Yaponlarla
            birgə iştirak edə biləcəyiniz danışıq klubu təşkil edirik. Bu klubda
            öyrəndiklərinizi Yaponlarla müzakirə etmək və Yaponiyanın
            mədəniyyəti ilə bağlı suallarınızı cavablandırmaq imkanı əldə
            edirsiniz. Bu, həmçinin Yapon dili öyrənmə motivasiyanızı artırmağa
            kömək edir. Təbii ki, "Yapon dilini öyrəndikdən sonra nə olacaq?"
            sualı çoxları üçün aktualdır. Narahat olmayın! Yapon dilini öyrənmək
            və Yaponiyaya köçmək istəyənlərə dəstək vermək kursumuzun güclü
            tərəflərindəndir. Yaponiyanın bir neçə dili məktəbi ilə əlaqələrimiz
            var, həmçinin universitetlərlə də iş birliyimiz mövcuddur. Eyni
            zamanda, Yapon şirkətləri ilə də əlaqələrimiz olduğu üçün iş ilədə
            təmin edə bilirik.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6} className="image-section">
          <div className="images-container1">
            <img
              src={images[currentIndex]}
              alt="Slayt Resmi"
              className="slideshow-image"
            />
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Haqqimizda;
