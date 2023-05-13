import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import logo from "../../ativos/logo.png";
import { LogoStyle } from "./styled";
import { StyledToolbar } from "./styled";
import { ButtonGroup } from "@mui/material";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


export default function Footer() {
  return (
    <AppBar position="static">
      <StyledToolbar>
          <LogoStyle img src={logo} />
      <h5 >2023 - Ary Norberto Silva. Todos os direitos reservados. Criação de sites - Full Stack Developer Jorge Pissolato</h5>
      </StyledToolbar>
    </AppBar>
  );
}