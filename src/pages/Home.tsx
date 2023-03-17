import styled from '@emotion/styled';
import { Box } from '@mui/material'
import { useState } from 'react';
import Sidebar from '../components/SideBar';
import CenterLabel from '../components/home/CenterLabel';

const StyledBox = styled(Box)(({ theme }) => ({
    height: "100vh",
    position : "relative"
}))

const Home = () => {
    return (
        <>
            <StyledBox>
            <CenterLabel/>
                    </StyledBox>
        </>
    )
}

export default Home