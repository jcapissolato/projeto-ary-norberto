import { createTheme } from '@mui/material/styles';
import { corPrimaria, corSecundaria } from './colors';

const theme = createTheme({
  palette: {
    primary: {
        main: corPrimaria,
        contrastText: "black"
    },
    text: {
        primary: corSecundaria
    },
  },
});

export default theme