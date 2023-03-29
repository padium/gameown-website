import Dashboard from "../page"
import React, {useEffect, useState} from "react"
import {PublisherDto} from "@padium/core"
import apiClient from "../../../clients/padium.client"
import UserSession from "../../../utils/storage/user-session"
import {Button, Grid, TextField, Typography} from "@mui/material"
import {isEmpty, isNotNull} from "@d-lab/common-kit"
import MarkdownEditor from "@uiw/react-markdown-editor"

function PublisherPage() {
    const [publisher, setPublisher] = useState<PublisherDto>()
    const [startCreate, setStartCreate] = useState(false)
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [websiteUrl, setWebsiteUrl] = useState("")
    const [twitterUrl, setTwitterUrl] = useState("")
    const [logoUrl, setLogoUrl] = useState("")
    const [imageUrl, setImageUrl] = useState("")
    const [bannerUrl, setBannerUrl] = useState("")

    const resetPublisher = (publisher: PublisherDto) => {
        setPublisher(publisher)
        setName(publisher.name)
        setDescription(publisher.description)
        setWebsiteUrl(publisher.websiteUrl || "")
        setTwitterUrl(publisher.twitterUrl || "")
        setLogoUrl(publisher.logoUrl || "")
        setImageUrl(publisher.imageUrl || "")
        setBannerUrl(publisher.bannerUrl || "")
    }

    useEffect(() => {
        apiClient.publisher.list({userId: UserSession.getCurrentUserId()?.toString() || undefined, page: "0", pageSize: "100"})
            .then(response => {
                if (response.publishers.length > 0) {
                    resetPublisher(response.publishers[0])
                }
            })
    }, [])

    const handleSubmit = async () => {
        if (isNotNull(publisher)) {
            console.log("publisher!.id", publisher!.id)
            const resp = await apiClient.publisher.update(publisher!.id, {name, description, websiteUrl, twitterUrl, logoUrl, imageUrl, bannerUrl})
            resetPublisher(resp)
        } else {
            const resp = await apiClient.publisher.create({name, description, websiteUrl, twitterUrl, logoUrl, imageUrl, bannerUrl})
            resetPublisher(resp)
        }
    }

    const updatePublisher = <>
        <Grid item xs={12}>
            <TextField
                className="mt-5"
                margin="normal"
                required
                id="name"
                label="Publisher name"
                name="name"
                autoComplete="name"
                sx={{margin: "10px"}}
                onChange={(e) => setName(e.target.value)}
                value={name}
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
                <TextField
                    label="Twitter URL"
                    value={twitterUrl}
                    sx={{margin: "10px"}}
                    onChange={(e) => setTwitterUrl(e.target.value)}/>
            </Grid>
            <Grid item xs={4}>
                <TextField
                    label="Website URL"
                    sx={{margin: "10px"}}
                    value={websiteUrl} onChange={(e) => setWebsiteUrl(e.target.value)}/>
            </Grid>
        </Grid>
        <Grid container xs={12}>
            <Grid item xs={4}>
                <TextField
                    label="Logo URL"
                    sx={{margin: "10px"}}
                    value={logoUrl} onChange={(e) => setLogoUrl(e.target.value)}/>
            </Grid>
            <Grid item xs={4}>
                <TextField
                    label="Image URL"
                    sx={{margin: "10px"}}
                    value={imageUrl} onChange={(e) => setImageUrl(e.target.value)}/>
            </Grid>
            <Grid item xs={4}>
                <TextField
                    label="Banner URL"
                    sx={{margin: "10px"}}
                    value={bannerUrl} onChange={(e) => setBannerUrl(e.target.value)}/>
            </Grid>
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

    return <Grid container>
        {isNotNull(publisher) ? updatePublisher : createPublisher}
    </Grid>
}

const page = () => <Dashboard content={<PublisherPage/>}/>
export default page