import {Grid, Paper, Stack, Typography} from "@mui/material"
import React from "react"
import {GameDto} from "@padium/core"
import Media from "../../core/media/media"

export interface GameProfileHeadProps {
    game: GameDto
    menu: JSX.Element
}

export default function GameProfileHead(props: GameProfileHeadProps) {
    const {game} = props

    return <Grid container>
        <Grid item xs={12} sx={{marginTop: 2}}>
            <Stack alignItems="center">
                <Typography variant="h4">{game!.name}</Typography>
            </Stack>
        </Grid>
        <Grid item xs={12} sx={{marginTop: 1}}>
            <Stack alignItems="center">
                <Typography variant="h6">{game!.header}</Typography>
            </Stack>
        </Grid>
        <Grid container sx={{marginTop: 5}}>
            <Grid item xs={7}>
                <Stack alignItems="center" height={400}>
                    <Media title={"hi"} image={game!.mainUrl} video={game!.mainVideoUrl} width={600} maxHeight={400}/>
                </Stack>
            </Grid>
            <Grid item xs={5}>
                <Paper elevation={1}>
                    {props.menu}
                </Paper>
            </Grid>
        </Grid>
    </Grid>
}