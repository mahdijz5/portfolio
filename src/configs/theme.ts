import { createTheme } from '@mui/material/styles';
import { dark } from '@mui/material/styles/createPalette';

export const theme = () => {
    return createTheme({
        direction: 'rtl',
        typography :{
            fontFamily : "Vazir , Roboto"
        },  
        palette: {
            primary: {
                main: "#3ECBE9",
                light: "#128FC8",
                dark : "#00468B",
            },
            secondary: {
                main: "#FFE45C"
            },
            success: {
                main: "#20D489"
            },
            grey : {
                "100" : "#757575"
            },
            error : {
                main : "#e63946"
            },
            warning : {
                main : "#ffcc00"
            },
            text: {
                primary: "#3A354D"
            }
        },
    });
}