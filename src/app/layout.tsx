"use client"

import './globals.css'
import {CssBaseline, ThemeProvider} from "@mui/material"
import {lightTheme} from "@/theme/light-theme"
import React from "react"

export default function RootLayout({children,}: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <head>
            <title>Padium</title>
            <meta name="description" content="Padium platform and store"/>
        </head>
        <ThemeProvider theme={lightTheme}>
            <CssBaseline/>
            <body>{children}</body>
        </ThemeProvider>
        </html>
    )
}
