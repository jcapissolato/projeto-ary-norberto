import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { ThemeProvider } from "@mui/material";
import theme from "./constants/theme";
import logo from "./assets/logo.png"
import edificioscomerciais from "./assets/edificioscomerciais.jpg"
import direitocivil from "./assets/apertodemao.jpg"
import { LogoStyle, LogoBack, BackGround, FechandoNegocio, ImgImoveis } from "./AppStyled";


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
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            </Typography>
            <button >Contato</button>
            {/* <Button variant="text">Text</Button> */}
            <button>Endereço</button>
          </Toolbar>
        </AppBar>
      </Box>
      <LogoBack img src={logo} />
      <ImgImoveis img src={edificioscomerciais} />
      <FechandoNegocio img src={direitocivil}/>
    </ThemeProvider>

  );
}

export default App;
