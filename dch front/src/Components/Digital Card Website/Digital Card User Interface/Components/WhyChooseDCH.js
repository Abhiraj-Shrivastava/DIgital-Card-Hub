import { Box, Container, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';
import img from "../../Digital Card Assets/why_choose.png";

export default function WhyChooseDCH() {
    const theme = useTheme();
    const mobile = useMediaQuery(theme.breakpoints.down("sm"));
    const tablet = useMediaQuery(theme.breakpoints.down(960));
    return (
        <Box sx={{
            display:"flex",
            justifyContent:"center",
            alignItems:"center"
        }}>
            <img src={img} width={mobile?"100%":tablet?"100%":""} />
        </Box>
    )
}
