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
    <AppBar position="static">
      <StyledToolbar>
        <IconButton>
          <LogoStyle img src={logo} />
        </IconButton>
        <ButtonGroup variant="">
          <Button>Contato</Button>
          <Button>Atuação</Button>
          <Button>Endereço</Button>
        </ButtonGroup>
      </StyledToolbar>
    </AppBar>
  );
}


