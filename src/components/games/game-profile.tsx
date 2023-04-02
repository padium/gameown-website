import {Box, Container, Grid, Paper, Stack, Typography} from "@mui/material"
import React, {useEffect, useState} from "react"
import {useNavigate} from "react-router"
import {GameDto} from "@padium/core"
import Loading from "../dashboard/loading"
import handleAuth from "../../utils/auth/auth-refresh"
import apiClient from "../../clients/padium.client"
import MuiMarkdown from "mui-markdown"
import Media from "../core/media/media"

export interface GameProfileProps {
    identifier: string
}

export default function GameProfile(props: GameProfileProps) {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(true)
    const [game, setGame] = useState<GameDto>()

    useEffect(() => {
        handleAuth(() => apiClient.game.getByIdentifier(props.identifier))
            .then(response => {
                setGame(response)
                setLoading(false)
            })
    }, [])


    if (loading) {
        return <Loading/>
    }

    return <Box>
        <Grid container>
            <Grid item xs={12}>
                <Stack alignItems="center">
                    <Media image={game!.bannerUrl} width={"100%"} maxHeight={300}/>
                </Stack>
            </Grid>
        </Grid>
        <Container sx={{marginTop: 1}}>
            <Grid container>
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
                        <Paper>
                            Price
                        </Paper>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <MuiMarkdown>{game!.description}</MuiMarkdown>
                </Grid>
            </Grid>
        </Container>
    </Box>
}