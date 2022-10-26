import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { BottonsModals } from "../styled";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function ModalReurbEspecifico() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <BottonsModals>
        <Button variant="contained" onClick={handleOpen}>REURB DE INTERESSE ESPECÍFICO</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              REURB DE INTERESSE ESPECÍFICO – REURB-E:
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Núcleos urbanos informais ocupados por população de baixa renda.
              <br/>
              Renda familiar igual ou superior a 5 salários mínimos.
            </Typography>
          </Box>
        </Modal>
      </BottonsModals>
    </div>
  );
}
