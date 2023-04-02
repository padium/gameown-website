import {Grid} from "@mui/material"
import MarkdownEditor from "@uiw/react-markdown-editor"
import React from "react"

export interface GameProfileDescProps {
    description: string
}

export default function GameProfileDesc(props: GameProfileDescProps) {
    const {description} = props
    console.log("---", description)
    return <Grid container>
        <Grid item xs={12}>
            <MarkdownEditor.Markdown source={description} style={{backgroundColor:"#FBFBFA"}}/>
        </Grid>
    </Grid>
}