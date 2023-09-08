import { Box, Grid, Paper, Typography, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';
import Restaurants from "../../Digital Card Assets/Restaurant.png";
import fitness from "../../Digital Card Assets/fitness.png";
import Home from "../../Digital Card Assets/house-decoration.png";
import hotels from "../../Digital Card Assets/review.png";
import Dentists from "../../Digital Card Assets/dental-clinic.png";
import Education from "../../Digital Card Assets/educ.png";
import PetShops from "../../Digital Card Assets/pet-shop.png";
import RN from "../../Digital Card Assets/rental.png";
import Estate from "../../Digital Card Assets/agreement.png";
import Travel from "../../Digital Card Assets/travel (1).png";
import AutoMobile from "../../Digital Card Assets/car.png";
import DrSc from "../../Digital Card Assets/driving-school.png";
import Event from "../../Digital Card Assets/organizer.png";
import Hos from "../../Digital Card Assets/hospital.png";
import CS from "../../Digital Card Assets/food-delivery.png";
import Spa from "../../Digital Card Assets/Spa.png";



export default function Categories() {

    const theme = useTheme();
    const mobile = useMediaQuery(theme.breakpoints.down("sm"));
    const tablet = useMediaQuery(theme.breakpoints.down(900));

    const data = [
        { icon: <img src={Restaurants} width={mobile?20:40} style={{marginRight:mobile?"1vw":"2vw"}}/>, name: "Restaurants" },
        { icon: <img src={fitness} width={mobile?20:40} style={{marginRight:mobile?"1vw":"2vw"}}/>, name: "GYM" },
        { icon: <img src={Home} width={mobile?20:40} style={{marginRight:mobile?"1vw":"2vw"}}/>, name: "Home Decore" },
        { icon: <img src={hotels} width={mobile?20:40} style={{marginRight:mobile?"1vw":"2vw"}}/>, name: "Hotels" },
        { icon: <img src={Dentists} width={mobile?20:40} style={{marginRight:mobile?"1vw":"2vw"}}/>, name: "Dentists" },
        { icon: <img src={Education} width={mobile?20:40} style={{marginRight:mobile?"1vw":"2vw"}}/>, name: "Education" },
        { icon: <img src={PetShops} width={mobile?20:40} style={{marginRight:mobile?"1vw":"2vw"}}/>, name: "Pet-Shops" },
        { icon: <img src={RN} width={mobile?20:40} style={{marginRight:mobile?"1vw":"2vw"}}/>, name: "Rent & Hire" },
        { icon: <img src={Estate} width={mobile?20:40} style={{marginRight:mobile?"1vw":"2vw"}}/>, name: "Estate Agent" },
        { icon: <img src={Travel} width={mobile?20:40} style={{marginRight:mobile?"1vw":"2vw"}}/>, name: "Travel" },
        { icon: <img src={AutoMobile} width={mobile?20:40} style={{marginRight:mobile?"1vw":"2vw"}}/>, name: "AutoMobile" },
        { icon: <img src={DrSc} width={mobile?20:40} style={{marginRight:mobile?"1vw":"2vw"}}/>, name: "Driving School" },
        { icon: <img src={Event} width={mobile?20:40} style={{marginRight:mobile?"1vw":"2vw"}}/>, name: "Event Organizer" },
        { icon: <img src={Hos} width={mobile?20:40} style={{marginRight:mobile?"1vw":"2vw"}}/>, name: "Hospitals" },
        { icon: <img src={CS} width={mobile?20:40} style={{marginRight:mobile?"1vw":"2vw"}}/>, name: "Courier Service" },
        { icon: <img src={Spa} width={mobile?20:40} style={{marginRight:mobile?"1vw":"2vw"}}/>, name: "Beauty Spa" },
    ]

    const Card = () => {
        return data.map((item) => {
            return (
                <Grid item xs={mobile?6:tablet?3:3}>
                    <Paper elevation={3} sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "row",
                        borderRadius:mobile?2:tablet?4:5,
                        height:40, 
                        p: mobile?"1vh 1vw":tablet?"1.6vh 1.6vw":"4vh 2vw",
                        // background: "#FFDE00",
                        backgroundImage: "linear-gradient(to left,#6699ff,#ffffb3)",
                        boxShadow: "0px 0px 5px 2px rgba(0, 0, 0, 0.3)",
                        transition: "transform 0.3s ease, box-shadow 0.3s ease",
                        "&:hover": {
                            boxShadow: "0px 0px 10px 3px rgba(0, 0, 0, 0.5)",
                            transform: "scale(1.02)",
                            border: "5px solid #000000",
                            m:"-10px"
                        },
                    }}>
                        {item.icon}
                        <Typography sx={{ fontSize: mobile?"1rem":tablet?"1.1rem":"1.6em", fontFamily: "OXANIUM", fontWeight: 600, color: "#001e3c", textAlign: "center" }}>
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
            <Typography sx={{ fontSize: { xs: "2.5em", lg: "3.2em" }, fontFamily: "OXANIUM", fontWeight: 700, color: "#ffffff", textAlign: "center", mt: { xs: "4vh", lg: "6vh" } }}>
                Categories We Work With
            </Typography>
            <Typography sx={{ width: { xs: "95vw", lg: "70vw" }, fontSize: "1em", fontFamily: "OXANIUM", fontWeight: 400, color: "#ffffff", textAlign: "center", mb: { xs: "8vh", lg: "12vh" }, mt: { xs: "4vh", lg: "6vh" } }}>
                If you meet your prospective customers in person (one to one meeting) or atleast you do telephonic conversations to market and sell your products or services, then our Digital Business Card will help convey your message in a more strategic way.
            </Typography>
            <Grid container spacing={3} sx={{ paddingX:{xs:"10px",md:"180px"},paddingY:"5px",pl:"200px" }}>
                <Card />
            </Grid>
            <br /><br /><br />
        </Box>
    )
}
