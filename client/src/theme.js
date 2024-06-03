import { createTheme } from '@mui/material/styles';

const getTheme = (color) => {
  return createTheme({
    palette: {
      primary: {
        main: color,
      },
    },
  });
}

export default getTheme;
