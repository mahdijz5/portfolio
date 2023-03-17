import { createTheme, Theme } from '@mui/material/styles';
import { dark } from '@mui/material/styles/createPalette';
import { fontFamily, typography } from '@mui/system';


export const getTheme = (mode: "dark" | "light") => {
    return createTheme({
        typography: {
            fontFamily: "Roboto, END  "
        },
        palette: {
            mode,
            primary: {
                main: "#282a36",
            },
            secondary: {
                main: "#bd93f9",
                light: "#ff79c6"
            },
            success: {
                main: "#50fa7b"
            },
            info : {
                main: "#8be9fd",
            },
            error: {
                main: "#ff5555"
            },
            warning: {
                main: "#ffb86c"
            },
            text: {
                primary: "#f8f8f2"
            }
        },

    });
}