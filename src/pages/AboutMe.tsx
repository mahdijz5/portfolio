import { styled } from "@mui/material/styles";
import { Box, Card, CardContent, CardMedia, Fade, IconButton, Slide, Stack, Typography, Zoom } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import CenterBox from "../components/CenterBox";
import MyParticles from "../components/MyParticles";
import { FormatQuote } from "@mui/icons-material";

const StyledBox = styled(Box)(({ theme }) => ({
    height: "100vh",
    position: "relative"
}))

const StyledCard = styled(Box)(({ theme } ) => ({
    display: 'inline-flex', 
    backgroundColor: [theme.palette.primary.main],
    
    [theme.breakpoints.down('lg')]: {
        flexDirection: "column",
    },
    width : "100%"
}))     

const StyledCardMedia = styled(CardMedia)(({ theme } ) => ({
    backgroundSize: "cover",
    width : "35%",
    [theme.breakpoints.down('lg')]: {
    width : "100%",
    },
})) as typeof CardMedia



const AboutMe = () =>  {
    const [show,setShow]  = useState(false)
    const aboutMeRef = useRef<Element>()
    useEffect(() => {
        let animationDelay : number
        const observer = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting) {
                    animationDelay = setTimeout(() => {
                        setShow(true)
                    },500)
                }else {
                    clearTimeout(animationDelay)
                    setShow(false)
                }
        })
        if (aboutMeRef.current != undefined) {
            observer.observe(aboutMeRef.current)
        }
    }, [])

    console.log(show)

    return (  
        <>
            <StyledBox ref={aboutMeRef}>
                <CenterBox>
                    <Zoom  in={show}  mountOnEnter unmountOnExit>
                        <StyledCard  >
                            <StyledCardMedia
                                component="img"
                                image="/src/assets/images/profileAvatar.png"
                                alt="Live from space album cover"
                            />
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <CardContent sx={{ flex: '1 0 auto' }}>
                                    <Typography color="text.primary" variant="h5" marginBottom="20px">Full stack developer</Typography>
                                        <Stack  gap="20px" textAlign="left" justifyContent="center" >
                                            <Typography color="text.primary">{">"} Full Name : Mahdi Javidi Zarmehry</Typography>
                                            <Typography color="text.primary">{">"} Age : 17</Typography>
                                            <Typography color="text.primary">{">"} Location : Iran, Mashad </Typography>
                                            <Typography color="text.primary">{">"} Email : mahdi.jz.v@gmail.com </Typography>
                                        </Stack>
                                    {/* <Typography color="text.primary" variant="body1" fontFamily="END"><FormatQuote />I don't drink coffee to wake up. I wake up to drink coffee<FormatQuote /></Typography> */}
                                </CardContent>
                            </Box>
                        </StyledCard>
                    </Zoom>
                </CenterBox>
        </StyledBox>
        </>
    );
}

export default AboutMe;