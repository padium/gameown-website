import {Button, Grid, Stack, Typography} from "@mui/material"
import React from "react"
import NotificationAddIcon from '@mui/icons-material/NotificationAdd';

export interface GameProfileMenuWaitlistProps {
    name: string
}

export default function GameProfileMenuWaitlist(props: GameProfileMenuWaitlistProps) {
    const {name} = props
    return <Grid container sx={{padding: "10px 20px"}}>
        <Grid item xs={12} alignItems="start">
            <Typography variant="h6">{name} is not release yet.</Typography>
        </Grid>
        <Grid item xs={12}>
            <Stack direction='row' justifyContent="center">
                <Button>
                    <Stack direction='row' gap={1}>
                        <NotificationAddIcon/>
                        <Typography>Stay in touch</Typography>
                    </Stack>
                </Button>
            </Stack>
        </Grid>
    </Grid>
}