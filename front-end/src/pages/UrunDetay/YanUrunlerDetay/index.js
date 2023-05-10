import React from "react";
import { Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import UrunDetaySagKisim from "../../../components/UrunDetayComponent/UrunDetaySagKisim";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
function YanUrunlerDetay() {
  const urunDetaylari = {
    urunAdi: "Çiftlik Evi (Büyük)",
    urunDetayi:"Efsane Belçika Çikolatası",
    urunOzellikler: "Pizza sosu, mozzarella peyniri, salam, mantar",
    resimUrl: "https://raw.githubusercontent.com/SDU-Bilgisayar-Muhendisligi/PieCentralPizza/zehra/photos/urunler/pizzalar/ciftlik-evi.jpg",
    urunFiyat:"149.90 TL"
  };
  const theme = useTheme();
  const isLgOrMd = useMediaQuery(theme.breakpoints.down('md'));
  

  
  return (
    <Container maxWidth="lg" sx={{ mt: 15, mb: isLgOrMd ? 15 : 30 }}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>

          <Grid item xs={12} md={6}>
            <Typography sx={{ fontWeight: "bold", fontSize: '30px' }}>{urunDetaylari.urunAdi}</Typography>
            <Typography variant="body2" color="text.secondary">{urunDetaylari.urunDetayi}</Typography>
            <Typography sx={{ fontWeight: "bold", mt: 3 }}>İçindekiler</Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>{urunDetaylari.urunOzellikler}</Typography>

          </Grid>
          <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',height: '360px'}} maxWidth={'100%'}>
          <UrunDetaySagKisim resimUrl={urunDetaylari.resimUrl} urunFiyat={urunDetaylari.urunFiyat}></UrunDetaySagKisim>
            
          </Grid>

        </Grid>
      </Box>
    </Container>
  );
};

export default YanUrunlerDetay