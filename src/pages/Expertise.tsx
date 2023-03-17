import { styled } from "@mui/material/styles";
import { Box, LinearProgress, LinearProgressProps, Slide, Tooltip, Typography, Zoom } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { Stack } from "@mui/system";

interface skillInterface {
    icon: string,
    color: "success" | "inherit" | "primary" | "secondary" | "error" | "info" | "warning",
    value: number
}

const StyledBox = styled(Box)(({ theme }) => ({
    height: "100vh",
    position: "relative"
}))


function LinearProgressWithLabel(props: LinearProgressProps & { value: number, icon: string }) {
    const [getValue, setValue] = useState(1)

    useEffect(() => {
        const timer = setInterval(() => {
            setValue((prevProgress) => (prevProgress >= props.value ? props.value : prevProgress + 5));
        }, 100);
        return () => {
            clearInterval(timer);
        };
    }, [])

    return (
        <>
            <Tooltip title={props.icon} placement="right-start" color="primary" TransitionComponent={Zoom}
                TransitionProps={{ timeout: 200 }}>
                <img src={`/src/assets/icons/${props.icon}.png`} style={{ width: "50px" }} />
            </Tooltip>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box sx={{ width: '100%', mr: 1 }}>
                    <LinearProgress variant="determinate"   {...props} value={getValue} />
                </Box>
                <Box sx={{ minWidth: 35 }}>
                    <Typography variant="body2" color="text.secondary">{`${Math.round(
                        getValue
                    )}%`}</Typography>
                </Box>
            </Box>
        </>
    );
}

const skills: skillInterface[] = [
    {
        icon: "Node.js",
        value: 81,
        color: "success"
    },
    {
        icon: "Javascript",
        value: 90,
        color: "warning"
    },
    {
        icon: "Typescript",
        value: 80,
        color: "info"
    },
    {
        icon: "Express.js",
        value: 90,
        color: "inherit"
    },
    {
        icon: "Nest.js",
        value: 70,
        color: "error"
    },
    {
        icon: "React.js",
        value: 83,
        color: "info"
    },
    {
        icon: "Next.js",
        value: 80,
        color: "inherit"
    },
    {
        icon: "Mongodb",
        value: 50,
        color: "success"
    },
    {
        icon: "Linux",
        value: 56,
        color: "warning"
    },

]

const Expertise = () => {
    const [show, setShow] = useState(false)
    const expertiseRef = useRef<Element>()
    useEffect(() => {
        let animationDelay: number
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                animationDelay = setTimeout(() => {
                    setShow(true)
                }, 700)
            } else {
                clearTimeout(animationDelay)
                setShow(false)
            }
        })
        if (expertiseRef.current != undefined) {
            observer.observe(expertiseRef.current)
        }
    }, [])


    return (
        <>
            <StyledBox ref={expertiseRef}>
                <Stack direction="row" flexWrap="wrap" padding="90px" rowGap="30px">
                    {skills.map((skill, index) => (
                        <Slide direction="right" in={show} timeout={(index + 1) * 100} key={index}>
                            <Box width="45%" color="white" paddingX="20px">
                                <LinearProgressWithLabel color={skill.color} sx={{ height: "10px", borderRadius: "10px" }} value={skill.value} icon={skill.icon} />
                            </Box>
                        </Slide>
                    ))}
                </Stack>
            </StyledBox>
        </>
    );
}

export default Expertise;