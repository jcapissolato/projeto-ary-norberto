import React from "react";
import { BackGround, LogoBack, Styledtextoprincipal, Textoprincipal } from "./styled";
import logo from "../../assets/logo.png"

export default function Home() {
    return (
        <BackGround>
        <LogoBack img src={logo} />
        <Textoprincipal>
          <Styledtextoprincipal>
            <>
              O direito imobiliário é um ramo do direito privado que aponta as
              relações jurídicas e de direito que envolvam a posse, compra,
              venda, doação, sucessão, troca e propriedade de bens imóveis,
              inclusive a incorporação imobiliária
            </>
          </Styledtextoprincipal>
        </Textoprincipal>
      </BackGround>
    );
  }