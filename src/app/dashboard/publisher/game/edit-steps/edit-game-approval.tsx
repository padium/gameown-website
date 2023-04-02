import React, {useState} from "react"
import {Button, Divider, Grid, Stack, TextField, Typography} from "@mui/material"
import MarkdownEditor from "@uiw/react-markdown-editor"
import {isEmpty} from "@d-lab/common-kit"
import InputTags from "../../../../../components/core/inputs/input-tag"
import {GameDto} from "@padium/core"
import TwitterIcon from "@mui/icons-material/Twitter"
import LanguageIcon from "@mui/icons-material/Language"
import ImageIcon from "@mui/icons-material/Image"
import Media from "../../../../../components/core/media/media"

export default function EditGameApproval(props: { game: GameDto, onSubmit: (game: GameDto) => void }) {
    const game = props.game
    const [name, setName] = useState(game.name)
    const [identifier, setIdentifier] = useState(game.identifier)
    const [header, setHeader] = useState(game.header)
    const [description, setDescription] = useState(game.description)
    const [websiteUrl, setWebsiteUrl] = useState<string | null>(game.websiteUrl)
    const [twitterUrl, setTwitterUrl] = useState<string | null>(game.twitterUrl)
    const [thumbnailUrl, setThumbnailUrl] = useState(game.thumbnailUrl)
    const [mainUrl, setMainUrl] = useState(game.mainUrl)
    const [mainVideoUrl, setMainVideoUrl] = useState(game.mainVideoUrl)
    const [bannerUrl, setBannerUrl] = useState(game.bannerUrl)
    const [tags, setTags] = useState(game.tags)

    const isNotValid = (): boolean => {
        return isEmpty(name) || isEmpty(header) || isEmpty(description) || isEmpty(thumbnailUrl) || isEmpty(mainUrl) || isEmpty(bannerUrl) || isEmpty(tags)
    }
    const handleSubmit = async () => {
        props.onSubmit({
            ...game,
            name,
            identifier,
            header,
            description,
            websiteUrl,
            twitterUrl,
            thumbnailUrl,
            mainUrl,
            bannerUrl,
            tags
        })
    }

    const splitTags = (): string[] => {
        if (isEmpty(tags)) {
            return []
        } else {
            return tags.split("#")
        }
    }

    return <Grid container>
        <Grid item xs={12}>
            <Typography>Game name:</Typography>
            <TextField
                margin="normal"
                required
                id="name"
                label="name"
                name="name"
                autoComplete="name"
                onChange={(e) => setName(e.target.value)}
                value={name}
            />
        </Grid>
        <Grid item xs={12}>
            <Typography>Game identifier:</Typography>
            <TextField
                margin="normal"
                required
                label="letters separated by '-'"
                name="identifier"
                onChange={(e) => {
                    if (/[a-z-]$/.test(e.target.value)) {
                        setIdentifier(e.target.value)
                    }
                }}
                value={identifier}
            />
        </Grid>
        <Grid container xs={12}>
            <Grid item xs={6}>
                <Typography>Header description:</Typography>
                <TextField
                    margin="normal"
                    required
                    id="header"
                    label="short description"
                    name="header"
                    multiline
                    fullWidth
                    onChange={(e) => setHeader(e.target.value)}
                    value={header}
                />
            </Grid>
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
        <Grid container xs={12}>
            <Grid item xs={4}>
                <Typography sx={{marginTop: "20px"}}>Game categories:</Typography>
                <InputTags value={splitTags()} onChange={(tags) => setTags(tags.join("#"))}/>
            </Grid>
        </Grid>
        <Grid item xs={12}>
            <Stack direction="row" alignItems="center" sx={{marginTop: "20px"}}>
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
            <Stack direction="row" alignItems="center" sx={{marginTop: "20px"}}>
                <ImageIcon/>
                <TextField
                    label="Thumbnail URL"
                    sx={{margin: "10px"}}
                    value={thumbnailUrl} onChange={(e) => setThumbnailUrl(e.target.value)}
                />
            </Stack>
            <Stack direction="row">
                <Typography variant="caption">Recommended size 200x100</Typography>
            </Stack>
            <Stack direction="row">
                {thumbnailUrl && <Media image={thumbnailUrl} width={200} height={100} sx={{marginBottom: "10px"}}/>}
            </Stack>
        </Grid>
        <Grid item xs={12}>
            <Stack direction="row" alignItems="center">
                <ImageIcon/>
                <TextField
                    label="Image URL"
                    sx={{margin: "10px"}}
                    value={mainUrl} onChange={(e) => setMainUrl(e.target.value)}
                />
            </Stack>
            <Stack direction="row">
                <Typography variant="caption">Recommended size 600x400</Typography>
            </Stack>
            <Stack direction="row">
                {mainUrl && <Media image={mainUrl} width={600} height={400} sx={{marginBottom: "10px"}}/>}
            </Stack>
        </Grid>
        <Grid item xs={12}>
            <Stack direction="row" alignItems="center">
                <ImageIcon/>
                <TextField
                    label="Video URL"
                    sx={{margin: "10px"}}
                    value={mainVideoUrl} onChange={(e) => setMainVideoUrl(e.target.value)}
                />
            </Stack>
            <Stack direction="row">
                {mainVideoUrl && <Media video={mainVideoUrl} width={600} height={400} sx={{marginBottom: "10px"}}/>}
            </Stack>
        </Grid>
        <Grid item xs={12}>
            <Stack direction="row" alignItems="center">
                <ImageIcon/>
                <TextField
                    label="Banner URL"
                    sx={{margin: "10px"}}
                    value={bannerUrl} onChange={(e) => setBannerUrl(e.target.value)}
                />
            </Stack>
            <Stack direction="row">
                <Typography variant="caption">Recommended size 1400x300</Typography>
            </Stack>
            <Stack direction="row">
                {bannerUrl && <Media image={bannerUrl} width={750} height={150} sx={{marginBottom: "10px"}}/>}
            </Stack>
        </Grid>
        <Grid item xs={124}>
            <Button
                fullWidth
                variant="contained"
                onClick={handleSubmit}
                disabled={isNotValid()}
                sx={{marginTop: "20px"}}
            >
                Request Approval
            </Button>
        </Grid>
    </Grid>
}