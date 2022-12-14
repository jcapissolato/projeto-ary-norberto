import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import logo from "../../assets/logo.png";
import { LogoStyle } from "./styled";
import { StyledToolbar } from "./styled";
import { ButtonGroup } from "@mui/material";

export default function Header() {
  return (
    <AppBar position="fixed">
      <StyledToolbar>
        
          <LogoStyle img src={logo} />
        
        <ButtonGroup variant="">
          <Button href="#home">Home</Button>
          <Button href="#eu" >Quem sou eu </Button>
          <Button href="#atuacao">Atuação</Button>
          <Button href="#contato">Contato</Button>
        </ButtonGroup>
      </StyledToolbar>
    </AppBar>
  );
}


