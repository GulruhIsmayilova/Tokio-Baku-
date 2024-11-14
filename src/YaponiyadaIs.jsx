import React from 'react';
import { Typography, Box, Grid } from '@mui/material';
import './YaponiyadaIs.css';

function YaponiyadaIs() {
  return (
    <Box className="full-screen">
      <Grid container className="grid-container">
        {/* Sol tərəf: Yazılar */}
        <Grid item xs={12} md={6} className="left-side">
          <Box className="text-content">
            <Typography variant="h2" className="heading">
              Yaponiyada İş
            </Typography>
            <hr className="divider" />
            <Typography variant="body1" className="description">
              Yaponiyada iş tapmaq və iş imkanlarından istifadə etmək istəyirsiniz? 
              Burada sizə lazım olan bütün məlumatları tapacaqsınız. 
              Bizimlə əlaqə saxlayaraq daha çox məlumat əldə edə bilərsiniz.
            </Typography>
          </Box>
        </Grid>

        {/* Sağ tərəf: Arxa fon şəkli */}
        <Grid item xs={12} md={6} className="right-side" />
      </Grid>
    </Box>
  );
}

export default YaponiyadaIs;
