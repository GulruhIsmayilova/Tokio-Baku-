import React from "react";
import { useParams } from "react-router-dom";
import { Container, Typography } from "@mui/material";
import "./TeacherDetails.css";

const TeacherDetails = () => {
  const { teacherId } = useParams();

  const teacherData = {
    agayev: {
      name: "Agayev Sirac",
      image: "/photos/sirasensei.jpeg",
      info: `
      Agayev Sirac, Tokyo Baku Yapon Dili Kursunun rəhbəridir. 
      Yaponiyada 4 ildir yaşayaraq, qısa müddət ərzində Yapon dili imtahanının ən yüksək N1 səviyyəsini əldə edib. 
      Bakı Dövlət Universitetini bitirdikdən (2014-2018) sonra Yaponiyanın Osaka Universitetində təhsil alıb (2019-2020). 
      Hazırda isə keçmiş səfirin şirkətində ticarət sahəsində fəaliyyət göstərir. Eyni zamanda 6 ildir yapon dilini tədris edir.
    `,
  },

    muellim2: {
      name: "Naoya Matsumoto",
      image: "/photos/sensei 2.jpg",
      info: "Kitamura Hinako, Yaponiyanın Osaka şəhərində doğulub və Osakada yaşayır. 1 il’ə yaxındır ki, Tokyo Baku’da müəllim kimi fəaliyyət göstərir.",
    },
    aliaga: {
      name: "Aliağa Abasov",
      image: "/photos/eliaga.jpg",
      info: "Aliağa Abasov (25.11.2000), 2018-2022 Azərbaycan Dillər Universiteti bitirib. 2021-2022 illərində Yes Academy Yapon dili müəllimi olub. 2022-2023 illərində Yaponiyada, Nanzan Universitetində təhsil alıb. Dil səviyyəsi JLPT N2-dir. Hal-hazırda Yaponiyada işləyir.",
  },
    muellim4: {
      name: "Məmmədli Abdulxələf",
      image: "/photos/sensei.jpeg",
      info: "Məmmədli Abdulxələf, 2016-2020’ci illər ərzində BDU Şərqşünaslıq fakültəsi Yaponiya bölməsində təhsil alıb. 2019-2020’ci illərdə Qunma Universitetində, 2021-2022ci illərdə isə Osaka Universitetində təhsil alıb. 2 dəfə Yaponiyada Bakalavr pilləsi üzrə təhsil alıb. Hazırda Yaponiyanın Osaka şəhərində yaşayır və Kyoto şəhərində işləyir. 2’ildir Tokyo Baku’da müəllim kimi fəaliyyət göstərir. Dil səviyyəsi JLPT N1-dir.",
    },
    murad: {
      name: "Murad Nəsirov",
      image: "/photos/murad.jpeg",
      info: "Murad Nəsirov (1997.01.01), Bakı Dövlət Universiteti Şərqşünaslıq, Yaponiya (2014-2019) bitirib. 2017-2018 illərində Hiroshima Universitetində, 2021-2023 illərində isə Kanagawa Universitetində təhsil alıb. Dil səviyyəsi JLPT N2-dir.",
    },
    naoya: {
      name: "Naoya Matsumoto",
      image: "/photos/8142f544-80b8-4159-8731-4f3cd938aa19.jpeg",
      info: "Naoya Matsumoto (29 yaş), hal-hazırda Tokyoda işləyir. Tokyo Baku kursunda Yapon müəllimi kimi fəaliyyət göstərir.",
    },
  };

  const teacher = teacherData[teacherId];

  if (!teacher) {
    return (
      <Container>
        <Typography variant="h5" align="center">
          Müəllim tapılmadı.
        </Typography>
      </Container>
    );
  }

  return (
    <Container className="teacher-details-container">
        <div className="gradient-line-left"></div> {/* Sol çizgi */}
      
      <Typography variant="h4" component="h1" gutterBottom align="center">
        {teacher.name}
      </Typography>
      <div className="teacher-details">
        <img src={teacher.image} alt={teacher.name} className="teacher-image" />
        <div className="teacher-info">
          <Typography variant="body">{teacher.info}</Typography>
        </div>
      </div>
      <div className="gradient-line-right"></div> {/* Sağ çizgi */}
    </Container>
    
    
  );
};

export default TeacherDetails;
