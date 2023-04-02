import {Grid, List, ListItem, Stack, Typography} from "@mui/material"
import React, {useEffect, useState} from "react"
import {GameListDto} from "@padium/core"
import handleAuth from "../../utils/auth/auth-refresh"
import apiClient from "../../clients/padium.client"
import {isNull} from "@d-lab/common-kit"
import {GameThumbnail} from "./media/game-images"
import {format} from "date-fns"
import Label from "../core/label"
import Path from "../../routes/path.enum"
import {useNavigate} from "react-router"

export default function GameList() {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(0)
    const [games, setGames] = useState<GameListDto[]>([])

    useEffect(() => {
        handleAuth(() => apiClient.game.list({page: page.toString(), pageSize: "10"}))
            .then(response => {
                //setGames([response.games[0], response.games[0], response.games[0], response.games[0], response.games[0], response.games[0]])
                setGames(response.games)
                setLoading(false)
            })
    }, [])

    const getPrice = (price: string | null) => {
        if (isNull(price)) {
            return <Typography variant="h6">Not Released</Typography>
        } else if (Number.parseFloat(price!) == 0.0) {
            return <Typography variant="h6">Free to Play</Typography>
        } else {
            return <Typography variant="h6">{price} $</Typography>
        }
    }

    const getReleaseDate = (date: Date | string | null): string => {
        if (isNull(date)) {
            return "under development"
        } else {
            return format(new Date(date!), 'dd MMM, yyyy')
        }
    }

    const getTags = (tags: string): string[] => {
        return tags.split("#")
    }

    return <List>
        {games.map(game =>
            <ListItem key={game.id}
                      sx={{
                          paddingTop: 0, paddingBottom: 0, marginBottom: 1, backgroundColor: "#FBFBFA",
                          // hover states
                          ':hover': {
                              backgroundColor: '#daedff',
                              cursor: 'pointer'
                          },
                      }}
                      onClick={() => navigate(Path.PUBLIC_GAME.replace(":identifier", game.identifier))}
            >
                <Grid container spacing={2}
                      sx={{
                          alignItems: "center",
                          marginTop: 0,
                          ".MuiGrid-item": {
                              paddingTop: 0
                          }
                      }}>
                    <Grid item xs="auto">
                        <GameThumbnail image={game.thumbnailUrl}/>
                    </Grid>
                    <Grid item xs={5}>
                        <Stack direction="row">
                            <Typography variant="h5">{game.name}</Typography>
                        </Stack>
                        <Stack direction="row">
                            <Typography variant="body1">{game.header}</Typography>
                        </Stack>
                        <Stack direction="row" spacing={0.5}>
                            {getTags(game.tags).map(tag => <Label text={tag} variant="blue"/>)}
                        </Stack>
                    </Grid>
                    <Grid item xs={2}>
                        <Typography variant="body1">{getReleaseDate(game.availableAt)}</Typography>
                    </Grid>
                    <Grid item xs={2}>
                        {getPrice(game.price)}
                    </Grid>
                </Grid>
            </ListItem>)
        }
    </List>
}