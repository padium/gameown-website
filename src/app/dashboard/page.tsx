import './page.module.css'
import {Container, Grid, Paper} from "@mui/material"
import HeadMenu from "../../components/dashboard/head-menu"
import NavMenu from "../../components/dashboard/nav-menu"
import {menu} from "./menu-items"
import {ReactNode} from "react"

export interface DashboardProps {
    content: ReactNode
}

export default function Dashboard(props: DashboardProps) {
    return <div>
        <HeadMenu/>
        <Grid container>
            <Grid item xs={2}>
                <NavMenu categories={menu}/>
            </Grid>
            <Grid item xs>
                <Container component="main">
                    <Paper elevation={0} sx={{background: "rgb(244, 248, 252)", width: "100%", height: "100%"}}>
                        {props.content}
                    </Paper>
                </Container>
            </Grid>
        </Grid>
    </div>
}
