import { Box, Typography, Paper, Grid, useTheme, useMediaQuery } from '@mui/material';
import React from 'react';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import StarIcon from '@mui/icons-material/Star';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MobileFriendlyIcon from '@mui/icons-material/MobileFriendly';
import FacebookIcon from '@mui/icons-material/Facebook';
import ShareIcon from '@mui/icons-material/Share';
import StorefrontIcon from '@mui/icons-material/Storefront';
import EditIcon from '@mui/icons-material/Edit';
import CollectionsIcon from '@mui/icons-material/Collections';
import YouTubeIcon from '@mui/icons-material/YouTube';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';

const data = [
    { icon:<LocalPhoneIcon sx={{ fontSize: {xs:"1.5rem",lg:"2rem"}, color: "#001e3c", mb: "1.5vh" }} /> , name: "One Click Call" },
    { icon: <WhatsAppIcon sx={{ fontSize: {xs:"1.5rem",lg:"2rem"}, color: "#001e3c", mb: "1.5vh" }} />, name: "One Click What's App" },
    { icon: <EmailIcon sx={{ fontSize: {xs:"1.5rem",lg:"2rem"}, color: "#001e3c", mb: "1.5vh" }} />, name: "One Click Email" },
    { icon: <StarIcon sx={{ fontSize: {xs:"1.5rem",lg:"2rem"}, color: "#001e3c", mb: "1.5vh" }} />, name: "Get Customers Feedback" },
    { icon: <LocationOnIcon sx={{ fontSize: {xs:"1.5rem",lg:"2rem"}, color: "#001e3c", mb: "1.5vh" }} />, name: "One Click Navigation" },
    { icon: <MobileFriendlyIcon sx={{ fontSize: {xs:"1.5rem",lg:"2rem"}, color: "#001e3c", mb: "1.5vh" }} />, name: "Add to Contact" },
    { icon: <FacebookIcon sx={{ fontSize: {xs:"1.5rem",lg:"2rem"}, color: "#001e3c", mb: "1.5vh" }} />, name: "Website & Social Links" },
    { icon: <ShareIcon sx={{ fontSize: {xs:"1.5rem",lg:"2rem"}, color: "#001e3c", mb: "1.5vh" }} />, name: "Share Unlimited" },
    { icon: <StorefrontIcon sx={{ fontSize: {xs:"1.5rem",lg:"2rem"}, color: "#001e3c", mb: "1.5vh" }} />, name: "Online Store" },
    { icon: <EditIcon sx={{ fontSize: {xs:"1.5rem",lg:"2rem"}, color: "#001e3c", mb: "1.5vh" }} />, name: "Easy To Update" },
    { icon: <CollectionsIcon sx={{ fontSize: {xs:"1.5rem",lg:"2rem"}, color: "#001e3c", mb: "1.5vh" }} />, name: "Photo Gallary" },
    { icon: <YouTubeIcon sx={{ fontSize: {xs:"1.5rem",lg:"2rem"}, color: "#001e3c", mb: "1.5vh" }} />, name: "YouTube Video Gallery" },
    { icon: <CurrencyRupeeIcon sx={{ fontSize: {xs:"1.5rem",lg:"2rem"}, color: "#001e3c", mb: "1.5vh" }} />, name: "Payment Section" },
    { icon: <ChatBubbleIcon sx={{ fontSize: {xs:"1.5rem",lg:"2rem"}, color: "#001e3c", mb: "1.5vh" }} />, name: "Enquiry Form" },
]

export default function Features() {

    const theme = useTheme();
    const mobile = useMediaQuery(theme.breakpoints.down("sm"));

    const Card = () => {
        return data.map((item) => {
            return (
                <Grid item xs={6} lg={3}>
                    <Paper
                        elevation={3}
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            flexDirection: "column",
                            p: "4vh 2vw",
                            height:80,
                            borderRadius: "10px",
                            transition: "box-shadow 0.3s ease, transform 0.3s ease, border 0.3s ease",
                            "&:hover": {
                                boxShadow: "0px 0px 10px 2px rgba(0, 0, 0, 0.3)",
                                transform: "scale(1.1)",
                                border: "5px solid #000000",
                                m:"-10px"
                            },
                        }}
                    >
                        {item.icon}
                        <Typography
                            sx={{
                                fontSize: { xs: "1em", lg: "1.2em" },
                                fontFamily: "OXANIUM",
                                fontWeight: 600,
                                color: "#001e3c",
                                textAlign: "center",
                            }}
                        >
                            {item.name}
                        </Typography>
                    </Paper>
                </Grid>
            )
        })
    }
    const Card1 = () => {
        return data.map((item) => {
            return (
                <Grid item xs={4} lg={3}>
                    <Paper elevation={3} sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                        p: "1.5vh 1vw",
                        height:50,
                        borderRadius:2,
                        transition: "box-shadow 0.3s ease, transform 0.3s ease, border 0.3s ease",
                            "&:hover": {
                                boxShadow: "0px 0px 10px 2px rgba(0, 0, 0, 0.3)",
                                transform: "scale(1.1)",
                                border: "5px solid #000000",
                                m:"-10px"
                            },
                    }}>
                        {item.icon}
                        <Typography sx={{ fontSize: { xs: "0.7em", lg: "1.2em" }, fontFamily: "OXANIUM", fontWeight: 600, color: "#001e3c", textAlign: "center" }}>
                            {item.name}
                        </Typography>
                    </Paper>
                </Grid>
            )
        })
    }
    return (
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <Typography sx={{ fontSize: { xs: "2.5em", lg: "3.2em" }, fontFamily: "OXANIUM", fontWeight: 700, textDecoration: "underline", color: "#ffffff", textAlign: "center", mt: { xs: "4vh", lg: "6vh" } }}>
                Features
            </Typography>
            <Typography sx={{ fontSize: { xs: "2em", lg: "2.4em" }, fontFamily: "OXANIUM", fontWeight: 500, color: "#ffffff", textAlign: "center", mb: { xs: "8vh", lg: "12vh" }, mt: { xs: "4vh", lg: "6vh" } }}>
                One Business Card, Endless Possibilities
            </Typography>
            <Grid container spacing={3} sx={{ p: "0vh 3vw",paddingX:{xs:"20px",lg:"180px"},display:"flex",justifyContent:"center",alignItems:"center" }}>
                {mobile ? <Card1 /> : <Card />}
            </Grid>
        </Box>
    )
}
