import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { ThemeProvider } from "@mui/material";
import theme from "./constants/theme";
import edificioscomerciais from "./assets/edificioscomerciais.jpg";
import direitocivil from "./assets/apertodemao.jpg";
import instagram from "./assets/instagram.png";
import email from "./assets/email.png";
import facebook from "./assets/facebook.png";
import paredequeimada from "./assets/paredequeimada.jpg";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Fab from "@mui/material/Fab";
import NavigationIcon from "@mui/icons-material/Navigation";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import {
  StyledButtonFooter,
  FechandoNegocio,
  StyledButtonInsta,
  StyledButtonFace,
  ImgImoveis,
  StyledButtonEmail,
  ParedeQueimada,
  BottonWhatsapp,
  CardEu,
} from "./AppStyled";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import QuemSouEu from "./components/quem-sou-eu/QuemSouEu";
import Atuacao from "./components/area-de-atuacao/Atuacao";


const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Home />

      <FechandoNegocio>
        <QuemSouEu />
      </FechandoNegocio>

      <ImgImoveis>
        <Atuacao />
      </ImgImoveis>

      <ParedeQueimada>
        <div>
          <h1>Localização</h1>
        </div>
      </ParedeQueimada>
      <BottonWhatsapp>
        <WhatsAppIcon />
      </BottonWhatsapp>

      <AppBar position="columun">
        <Toolbar text-align="center">
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <StyledButtonInsta img src={instagram} />
          </IconButton>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <StyledButtonFace img src={facebook} />
          </IconButton>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <StyledButtonEmail img src={email} />
          </IconButton>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

export default App;
