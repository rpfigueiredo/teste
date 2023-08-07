import { Typography, Box } from "@mui/material";
import { tokens, themeSettings } from "../../theme";
import Header from "../../components/Header";
import React from "react";

const Doctors = () => {
    const colors = tokens;
    return(
        <Box m="20px">
        <Box display="flex" justifyContent="space-between" alignItems="center">
            <Header title="Doutores" subtitle="Veja todos os nossos doutores" />
        </Box>
        </Box>
    )
}
export { Doctors }