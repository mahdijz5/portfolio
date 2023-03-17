import styled from "@emotion/styled"
import { Box } from "@mui/material"

const CenteredBox= styled(Box)({
    margin: 0,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center"
})

interface PropsType  {
    children : JSX.Element,
}

const CenterBox = (props : PropsType) => {
    return (
        <CenteredBox>
            {props.children}
        </CenteredBox>
    )
}

export default CenterBox