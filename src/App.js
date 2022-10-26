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
import { corWhatsapp } from "./constants/colors";
import Footer from "./components/footer/Footer";
import Contato from "./components/contato/Contato";

 
// const onClick = () => {
//   location.href = `wa.link/wq9hw4`
// }


const App = () => {
  
  // function onClickWhatsapp = () => {
  //   window.location.href = `wa.link/wq9hw4`
  // }

  return (
    <ThemeProvider theme={theme}>

      <Header />
      <div id="home"></div>
      <Home/>
      <hr/>
      
      <FechandoNegocio>
      <div id="eu"></div>
        <QuemSouEu/>
      </FechandoNegocio>
      
      <ImgImoveis>
      <div id="atuacao"></div>
        <Atuacao />
      </ImgImoveis>
      
      <ParedeQueimada>
      <div id="contato"></div>
        <Contato/>
      </ParedeQueimada>
    
      <BottonWhatsapp 
      onClick={()=>(window.open(`https://wa.me/5565992933370 `))}
      color="secondary"
      >
        <WhatsAppIcon />
      </BottonWhatsapp>
      
      <Footer/>

    </ThemeProvider>
  );
};

export default App;
