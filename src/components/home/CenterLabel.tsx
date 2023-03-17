import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { RandomReveal } from "react-random-reveal";
import TextTransition, { presets } from "react-text-transition";
import CenterBox from "../CenterBox";

const TEXTS = [
    "Javascript",
    "Back-end",
    "Front-end",
    "Fullstack",
];

 
const CenterLabel = () => {
    const [index, setIndex] =useState(0);

    useEffect(() => {
        const intervalId = setInterval(() =>
            setIndex(index => index + 1),
            3000 // every 3 seconds
        );
        return () => clearTimeout(intervalId);
    }, []);

    return (
        <>
            <CenterBox>
                <Box sx={{ width: "600px" }}>
                    <Typography fontSize="50px" color="text.primary">
                        {"{"}
                        <RandomReveal isPlaying revealEasing='linear' duration={3} characters="I'm Mahdi Javidi" />
                        {"}"}
                    </Typography>
                    <Typography color="text.primary" fontSize="30px" variant="subtitle2">
                   // <TextTransition springConfig={presets.wobbly} inline>
                            {TEXTS[index % TEXTS.length]}
                        </TextTransition> developer
                    </Typography>
            </Box>
            </CenterBox>
        </>
    )
}

export default CenterLabel;