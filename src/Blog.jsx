import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Grid from '@mui/material/Grid';

export default function ActionAreaCards() {
  const cards = [
    {
      id: 1,
      image: './photos/DALL·E 2024-12-12 18.22.45 - A cartoon-style illustration depicting a person walking away from a project. The person appears thoughtful, with their back turned toward a table fill.webp',
      title: '手を引く　てをひく',
      description: (
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
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
      ),
    },
    {
      id: 2,
      image: './photos/1740030 (1).jpg',
      title: '手間がかかる',
      description: (
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          <strong>てまがかかる
            <br />
          </strong>
          əziyyət tələb edir, vaxt aparır.
          <br />
          そんなことは手間がかかる
          <br />
          <strong>Sonna koto wa tema ga kakaru</strong>
          <br />
          elə şeylər əziyyət tələb edir.
        </Typography>
      ),
    },
    {
      id: 3,
      image: './photos/f51e98bae6c20430ef9bc124bb7f9665_t.jpeg',
      title: '山積み　やまづみ',
      description: (
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          やまづみ
          <br />
          宿題は山積みで、終わらない
          <br />
          <strong style={{ color: 'red' }}>
            Ev Tapşırıqları dağ kimi yığılıb, bitmir.
          </strong>
          <br />
          宿題は山積みで、終わらない
          <br />
          
        </Typography>
      ),
    },
    {
      id: 4,
      image: './photos/card.jfif',
      title: '言葉を遮る',
      description:
      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
    ことばをさえぎる
      <br />
      Kotoba’wo saegiru
      <br />
      <strong style={{ color: 'red' }}></strong>
      <strong> 相手の言葉を遮るのはよくないことだ。</strong>
      <br />
      Qarşı tərəfin sözün kəsmək yaxşı deyil.
    </Typography>
    },
    {
      id: 5,
      image: './photos/image5.jpg',
      title: 'Lizard 5',
      description:
        'Lizards can be found in almost every part of the world, except Antarctica.',
    },
    {
      id: 6,
      image: './photos/image6.jpg',
      title: 'Lizard 6',
      description:
        'Lizards are fascinating creatures with remarkable adaptations to their environments.',
    },
    {
      id: 5,
      image: './photos/image5.jpg',
      title: 'Lizard 5',
      description:
        'Lizards can be found in almost every part of the world, except Antarctica.',
    },
    {
      id: 6,
      image: './photos/image6.jpg',
      title: 'Lizard 6',
      description:
        'Lizards are fascinating creatures with remarkable adaptations to their environments.',
    },
  ];
    


  return (
    <Grid 
      container 
      spacing={4} 
      justifyContent="center" 
      alignItems="flex-start" 
      sx={{
        minHeight: '100vh',
        padding: 2,
        paddingTop: 15, // İç kenar boşluğu
      }}
    >
      {cards.map((card) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={card.id}>
          <Card sx={{ maxWidth: 345, mx: 'auto' }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="200"
                image={card.image}
                alt={card.title}
                sx={{ objectFit: 'cover' }}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {card.title}
                </Typography>
                {card.description}
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
