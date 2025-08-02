import MenuIcon from "@mui/icons-material/Menu";
import { Button, Menu, MenuItem, type Theme } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { useNavigate } from "react-router";

export default function NavBarIndex() {
  const [anchor, setAnchor] = useState<null | HTMLElement>(null);
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("md")
  );
  const navigate = useNavigate();
  const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchor(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchor(null);
  };
  const page = [
    { name: "HOME", path: "/" },
    { name: "ABOUT US", path: "/aboutus" },
    { name: "CONTACT US", path: "/contactus" },
    { name: "GIVE", path: "/give" },
  ];

  const handleNavigation = (path: string) => {
    navigate(path);
    handleCloseMenu();
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="logo"
            sx={{ m: 0 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            color="inherit"
            component="link"
            sx={{
              textAlign: "center",
              textDecoration: "none",
              color: "inherit",
              fontFamily: "'Playfair Display', serif", // Church-appropriate font
            }}
          >
            NewLife Embassy
          </Typography>
          {/*Desktop display*/}
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {page.map((page) => (
              <Button
                key={page.path}
                color="inherit"
                onClick={() => handleNavigation(page.path)}
                sx={{ mx: 1, fontWeight: "medium" }}
              >
                {page.name}
              </Button>
            ))}
          </Box>

          {/*Mobile Navigation Menu*/}
          <Menu
            anchorEl={anchor}
            open={Boolean(null)}
            onClick={() => handleOpenMenu}
            onClose={() => handleCloseMenu}
            sx={{
              display: {
                md: "none",
              },
            }}
          >
            {page.map((page) => (
              <MenuItem
                key={page.name}
                onClick={() => handleNavigation(page.path)}
              >
                {page.name}
              </MenuItem>
            ))}
          </Menu>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
function useMediaQuery(p0: (theme: Theme) => any) {
  throw new Error("Function not implemented.");
}
