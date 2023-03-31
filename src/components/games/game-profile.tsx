import {Grid} from "@mui/material"
import React, {useEffect, useState} from "react"
import {useNavigate} from "react-router"
import {GameDto} from "@padium/core"
import Loading from "../dashboard/loading"
import handleAuth from "../../utils/auth/auth-refresh"
import apiClient from "../../clients/padium.client"

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

    return <Grid container alignItems="center" justifyContent="center" direction="column">
        <Grid item xs={12}>
            <img src={game!.bannerUrl} alt="banner"/>
        </Grid>
    </Grid>
}