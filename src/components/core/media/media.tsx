import {isNotNull, isString} from "@d-lab/common-kit"
import {Box} from "@mui/material"
import {useState} from "react"
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline'
import Player from "./player/player"
export interface MediaProps {
    image: string
    video?: string | null
    title?: string
    width?: number | string
    height?: number | string
    maxWidth?: number
    maxHeight?: number
}

export default function Media(props: MediaProps) {
    const style: any = {}
    if (isNotNull(props.width)) {
        style.width = isString(props.width) ? props.width : `${props.width}px`
    } else {
        style.width = "100%"
    }
    if (isNotNull(props.height)) {
        style.height = isString(props.height) ? props.height : `${props.height}px`
    } else {
        style.height = "100%"
    }
    if (isNotNull(props.maxWidth)) {
        style.maxWidth = props.maxWidth
    }
    if (isNotNull(props.maxHeight)) {
        style.maxHeight = props.maxHeight
    }
    if (isNotNull(props.video)) {
        return <Player thumbnail={props.image} videoUrl={props.video!} width={style.width} height={style.height}/>
    } else {
        console.log("style: ", style)
        return <img src={props.image} alt="image" style={style}/>
    }
}