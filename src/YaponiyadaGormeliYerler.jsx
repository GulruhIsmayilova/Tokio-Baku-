import React, { useState, useEffect } from "react";
import { FaTrain, FaMapMarkerAlt, FaWalking, FaHotel, FaPlane } from "react-icons/fa";

const slideshowImages = [
  { name: "Tokio", image: "/photos/sakura_night.webp" },
  { name: "Kyoto", image: "/photos/d9eacf69-0497-4c11-9644-131738c77e0c.webp" },
  { name: "Osaka", image: "/photos/Dotonbori_Osaka_Nightlife_Neon_Lights.webp" },
  { name: "Hokkaido", image: "/photos/blue-pond-2.jpg" },
];

const galleryImages = [
  { image: "/photos/32e35611-b099-4d10-be5a-68fcd7011c2b.webp", title: "Tokio Qülləsi", description: "Yaponiyanın paytaxtında möhtəşəm mənzərə." },
  { image: "/photos/kyoto.webp", title: "Kyoto Məbədi", description: "Sakitləşdirici bir məbədin görüntüsü." },
  { image: "/photos/sakura.webp", title: "Sakura Çiçəkləri", description: "Sakura ağacları altında gəzinti." },
  { image: "/photos/fui.webp", title: "Fuji Dağı", description: "Yaponiyanın ən məşhur dağ mənzərəsi." },
  { image: "/photos/osaka.webp", title: "Osaka Qalası", description: "Osakanın tarixi qalası." },
  { image: "/photos/qar.webp", title: "Hokkaydo Qar Mənzərəsi", description: "Qışda Hokkaydo adasının qar mənzərələri." },
  { image: "/photos/geceler.webp", title: "Tokio Gecə Həyatı", description: "Tokionun işıqlı gecə həyatı." },
  { image: "/photos/bag.webp", title: "Kyoto Bağı", description: "Kyotodakı sakit bağ." },
  { image: "/photos/kuce.webp", title: "Osaka Küçə Yeməkləri", description: "Osakanın dadlı küçə yeməkləri." },
  { image: "/photos/nara.webp", title: "Nara Parkı", description: "Nara parkında sərbəst dolaşan marallar." },
  { image: "/photos/shibuya.webp", title: "Shibuya Keçidi", description: "Tokionun məşhur Shibuya kəsişməsi." },
  { image: "/photos/bambuk.webp", title: "Arashiyama Bambuk Meşəsi", description: "Kyotodakı məşhur bambuk meşəsi." },
];

const YaponiyadaGormeliYerler = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatic Slide Transition
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slideshowImages.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slideshowImages.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slideshowImages.length) % slideshowImages.length
    );
  };
  

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
        padding: "170px",
        minHeight: "100vh",
        backgroundColor: "#ffffff",
        width: "100vw",
        boxSizing: "border-box",
      }}
    >
     

      {/* Header */}
    
      <div
  style={{
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "20px",
    flexWrap: "wrap",
  }}
>{/* Left Text Section */}
<div
  style={{
    flex: "1 1 50%",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
  }}
>
  <h2
    style={{
      fontSize: "2.2rem",
      marginBottom: "20px",
      color: "#333",
      textAlign: "left",
    }}
  >
    Məlumatlar və <em>Tövsiyələr</em>
  </h2>
  <p
    style={{
      fontSize: "1.1rem",
      lineHeight: "1.8",
      color: "#555",
      textAlign: "left",
    }}
  >
    {currentIndex === 0 && (
      <span>
        <em style={{ color: "red",fontWeight: "bold"  }}>Tokio</em>, Yaponiyanın paytaxtı və ən böyük şəhəridir. Şəhər
        yüksək texnologiyalı həyat tərzi, neon işıqları, qədim məbədləri və
        müasir memarlığı ilə tanınır. <strong>Şibuya Keçidi</strong>, dünyanın ən məşhur
        piyada keçidlərindən biridir. Tokio Qülləsi və Skytree Tokio şəhərinin
        möhtəşəm mənzərələrini təqdim edir. <strong>Asakusa</strong> və <strong>Sensoji Məbədi</strong> tarixi
        abidələrdir. <strong>Harajuku</strong> gənclər üçün dəb mərkəzi, <strong>Akihabara</strong> isə texnologiya
        və otaku mədəniyyətinin evidir. <strong>Tsukiji</strong> bazarı dünyanın ən təzə suşi ilə
        məşhurdur. Şəhər həmçinin çoxlu park və bağlarla zəngindir, məsələn,
        <strong>Ueno Parkı</strong> və <strong>Yoyogi Parkı</strong>.
      </span>
    )}
    {currentIndex === 1 && (
      <span>
        <em style={{ color: "red",fontWeight: "bold"  }}>Kyoto</em>, Yaponiyanın qədim paytaxtı və mədəniyyət mərkəzidir. Şəhər
        <strong>geişa</strong> mədəniyyəti, ənənəvi çay mərasimləri və tarixi məbədləri ilə
        məşhurdur. <strong>Fushimi Inari Taisha</strong> minlərlə qırmızı torii qapıları ilə
        tanınır. <strong>Kinkaku-ji</strong> (Qızıl Pavilyon) və <strong>Ginkaku-ji</strong> (Gümüş
        Pavilyon) kimi məşhur məbədlər turistlərin diqqətini çəkir. <strong>Arashiyama
        Bambuk Meşəsi</strong> möhtəşəm mənzərələr təqdim edir. <strong>Gion</strong>, ənənəvi
        geişa rayonudur və burada köhnə Kyoto atmosferini hiss edə bilərsiniz.
        <strong>Kyoto Bağları</strong> və <strong>Kiyomizu-dera</strong> məbədi sakitlik və təbiət
        sevgisini birləşdirir.
      </span>
    )}
    {currentIndex === 2 && (
      <span>
        <em style={{ color: "red",fontWeight: "bold"  }}>Osaka</em>, Yaponiyanın qastronomiya və əyləncə paytaxtı sayılır.
        <strong>Dotonbori</strong> bölgəsi, neon işıqları və küçə yeməkləri ilə doludur.
        <strong>Osaka Qalası</strong>, şəhərin tarixi simvollarından biridir.
        <strong>Kuromon Bazar</strong> ziyarətçilərə təzə və dadlı dəniz məhsulları
        təqdim edir. <strong>Universal Studios Japan</strong>, ailələr üçün əyləncə dolu
        bir məkandır. <strong>Aquarium Kaiyukan</strong>, dünyanın ən böyük akvariumlarından
        biridir. Osaka həmçinin <strong>okonomiyaki</strong> və <strong>takoyaki</strong> kimi
        məşhur Yapon yeməkləri ilə tanınır.
      </span>
    )}
    {currentIndex === 3 && (
      <span>
        <em style={{ color: "red",fontWeight: "bold"  }}>Hokkaido</em>, Yaponiyanın ən şimal adasıdır və təbii gözəllikləri ilə
        məşhurdur. <strong>Sapporo</strong>, Qış Olimpiya Oyunlarına ev sahibliyi etmiş
        və qış festivalları ilə tanınan şəhərdir. <strong>Furano</strong>, lavanda
        tarlaları ilə məşhurdur, <strong>Biei</strong> isə rəngarəng təbiəti ilə göz
        oxşayır. <strong>Niseko</strong>, xizək və qış idmanlarını sevənlər üçün ideal
        bir yerdir. <strong>Otaru</strong>, tarixi kanalları və dadlı dəniz məhsulları
        ilə tanınır. Yay mövsümündə təbiət yürüşləri və qışda xizək kurortları ilə
        Hokkaido ziyarətçilərə fərqli təcrübələr təqdim edir.
      </span>
    )}
  </p>
  <div style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}>
  {slideshowImages.map((_, index) => (
    <span
      key={index}
      onClick={() => setCurrentIndex(index)}
      style={{
        cursor: "pointer",
        padding: "5px",
        margin: "0 5px",
        borderRadius: "50%",
        backgroundColor: currentIndex === index ? "#333" : "#ddd",
        width: "10px",
        height: "10px",
        display: "inline-block",
      }}
    ></span>
  ))}
</div>

</div>



  {/* Right Slideshow Section */}
  <div
    style={{
      flex: "1 1 45%",
      position: "relative",
      borderRadius: "15px",
      overflow: "hidden",
      boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
    }}
  >
    <div
      style={{
        backgroundImage: `url(${slideshowImages[currentIndex].image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "400px",
      }}
    ></div>
    <span
      onClick={handlePrev}
      style={{
        position: "absolute",
        top: "50%",
        left: "10px",
        transform: "translateY(-50%)",
        fontSize: "1.5rem",
        color: "#ffffff",
        cursor: "pointer",
        userSelect: "none",
      }}
    >
      &#8249;
    </span>
    <span
      onClick={handleNext}
      style={{
        position: "absolute",
        top: "50%",
        right: "10px",
        transform: "translateY(-50%)",
        fontSize: "1.5rem",
        color: "#ffffff",
        cursor: "pointer",
        userSelect: "none",
      }}
    >
      &#8250;
    </span>
  </div>
</div>

    

      {/* Photo Gallery */}
      <div style={{ marginTop: "50px" }}>
        <h2 style={{ fontSize: "2rem", marginBottom: "20px", color: "#333" }}>
          Foto Qalereya
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "20px",
            padding: "0 20px",
          }}
        >
          {galleryImages.map((item, index) => (
            <div key={index} style={{ textAlign: "center", position: "relative" }}>
              <div
                style={{
                  height: "250px",
                  backgroundImage: `url(${item.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  borderRadius: "10px",
                  boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
                  cursor: "pointer",
                  transition: "transform 0.3s ease-in-out",
                }}
                onMouseEnter={(e) => e.target.style.transform = "scale(1.05)"}
                onMouseLeave={(e) => e.target.style.transform = "scale(1)"}
              ></div>
              <h3 style={{ marginTop: "10px", fontSize: "1.2rem", color: "#333" }}>
                {item.title}
              </h3>
              <p style={{ fontSize: "0.9rem", color: "#555" }}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
      
{/* New Section for Tokio */}
<div style={{ marginTop: "50px", backgroundColor: "#f9f9f9", padding: "30px", maxWidth: "800px", marginLeft: "auto", marginRight: "auto", textAlign: "center" }}>
  <h2 style={{ fontSize: "2rem", marginBottom: "20px", color: "#333" }}>Tokioya Aid Məlumatlar</h2>
  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px", textAlign: "center" }}>
    <div style={{ backgroundColor: "#fff", padding: "20px", borderRadius: "10px", boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)" }}>
      <FaTrain size={30} color="#0077cc" />
      <h3>İctimai Nəqliyyat</h3>
      <p>Tokio Metro sistemi şəhər daxilində ən rahat və sürətli üsuldur. Suica və Pasmo kartları ilə ödəniş daha asandır. JR Yamanote xətti və tramvaylar da geniş istifadə olunur.</p>
    </div>
    <div style={{ backgroundColor: "#fff", padding: "20px", borderRadius: "10px", boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)" }}>
      <FaMapMarkerAlt size={30} color="#0077cc" />
      <h3>Gəziləcək Yerlər</h3>
      <p>Shibuya Crossing, Asakusa (Sensō-ji məbədi), Akihabara, Shinjuku və Tokio Qülləsi ən məşhur yerlərdəndir.</p>
    </div>
    <div style={{ backgroundColor: "#fff", padding: "20px", borderRadius: "10px", boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)" }}>
      <FaWalking size={30} color="#0077cc" />
      <h3>Gəzintilər</h3>
      <p>Imperial Sarayı, Tsukiji Balıq Bazarı, Ueno Parkı və Odaiba Adası Tokio boyunca görməli yerlərdəndir.</p>
    </div>
    <div style={{ backgroundColor: "#fff", padding: "20px", borderRadius: "10px", boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)" }}>
      <FaHotel size={30} color="#0077cc" />
      <h3>Otellər</h3>
      <p>The Ritz-Carlton, Tokyu Stay Shinjuku, və Hoshinoya kimi otellər müasir və komfortlu seçimlərdir.</p>
    </div>
    <div style={{ backgroundColor: "#fff", padding: "20px", borderRadius: "10px", boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)" }}>
      <FaPlane size={30} color="#0077cc" />
      <h3>Hava Nəqliyyatı</h3>
      <p>Narita və Haneda hava limanları Tokioya çatmaq üçün ən uyğun yollardır. Skyliner və Narita Express şəhər mərkəzinə rahat çatdırır.</p>
    </div>
  </div>
</div>

    </div>
  );
};

export default YaponiyadaGormeliYerler;
