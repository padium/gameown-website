import {MenuCategory} from "../../components/dashboard/nav-menu"
import Path from "../../routes/path.enum"
import AccountBoxIcon from '@mui/icons-material/AccountBox'
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings'
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet'
import PaymentIcon from '@mui/icons-material/Payment'
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessIcon from '@mui/icons-material/Business';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import SmartToyIcon from '@mui/icons-material/SmartToy';

export const menu: MenuCategory[] = [
    {
        id: 1,
        icon: null,
        title: null,
        items: [
            {
                id: 2,
                icon: <AccountBoxIcon/>,
                title: "Public Profile",
                target: Path.DASHBOARD_PROFILE,
                children: []
            },
            {
                id: 3,
                icon: <AdminPanelSettingsIcon/>,
                title: "Account",
                target: Path.DASHBOARD_ACCOUNT,
                children: []
            }
        ]
    },
    {
        id: 100,
        icon: null,
        title: "Wallet",
        items: [
            {
                id: 101,
                icon: <AccountBalanceWalletIcon/>,
                title: "Balance",
                target: Path.DASHBOARD_WALLET,
                children: []
            },
            {
                id: 102,
                icon: <PaymentIcon/>,
                title: "Payment Method",
                target: Path.DASHBOARD_W_PAYMENT,
                children: []
            }
        ]
    },
    {
        id: 200,
        icon: null,
        title: "Game Management",
        items: [
            {
                id: 201,
                icon: <BusinessIcon/>,
                title: "Become a Publisher",
                target: Path.DASHBOARD_PUBLISHER,
                children: []
            }
        ]
    }
]

export const menuPublisher: MenuCategory = {
    id: 200,
    icon: null,
    title: "Game Management",
    items: [
        {
            id: 201,
            icon: <BusinessIcon/>,
            title: "Publisher",
            target: Path.DASHBOARD_PUBLISHER,
            children: []
        },
        {
            id: 202,
            icon: <SupervisorAccountIcon/>,
            title: "Operators",
            target: Path.DASHBOARD_P_OPERATORS,
            children: []
        },
        {
            id: 203,
            icon: <SportsEsportsIcon/>,
            title: "Games",
            target: Path.DASHBOARD_P_GAMES,
            children: []
        }
    ]
}

export const menuAdmin: MenuCategory = {
    id: 300,
    icon: null,
    title: "Admin Management",
    items: [
        {
            id: 201,
            icon: <ManageAccountsIcon/>,
            title: "Users",
            target: Path.DASHBOARD_ADMIN_USERS,
            children: []
        },
        {
            id: 202,
            icon: <SmartToyIcon/>,
            title: "Game Approval",
            target: Path.DASHBOARD_ADMIN_GAMES,
            children: []
        }
    ]
}


