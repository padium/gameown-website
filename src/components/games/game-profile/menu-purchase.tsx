import {Button, Grid, Stack, Typography} from "@mui/material"
import React from "react"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

export interface GameProfileMenuPurchaseProps {
    name: string
    price: string
}

export default function GameProfileMenuPurchase(props: GameProfileMenuPurchaseProps) {
    const {name, price} = props
    return <Grid container sx={{padding: "10px 20px"}}>
        <Grid item xs={12} sx={{marginBottom: "10px"}}>
            <Typography variant="h5">Buy {name}</Typography>
        </Grid>
        <Grid item xs={12} sx={{marginBottom: "10px"}}>
            <Typography variant="body1">You will receive your game a an intangible digital copy associated to an ownership proof.</Typography>
        </Grid>
        <Grid item xs={12}>
            <Stack direction='row' gap={1} alignItems="center" justifyContent="end">
                {Number.parseFloat(price) == 0.0 ? <Typography variant="h4">Free to Play</Typography> : <Typography variant="h4">{price} $</Typography>}
                <Button><AddShoppingCartIcon/>Add to cart</Button>
            </Stack>
        </Grid>
    </Grid>
}