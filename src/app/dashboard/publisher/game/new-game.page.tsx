import Dashboard from "../../page"
import apiClient from "../../../../clients/padium.client"
import React, {useState} from "react"
import {useNavigate} from "react-router"
import Path from "../../../../routes/path.enum"
import {Button, Checkbox, FormControlLabel, Grid, TextField, Typography} from "@mui/material"
import MarkdownEditor from "@uiw/react-markdown-editor"
import {isEmpty} from "@d-lab/common-kit"
import InputTags from "../../../../components/inputs/input-tag"

function NewGamePage() {
    const [name, setName] = useState("")
    const [header, setHeader] = useState("")
    const [description, setDescription] = useState("")
    const [websiteUrl, setWebsiteUrl] = useState("")
    const [twitterUrl, setTwitterUrl] = useState("")
    const [thumbnailUrl, setThumbnailUrl] = useState("")
    const [mainUrl, setMainUrl] = useState("")
    const [bannerUrl, setBannerUrl] = useState("")
    const [tags, setTags] = useState("")
    const [price, setPrice] = useState<number>(0)
    const [downloadUrl, setDownloadUrl] = useState("")
    const [ingamePayment, setIngamePayment] = useState(false)
    const [availableAt, setAvailableAt] = useState("")
    const navigate = useNavigate()

    const isValid = (): boolean => {
        return isEmpty(name) || isEmpty(header) || isEmpty(description) || isEmpty(thumbnailUrl) || isEmpty(mainUrl) || isEmpty(bannerUrl) || isEmpty(tags)
    }
    const handleSubmit = async () => {
        await apiClient.game.create({
            name,
            header,
            description,
            websiteUrl,
            twitterUrl,
            thumbnailUrl,
            mainUrl,
            bannerUrl,
            tags,
            price: price.toString(),
            downloadUrl,
            ingamePayment,
            availableAt
        })
        navigate(Path.DASHBOARD_P_GAMES)
    }

    const splitTags = (): string[] => {
        if (isEmpty(tags)) {
            return []
        } else {
            return tags.split("#")
        }
    }

    return <Grid container>
        <Typography>Create a new Game</Typography>
        <Grid item xs={12}>
            <Typography>Name</Typography>
            <TextField
                className="mt-5"
                margin="normal"
                required
                id="name"
                label="Publisher name"
                name="name"
                autoComplete="name"
                onChange={(e) => setName(e.target.value)}
                value={name}
            />
        </Grid>
        <Grid item xs={12}>
            <Typography>Header description</Typography>
            <TextField
                className="mt-5"
                margin="normal"
                required
                id="header"
                label="short description"
                name="header"
                onChange={(e) => setHeader(e.target.value)}
                value={header}
            />
        </Grid>
        <Grid item xs={12}>
            <Typography>Description</Typography>
            <MarkdownEditor
                style={{height: "200px"}}
                value={description}
                onChange={setDescription}
                enableScroll={true}
                previewWidth="100%"
            />
        </Grid>

        <Grid container xs={12}>
            <Grid item xs={4}>
                <Typography>Twitter URL</Typography>
                <TextField value={twitterUrl} onChange={(e) => setTwitterUrl(e.target.value)}/>
            </Grid>
            <Grid item xs={4}>
                <Typography>Website URL</Typography>
                <TextField value={websiteUrl} onChange={(e) => setWebsiteUrl(e.target.value)}/>
            </Grid>
        </Grid>

        <Grid container xs={12}>
            <Grid item xs={4}>
                <Typography>Thumbnail URL</Typography>
                <TextField required value={thumbnailUrl} onChange={(e) => setThumbnailUrl(e.target.value)}/>
            </Grid>
            <Grid item xs={4}>
                <Typography>Image URL</Typography>
                <TextField required value={mainUrl} onChange={(e) => setMainUrl(e.target.value)}/>
            </Grid>
            <Grid item xs={4}>
                <Typography>Banner URL</Typography>
                <TextField required value={bannerUrl} onChange={(e) => setBannerUrl(e.target.value)}/>
            </Grid>
        </Grid>
        <Grid container xs={12}>
            <Grid item xs={4}>
                <Typography>Tags</Typography>
                <InputTags value={splitTags()} onChange={(tags) => setTags(tags.join("#"))}/>
            </Grid>
        </Grid>

        <Grid item xs={12}>
            <Typography>Price</Typography>
            <TextField value={price} type="number" onChange={(e) => setPrice(Number.parseFloat(e.target.value))}/>
            <Typography>Download Url</Typography>
            <TextField value={downloadUrl} onChange={(e) => setDownloadUrl(e.target.value)}/>
            <Grid item xs={12}>
                <FormControlLabel
                    control={<Checkbox value="ingame payment" checked={ingamePayment} color="primary"
                                       onChange={(e) => setIngamePayment(e.target.checked)}/>}
                    label="Ingame payment?"/>
            </Grid>
            <Typography>Available At</Typography>
            <TextField value={availableAt} type="date" onChange={(e) => setAvailableAt(e.target.value)}/>
        </Grid>
        <Grid item xs={12}>
            <Button
                fullWidth
                variant="contained"
                className="mt-3 mb-2"
                onClick={handleSubmit}
                disabled={isValid()}
            >
                Create
            </Button>
        </Grid>
    </Grid>
}

const page = () => <Dashboard content={<NewGamePage/>}/>
export default page