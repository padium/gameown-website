import {Grid, Typography} from "@mui/material"
import {GameProfileBanner, GameProfileDesc, GameProfileHead} from "../../../../components/games/game-profile"
import React, {useEffect, useState} from "react"
import {GameDto} from "@padium/core"
import apiClient from "../../../../clients/padium.client"
import Loading from "../../../../components/dashboard/loading"
import {HttpError, isNotNull} from "@d-lab/common-kit"
import {FatError} from "../../../../components/errors/error"

export interface ReviewGameProps {
    gameId: number
}

export default function ReviewGame(props: ReviewGameProps) {
    const [loading, setLoading] = useState(true)
    const [game, setGame] = useState<GameDto>()
    const [error, setError] = useState<HttpError | null>(null)

    useEffect(() => {
        apiClient.game.getById(props.gameId)
            .then(response => {
                setGame(response)
                setLoading(false)
            })
            .catch(error => {
                console.error(error)
            })
    }, [])

    if (loading) {
        return <Loading/>
    }
    if (isNotNull(error)) {
        return <FatError error={error!}/>
    }
    return <Grid container>
        <Grid item xs={12}>
            <Typography variant="h4" sx={{padding:"0px 20px",
                backgroundColor: "#75aed3"
            }}>Banner</Typography>
            <GameProfileBanner bannerUrl={game!.bannerUrl}/>
        </Grid>
        <Grid item xs={12}>
            <Typography variant="h4" sx={{padding:"0px 20px",
                backgroundColor: "#75aed3"
            }}>Header</Typography>
            <GameProfileHead game={game!} menu={<></>}/>
        </Grid>
        <Grid item xs={12}>
            <Typography variant="h4" sx={{padding:"0px 20px",
                backgroundColor: "#75aed3"
            }}>Description</Typography>
            <GameProfileDesc description={game!.description}/>
        </Grid>
    </Grid>
}