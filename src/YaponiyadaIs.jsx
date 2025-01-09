import React from "react";
import { Box, Typography, Card, CardContent, CardMedia } from "@mui/material";

const YaponiyadaIsAxtarisi = () => {
  return (
    <Box
      sx={{
        width: "100vw",
        minHeight: "100vh",
        bgcolor: "white",
        pt: 20, // Üst padding
        px: 4, // Sağ və sol padding
        pb: 6, // Alt padding
      }}
    >
      <Typography
        variant="h2"
        fontWeight="bold"
        gutterBottom
        align="center"
        sx={{ mb: 6 }}
      >
        Yaponiyada İş Axtarışı
      </Typography>

      <Typography
  variant="h6"
  color="text.secondary"
  align="center"
  sx={{
    mb: 6,
    maxWidth: "900px",
    mx: "auto",
    fontSize: "1.2rem",
  }}
>
  <strong>Yaponiyada İş Axtarışı:</strong> Yapon şirkətində birbaşa iş tapmaq mümkündür. 
  Bunun üçün əsas proses aşağıdakı kimidir: Yapon dilini öyrənmək, onlayn olaraq Yapon 
  şirkətləri ilə müsahibə keçmək, müsahibədən müvəffəqiyyətlə keçmək, viza prosedurlarını 
  həyata keçirmək, Yaponiyaya gəlmək və işə başlamaq. 

  Yapon dilini öyrənmək müddəti fərqli insanlar üçün müxtəlif olsa da, ümumi prosedurlar 
  adətən <strong>6 ay</strong> çəkir. İşə qəbul zamanı viza tələblərinə görə Yapon dili 
  səviyyəsi dəyişir. <strong>Xüsusi Bacarıq Vizası</strong> üçün minimum <strong>N4 səviyyəsi</strong> 
  tələb olunur. <strong>Texnologiya, Humanitar Elmlər və Beynəlxalq Viza</strong> üçün isə minimum 
  universitet məzunu olmaq və Yapon dilində normal ünsiyyət bacarığına sahib olmaq şərtdir. 

  Xüsusi Bacarıq Vizası yalnız xidmət sahələrinə aid olsa da, 
  Texnologiya, Humanitar Elmlər və Beynəlxalq Viza daha geniş sahələrdə iş imkanları təqdim edir. 
  Ətraflı məlumat üçün <em>əlaqə saxlayın</em>.
</Typography>

      <Box
        sx={{
          display: "flex",
          gap: 6,
          justifyContent: "center",
          flexWrap: "wrap",
          px: 2,
          pt: 5,
        }}
      >
        {/* İlk Kart */}
        <Card sx={{ width: 450, boxShadow: 5 }}>
          <CardMedia
            component="img"
            height="200"
            image="./photos/Japanese-Classes-1024x686.jpg" // Bu resmi dəyişdirin
            alt="Yapon Dilini Öyrənmək"
          />
          <CardContent sx={{ padding: "20px" }}>
            <Typography
              variant="h5"
              fontWeight="bold"
              sx={{ marginBottom: "10px" }}
            >
              Yapon Dilini Öyrənmək
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Yapon dilini öyrənmək, Yaponiyada iş tapmağın ilkin mərhələsidir.
              Bu proses fərqli insanlar üçün 6 ay və ya daha uzun çəkə bilər.
            </Typography>
          </CardContent>
        </Card>

        {/* İkinci Kart */}
        <Card sx={{ width: 450, boxShadow: 5 }}>
          <CardMedia
            component="img"
            height="200"
            image="./photos/shutterstock_2066562596.jfif" // Bu resmi dəyişdirin
            alt="Onlayn Müsahibələr"
          />
          <CardContent sx={{ padding: "20px" }}>
            <Typography
              variant="h5"
              fontWeight="bold"
              sx={{ marginBottom: "10px" }}
            >
              Onlayn Müsahibələr
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Onlayn olaraq Yapon şirkətləri ilə müsahibə keçirərək iş
              imkanlarını araşdıra bilərsiniz.
            </Typography>
          </CardContent>
        </Card>

        {/* Üçüncü Kart */}
        <Card sx={{ width: 450, boxShadow: 5 }}>
          <CardMedia
            component="img"
            height="200"
            image="./photos/visa-application-composition-with-europe-america-flag-scaled.jpg" // Bu resmi dəyişdirin
            alt="Viza Prosedurları"
          />
          <CardContent sx={{ padding: "20px" }}>
            <Typography
              variant="h5"
              fontWeight="bold"
              sx={{ marginBottom: "10px" }}
            >
              Viza Prosedurları
            </Typography>
            <Typography variant="body1" color="text.secondary">
              İşə qəbul olunduqdan sonra, Yaponiyada işləmək üçün viza
              prosedurlarını yerinə yetirmək lazımdır.
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default YaponiyadaIsAxtarisi;
