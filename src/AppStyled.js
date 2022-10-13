import styled from 'styled-components'
import Fab from "@mui/material/Fab";
import paredequeimada from "./assets/paredequeimada.jpg"
import edificioscomerciais from "./assets/edificioscomerciais.jpg"
import apertodemao from "./assets/apertodemao.jpg"
import cinzaqueimado from "./assets/cinzaqueimado.jpg"
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

export const ImgImoveis = styled.div`
width: 100%;
min-height: 140vh;
display: flex;
margin-left: 0%;
margin-right: 0%;
margin-top: 0%;
opacity: 1;
background-image: url(${paredequeimada});
background-position: center;
`
export const ParedeQueimada = styled.div`
min-width: 100%;
height: 65vw;
display: flex;
margin-left: 0%;
margin-right: 0%;
margin-top: 0%;
background-image: url(${apertodemao});
background-position: center;
`
export const FechandoNegocio = styled.div`
width: 100%;
height: 130vh;
display: flex;
margin-left: 0%;
margin-right: 0%;
margin-top: 0%;
opacity: 1;
flex-direction: row;
justify-content: center;
background-image: url(${edificioscomerciais});
`
export const StyledButtonFooter = styled.div`
display: flex;
justify-items: end;
`
export const StyledButtonInsta = styled.img`
width: 43px;
display: flex;
justify-content: space-between;
`
export const StyledButtonFace = styled.img`
width: 39px;
display: flex;
justify-content: space-between;
`
export const StyledButtonEmail = styled.img`
width: 58px;
display: flex;
justify-content: space-between;
`
export const BottonWhatsapp = styled(Fab)`
position: fixed !important;
right: 20px;
bottom: 20px;
z-index: 3;
`
export const Texto = styled.label`
  position: absolute;
  top: 145px;
  right: 20px;
  font-size: 40px;
  color: black;
  text-shadow: 0px 0px 5px black;
  z-index: 3;
`
