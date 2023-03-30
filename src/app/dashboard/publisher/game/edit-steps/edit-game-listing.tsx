import React, {useState} from "react"
import {Button, Grid, Stack, TextField, Typography} from "@mui/material"
import {GameDto} from "@padium/core"
import {isNull} from "@d-lab/common-kit"

export default function EditGameListing(props: { game: GameDto, onSubmit: (game: GameDto) => void, onBack: () => void}) {
    const game = props.game
    const [submit, setSubmit] = useState(false)
    const [option, setOption] = useState(0)
    const [price, setPrice] = useState<string | null>(game.price)
    const [availableAt, setAvailableAt] = useState<string | null>(game.availableAt?.toISOString() || new Date().toISOString)

    const isNotValid = (): boolean => {
        switch (option) {
            case 1:
                return isNull(price) || isNull(availableAt)
            case 2:
                return true
            case 3:
                return true
            default:
                return false
        }
    }
    const handleSubmit = async () => {
        props.onSubmit({
            ...game,
            price,
            availableAt: availableAt ? new Date(availableAt) : null
        })
    }

    const options = <Stack direction="row">
        <Button onClick={() => setOption(1)}>Direct Sale</Button>
        <Button onClick={() => setOption(2)} disabled={true}>Pre-Sale</Button>
        <Button onClick={() => setOption(3)} disabled={true}>Crowdfunding</Button>
    </Stack>

    const menu = [
        options,
        <>
            <Typography>Direct Sale</Typography>
            <Grid item xs={12}>
                <Typography>Price:</Typography>
                <TextField
                    margin="normal"
                    required
                    label="price"
                    name="price"
                    type="number"
                    onChange={(e) => setPrice(e.target.value)}
                    value={price}
                />
            </Grid>
            <Grid item xs={12}>
                <Typography>Available at:</Typography>
                <TextField
                    margin="normal"
                    required
                    label="date"
                    name="date"
                    type="date"
                    onChange={(e) => setAvailableAt(e.target.value)}
                    value={availableAt}
                />
            </Grid>
        </>,
        <>
            <Typography>Pre-Sale</Typography>
        </>,
        <>
            <Typography>Crowdfunding</Typography>
        </>
    ]

    return <Grid container>
        {menu[option]}
        {option != 0 && <Grid item xs={12}>
            <Button
                fullWidth
                variant="contained"
                onClick={props.onBack}
            >
                Back
            </Button>
            <Button
                fullWidth
                variant="contained"
                onClick={handleSubmit}
                disabled={isNotValid()}
                sx={{marginTop: "20px"}}
            >
                Apply for Game Listing
            </Button>
        </Grid>}
    </Grid>
}