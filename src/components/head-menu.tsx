import {Button, Container, Grid, Stack} from "@mui/material"
import Path from "../routes/path.enum"
import React from "react"
import {useNavigate} from "react-router"
import UserSession from "../utils/storage/user-session"

export default function HeadMenu() {
    const navigate = useNavigate()

    const displayLogin = <Stack direction="row" spacing={1} justifyContent="end">
            <Button variant="outlined" onClick={() => navigate(Path.LOGIN)}>Login</Button>
            <Button variant="contained" onClick={() => navigate(Path.REGISTER)}>Register</Button>
        </Stack>

    const displayAccount = <Stack direction="row" spacing={1} justifyContent="end">
        <Button variant="contained" onClick={() => navigate(Path.ACCOUNT)}>Account</Button>
    </Stack>

    return (
        <Container sx={{marginTop: 1}}>
            <Grid container>
                <Grid item xs>
                    Padium
                </Grid>
                <Grid item xs>
                    Menu
                </Grid>
                <Grid item xs>
                    {UserSession.hasSession() ? displayAccount : displayLogin}
                </Grid>
            </Grid>
        </Container>
    )
}
