import './page.module.css'
import {Container, Grid, Paper} from "@mui/material"
import HeadMenu from "../../components/dashboard/head-menu"
import NavMenu from "../../components/dashboard/nav-menu"
import {menu} from "./menu-items"
import {ReactNode} from "react"

export interface DashboardProps {
    content: ReactNode
}
//background: "rgb(244, 248, 252)"
export default function Dashboard(props: DashboardProps) {
    return <div>
        <HeadMenu/>
        <Grid container>
            <Grid item xs={2}>
                <NavMenu categories={menu}/>
            </Grid>
            <Grid item xs>
                <Container component="main">
                    <Paper elevation={1} sx={{width: "100%", padding: "20px"}}>
                        {props.content}
                    </Paper>
                </Container>
            </Grid>
        </Grid>
    </div>
}
