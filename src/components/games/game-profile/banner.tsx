import {Grid, Stack} from "@mui/material"
import React from "react"
import Media from "../../core/media/media"
import {GameBanner} from "../../media/game-images"

export interface GameProfileBannerProps {
    bannerUrl: string
}

export default function GameProfileBanner(props: GameProfileBannerProps) {
    const {bannerUrl} = props

    return <Grid container>
        <Grid item xs={12}>
            <Stack alignItems="center">
                <GameBanner image={bannerUrl}/>
            </Stack>
        </Grid>
    </Grid>
}