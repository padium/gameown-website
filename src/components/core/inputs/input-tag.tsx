import { Cancel } from "@mui/icons-material"
import { Stack, TextField, Typography } from "@mui/material"
import { Box } from "@mui/system"
import { ChangeEvent, useState} from "react"

const Tags = (props: { text: string, handleDelete: (text: string) => void }) => {
    return (
        <Box
            sx={{
                background: "#283240",
                height: "100%",
                display: "flex",
                padding: "0.4rem",
                margin: "0 0.5rem 0 0",
                justifyContent: "center",
                alignContent: "center",
                color: "#ffffff",
            }}
        >
            <Stack direction='row' gap={1}>
                <Typography>{props.text}</Typography>
                <Cancel
                    sx={{cursor: "pointer"}}
                    onClick={() => props.handleDelete(props.text)}
                />
            </Stack>
        </Box>
    )
}

export default function InputTags(props: { value: string[], onChange: (tags: string[]) => void }) {
    const [current, setCurrent] = useState("")
    const [tags, setTags] = useState<string[]>(props.value)
    const handleDelete = (value: string) => {
        const newTags = tags.filter((val) => val !== value)
        setTags(newTags)
    }

    const handleOnSubmit = (e: { preventDefault: () => void }) => {
        e.preventDefault()
        const newTags = [...tags, current]
        setTags(newTags)
        setCurrent("")
        props.onChange(newTags)
    }

    const updateTag = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const value: string = e.target.value
        if (!value.includes("#")) {
            setCurrent(value)
        }
    }
    
    return (
        <Box sx={{ flexGrow: 1 }}>
            <form onSubmit={handleOnSubmit}>
                <TextField
                    fullWidth
                    variant='standard'
                    size='small'
                    sx={{ margin: "1rem 0" }}
                    margin='none'
                    value={current}
                    onChange={(e) => updateTag(e)}
                    placeholder={tags.length < 5 ? "Enter tags" : ""}
                    InputProps={{
                        startAdornment: (
                            <Box sx={{ margin: "0 0.2rem 0 0", display: "flex" }}>
                                {tags.map((data, index) => {
                                    return (
                                        <Tags text={data} handleDelete={handleDelete} key={index} />
                                    )
                                })}
                            </Box>
                        ),
                    }}
                />
            </form>
        </Box>
    )
}