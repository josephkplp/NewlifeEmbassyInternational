import { createTheme } from "@mui/material";
import { breakpoints } from "./breakpoints";
import { components } from "./components";
import { darkPalette, lightPalette } from "./pallete";
import { shapes } from "./shapes";
import { typography } from "./typography";
import { zindex } from "./zindex";


//light theme modes
export const lightThemes = createTheme({
    palette: lightPalette,
    ...typography,
    ...breakpoints,
    ...shapes,
    ...zindex,  
    ...components,
    spacing: 8, // Default spacing of 8px
    direction: "ltr", // Default text direction

}); 
export const darkThemes = createTheme({
    palette: darkPalette,
    ...typography,
    ...breakpoints,
    ...shapes,
    ...zindex,  
    ...components,
    spacing: 8, // Default spacing of 8px
    direction: "ltr", // Default text direction

});

