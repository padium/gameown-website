import {isNotNull, isString} from "@d-lab/common-kit"
import {Box} from "@mui/material"
import {useState} from "react"
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline'
export interface MediaProps {
    image: string
    video?: string
    width?: number | string
    height?: number | string
    maxWidth?: number
    maxHeight?: number
}

export default function Media(props: MediaProps) {
    const style: any = {}
    if (isNotNull(props.width)) {
        style.width = isString(props.width) ? props.width : `${props.width}px`
    }
    if (isNotNull(props.height)) {
        style.height = isString(props.height) ? props.height : `${props.height}px`
    }
    if (isNotNull(props.maxWidth)) {
        style.maxWidth = props.maxWidth
    }
    if (isNotNull(props.maxHeight)) {
        style.maxHeight = props.maxHeight
    }
    console.log("video: ", props.video)
    if (isNotNull(props.video)) {
        const [hover, setHover] = useState(false)
        const [start, setStart] = useState(false)
        console.log("wtf? ", isNotNull(props.video))
        // TODO add react-player and customise the player
        return <Box>
            {hover && <PlayCircleOutlineIcon sx={{position: "absolute", top: "45%", right: "45%"}}/>}
            {!start && <img src={props.image} alt="image" style={style} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}/>}
        </Box>
    } else {
        console.log("style: ", style)
        return <img src={props.image} alt="image" style={style}/>
    }
}