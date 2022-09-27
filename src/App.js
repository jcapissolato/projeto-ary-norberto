import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { ThemeProvider } from "@mui/material";
import theme from "./constants/theme";
import logo from "./assets/logo.png";
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
import ButtonGroup from "@mui/material/ButtonGroup";
import {
  LogoStyle,
  LogoBack,
  BackGround,
  StyledButtonFooter,
  FechandoNegocio,
  StyledButtonInsta,
  StyledButtonFace,
  ImgImoveis,
  StyledButtonEmail,
  ParedeQueimada,
  BottonWhatsapp,
  CardEu,
  Textoprincipal,
  Styledtextoprincipal,
} from "./AppStyled";
import { corPrimaria, corSecundaria, corWhatsapp } from "./constants/colors";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <LogoStyle img src={logo} />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            ></Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "colum",
                alignItems: "flex-end",
                "& > *": {
                  m: 1,
                },
              }}
            >
              <ButtonGroup variant="contained" aria-label="text button group">
                <Button variant="text">
                  <b>Área de Atuação</b>
                </Button>
                <Button variant="text">
                  <b>Contato</b>
                </Button>
              </ButtonGroup>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      <BackGround>
        <LogoBack img src={logo} />
        <Textoprincipal>
          <Styledtextoprincipal>
            <>
              
                O direito imobiliário é um ramo do direito privado que apontam
                as relações jurídicas e de direito que envolvam a posse, compra,
                venda, doação, sucessão, troca e propriedade de bens imóveis,
                inclusive a incorporação imobiliária
             
            </>
          </Styledtextoprincipal>
        </Textoprincipal>
      </BackGround>
      <FechandoNegocio>
        <div>
          <h1>Quem Sou Eu</h1>
        </div>
      </FechandoNegocio>
      <ImgImoveis>
        <div>
          <h1>Área de Atuação</h1>
        </div>
      </ImgImoveis>
      <ParedeQueimada>
        <div>
          <h1>Localização</h1>
        </div>
      </ParedeQueimada>
      <BottonWhatsapp color={corWhatsapp}>
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
