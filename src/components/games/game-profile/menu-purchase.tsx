import {Button, Grid, Stack, Typography} from "@mui/material"
import React, {useState} from "react"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import padiumClient from "../../../clients/padium.client"
import {PaymentType} from "@padium/core"
import {HttpError} from "@d-lab/common-kit"

export interface GameProfileMenuPurchaseProps {
    gameId: number
    name: string
    price: string
}

export default function GameProfileMenuPurchase(props: GameProfileMenuPurchaseProps) {
    const {gameId, name, price} = props
    const [error, setError] = useState<HttpError | null>(null)
    const [assetId, setAssetId] = useState<string | null>(null)

    const purchaseGame = async () => {
        try {
            setAssetId(null)
            setError(null)
            const purchase = await padiumClient.shop.initiateGamePurchase({gameId: gameId, paymentType: PaymentType.FIAT_CURRENCY})
            const result = await padiumClient.shop.gamePurchase({gameId: gameId, paymentId: null, transactionId: purchase.transactionId})
            setAssetId(result.assetId)
        } catch (e) {
            setError(e as HttpError)
        }
    }

    return <Grid container sx={{padding: "10px 20px"}}>
        <Grid item xs={12} sx={{marginBottom: "10px"}}>
            <Typography variant="h5">Buy {name}</Typography>
        </Grid>
        <Grid item xs={12} sx={{marginBottom: "10px"}}>
            <Typography variant="body1">You will receive your game a an intangible digital copy associated to an ownership proof.</Typography>
        </Grid>
        <Grid item xs={12}>
            <Stack direction='row' gap={1} alignItems="center" justifyContent="end">
                {Number.parseFloat(price) == 0.0 ? <Typography variant="h4">Free to Play</Typography> :
                    <Typography variant="h4">$ {price}</Typography>}
                <Button onClick={purchaseGame}><AddShoppingCartIcon/>purchase</Button>
            </Stack>
        </Grid>
        <Grid item xs={12}>
            {error && <Typography variant="body1" color="error">{error.message}</Typography>}
            {assetId && <Typography variant="body1">Asset ID: {assetId}</Typography>}
        </Grid>
    </Grid>
}