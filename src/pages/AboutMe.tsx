import { styled } from "@mui/material/styles";
import { Box, Card, CardContent, CardMedia, Fade, IconButton, Slide, Stack, Typography, Zoom } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import CenterBox from "../components/CenterBox";
import { FormatQuote } from "@mui/icons-material";
import Slider from "react-slick"
import "../styles/slick.min.css";
import "../styles/slick.theme.min.css";  

const StyledBox = styled(Box)(({ theme }) => ({
    height: "100vh",
    position: "relative"
}))

const QuoteBox = styled(Box)(({ theme }) => ({
    width: "50%",
    backgroundColor: "rgba(40, 42, 54,0.8)",
    borderRadius: "5px",
    padding: "14px",
    textAlign: "center",
    [theme.breakpoints.down('lg')]: {
        display: "none",
    },
}))


const StyledCard = styled(Box)(({ theme }) => ({
    display: 'inline-flex',
    backgroundColor: [theme.palette.primary.main],

    [theme.breakpoints.down('lg')]: {
        flexDirection: "column",
    },
    width: "100%"
}))

const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
    backgroundSize: "cover",
    width: "35%",
    [theme.breakpoints.down('lg')]: {
        width: "100%",
    },
})) as typeof CardMedia



const AboutMe = () => {
    const [show, setShow] = useState(false)
    const aboutMeRef = useRef<Element>()
    useEffect(() => {
        let animationDelay: NodeJS.Timeout
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                animationDelay = setTimeout(() => {
                    setShow(true)
                }, 500)
            } else {
                clearTimeout(animationDelay)
                setShow(false)
            }
        })
        if (aboutMeRef.current != undefined) {
            observer.observe(aboutMeRef.current)
        }
    }, [])

    let settings = {
        draggable : true,
        autoplay : true,
        autoplaySpeed : 6000,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows : false,
    };

    const quotes:string[] = [
        "I don’t drink coffee to wake up. I wake up to drink coffee",
        "Whitespace is never white",
        "There’s no place like 127.0.0.1",
        "Copy-and-Paste was programmed by programmers for programmers actually",
        "It works on my machine",
        "It’s not a bug — it’s an undocumented feature",
        "I have not failed. I’ve just found 10,000 ways that won’t work",
        "There is no Ctrl-Z in life"

    ]

    return (
        <>

            <StyledBox ref={aboutMeRef}>
                <Slide direction="right" timeout={200} in={show} style={{
                    position: "absolute",
                    left: "23.5%",
                    top: "20%", 
                    transform: "translate(-50%, -50%) ",
                    }}>
                    <QuoteBox>
                        <Slider {...settings}>
                            {quotes.map((quote, index) => (
                                <Typography key={index} color="text.primary" fontFamily="END" fontSize="20px"><FormatQuote />{quote}<FormatQuote  sx={{transform : "rotate(180deg)"}}/></Typography>
                            ))}
                        </Slider>
                    </QuoteBox>

                </Slide>
                <CenterBox>
                    <>
                        <Zoom in={show} mountOnEnter unmountOnExit>
                            <StyledCard  >
                                <StyledCardMedia
                                    component="img"
                                    image="/src/assets/images/profileAvatar.png"
                                    alt="Live from space album cover"
                                />
                                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                    <CardContent sx={{ flex: '1 0 auto' }}>
                                        <Typography color="text.primary" variant="h5" marginBottom="20px">Full stack developer</Typography>
                                        <Stack gap="20px" textAlign="left" justifyContent="center" >
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
                    </>
                </CenterBox>
            </StyledBox>
        </>
    );
}

export default AboutMe;