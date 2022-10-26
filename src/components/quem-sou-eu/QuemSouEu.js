import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import fotoary from "../../assets/fotoary.jpeg";
import { StyledCard, StyledText } from "./styled";

export default function QuemSouEu() {
  return (
    <StyledCard>
      <Card sx={{ maxWidth: 675 }}>
        <CardMedia
          component="img"
          height="500"
          image={fotoary}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Ary Norberto Silva
            <hr/>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <StyledText>
            Advogado atuante na advocacia Preventiva, Consultiva e Contenciosa,
            focado em oferecer assessoria jurídica a pessoas físicas e
            jurídicas, com atuação em todo estado de Mato Grosso. Sendo assim,
            um escritório especializado em Direito Imobiliário (regularização de
            Imóveis) rurais e urbanos, atuando ainda no Direito de Família em
            Inventário, Divórcio e Partilha, judicial e extrajudicial; Direito
            Tributário contencioso nas Execuções Fiscais e Administrativamente
            junto as fazendas públicas municipais, estaduais e da união.
            </StyledText>
          </Typography>
        </CardContent>
      </Card>
    </StyledCard>
  );
}
