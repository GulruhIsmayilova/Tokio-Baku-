import React from "react";
import { Container, Typography } from "@mui/material";
import { Link } from "react-router-dom"; // Link bileşenini ekledik
import "./Muellimler.css";

const Muellimler = () => {
  const teachers = [
    { 
      name: "Agayev", 
      surname: "Sirac", 
      image: "./photos/sirasensei.jpeg",
      detailsPath: "/teachers/agayev" // Öğretmen detay sayfası için yol
    },
    { 
      name: "Kitamura ", 
      surname: " Hinako", 
      image: "./photos/sensei 2.jpg",
      detailsPath: "/teachers/muellim2"
    },
    { 
      name: "Aliağa", 
      surname: "Abasov", 
      image: "./photos/eliaga.jpg",
      detailsPath: "/teachers/aliaga"
    },
    { 
      name: "Abdulxələf", 
      surname: "Məmmədli", 
      image: "./photos/sensei.jpeg",
      detailsPath: "/teachers/muellim4"
    },
    { 
      name: "Murad", 
      surname: "Nəsirov", 
      image: "./photos/murad.jpeg",
      detailsPath: "/teachers/murad"
    },
    {
      name: "Naoya",
      surname: "Matsumoto",
      image: "./photos/8142f544-80b8-4159-8731-4f3cd938aa19.jpeg",
      detailsPath: "/teachers/naoya"
    },
  ];

  return (
    <Container className="carousel-wrapper" maxWidth>
      <Typography variant="h2" component="h2" gutterBottom align="center">
        Müəllimlərimiz Kimlərdir?
      </Typography>
      <div className="carousel-container">
        <div className="slideshow">
          {teachers.map((teacher, index) => (
            <div className="image-container" key={index}>
              <img src={teacher.image} alt={teacher.name} />
              <Typography
                variant="subtitle1"
                align="center"
                style={{
                  marginTop: "8px",
                  fontSize: "16px",
                  fontWeight: "normal",
                }}
              >
                {teacher.name} {teacher.surname}
              </Typography>
              {/* "Davamını oxu" linki eklendi */}
              <Link to={teacher.detailsPath}>
                <Typography
                  variant="body2"
                  align="center"
                  style={{
                    marginTop: "12px", // Yukarıya boşluk ekledik
                    fontSize: "14px",
                    color: "#007bff", // Mavi tıklanabilir renk
                    cursor: "pointer",
                    textDecoration: "underline", // Altını çizdik
                    paddingBottom: "12px", // Altına boşluk ekledik
                  }}
                >
                  Davamını oxu
                </Typography>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};


export default Muellimler;
