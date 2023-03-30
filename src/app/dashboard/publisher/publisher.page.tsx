import Dashboard from "../page"
import React, {useEffect, useState} from "react"
import {PublisherDto} from "@padium/core"
import apiClient from "../../../clients/padium.client"
import {Button, Divider, Grid, Stack, TextField, Typography} from "@mui/material"
import {isEmpty, isNotNull} from "@d-lab/common-kit"
import MarkdownEditor from "@uiw/react-markdown-editor"
import Loading from "../../../components/dashboard/loading"
import TwitterIcon from '@mui/icons-material/Twitter'
import LanguageIcon from '@mui/icons-material/Language';
import ImageIcon from '@mui/icons-material/Image';
import {Image} from "@mui/icons-material"

function PublisherPage() {
    const [loading, setLoading] = useState(true)
    const [publisher, setPublisher] = useState<PublisherDto>()
    const [startCreate, setStartCreate] = useState(false)
    const [name, setName] = useState("")
    const [identifier, setIdentifier] = useState("")
    const [description, setDescription] = useState("")
    const [websiteUrl, setWebsiteUrl] = useState("")
    const [twitterUrl, setTwitterUrl] = useState("")
    const [logoUrl, setLogoUrl] = useState("")
    const [imageUrl, setImageUrl] = useState("")
    const [bannerUrl, setBannerUrl] = useState("")

    const resetPublisher = (publisher: PublisherDto) => {
        setPublisher(publisher)
        setName(publisher.name)
        setIdentifier(publisher.identifier)
        setDescription(publisher.description)
        setWebsiteUrl(publisher.websiteUrl || "")
        setTwitterUrl(publisher.twitterUrl || "")
        setLogoUrl(publisher.logoUrl || "")
        setImageUrl(publisher.imageUrl || "")
        setBannerUrl(publisher.bannerUrl || "")
    }

    useEffect(() => {
        apiClient.publisher.getOwn()
            .then(response => {
                if (isNotNull(response.publisher)) {
                    resetPublisher(response.publisher!)
                }
                setLoading(false)
            })
    }, [])

    const handleSubmit = async () => {
        if (isNotNull(publisher)) {
            console.log("publisher!.id", publisher!.id)
            const resp = await apiClient.publisher.update(publisher!.id, {
                name,
                identifier,
                description,
                websiteUrl,
                twitterUrl,
                logoUrl,
                imageUrl,
                bannerUrl
            })
            resetPublisher(resp)
        } else {
            const resp = await apiClient.publisher.create({name, identifier, description, websiteUrl, twitterUrl, logoUrl, imageUrl, bannerUrl})
            resetPublisher(resp)
        }
    }

    const updatePublisher = <>
        <Grid item xs={12}>
            <Typography>Publisher name:</Typography>
            <TextField
                className="mt-5"
                margin="normal"
                required
                label="name"
                name="name"
                autoComplete="name"
                sx={{margin: "10px"}}
                onChange={(e) => setName(e.target.value)}
                value={name}
            />
        </Grid>
        <Grid item xs={12}>
            <Typography>Publisher identifier:</Typography>
            <TextField
                className="mt-5"
                margin="normal"
                required
                label="letters separated by '-'"
                name="identifier"
                sx={{margin: "10px"}}
                onChange={(e) => {
                    if (isEmpty(e.target.value) || /[a-z-]$/.test(e.target.value)) {
                        setIdentifier(e.target.value)
                    }
                }}
                value={identifier}
            />
        </Grid>
        <Grid item xs={12}>
            <Typography sx={{marginTop: "10px", marginBottom: "5px"}}>Description:</Typography>
            <MarkdownEditor
                style={{height: "200px"}}
                value={description}
                onChange={setDescription}
                enableScroll={true}
                previewWidth="100%"
            />
        </Grid>
        <Divider/>
        <Grid item xs={12}>
            <Stack direction="row" alignItems="center">
                <TwitterIcon/>
                <TextField
                    label="Twitter URL"
                    value={twitterUrl}
                    sx={{margin: "10px"}}
                    onChange={(e) => setTwitterUrl(e.target.value)}/>
            </Stack>
        </Grid>
        <Grid item xs={12}>
            <Stack direction="row" alignItems="center">
                <LanguageIcon/>
                <TextField
                    label="Website URL"
                    sx={{margin: "10px"}}
                    value={websiteUrl} onChange={(e) => setWebsiteUrl(e.target.value)}/>
            </Stack>
        </Grid>
        <Divider/>
        <Grid item xs={12}>
            <Stack direction="row" alignItems="center">
                <ImageIcon/>
                <TextField
                    label="Logo URL"
                    sx={{margin: "10px"}}
                    value={logoUrl} onChange={(e) => setLogoUrl(e.target.value)}
                />
            </Stack>
            <Stack direction="row">
                <Typography variant="caption">Recommended size 350x350</Typography>
            </Stack>
            <Stack direction="row">
                {logoUrl && <img src={logoUrl} width={175} height={175} alt="preview"/>}
            </Stack>
        </Grid>
        <Grid item xs={12}>
            <Stack direction="row" alignItems="center">
                <ImageIcon/>
                <TextField
                    label="Image URL"
                    sx={{margin: "10px"}}
                    value={imageUrl} onChange={(e) => setImageUrl(e.target.value)}/>
            </Stack>
            <Stack direction="row">
                <Typography variant="caption">Recommended size 600x400</Typography>
            </Stack>
            <Stack direction="row">
                {imageUrl && <img src={imageUrl} width={300} height={200} alt="preview"/>}
            </Stack>
        </Grid>
        <Grid item xs={12}>
            <Stack direction="row" alignItems="center">
                <ImageIcon/>
                <TextField
                    label="Banner URL"
                    sx={{margin: "10px"}}
                    value={bannerUrl} onChange={(e) => setBannerUrl(e.target.value)}/>
            </Stack>
            <Stack direction="row">
                <Typography variant="caption">Recommended size 1400x350</Typography>
            </Stack>
            <Stack direction="row">
                {bannerUrl && <img src={bannerUrl} width={700} height={175} alt="preview"/>}
            </Stack>
        </Grid>
        <Grid item xs={12}>
            <Button
                fullWidth
                variant="contained"
                className="mt-3 mb-2"
                onClick={handleSubmit}
                disabled={isEmpty(name) || isEmpty(description)}
            >
                {isNotNull(publisher) ? "Save" : "Create"}
            </Button>
        </Grid>
    </>

    const createPublisher = <>
        {!startCreate && <Typography>Register a new Publisher to start publishing games.</Typography>}
        {!startCreate && <Button onClick={() => setStartCreate(true)}>start</Button>}
        {startCreate && updatePublisher}
    </>

    if (loading) {
        return <Loading/>
    }

    return <Grid container>
        {isNotNull(publisher) ? updatePublisher : createPublisher}
    </Grid>
}

const page = () => <Dashboard content={<PublisherPage/>}/>
export default page