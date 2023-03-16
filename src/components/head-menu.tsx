import {Button, Container, Grid, Stack} from "@mui/material"
import Path from "../routes/path.enum"
import React from "react"
import {useNavigate} from "react-router"

export default function HeadMenu() {
    const navigate = useNavigate()

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
                    <Stack direction="row" spacing={1} justifyContent="end">
                        <Button variant="outlined" onClick={() => navigate(Path.LOGIN)}>Login</Button>
                        <Button variant="contained" onClick={() => navigate(Path.REGISTER)}>Register</Button>
                    </Stack>
                </Grid>
            </Grid>
        </Container>
    )
}
