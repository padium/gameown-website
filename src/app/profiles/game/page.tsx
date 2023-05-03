import {useParams} from "react-router"
import Profile from "../page"
import {isNotEmpty, isNotNull} from "@d-lab/common-kit"
import Loading from "../../../components/dashboard/loading"
import {Box, Container, Grid, Tab, Tabs} from "@mui/material"
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
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
    const [currentTab, setCurrentTab] = useState('1')

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
        menu = <GameProfileMenuPurchase gameId={game!.id} name={game!.name} price={game!.price!}/>
    } else {
        menu = <GameProfileMenuWaitlist name={game!.name}/>
    }

    const handleMenuChange = (event: React.SyntheticEvent, newValue: string) => {
        setCurrentTab(newValue)
    }

    return <Box sx={{backgroundColor: "#FBFBFA"}}>
        <GameProfileBanner bannerUrl={game!.bannerUrl}/>
        <Container sx={{marginTop: 1}}>
            <GameProfileHead game={game!} menu={menu}/>
            <Grid container>
                <Box sx={{ width: '100%', typography: 'body1' }}>
                    <TabContext value={currentTab}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <TabList onChange={handleMenuChange} aria-label="lab API tabs example">
                                <Tab label="Description" value="1" />
                                <Tab label="Community" value="2" />
                            </TabList>
                        </Box>
                        <TabPanel value="1">
                            <GameProfileDesc description={game!.description}/>
                        </TabPanel>
                        <TabPanel value="2">Community</TabPanel>
                    </TabContext>
                </Box>
            </Grid>
        </Container>
    </Box>
}

const page = () => <Profile content={<GameProfilePage/>}/>
export default page