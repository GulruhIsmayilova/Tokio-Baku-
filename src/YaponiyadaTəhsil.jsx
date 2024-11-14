import React from 'react';
import { Box, Typography, Card, CardContent, CardMedia } from '@mui/material';

const YaponiyadaTehsil = () => {
  return (
    <Box
      sx={{
        width: '100vw', // Tüm genişliği kaplar
        minHeight: '100vh', // Tüm yüksekliği kaplar
        bgcolor: 'white',
        pt: 20, // Üst padding (top padding) ekliyoruz
        px: 4, // Sağ ve sol padding
        pb: 6, // Alt padding (kartlar ile içerik arasındaki mesafeyi artırmak için)
      }}
    >
      <Typography variant="h2" fontWeight="bold" gutterBottom align="center" sx={{ mb: 6 }}>
        YaponiyadaTehsil
      </Typography>

      <Typography
        variant="h6" // Yazı boyutunu büyüttük
        color="text.secondary"
        align="center"
        sx={{
          mb: 6, // Metin ile kartlar arasındaki mesafeyi artırmak için mb (margin-bottom) kullanıldı
          maxWidth: '900px', // Daha geniş alan
          mx: 'auto',
          fontSize: '1.2rem', // Yazı boyutunu büyütüyoruz
        }}
      >
        Yapon dili məktəbinin təqdimatı.

        Öyrənmə müddəti: Minimum 1 il, 2-3 il də mövcuddur.
        Qəbul vaxtı: Yanvar, aprel, iyul, oktyabr – ildə 4 dəfə.
        Qəbul səviyyəsi: Məktəbin qəbul vaxtına görə dəyişir, ümumilikdə baslanğıc səviyyə ilə başlamaq mümkündür.
        Ödəniş: Məktəb və yataqxana ödənişlidir.Ödəniş məktəbin yerinə görə dəyişir
        Məktəb yerləri: Müxtəlif yerlərdədir, boş yerlərə görə dəyişir.
        Məktəbi bitirdikdən sonra: Peşə məktəbinə keçid və ya Yaponiyada iş tapmaq mümkündür.
        Müraciət: Prosedurların tamamlanması təxminən altı ay çəkir, ona görə də erkən əlaqə saxlayın.
      </Typography>

      <Box sx={{ display: 'flex', gap: 6, justifyContent: 'center', flexWrap: 'wrap', px: 2 ,pt: 5}}>
        {/* İlk Kart */}
        <Card sx={{ width: 450, boxShadow: 5 }}>
          <CardMedia
            component="img"
            height="200"
            image="./photos/how-to-read-japanese-novels (1).jpg" // Bu alanı gerçek bir resim URL'si ile değiştirebilirsiniz
            alt="Japonya'da Üniversite"
          />
          <CardContent sx={{ padding: '20px' }}>
            <Typography variant="h5" fontWeight="bold" sx={{ marginBottom: '10px' }}>
            Yapon Dili Məktəbi
            </Typography>
            <Typography variant="body1" color="text.secondary">
            Yapon dili məktəbləri sizə Yapon dilini mükəmməl öyrənmək və Yaponiyada təhsil almağa hazırlıq görmək imkanı verir.
            </Typography>
          </CardContent>
        </Card>

        {/* İkinci Kart */}
        <Card sx={{ width: 450, boxShadow: 5 }}>
          <CardMedia
            component="img"
            height="200"
            image="./photos/kanji-calligraphy-brush-1024x683.jpg" // Bu alanı gerçek bir resim URL'si ile değiştirebilirsiniz
            alt="Burs Olanakları"
          />
          <CardContent sx={{ padding: '20px' }}>
            <Typography variant="h5" fontWeight="bold" sx={{ marginBottom: '10px' }}>
            Dilin Səviyyəsi və Kurslar
            </Typography>
            <Typography variant="body1" color="text.secondary">
            Yapon dilini öyrənmək üçün müxtəlif səviyyələrdə kurslar mövcuddur, hər səviyyə üçün xüsusi proqramlar ilə dərslər keçirilir.
            </Typography>
          </CardContent>
        </Card>

        {/* Üçüncü Kart */}
        <Card sx={{ width: 450, boxShadow: 5 }}>
          <CardMedia
            component="img"
            height="200"
            image="./photos/pexels-photo-8199608.jpeg" // Bu alanı gerçek bir resim URL'si ile değiştirebilirsiniz
            alt="Yaşam ve Kültür"
          />
          <CardContent sx={{ padding: '20px' }}>
            <Typography variant="h5" fontWeight="bold" sx={{ marginBottom: '10px' }}>
            Məktəbin Təklif Etdiyi İmkanlar
            </Typography>
            <Typography variant="body1" color="text.secondary">
            Yapon dili məktəbləri tələbələrə həm dil öyrənmək, həm də Yapon mədəniyyətini daha yaxından tanımaq üçün imkanlar təqdim edir.
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default YaponiyadaTehsil;
