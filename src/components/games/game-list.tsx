import {Grid, List, ListItem, Stack, Typography} from "@mui/material"
import React, {useEffect, useState} from "react"
import {GameListDto} from "@padium/core"
import handleAuth from "../../utils/auth/auth-refresh"
import apiClient from "../../clients/padium.client"
import Media from "../core/media/media"
import {isNull} from "@d-lab/common-kit"
import {GameThumbnail} from "../media/game-images"

export default function GameList() {
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(0)
    const [games, setGames] = useState<GameListDto[]>([])

    useEffect(() => {
        handleAuth(() => apiClient.game.list({page: page.toString(), pageSize: "10"}))
            .then(response => {
                setGames(response.games)
                setLoading(false)
            })
    }, [])

    const getPrice = (price: string | null) => {
        if (isNull(price)) {
            return <Typography variant="h4">Not Released</Typography>
        } else if (Number.parseFloat(price!) == 0.0) {
            return <Typography variant="h4">Free to Play</Typography>
        } else {
            return <Typography variant="h4">{price} $</Typography>
        }
    }

    return <List>
        {games.map(game => <ListItem key={game.id}>
            <Grid container>
                <Grid item xs={5}>
                    <GameThumbnail image={game.thumbnailUrl}/>
                </Grid>
                <Grid item xs={5}>
                    <Stack direction="row">
                        <Typography variant="h5">{game.name}</Typography>
                    </Stack>
                    <Stack direction="row">
                        <Typography variant="body1">{game.header}</Typography>
                    </Stack>
                </Grid>
                <Grid item xs={2}>
                    {getPrice(game.price)}
                </Grid>
            </Grid>
        </ListItem>)
        }
    </List>
}