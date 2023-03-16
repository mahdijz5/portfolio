import {  ThemeProvider } from '@mui/material';
import { getTheme } from '../configs/theme';

interface LayoutProps {
    children:  JSX.Element;
}


const MainLayout = (props: LayoutProps) => {
    return (
        <ThemeProvider theme={getTheme("dark")}>
                {props.children}
        </ThemeProvider>
    );
};

export default MainLayout;
