import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Grid from '@mui/material/Grid';

export default function ActionAreaCards() {
  // Kartlar için verileri bir dizi olarak oluşturuyoruz
  const cards = [
    {
      id: 1,
      image: './photos/images (1).jfif',  // Kart 1 için resim
      title: '手を引く　てをひく',  // Kart 1 için başlık
      description: <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        Te’wo hiku
        <br />
        Əl çəkmək
        <br />
        <strong style={{ color: 'red' }}>彼はプロジェクトから手を引きました。</strong>
        <br />
        <strong>Karewa purojekutokara tewo hikimashita</strong>
        <br />
        O projekten əl çəkdi
      </Typography>
    },
    {
      id: 2,
      image: './photos/1740030 (1).jpg',  // Kart 2 için resim
      title: '手間がかかる',  // Kart 2 için başlık
      description: <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        <strong>てまがかかる
        <br />
          </strong>əziyyət tələb edir, vaxt aparir.
        <br />そんなことは手間がかかる

        <br />
        <strong>Sonna koto wa tema ga kakaru</strong>
        <strong style={{ color: 'red' }}>
          </strong>
          elə şeylər əziyyət tələb edir.
      </Typography>
    },
    {
      id: 3,
      image: './photos/f51e98bae6c20430ef9bc124bb7f9665_t.jpeg',  // Kart 3 için resim
      title: 'Lizard 3',  // Kart 3 için başlık
      description: 'There are over 6,000 species of lizards in the world, each with its own unique traits.',  // Kart 3 için açıklama
    },
    {
      id: 4,
      image: './photos/image4.jpg',  // Kart 4 için resim
      title: 'Lizard 4',  // Kart 4 için başlık
      description: 'Lizards are often characterized by their long bodies, tails, and scaly skin.',  // Kart 4 için açıklama
    },
    {
      id: 5,
      image: './photos/image5.jpg',  // Kart 5 için resim
      title: 'Lizard 5',  // Kart 5 için başlık
      description: 'Lizards can be found in almost every part of the world, except Antarctica.',  // Kart 5 için açıklama
    },
    {
      id: 6,
      image: './photos/image6.jpg',  // Kart 6 için resim
      title: 'Lizard 6',  // Kart 6 için başlık
      description: 'Lizards are fascinating creatures with remarkable adaptations to their environments.',  // Kart 6 için açıklama
    },
  ];

  return (
    <Grid 
      container 
      spacing={2} 
      justifyContent="center" // Yatayda ortalama
      alignItems="center" // Dikeyde ortalama
      sx={{ minHeight: '100vh', paddingTop: 14 }} // Ekran yüksekliğini kapsayacak şekilde ayarlama ve üst padding ekleme
    >
      {cards.map((card) => (
        <Grid item xs={12} sm={6} md={3} key={card.id} sx={{ ml: 2 }}> {/* Sol tarafta boşluk */}
          <Card sx={{ maxWidth: 345, padding: 2 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="200"  // Resmin yüksekliğini sabitliyoruz
                image={card.image}  // Dinamik görsel kullanımı
                alt={card.title}  // Dinamik alt metin kullanımı
                sx={{ objectFit: 'cover' }}  // Resmi alana uyacak şekilde kırpıyoruz
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {card.title} {/* Dinamik başlık */}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  {card.description} {/* Dinamik açıklama */}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
