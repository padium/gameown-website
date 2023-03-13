;
import {createTheme} from "@mui/material/styles"

export const darkTheme = createTheme({
    palette: {
        mode: "dark",
    },
    typography: {
        button: {
            textTransform: 'none'
        }
    }
})