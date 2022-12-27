import React from "react";
import {
  Atendimento,
  BackGround,
  LogoBack,
  StyledText,
  Styledtextoprincipal,
  Textoprincipal,
} from "./styled";
import logo from "../../assets/logo.png";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { corWhatsapp } from "../../constants/colors";
import { Button } from "@mui/material";


export default function Home() {
  return (
    <BackGround>
      <LogoBack img src={logo} />
      <Textoprincipal>
        <Styledtextoprincipal>
          <StyledText>
            O direito imobiliário é um ramo do direito privado que aponta as
            relações jurídicas e de direito que envolvam a posse, compra, venda,
            doação, sucessão, troca e propriedade de bens imóveis, inclusive a
            incorporação imobiliária
          </StyledText>
        </Styledtextoprincipal>
      </Textoprincipal>

      <Atendimento>
      <Button 
      variant="contained" 
      onClick={() => window.open(`https://wa.me/5565992933370 `)}
      >
      Solicite um atendimento
      <WhatsAppIcon />
        </Button>
      </Atendimento>
      <hr />
    </BackGround>
  );
}
