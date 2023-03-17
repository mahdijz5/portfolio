import styled from '@emotion/styled'
import { Menu } from '@mui/icons-material'
import { Box, Container, IconButton, Stack } from '@mui/material'
import { useCallback, useEffect, useRef, useState } from 'react'
import MyParticles from './components/MyParticles'
import Sidebar from './components/SideBar'
import MainLayout from './layouts/MainLayout'
import AboutMe from './pages/AboutMe'
import Home from './pages/Home'
import './global.css'
import Expertise from './pages/Expertise'


const StyledBox = styled(Box)(({ theme }) => ({
        backgroundImage: "url(/src/assets/images/background.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        position: "relative",
        overflow: "auto",
        scrollBehavior : "smooth"
}))


function App() {
        const container = useRef<Element>()
        const homeRef = useRef<Element>()
        const aboutMeRef = useRef<Element>()
        const expertiseRef = useRef<Element>()

        useEffect(() => {
                const observer = new IntersectionObserver((entries) => {
                        entries.map((element: any) => {
                                if (element.isIntersecting) {
                                        container.current?.scrollTo({
                                                behavior: "smooth",
                                                top: element.target.offsetTop,
                                                left: 0
                                        })
                                }
                        })
                })
                if (aboutMeRef.current != undefined && homeRef.current != undefined && expertiseRef.current != undefined) {
                        observer.observe(aboutMeRef.current)
                        observer.observe(homeRef.current)
                        observer.observe(expertiseRef.current)
                }
        }, [])

        return (
                <>
                        <MainLayout firstSection={homeRef.current} secondSection={aboutMeRef.current}  >
                                <>
                                        <StyledBox ref={container}>
                                                <Stack direction="column" gap="10px" zIndex="99">
                                                        <Box zIndex={1} >
                                                                <MyParticles />
                                                        </Box>
                                                        <Box ref={homeRef} zIndex={2} id="home">
                                                                <Home />
                                                        </Box>
                                                        <Box ref={aboutMeRef} zIndex={2} id="aboutMe">
                                                                <AboutMe />
                                                        </Box >
                                                        <Box ref={expertiseRef} zIndex={2} id="expertise">
                                                                <Expertise  />
                                                        </Box >
                                                </Stack>
                                        </StyledBox>
                                </>
                        </MainLayout>
                </>
        )
}

export default App
