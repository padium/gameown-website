import {isNotNull, isString} from "@d-lab/common-kit"
import {Box} from "@mui/material"
import {useState} from "react"
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline'
import Player from "./player/player"
import {SxProps} from "@mui/system"
import {Theme} from "@mui/material/styles"
export interface MediaProps {
    image?: string
    video?: string | null
    title?: string
    width?: number | string
    height?: number | string
    maxWidth?: number | string
    maxHeight?: number | string
    sx?: SxProps<Theme>
}

export default function Media(props: MediaProps) {
    const dimensions: any = {}
    if (isNotNull(props.width)) {
        dimensions.width = isString(props.width) ? props.width : `${props.width}px`
    } else {
        dimensions.width = "100%"
    }
    if (isNotNull(props.height)) {
        dimensions.height = isString(props.height) ? props.height : `${props.height}px`
    } else {
        dimensions.height = "100%"
    }
    if (isNotNull(props.maxWidth)) {
        dimensions.maxWidth = isString(props.maxWidth) ? props.maxWidth : `${props.maxWidth}px`
    }
    if (isNotNull(props.maxHeight)) {
        dimensions.maxHeight = isString(props.maxHeight) ? props.maxHeight : `${props.maxHeight}px`
    }
    if (isNotNull(props.video)) {
        return <Player thumbnail={props.image || true} videoUrl={props.video!} width={dimensions.width} height={dimensions.height} sx={props.sx}/>
    } else {
        console.log("style: ", dimensions)
        return <img src={props.image} alt="image" style={{...props.sx, ...dimensions}}/>
    }
}