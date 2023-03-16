import { createTheme } from '@mui/material/styles';
import { dark } from '@mui/material/styles/createPalette';

export const getTheme = (mode:"dark" | "light") => {
        return createTheme({
            typography: {
                fontFamily: "Vazir , Roboto"
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