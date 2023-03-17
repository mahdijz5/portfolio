import styled from '@emotion/styled';
import { Menu } from '@mui/icons-material';
import { Box, Fab, IconButton, ThemeProvider } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import Sidebar from '../components/SideBar';
import { getTheme } from '../configs/theme';

interface LayoutProps {
    children:  JSX.Element,
    firstSection: Element | undefined,
    secondSection : Element | undefined,
}


const menuStyle = {
    fontSize: "50px",
    fontWeight: "100",
}

const MainLayout = (props: LayoutProps) => {
    const [openDrawer, setOpenDrawer] = useState(false)


    return (
        <ThemeProvider theme={getTheme("dark")}>
            <Sidebar openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
            <Fab
                color="primary"
                sx={{
                    backgroundColor: "rgba(1,1,1,0)",
                    boxShadow: "unset",
                    position: "fixed",
                    top: "20px",
                    left: "20px"
                }}
                onClick={() => {
                    setOpenDrawer(true)
                }}>
                <Menu sx={menuStyle} />
            </Fab>
                    {props.children}

        </ThemeProvider>
    );
};

export default MainLayout;
