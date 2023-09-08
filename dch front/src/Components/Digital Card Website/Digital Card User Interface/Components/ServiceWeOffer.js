import { Box, Typography, Grid,Paper, useTheme, useMediaQuery } from "@mui/material";
import React from "react";
import bg from "../../Digital Card Assets/service_bg.jpg";
import { Computer, Contactless, Nfc,LocalOffer, Autorenew, Smartphone, Storage, CreditCard, TouchApp, Settings, BarChart, MonetizationOn } from '@mui/icons-material';


const data = [
    { icon: <Contactless sx={{ fontSize: {xs:"2.8rem",md:"2.5rem"}, color: "#001e3c", mb: "1.5vh" }} />, name: "Contactless Transfer of Details" },
    { icon: <Nfc sx={{ fontSize: {xs:"2.8rem",md:"2.5rem"}, color: "#001e3c", mb: "1.5vh" }} />, name: "Dynamic NFC Business Cards" },
    { icon: <Computer sx={{ fontSize: {xs:"2.8rem",md:"2.5rem"}, color: "#001e3c", mb: "1.5vh" }} />, name: "Tech-Savvy Business Showcase" },
    { icon: <LocalOffer sx={{ fontSize: {xs:"2.8rem",md:"2.5rem"}, color: "#001e3c", mb: "1.5vh" }} />, name: "Digital Discount Convenience" },
    { icon: <Autorenew sx={{ fontSize: {xs:"2.8rem",md:"2.5rem"}, color: "#001e3c", mb: "1.5vh" }} />, name: "Material-Free Durability and Flexibility" },
    { icon: <Smartphone sx={{ fontSize: {xs:"2.8rem",md:"2.5rem"}, color: "#001e3c", mb: "1.5vh" }} />, name: "Convenient Contact Exchange, Instantly" },
    { icon: <Storage sx={{ fontSize: {xs:"2.8rem",md:"2.5rem"}, color: "#001e3c", mb: "1.5vh" }} />, name: "Smartphone Storage Simplicity" },
    { icon: <CreditCard sx={{ fontSize: {xs:"2.8rem",md:"2.5rem"}, color: "#001e3c", mb: "1.5vh" }} />, name: "Sustainable Solution: NFC Business Cards" },
    { icon: <TouchApp sx={{ fontSize: {xs:"2.8rem",md:"2.5rem"}, color: "#001e3c", mb: "1.5vh" }} />, name: "Enhanced User Experience NFC" },
    { icon: <Settings sx={{ fontSize: {xs:"2.8rem",md:"2.5rem"}, color: "#001e3c", mb: "1.5vh" }} />, name: "Enhanced Connectivity: Programmable NFC" },
    { icon: <BarChart sx={{ fontSize: {xs:"2.8rem",md:"2.5rem"}, color: "#001e3c", mb: "1.5vh" }} />, name: "Actionable Insights: NFC Analytics" },
    { icon: <MonetizationOn sx={{ fontSize: {xs:"2.8rem",md:"2.5rem"}, color: "#001e3c", mb: "1.5vh" }} />, name: "Cost-Effective Solution: NFC Cards" },
];

export default function ServiceWeOffer() {

    const theme =useTheme();
    const mobile = useMediaQuery(theme.breakpoints.down("sm"));
    const tablet = useMediaQuery(theme.breakpoints.down(900));

    const Card = () => {
        return data.map((item,index) => {
            return (
                <Grid item xs={mobile?6:tablet?3:2}>
                    <Paper elevation={3} sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                        borderRadius:mobile?2:tablet?2:5,
                        height:100,
                        // borderTopRightRadius: "5em",
                        // borderTopLeftRadius: "5em",
                        // borderBottomRightRadius: "5em",
                        p: mobile?"1vh 1vw":tablet?"1.6vh 1.6vw":"4vh 2vw",
                        // background: "#FFDE00",
                        background:"#80d4ff",
                        boxShadow: "0px 0px 5px 2px rgba(0, 0, 0, 0.3)",
                        transition: "transform 0.3s ease, box-shadow 0.3s ease",
                        "&:hover": {
                            boxShadow: "0px 0px 10px 3px rgba(0, 0, 0, 0.5)",
                            transform: "scale(1.3)",
                            border: "5px solid #f2f2f2",
                            m:"-10px"
                        },
                    }}>
                        {item.icon}
                        <Typography sx={{ fontSize: "0.7rem", fontFamily: "OXANIUM", fontWeight: 600, color: "#001e3c", textAlign: "center" }}>
                            {item.name}
                        </Typography>
                    </Paper>
                </Grid>
            )
        })
    }

    // const Card = () => {
    //     return data.map((item) => {
    //         return (
    //             <Grid item xs={12} md={6} lg={3}>
    //                 <Box
    //                     sx={{
    //                         background: `url('${bg}')`,
    //                         backgroundSize: "100% 100%",
    //                         backgroundRepeat: "no-repeat",
    //                         display: "flex",
    //                         flexDirection: "column",
    //                         justifyContent: "center",
    //                         alignItems: "center",
    //                         borderRadius: 5,
    //                         p: { xs: "22% 10%", lg: "7vh 5vw" },
    //                         boxShadow: "0px 0px 5px 2px rgba(0, 0, 0, 0.3)",
    //                         transition: "transform 0.3s ease, box-shadow 0.3s ease",
    //                         "&:hover": {
    //                             boxShadow: "0px 0px 10px 3px rgba(0, 0, 0, 0.5)",
    //                             transform: "scale(1.02)",
    //                             border: "5px solid #f2f2f2",
    //                         },
    //                     }}
    //                 >
    //                     <Typography
    //                         sx={{
    //                             fontSize: "1.4em",
    //                             fontFamily: "OXANIUM",
    //                             fontWeight: 600,
    //                             color: "#001e3c",
    //                             textAlign: "center",
    //                         }}
    //                     >
    //                         {item.heading}
    //                     </Typography>
    //                     <br />
    //                     <Typography
    //                         sx={{
    //                             fontSize: "0.8em",
    //                             fontFamily: "OXANIUM",
    //                             fontWeight: 500,
    //                             color: "#001e3c",
    //                             textAlign: "center",
    //                         }}
    //                     >
    //                         {item.content}
    //                     </Typography>
    //                 </Box>
    //             </Grid>
    //         );
    //     });
    // };

    return (
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <Typography sx={{ fontSize: { xs: "2.5em", lg: "3.8em" }, fontFamily: "OXANIUM", fontWeight: 700, color: "#ffffff", textAlign: "center", mb: { xs: "8vh", lg: "12vh" }, mt: { xs: "4vh", lg: "6vh" } }}>
                Services We Offer
            </Typography>
            <Grid container spacing={3} sx={{ p: "0vh 3vw",paddingX:mobile?"20px":"120px" }}>
                <Card />
            </Grid>
        </Box>
    );
}
