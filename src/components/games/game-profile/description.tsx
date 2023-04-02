import {Grid} from "@mui/material"
import React from "react"
import MuiMarkdown from "mui-markdown"

export interface GameProfileDescProps {
    description: string
}

export default function GameProfileDesc(props: GameProfileDescProps) {
    const {description} = props
    return <Grid container>
        <Grid item xs={12}>
            <MuiMarkdown>{description}</MuiMarkdown>
        </Grid>
    </Grid>
}