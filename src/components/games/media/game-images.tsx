import Media from "../../core/media/media"
import React from "react"
import {SxProps} from "@mui/system"
import {Theme} from "@mui/material/styles"

export function GameBanner(props: { image: string, sx?: SxProps<Theme> }) {
    return <Media image={props.image} width={"100%"} maxHeight={300} sx={props.sx}/>
}

export function GameThumbnail(props: { image: string, sx?: SxProps<Theme> }) {
    return <Media image={props.image} width={200} maxHeight={100} sx={props.sx}/>
}

export function GameFeatured(props: { image: string, video?: string | null, sx?: SxProps<Theme> }) {
    return <Media image={props.image} video={props.video} width={600} maxHeight={400} sx={props.sx}/>
}