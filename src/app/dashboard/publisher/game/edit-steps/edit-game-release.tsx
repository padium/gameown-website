import React, {useState} from "react"
import {Button, Checkbox, FormControlLabel, Grid, Stack, TextField, Typography} from "@mui/material"
import {GameDto} from "@padium/core"
import {isNull} from "@d-lab/common-kit"

export default function EditGameRelease(props: { game: GameDto, onSubmit: (game: GameDto) => void, onBack: () => void }) {
    const game = props.game
    const [downloadUrl, setDownloadUrl] = useState<string | null>(game.downloadUrl)
    const [ingamePayment, setIngamePayment] = useState(game.ingamePayment)
    const isNotValid = (): boolean => {
        return isNull(downloadUrl) || isNull(ingamePayment)
    }
    const handleSubmit = async () => {
        props.onSubmit({
            ...game,
            downloadUrl,
            ingamePayment
        })
    }

    return <Grid container>
        <Typography>Direct Sale</Typography>
        <Grid item xs={12}>
            <Typography>Installation file url:</Typography>
            <TextField
                margin="normal"
                required
                label="download url"
                name="url"
                onChange={(e) => setDownloadUrl(e.target.value)}
                value={downloadUrl}
            />
        </Grid>
        <Grid item xs={12}>
            <Stack direction="row" alignItems="center">
                <Typography>Has in-game payment:</Typography>
                <Checkbox value="remember" checked={ingamePayment} color="primary" onChange={(e) => setIngamePayment(e.target.checked)}/>
            </Stack>
        </Grid>
        <Grid item xs={12}>
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
                Apply for Game Release
            </Button>
        </Grid>
    </Grid>
}