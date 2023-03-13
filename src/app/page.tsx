import './page.module.css'
import {Button, Grid, Stack} from "@mui/material"
import React from "react"
import Footer from "../components/footer"
import HeadMenu from "../components/head-menu"
import {useNavigate} from "react-router"
import Path from "../routes/path.enum"

export default function Home() {
    const navigate = useNavigate()
    return <div>
        <HeadMenu/>
        <main>
            <Grid container height="100vh" alignItems="center" justifyContent="center" direction="column">
                <h1>Using Material UI with Next.js 13</h1>
                <Stack direction="row" columnGap={1}>
                    <Button variant="contained" onClick={()=> navigate(Path.LOGIN)}>Login</Button>
                    <Button variant="outlined" onClick={()=> navigate(Path.REGISTER)}>Register</Button>
                </Stack>
            </Grid>
        </main>
        <Footer/>
    </div>
}
