"use client"
import {Button, Grid, Stack} from "@mui/material"
import HeadMenu from "@/components/head-menu"
import Footer from "@/components/footer"

export default function Home() {
    return [
        <HeadMenu key="menu"/>,
        <main key="main">
            <Grid container height="100vh" alignItems="center" justifyContent="center" direction="column">
                <h1>Using Material UI with Next.js 13</h1>
                <Stack direction="row" columnGap={1}>
                    <Button variant="text">Text</Button>
                    <Button variant="contained">Contained</Button>
                    <Button variant="outlined">Outlined</Button>
                </Stack>
            </Grid>
        </main>,
        <Footer key="footer"/>
    ]
}
