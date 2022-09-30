import { createTheme } from '@mui/material/styles';
import { green, purple } from '@mui/material/colors';
import {corPrimaria, corSecundaria} from "./colors"
const theme = createTheme({
  palette: {
    primary: {
      main: corPrimaria,
      contrastText: corSecundaria,
      text: {primary: corSecundaria}
    },
    text:{
      primary: corSecundaria,
    }
  },
});

export default theme