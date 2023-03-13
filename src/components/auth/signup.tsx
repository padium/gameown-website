import {Box, Button, Checkbox, Container, CssBaseline, FormControlLabel, Grid, Link, TextField, Typography} from "@mui/material"
import React from "react"
import {Logo} from "../../resources"
import Path from "../../routes/path.enum"

export default function SignUp() {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const data = new FormData(event.currentTarget)
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        })
    };

    return (
        <Container maxWidth="xs">
            <CssBaseline/>
            <Box sx={{
                marginTop: 5,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}>
                <img className="w-16 h-auto" src={Logo} alt="logo"/>
                <Typography component="h1" variant="h5">
                    Signup
                </Typography>
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{mt: 3}}>
                    <TextField
                        className="mt-3"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        inputProps={{
                            style: {
                                padding: 14
                            }
                        }}
                    />
                    <TextField
                        className="mt-1"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="new-password"
                        inputProps={{
                            style: {
                                padding: 14
                            }
                        }}
                    />
                    <FormControlLabel className="mt-2"
                        control={<Checkbox value="allowExtraEmails" color="primary"/>}
                        label="I want to receive marketing promotions and updates via email."
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{mt: 3, mb: 2}}
                    >
                        Sign Up
                    </Button>
                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Link href={Path.LOGIN} variant="body2">
                                Already have an account? Sign in
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    )
}
