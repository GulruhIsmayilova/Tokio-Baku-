import React from 'react';
import { Grid, Container, Typography } from '@mui/material';
import './Muellimler.css';

const Muellimler = () => {
  const teachers = [
    { name: "Agayev", surname: "Sirac", image: "./photos/sirasensei.jpeg" },
    { name: "Müəllim 2", surname: "Soyad 2", image: "./photos/sensei 2.jpg" },
    { name: "Aliağa", surname: "Abasov", image: "./photos/eliaga.jpg" },
    { name: "Müəllim 4", surname: "Soyad 4", image: "./photos/sensei.jpeg" },
    { name: "Murad", surname: "Nəsirov", image: "./photos/murad.jpeg" },
    { name: "Naoya", surname: "Matsumoto", image: "./photos/8142f544-80b8-4159-8731-4f3cd938aa19.jpeg" },
  ];

  return (
    <Container className="carousel-wrapper" maxWidth>
      <Typography variant="h2" component="h2" gutterBottom align="center">
        Müəllimlərimiz Kimlərdir?
      </Typography>
      <div className="carousel-container">
        <Grid container spacing={2} justifyContent="center">
          {teachers.map((teacher, index) => (
            <Grid item key={index} xs={6} sm={4} md={3} lg={2}>
              <div className="image-container">
                <img src={teacher.image} alt={teacher.name} />
                <Typography variant="subtitle1" align="center" style={{ marginTop: '8px', fontSize: '16px', fontWeight: 'normal' }}>
                  {teacher.name} {teacher.surname}
                </Typography>
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
      <Typography variant="h3" component="h3" gutterBottom align="center" style={{ marginTop: '40px' }}>
      Tədris prosesi
      </Typography>
      <Typography variant="body1" align="center" style={{ marginBottom: '20px' }}>
        Yapon dili öyrənmək üçün mərkəzimizdə sizi gözləyirik. Sizinlə birlikdə öyrənmək və inkişaf etmək üçün buradayıq.
      </Typography>

      <Grid container spacing={2} justifyContent="center" style={{ marginTop: '40px' }}>
        <Grid item xs={12} sm={6} md={4}>
          <div style={{
            position: 'relative',
            borderRadius: '10px',
            overflow: 'hidden',
            height: '410px',
            background: 'rgba(255, 255, 255, 0.5)',
            backdropFilter: 'blur(10px)',
            boxShadow: '0px 4px 20px rgba(0,0,0,0.1)',
          }}>
            <img
              src="./photos/how-to-study-like-a-harvard-student.jpg"
              alt="Sample 1"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                opacity: 0.5,
              }}
            />
            <Typography variant="h6" style={{
              position: 'absolute',
              top: '10%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              color: '#fff',
              fontWeight: 'bold',
              textAlign: 'center'
              ,
         
              backgroundColor: 'rgba(0, 0, 0, 0.7)', // Opaque background
            }}>
             Yaponlarla canlı görüşlər təşkil olunur.
            </Typography>
          </div>
          <Typography variant="h6" align="center" style={{
            marginTop: '15px',
            fontWeight: 'bold',
            textAlign: 'center',
            fontSize: '22px',
          }}>
            Dərslər həftədə 2 dəfə keçirilir. Əlavə olaraq, 1 dərs yapon müəllim ilə ödənişsiz keçirilir.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <div style={{
            position: 'relative',
            borderRadius: '10px',
            overflow: 'hidden',
            height: '410px',
            background: 'rgba(255, 255, 255, 0.5)',
            backdropFilter: 'blur(10px)',
            boxShadow: '0px 4px 20px rgba(0,0,0,0.1)',
          }}>
            <img
              src="./photos/how-to-read-japanese-novels (1).jpg"
              alt="Sample 2"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                opacity: 0.5,
              }}
            />
            <Typography variant="h6" style={{
              position: 'absolute',
              top: '10%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              color: '#fff',
              fontWeight: 'bold',
              textAlign: 'center',
             
              backgroundColor: 'rgba(0, 0, 0, 0.7)', // Opaque background
            }}>
             Materiallar kurs tərəfindən təmin edilir.
          
            </Typography>
          </div>
          <Typography variant="h6" align="center" style={{
            marginTop: '15px',
            fontWeight: 'bold',
            textAlign: 'center',
            fontSize: '22px',
          }}>
           Fərdi dərslər: 120 AZN
           Qrup dərsləri: 80 AZN
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <div style={{
            position: 'relative',
            borderRadius: '10px',
            overflow: 'hidden',
            height: '410px',
            background: 'rgba(255, 255, 255, 0.5)',
            backdropFilter: 'blur(10px)',
            boxShadow: '0px 4px 20px rgba(0,0,0,0.1)',
          }}>
            <img
              src="./photos/kanji-calligraphy-brush-1024x683.jpg"
              alt="Sample 3"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                opacity: 0.5,
              }}
            />
            <Typography variant="h6" style={{
              position: 'absolute',
              top: '15%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              color: '#fff',
              fontWeight: 'bold',
              textAlign: 'center',
           
              backgroundColor: 'rgba(0, 0, 0, 0.7)', // Opaque background
            }}>
              Yapon dilinin bütün formaları (JLPT, yazı, danışıq, dinləmə, ləhcə) tədris olunur
            </Typography>
          </div>
          <Typography variant="h6" align="center" style={{
            marginTop: '15px',
            fontWeight: 'bold',
            textAlign: 'center',
            fontSize: '22px',
            
          }}>
           Tələbəyə yapon dilini öyrətdikdən sonra Yaponiyada təhsil və iş imkanı təqdim edilir.

          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Muellimler;
