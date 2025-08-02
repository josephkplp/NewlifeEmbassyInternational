import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router";
import NavBarIndex from "../components/navbar/NavbarIndex";
const ContactUs: React.FC = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    return navigate("/home");
  };
  return (
    <Box>
      <NavBarIndex />
      <Typography>ContactUs</Typography>
      <Button onClick={handleNavigate} variant="outlined">
        Home
      </Button>
    </Box>
  );
};

export default ContactUs;
