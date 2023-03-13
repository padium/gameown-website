;
import {createTheme} from "@mui/material/styles"

export const lightTheme = createTheme({
    palette: {
        mode: "light",
    },
    typography: {
        button: {
            textTransform: 'none'
        }
    }
})