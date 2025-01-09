// src/pages/Ugurlarimiz.jsx

import React from "react";
import { Grid, Card, CardContent, Typography, Box } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import LanguageIcon from "@mui/icons-material/Language";

const Ugurlarimiz = () => {
  const sections = [
    {
      title: "JLPT İmtahan Nəticələri",
      content: (
        <>
          <p>JLPT imtahanından 14 tələbəmiz keçib:</p>
          <ul>
            <li>6 nəfər JLPT N5</li>
            <li>5 nəfər JLPT N4</li>
            <li>2 nəfər JLPT N3</li>
            <li>1 nəfər JLPT N2</li>
          </ul>
        </>
      ),
      icon: <LanguageIcon style={{ fontSize: 60, color: "#4CAF50" }} />,
    },
    {
      title: "Yaponiya’da İş İmkanları",
      content: (
        <>
          <p>
            Hal-hazırda 4 həm yerlimiz, <b>Tokyo Baku</b> sayəsində Yaponiyada
            işlə təmin olunub və orada həyatlarını davam etdirirlər.
          </p>
        </>
      ),
      icon: <WorkIcon style={{ fontSize: 60, color: "#FF9800" }} />,
    },
    {
      title: "Yaponiya’da Təhsil",
      content: (
        <>
          <p>6 tələbəmiz hal-hazırda Yaponiyada dil məktəbində təhsil alır.</p>
          <p>
            3 tələbəmiz isə əvvəlki illərdə dil məktəbini bitirib. Yaponiya ilə
            Azərbaycan arasındakı əlaqələri möhkəmləndirmək məqsədilə
            fəaliyyətimiz <b>Cənab Vada Cüniçi</b> tərəfindən dəstəklənib. O,
            bizimlə birlikdə <b>Tokyo Baku</b> kursunda Azərbaycanlıların yapon
            dilini öyrənməsi, Yaponiya’da təhsil alması və işləməsi üçün
            əməkdaşlıq etməyə qərar verib.
          </p>
        </>
      ),
      icon: <SchoolIcon style={{ fontSize: 60, color: "#2196F3" }} />,
    },
  ];

  return (
    <Box
      sx={{
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        lineHeight: "1.6",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h2"
        sx={{ color: "#4CAF50", marginBottom: "20px", textAlign: "center" }}
      >
        Uğurlarımız
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {sections.map((section, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "20px",
                textAlign: "center",
                height: "100%",
              }}
            >
              <Box sx={{ marginBottom: "10px" }}>{section.icon}</Box>
              <CardContent>
                <Typography variant="h5" sx={{ marginBottom: "10px" }}>
                  {section.title}
                </Typography>
                <Typography variant="body1">{section.content}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Ugurlarimiz;
