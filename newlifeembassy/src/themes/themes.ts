import { createTheme } from "@mui/material";


//light theme modes
export const lightTheme = createTheme({
    palette: {
        mode: "light", // or "dark"
        primary: { main: "#1976d2" },
        secondary: { main: "#dc004e" },
        background: { default: "#f5f5f5" },
        text: { primary: "#000", secondary: "#555" },
    
    },
    typography: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        h1: { fontSize: "2.5rem", fontWeight: 500 },
        h2: { fontSize: "2rem", fontWeight: 500 },
        h3: { fontSize: "1.75rem", fontWeight: 500 },
        body1: { fontSize: "1rem" },
        body2: { fontSize: "0.875rem" },
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1280,
            xl: 1920,
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: "none",
                    borderRadius: "4px",
                },
            },
        },
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: "#1976d2",
                    color: "#fff",
                },
            },
        },
    },
    spacing: 8, // Default spacing of 8px

    shape: {
        borderRadius: 4, // Default border radius
    },
    zIndex: {
        appBar: 1200, // Default z-index for AppBar
        drawer: 1100, // Default z-index for Drawer
    },
    direction: "ltr", // Default text direction

}); 

//dark theme modes
export const darkTheme = createTheme({
    palette: {
        mode: "dark", // or "light"
        primary: { main: "#bb86fc" },
        secondary: { main: "#03dac6" },
        background: { default: "#121212" },
        text: { primary: "#fff", secondary: "#b0bec5" },
    },
    typography: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        h1: { fontSize: "2.5rem", fontWeight: 500 },
        h2: { fontSize: "2rem", fontWeight: 500 },
        h3: { fontSize: "1.75rem", fontWeight: 500 },
        body1: { fontSize: "1rem" },
        body2: { fontSize: "0.875rem" },
    },

    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1280,
            xl: 1920,
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: "none",
                    borderRadius: "4px",
                },
            },
        },
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: "#121212",
                    color: "#fff",
                },
            },
        },
    },
    spacing: 8, // Default spacing of 8px
    shape: {
        borderRadius: 4, // Default border radius
    },
    zIndex: {
        appBar: 1200, // Default z-index for AppBar
        drawer: 1100, // Default z-index for Drawer
    },
    direction: "ltr", // Default text direction
    
});