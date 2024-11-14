import React from "react";
import { Grid, Typography, Box } from "@mui/material";

const YaponiyadaTehsil = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        padding: 10,
        minHeight: "100vh", // Minimum səhifə hündürlüyü
        marginTop: 18, // Header ilə top hissə arasında boşluq
        backgroundColor: "#ffffff", // Ağ fon
      }}
    >
      <Grid container spacing={4}>
        {/* Sol tərəf - Mətnlər */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            padding: 3, // Daxili boşluq
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              color: "#1e1e1e", // Qara başlıq rəngi
              marginBottom: 2,
              padding: "0.5rem",
              backgroundColor: "rgb(245, 245, 245)", // Açıq qırmızı fon vurğusu
              borderRadius: "4px",
            }}
          >
            Yaponiyada Təhsil
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: "18px",
              color: "#1e1e1e", // Qara mətn rəngi
              lineHeight: 1.7,
              marginBottom: 2,
              fontWeight: "bold",
            }}
          >
            Yaponiyada təhsil, tələbələrə yüksək səviyyəli təhsil imkanları və
            unikal mədəni təcrübələr təqdim edir. Bu ölkə həm elm, həm də
            texnologiya sahəsində qabaqcıl tədris proqramları ilə tanınır.
            Universitetlərdə geniş seçimlər təklif edilir və tələbələr dünya
            səviyyəli akademik mənbələrdən yararlana bilərlər.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#555",
              lineHeight: 1.7,
              marginBottom: 2,
              fontSize: "18px",
              fontWeight: "bold",
            }}
          >
            Təqaüdlər, qəbul şərtləri və universitetlərin xüsusiyyətləri barədə
            daha ətraflı məlumat üçün bizimlə əlaqə saxlayın. Yaponiyada təhsil
            almaq arzunuzu həyata keçirmək üçün müvafiq resurslarla təmin
            olunacaqsınız.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#555",
              lineHeight: 1.7,
              fontSize: "18px",
              fontWeight: "bold",
            }}
          >
            Yaponiyada təhsil sisteminə qoşulmaq, yalnız akademik uğur deyil,
            həm də şəxsi inkişaf üçün geniş imkanlar yaradır. Qabaqcıl
            texnologiya, müxtəlif mədəniyyət və ənənələr sizə unikal təcrübə
            təqdim edəcək.
          </Typography>
        </Grid>

        {/* Sağ tərəf - Fon şəkil */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            backgroundImage:
              'url("./photos/title_international_applicants.jpg")', // Şəkilin URL-i
            backgroundSize: "cover", // Şəkilin ölçüsünü tənzimləyir
            backgroundPosition: "center", // Şəkilin mərkəzə yerləşməsi
            position: "relative",
            minHeight: "700px", // Minimum hündürlük
            borderRadius: 2, // Künclərin yumrulaşdırılması
            padding: 2,
            transition: "transform 0.5s, opacity 0.5s", // Hover effekti üçün transition
            opacity: 0.9, // Şəkilin opaklığı
            "&:hover": {
              transform: "scale(1.05)", // Hoverda böyümə effekti
              opacity: 1, // Hoverda şəklin daha açıq olması
            },
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 2,
            }}
          >
            <Typography
              variant="h6"
              sx={{
                color: "#fff", // Mətn rəngi
                textAlign: "center",
                padding: 3,
                fontWeight: "bold",
                backdropFilter: "blur(5px)", // Şəkil üstündə fon effekti
                backgroundColor: "rgba(0, 0, 0, 0.5)", // Mətn arxasına fon (qara şəffaflıq)
                borderRadius: "8px",
              }}
            >
              Yaponiyada təhsilə başla və gələcəyinə investisiya qoy!
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default YaponiyadaTehsil;
