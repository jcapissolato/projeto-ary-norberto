import { Card, CardContent, Typography } from "@mui/material";
import * as React from "react";

import {
  CardCivil,
  CardImobiliario,
  CardTributario,
  ContainerCards,
  TextoAtuacao,
} from "./modals/styled";
import { BottonsModals, StyledCardAtuacao, StyledText } from "./styled";
import ModalImoveisRurais from "./modals/ModalImoveisRurais";
import ModalUsucapiaoExtrajuducial from "./modals/ModalUsucapiaoExtrajuducial";
import ModalUsucapiao from "./modals/ModalUsucapiao";
import ModalUsucapiaoJudicial from "./modals/ModalUsucapiaoJudicial";
import ModalParcelamentoUrbano from "./modals/ModalPArcelamentoUrbano";
import ModalReurb from "./modals/ModalReurb";
import ModalReurbSocial from "./modals/ModalReurbSocial";
import ModalReurbEspecifico from "./modals/ModalReurbEspecifico";
import ModalImoveisPublicos from "./modals/ModalImoveisPublicos";
import ModalReurbInominada from "./modals/ModalReurbInominada";

export default function Atuacao() {
  return (
    <div>
      {/* <TextoAtuacao>
      <h1>ATUAÇÃO</h1>
      </TextoAtuacao> */}
      <hr/>
      <ContainerCards>
        <CardImobiliario>
          <Card>
            <CardContent>
              <Typography variant="h5" component="div">
                DIREITO IMOBILIÁRIO
                <hr/>
              </Typography>
              <Typography variant="body2" sx={{ mb: 1.5 }} color="text.secondary">
                <StyledText>
                Atuando extrajudicial junto aos cartórios de notas e registro de
                imóveis, com conhecimento nos meios (ordinários e
                extraordinários) de regularizar imóveis (rurais e urbanos)
                trabalhando para assegurar aos seus possuidores direitos a
                moradia, habitação e a propriedade com requerimentos aos
                Tabelionatos e Registros de Imóveis Competentes para:
                </StyledText>
                <p>
                  <StyledText>
                  Abertura de matricula; <br/>De registros e averbações diversas;<br/>
                  Retificação de Registros;<br/> Públicos contenciosos ou não;<br/>
                  Apresentação de Plantas e Memoriais descritivos;<br/> Cancelamentos
                  de Registros e Averbações;<br/> Escritura Pública;<br/> Atas Notariais
                  diversas;<br/> Atas Notariais fins Requerimentos Usucapião.
                  </StyledText>
                </p>
                <hr/>
              </Typography>
              <BottonsModals>
              <ModalParcelamentoUrbano/>
              <ModalImoveisRurais/>
              <ModalUsucapiao/>
              <ModalUsucapiaoExtrajuducial/>
              <ModalUsucapiaoJudicial/>
              <ModalReurb/>
              <ModalReurbSocial/>
              <ModalReurbEspecifico/>
              <ModalImoveisPublicos/>
              <ModalReurbInominada/>
              </BottonsModals>

            </CardContent>
          </Card>
        </CardImobiliario>
        <CardTributario>
          <Card>
            <CardContent>
              <Typography variant="h5" component="div">
                DIREITO TRIBUTÁRIO
                <hr/>
              </Typography>
              <Typography variant="body2" sx={{ mb: 1.5 }} color="text.secondary">
              Defesa no contecioso nas execuções fiscais e processos administrativos.
              </Typography>
            </CardContent>
          </Card>
        </CardTributario>
        <CardCivil>
          <Card>
            <CardContent>
              <Typography variant="h5" component="div">
                DIREITO FAMÍLIA E SUCESSÕES
                <hr/>
              </Typography>
              <Typography variant="body2" sx={{ mb: 1.5 }} color="text.secondary">
                <StyledText>
                Inventário, divórcio, partilha de bens, reconhecimento e dissolução de união estável.
                </StyledText>             
              </Typography>
            </CardContent>
          </Card>
        </CardCivil>
      </ContainerCards>
    </div>
  );
}
