import type { PaletteOptions } from "@mui/material/styles";


export const lightPalette: PaletteOptions = {
        mode: "light" as const, // or "dark"
        primary: { main: "#1976d2" },
        secondary: { main: "#dc004e" },
        background: { default: "#f5f5f5",paper: '#f4f4f4', },
        text: { primary: "#000", secondary: "#555" },
}

export const darkPalette: PaletteOptions = {
    mode: 'dark' as const,
    primary: {
    main: '#90caf9',
    },
    secondary: {
    main: '#f48fb1',
    },
    background: {
    default: '#121212',
    paper: '#1e1e1e',
    },
    
}