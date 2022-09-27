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


export const LogoStyle = styled.img`
max-width: 120px;
display: flex;
position: relative;
align-items: center;
`
export const LogoBack = styled.img`
display: flex;
width: 55%;
height: 38%;
margin-left: 23%;
margin-right: 5%;
margin-top: 5%;
margin-bottom: 0%;
`
export const Textoprincipal = styled.div`
margin-left: 36%;
margin-right: 25%;
margin-bottom: 10%;
margin-top: 0%;
display: flex;
width: 30%;
height: 10%;
/* border: 1px solid black; */

`
export const Styledtextoprincipal = styled.text`
font-family: 'Roboto';
margin-left: 15px;
margin-right: 15px;
text-align: center;
`
export const BackGround = styled.div`
display: flex;
width: 100%;
height: 100%;
flex-direction:column

`
export const ImgImoveis = styled.div`
width: 100%;
height: 65vw;
display: flex;
margin-left: 0%;
margin-right: 0%;
margin-top: 0%;
opacity: 1;
background-image: url(${edificioscomerciais});
background-position: center;
`
export const ParedeQueimada = styled.div`
min-width: 100%;
height: 65vw;
display: flex;
margin-left: 0%;
margin-right: 0%;
margin-top: 0%;
background-image: url(${paredequeimada});
background-position: center;
`
export const FechandoNegocio = styled.div`
width: 100%;
height: 65vw;
display: flex;
margin-left: 0%;
margin-right: 0%;
margin-top: 0%;
opacity: 1;
background-image: url(${apertodemao});
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
