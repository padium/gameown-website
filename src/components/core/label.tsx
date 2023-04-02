import {Typography} from "@mui/material"

const styles = {
    blue: {
        color: "#FFFFFF",
        border: "1px solid",
        borderColor: "#698cb9",
        backgroundColor: "#75aed3"
    },
    white: {
        color: "#19191a",
        border: "1px solid",
        borderColor: "#6c6c6c",
        backgroundColor: "#FFFFFF"
    }
}

export interface LabelProps {
    text: string
    variant: "blue" | "white"
}

export default function Label(props: LabelProps) {
    return <Typography sx={{
        ...styles[props.variant],
        borderRadius: "10px",
        padding: "0 5px"
    }}>{props.text}</Typography>
}