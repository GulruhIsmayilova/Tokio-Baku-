import React from 'react';
import { Grid, Container, Typography } from '@mui/material';
import './Muellimler.css';

const Muellimler = () => {
  const teachers = [
    { name: "Müəllim 1", image: "./photos/sirasensei.jpeg" },
    { name: "Müəllim 2", image: "./photos/sensei 2.jpg" },
    { name: "Müəllim 3", image: "./photos/eliaga.jpg" },
    { name: "Müəllim 4", image: "./photos/sensei.jpeg" },
    { name: "Müəllim 5", image: "./photos/murad.jpeg" },
  ];

  return (
    <Container className="carousel-wrapper">
      <Typography variant="h2" component="h2" gutterBottom align="center">
        Müəllimlər
      </Typography>
      <div className="carousel-container">
        <Grid container spacing={2} justifyContent="center">
          {teachers.map((teacher, index) => (
            <Grid item key={index} xs={6} sm={4} md={3} lg={2}>
              <div className="image-container">
                <img src={teacher.image} alt={teacher.name} />
                <Typography variant="subtitle1" align="center">
                  {teacher.name}
                </Typography>
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
    </Container>
  );
};

export default Muellimler;
