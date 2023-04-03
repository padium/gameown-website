import React, {useState} from "react"
import {Box, Button, Grid, Tab, TextField, Typography} from "@mui/material"
import {GameDto} from "@padium/core"
import {isEmpty} from "@d-lab/common-kit"
import {format} from "date-fns"
import TabContext from "@mui/lab/TabContext"
import TabList from "@mui/lab/TabList"
import TabPanel from "@mui/lab/TabPanel"

export enum ListingType {
    DIRECT_SALE = 1,
    PRE_SALE,
    CROWDFUNDING
}

export interface EditGameListing {
    game: GameDto,
    onSubmit: (game: GameDto, type: ListingType) => void,
    onBack: () => void
}

export default function EditGameListing(props: EditGameListing) {
    const {game, onSubmit, onBack} = props
    const [currentTab, setCurrentTab] = useState('1')
    const [price, setPrice] = useState<string>(game.price || "")
    const [availableAt, setAvailableAt] = useState<string>(format(new Date(game.availableAt || new Date()), 'yyyy-MM-dd'))

    const handleMenuChange = (event: React.SyntheticEvent, newValue: string) => {
        setCurrentTab(newValue)
    }

    const isNotValid = (): boolean => {
        switch (currentTab) {
            case "1":
                return isEmpty(price) || isEmpty(availableAt)
            case "2":
                return isEmpty(price) || isEmpty(availableAt)
            case "3":
                return isEmpty(price) || isEmpty(availableAt)
            default:
                return false
        }
    }
    const handleSubmit = async () => {
        onSubmit({
            ...game,
            price: isEmpty(price) ? null : price,
            availableAt: isEmpty(availableAt) ? null : new Date(availableAt)
        }, parseInt(currentTab) as ListingType)
    }

    const ItemSale = () => <Grid container>
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
    </Grid>

    return <Grid container>
        <Box sx={{width: '100%', typography: 'body1'}}>
            <TabContext value={currentTab}>
                <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
                    <TabList onChange={handleMenuChange} aria-label="lab API tabs example">
                        <Tab label="Direct Sale" value="1"/>
                        <Tab label="Pre-Sale" disabled={true} value="2"/>
                        <Tab label="Crowdfunding" disabled={true} value="3"/>
                    </TabList>
                </Box>
                <TabPanel value="1">
                    <ItemSale/>
                </TabPanel>
                <TabPanel value="2">
                    <ItemSale/>
                </TabPanel>
                <TabPanel value="3">Crowdfunding</TabPanel>
            </TabContext>
        </Box>
        <Grid item xs={12}>
            <Button
                fullWidth
                variant="contained"
                onClick={onBack}
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
        </Grid>
    </Grid>
}