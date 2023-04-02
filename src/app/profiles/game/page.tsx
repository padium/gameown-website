import {useParams} from "react-router"
import Profile from "../page"
import {isNotEmpty, isNotNull} from "@d-lab/common-kit"
import Loading from "../../../components/dashboard/loading"
import {Box, Container, Grid} from "@mui/material"
import React, {useEffect, useState} from "react"
import handleAuth from "../../../utils/auth/auth-refresh"
import apiClient from "../../../clients/padium.client"
import {GameDto} from "@padium/core"
import {GameProfileDesc, GameProfileHead, GameProfileMenuPurchase, GameProfileMenuWaitlist} from "../../../components/games/game-profile"
import GameProfileBanner from "../../../components/games/game-profile/banner"

function GameProfilePage() {
    const {identifier} = useParams()
    const [loading, setLoading] = useState(true)
    const [game, setGame] = useState<GameDto>()

    useEffect(() => {
        if (isNotEmpty(identifier)) {
            handleAuth(() => apiClient.game.getByIdentifier(identifier!))
                .then(response => {
                    setGame(response)
                    setLoading(false)
                })
        }
    }, [])

    if (loading) {
        return <Loading/>
    }

    let menu: JSX.Element
    if (isNotNull(game?.price)) {
        menu = <GameProfileMenuPurchase name={game!.name} price={game!.price!}/>
    } else {
        menu = <GameProfileMenuWaitlist name={game!.name}/>
    }
    return <Box sx={{backgroundColor: "#FBFBFA"}}>
        <GameProfileBanner bannerUrl={game!.bannerUrl}/>
        <Container sx={{marginTop: 1}}>
            <GameProfileHead game={game!} menu={menu}/>
            <Grid container>
                <GameProfileDesc description={game!.description}/>
            </Grid>
        </Container>
    </Box>
}

const page = () => <Profile content={<GameProfilePage/>}/>
export default page