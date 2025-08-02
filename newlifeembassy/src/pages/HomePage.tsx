import { Box, Button, Typography } from "@mui/material";
import React from "react";
import NavBarIndex from "../components/navbar/NavbarIndex";

const HomePage: React.FC = () => {
  return (
    <Box>
      <NavBarIndex />
      <Box sx={{ justifyContent: "center", alignContent: "center" }}>
        <Typography variant="h3">
          Welcome to NewLife Embassy International church
        </Typography>
        <Typography variant="body1">Walking in the newness of life!</Typography>
      </Box>
      <Typography>HomePage</Typography>
      <Button variant="outlined">Home</Button>
    </Box>
  );
};

export default HomePage;
