import { createTheme } from '@mui/material/styles';
import { corPrimaria, corSecundaria, corWhatsapp } from './colors';

const theme = createTheme({
  palette: {
    primary: {
        main: corPrimaria,
        contrastText: corWhatsapp
    },
    text: {
        primary: corSecundaria
    },
  },
});

export default theme