import {Box, Button, Container, Grid, Popover, Stack} from "@mui/material"
import Path from "../routes/path.enum"
import React, {useState} from "react"
import {useNavigate} from "react-router"
import UserSession from "../utils/storage/user-session"
import {Logo} from "../resources"
import AccountMenu from "./auth/account-menu"

export default function HeadMenu() {
    const navigate = useNavigate()
    const [marketAnchor, setMarketAnchor] = useState<HTMLButtonElement | null>(null)

    const displayLogin = <Stack direction="row" spacing={1} justifyContent="end">
        <Button variant="outlined" onClick={() => navigate(Path.LOGIN)}>Login</Button>
        <Button variant="contained" onClick={() => navigate(Path.REGISTER)}>Register</Button>
    </Stack>

    const displayAccount = <Stack direction="row" spacing={1} justifyContent="end">
        <AccountMenu/>
    </Stack>

    return (
        <Box sx={{marginTop: 1, borderBottom: "0.1rem solid #DCDEDD", paddingBottom: 1}}>
            <Container>
                <Grid container>
                    <Grid item xs>
                        <Button variant="text" onClick={() => navigate(Path.HOME)}>
                            <img className="w-8 h-auto mr-1" src={Logo} alt="logo"/>
                            <span className="text-xl">Padium</span>
                        </Button>
                    </Grid>
                    <Grid item xs>
                        <Button variant="text" onClick={() => navigate(Path.STORE)}>
                            <span className="text-lg text-black">Store</span>
                        </Button>
                        <Button aria-describedby="market" variant="text" onClick={(event) => setMarketAnchor(event.currentTarget)}>
                            <span className="text-lg text-black">Market</span>
                        </Button>
                        <Popover
                            id="market"
                            open={marketAnchor != null}
                            anchorEl={marketAnchor}
                            onClose={() => setMarketAnchor(null)}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                        >
                            <Stack>
                                <Button aria-describedby="market" variant="text" onClick={() => navigate(Path.MARKETPLACE)}>
                                    <span className="text-lg text-black">Second hand marketplace</span>
                                </Button>
                                <Button aria-describedby="market" variant="text"
                                        onClick={() => window.open("https://market.immutable.com/", "_blank")}>
                                    <span className="text-lg text-black">Decentralized marketplace on ImmutableX</span>
                                </Button>
                            </Stack>
                        </Popover>
                        <Button variant="text" onClick={() => navigate(Path.INVENTORY)}>
                            <span className="text-lg text-black">Inventory</span>
                        </Button>
                        <Button variant="text" onClick={() => navigate(Path.COMMUNITY)}>
                            <span className="text-lg text-black">Community</span>
                        </Button>
                    </Grid>
                    <Grid item xs>
                        {UserSession.hasSession() ? displayAccount : displayLogin}
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}
