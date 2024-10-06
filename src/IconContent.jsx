import React from 'react';
import { Grid, Typography } from '@mui/material';
import './IconContent.css'; // İkon içerik için CSS dosyası
import '@fortawesome/fontawesome-free/css/all.min.css'; // Font Awesome stil dosyası

const IconContent = () => {
  return (
    <Grid
      container
      style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
    >
      {/* İkonlar ve yazılar */}
      <Grid item xs={12} style={{ padding: '20px', textAlign: 'center' }}>
        <div className="icon-container">
          <div className="icon-item">
            <i className="fa-solid fa-user-group"></i> {/* Qrup için kullanıcı grubu ikonu */}
            <Typography variant="h6">Qrup</Typography>
            <Typography variant="body1">80 dəq</Typography>
            <Typography variant="body1">N5 - N1</Typography>
          </div>
          <div className="icon-item">
            <i className="fas fa-user"></i> {/* Fərdi için bireysel kullanıcı ikonu */}
            <Typography variant="h6">Fərdi</Typography>
            <Typography variant="body1">80 dəq</Typography>
            <Typography variant="body1">N5 - N1</Typography>
          </div>
          <div className="icon-item">
            <i className="fas fa-clock"></i> {/* Süre için saat ikonu */}
            <Typography variant="h6">80 dəq</Typography>
            <Typography variant="body1">Qrup / Fərdi</Typography>
            <Typography variant="body1">N5 - N1</Typography>
          </div>
          <div className="icon-item">
            <i className="fas fa-book-open"></i> {/* Eğitim için kitap ikonu */}
            <Typography variant="h6">N5 - N1</Typography>
            <Typography variant="body1">Yoxlama</Typography>
            <Typography variant="body1">Hədəf</Typography>
          </div>
        </div>
      </Grid>
    </Grid>
  );
};

export default IconContent;
