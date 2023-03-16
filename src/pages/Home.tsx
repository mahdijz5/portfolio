import styled from '@emotion/styled';
import { Menu } from '@mui/icons-material';
import { Box, IconButton, Typography } from '@mui/material'
import { useState } from 'react';
import Sidebar from '../components/SideBar';
import HomeParticles from '../components/home/HomeParticles';
import { RandomReveal } from 'react-random-reveal';
import CenterLabel from '../components/home/CenterLabel';

const StyledBox = styled(Box)(({ theme }) => ({
    backgroundImage: "url(/src/assets/images/background.jpg)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh"
}))

const Home = () => {
    const [openDrawer, setOpenDrawer] = useState(false)
    return (
        <>
            <StyledBox>
            <CenterLabel/>
            <HomeParticles/>
            <IconButton
                onClick={() => {
                    setOpenDrawer(true)
                }}>
                <Menu
                    sx={{
                        fontSize: "50px",
                        fontWeight: "100",
                        cursor: "pointer"
                    }}
                />
            </IconButton>
            <Sidebar openDrawer={openDrawer} setOpenDrawer={setOpenDrawer}/>
                    </StyledBox>
        </>
    )
}

export default Home