import React from "react";
import { Button, Card, CardContent, Typography } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LocationOnIcon from "@mui/icons-material/LocationOn";

import {
  CardContato,
  CardLocalização,
  CardRedesSociais,
  ContainerCards,
} from "./styled";
import { BottonsModals } from "../area-de-atuacao/styled";

export default function Contato() {
  return (
    <div>
      <hr/>
    <ContainerCards>
      <CardContato>
        <CardContent>
          <Typography variant="h5" component="div">
            CONTATO
            <hr />
          </Typography>
          <Typography variant="body2" sx={{ mb: 1.5 }} color="text.secondary">
            <CallIcon /> 65 99293 3370 <br />
            <p />
            <MailOutlineIcon /> ansadvocaciatrib@gmail.com <br />
            <p />
            <WhatsAppIcon /> 65 99293 3370 <br />
          </Typography>
        </CardContent>
      </CardContato>

      <CardRedesSociais>
        <CardContent>
          <Typography variant="h5" component="div">
            REDES SOCIAIS
            <hr />
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            <BottonsModals>
            <Button 
            onClick={()=>(window.open(`https://www.instagram.com/arynorberto/`))}
            variant="contained" 
            endIcon={<InstagramIcon />}
            >
              Instagram
            </Button>
            </BottonsModals>
            <br />
            <BottonsModals>
            <Button 
            onClick={()=>(window.open(`https://www.facebook.com/ary.n.silva.9`))}
            variant="contained" 
            endIcon={<FacebookIcon />}
            >
              Facebook
            </Button>
            </BottonsModals>
          </Typography>
        </CardContent>
      </CardRedesSociais>

      <CardLocalização>
        <CardContent>
          <Typography variant="h5" component="div">
            LOCALIZAÇÃO
            <hr />
          </Typography>
          <Typography variant="body2" sx={{ mb: 1.5 }} color="text.secondary">
            <Button variant="contained"  onClick={()=>(window.open(`https://www.google.com.br/maps/search/+Rua+I,+105,+Sala+34,+Ed.+Eldorado+Hill+Office+CEP+78048-487,+Alvorada+Cuiab%C3%A1-MT./@-15.5784583,-56.0800749,17z/data=!3m1!4b1`))}>
            <LocationOnIcon /> Rua I, 105, Sala 34, Ed. Eldorado Hill Office<br/>
            CEP 78048-487, Alvorada Cuiabá-MT.
            </Button>
          </Typography>
        </CardContent>
      </CardLocalização>
    </ContainerCards>
    </div>
  );
}
