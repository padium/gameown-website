import {Grid, Stack} from "@mui/material"
import React from "react"
import Media from "../../core/media/media"

export interface GameProfileBannerProps {
    bannerUrl: string
}

export default function GameProfileBanner(props: GameProfileBannerProps) {
    const {bannerUrl} = props

    return <Grid container>
        <Grid item xs={12}>
            <Stack alignItems="center">
                <Media image={bannerUrl} width={"100%"} maxHeight={300}/>
            </Stack>
        </Grid>
    </Grid>
}