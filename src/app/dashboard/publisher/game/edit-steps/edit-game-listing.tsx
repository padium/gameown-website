import React, {useState} from "react"
import {Button, Grid, Stack, TextField, Typography} from "@mui/material"
import {GameDto} from "@padium/core"
import {isEmpty} from "@d-lab/common-kit"
import {format} from "date-fns"

export default function EditGameListing(props: { game: GameDto, onSubmit: (game: GameDto) => void, onBack: () => void }) {
    const game = props.game
    const [option, setOption] = useState(0)
    const [price, setPrice] = useState<string>(game.price || "")
    const [availableAt, setAvailableAt] = useState<string>(format(new Date(game.availableAt || new Date()), 'yyyy-MM-dd'))

    const isNotValid = (): boolean => {
        switch (option) {
            case 1:
                return isEmpty(price) || isEmpty(availableAt)
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
            price: isEmpty(price) ? null : price,
            availableAt: isEmpty(availableAt) ? null : new Date(availableAt)
        })
    }

    const options = <Stack direction="row">
        <Button onClick={() => setOption(1)}>Direct Sale</Button>
        <Button onClick={() => setOption(2)} disabled={true}>Pre-Sale</Button>
        <Button onClick={() => setOption(3)} disabled={true}>Crowdfunding</Button>
    </Stack>

    console.log("date: ", availableAt)
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
        <Grid item xs={12}>
            <Button
                fullWidth
                variant="contained"
                onClick={props.onBack}
            >
                Back
            </Button>
            {option != 0 && <Button
                fullWidth
                variant="contained"
                onClick={handleSubmit}
                disabled={isNotValid()}
                sx={{marginTop: "20px"}}
            >
                Apply for Game Listing
            </Button>}
        </Grid>
    </Grid>
}