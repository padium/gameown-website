import {Avatar, Box, IconButton, Menu, MenuItem, Typography} from "@mui/material"
import {useState} from "react"
import {useNavigate} from "react-router"
import Path from "../../routes/path.enum"
import {deepPurple} from "@mui/material/colors"
import ssoClient from "../../clients/sso.client"

export default function AccountMenu() {
    const [anchor, setAnchor] = useState<HTMLButtonElement | null>(null)
    const navigate = useNavigate()

    const logout = async () => {
        await ssoClient.auth.logout()
        navigate(Path.HOME)
    }

    return <Box>
        <IconButton onClick={(event) => setAnchor(event.currentTarget)} sx={{p: 0}}>
            <Avatar sx={{bgcolor: deepPurple[500]}}>OP</Avatar>
        </IconButton>
        <Menu
            sx={{mt: '45px'}}
            id="menu-appbar"
            anchorEl={anchor}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={anchor != null}
            onClose={() => setAnchor(null)}
        >
            <MenuItem onClick={() => navigate(Path.DASHBOARD_PROFILE)}>
                <Typography textAlign="left">Profile</Typography>
            </MenuItem>
            <MenuItem onClick={() => navigate(Path.DASHBOARD_WALLET)}>
                <Typography textAlign="left">Wallet</Typography>
            </MenuItem>
            <MenuItem onClick={() => navigate(Path.DASHBOARD_PUBLISHER)}>
                <Typography textAlign="left">Publisher</Typography>
            </MenuItem>
            <MenuItem onClick={logout}>
                <Typography textAlign="left">Logout</Typography>
            </MenuItem>
        </Menu>
    </Box>
}