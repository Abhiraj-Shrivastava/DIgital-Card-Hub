import React from "react";
import Navbar from "./Navbar";
import { Grid, Box, Typography, Paper, Container, useTheme, useMediaQuery } from "@mui/material";
import Footer from "./Footer";
import TopBg from "../../Digital Card Assets/how to use bg.jpg";
import bg from "../../Digital Card Assets/footer.png";
import step1 from "../../Digital Card Assets/step1.jpg";
import step2 from "../../Digital Card Assets/step2.jpg";
import step3 from "../../Digital Card Assets/step3.jpg";
import step4 from "../../Digital Card Assets/step4.jpg";
import step5 from "../../Digital Card Assets/step5.jpg";
import step6 from "../../Digital Card Assets/step6.jpg";
import step7 from "../../Digital Card Assets/step7.jpg";
import step8 from "../../Digital Card Assets/step8.jpg";
import step9 from "../../Digital Card Assets/step9.jpg";

const HowToUse = () => {

    const theme = useTheme();
    const mobile = useMediaQuery(theme.breakpoints.down(490));
    const tablet = useMediaQuery(theme.breakpoints.down(1280));

    return (
        <Grid id="top" sx={{ backgroundImage: "linear-gradient(#001E3C,#81909E,#001E3C)", minHeight: "100vh" }}>
            <Navbar />
            <Grid container
                spacing={2}
                sx={{ display: "flex", justifyContent: "center", mb: "40px" }}>
                <Grid
                    item
                    xs={12}
                    sx={{
                        backgroundImage: `url('${TopBg}')`,
                        backgroundSize: "100% 100%",
                        height: { xs: "50vh", md: "68vh" },
                        backgroundBlendMode: "darken",
                        opacity: "0.8",
                    }}
                >
                    <Grid
                        container
                        spacing={2}
                        sx={{ display: "flex", justifyContent: "center", mt: mobile ? "19px" : tablet ? "30px" : "70px" }}
                    >
                        <Grid item xs={12} sx={{ mt: 15 }}>
                            <Typography
                                sx={{
                                    fontSize: { xs: 20, sm: 30, md: 40 },
                                    color: "#ffffff",
                                    textAlign: "center",
                                    fontStyle: "oblique",
                                }}
                            >
                                How To Create Digital Business Card
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={6} sm={6}>
                            <Typography
                                sx={{
                                    fontSize: { xs: 14, sm: 20, md: 20 },
                                    color: "#ffffff",
                                    textAlign: "center",
                                    fontStyle: "oblique",
                                }}
                            >
                                Creating a digital card is a simple and creative way to share
                                your personal or professional information. Here are the steps
                                to create your own digital business card.
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Grid container spacing={2} sx={{ paddingInline: "50px" }}>
                        <Grid item xs={12} md={6}>
                            <Typography sx={{ color: "#ffffff", fontSize: "5.5rem", fontWeight: "bold", fontfamily: "Oxanium" }}>01.</Typography>
                            <br />
                            <Typography sx={{ color: "#ffffff", fontSize: mobile ? "1rem" : "1.5rem", fontWeight: mobile ? 600 : "bold", fontfamily: "Oxanium" }}>
                                To Create the card
                                Users can either click on the "Create Now" button to get started
                                or choose to login/sign up.
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <img src={step1} width={mobile ? "80%" : mobile ? "80%" : "60%"} style={{ borderRadius: 15 }} alt="step_1" />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} sx={{ mt: "40px" }}>
                    <Grid container spacing={2} sx={{ paddingInline: "50px" }}>
                        {mobile ? <Grid item xs={12} md={6}>
                            <Typography sx={{ color: "#ffffff", fontSize: "5.5rem", fontWeight: "bold", fontfamily: "Oxanium" }}>02.</Typography>
                            <br />
                            <Typography sx={{ color: "#ffffff", fontSize: mobile ? "1rem" : "1.5rem", fontWeight: mobile ? 600 : "bold", fontfamily: "Oxanium" }}>
                                User login required for card creation. <br />User have to fill the credientials <br />to login.
                            </Typography>
                        </Grid> : <></>}
                        <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <img src={step2} width={mobile ? "80%" : "60%"} style={{ borderRadius: 15 }} alt="step_2" />
                        </Grid>
                        {mobile ? <></> : <Grid item xs={12} md={6}>
                            <Typography sx={{ color: "#ffffff", fontSize: "5.5rem", fontWeight: "bold", fontfamily: "Oxanium" }}>02.</Typography>
                            <br />
                            <Typography sx={{ color: "#ffffff", fontSize: mobile ? "1rem" : "1.5rem", fontWeight: mobile ? 600 : "bold", fontfamily: "Oxanium" }}>
                                User login required for card creation. <br />User have to fill the credientials <br />to login.
                            </Typography>
                        </Grid>}
                    </Grid>
                </Grid>
                <Grid item xs={12} sx={{ mt: "30px" }} >
                    <Grid container spacing={2} sx={{ paddingInline: "50px" }}>
                        <Grid item xs={12} md={6}>
                            <Typography sx={{ color: "#ffffff", fontSize: "5.5rem", fontWeight: "bold", fontfamily: "Oxanium" }}>03.</Typography>
                            <br />
                            <Typography sx={{ color: "#ffffff", fontSize: mobile ? "1rem" : "1.5rem", fontWeight: mobile ? 600 : "bold" }}>
                                New users must sign up, then design a visually appealing card with contact details, visuals, and clickable links. Optimize for sharing and regularly update. Share via email or social media.
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <img src={step3} width={mobile ? "80%" : "60%"} style={{ borderRadius: 15 }} alt="step_3" />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} sx={{ mt: "30px" }} >
                    <Grid container spacing={2} sx={{ paddingInline: "50px" }}>
                        {mobile ? <Grid item xs={12} md={6}>
                            <Typography sx={{ color: "#ffffff", fontSize: "5.5rem", fontWeight: "bold", fontfamily: "Oxanium" }}>04.</Typography>
                            <br />
                            <Typography sx={{ color: "#ffffff", fontSize: mobile ? "1rem" : "1.5rem", fontWeight: mobile ? 600 : "bold" }}>
                                Click on "+ Create New Card" to start growing your business with our service. Fill in all necessary details to create your new card and unlock its potential.
                            </Typography>
                        </Grid> : <></>}
                        <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <img src={step4} width={mobile ? "80%" : "60%"} style={{ borderRadius: 15 }} alt="step_4" />
                        </Grid>
                        {mobile ? <></> : <Grid item xs={12} md={6}>
                            <Typography sx={{ color: "#ffffff", fontSize: "5.5rem", fontWeight: "bold", fontfamily: "Oxanium" }}>04.</Typography>
                            <br />
                            <Typography sx={{ color: "#ffffff", fontSize: mobile ? "1rem" : "1.5rem", fontWeight: mobile ? 600 : "bold" }}>
                                Click on "+ Create New Card" to start growing your business with our service. Fill in all necessary details to create your new card and unlock its potential.
                            </Typography>
                        </Grid>}
                    </Grid>
                </Grid>
                <Grid item xs={12} sx={{ mt: "30px" }} >
                    <Grid container spacing={2} sx={{ paddingInline: "50px" }}>
                        <Grid item xs={12} md={6}>
                            <Typography sx={{ color: "#ffffff", fontSize: "5.5rem", fontWeight: "bold", fontfamily: "Oxanium" }}>05.</Typography>
                            <br />
                            <Typography sx={{ color: "#ffffff", fontSize: mobile ? "1rem" : "1.5rem", fontWeight: mobile ? 600 : "bold" }}>
                                Provide your Business or Company name to begin the process.
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <img src={step5} width={mobile ? "80%" : "60%"} style={{ borderRadius: 15 }} alt="step_5" />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} sx={{ mt: "30px" }} >
                    <Grid container spacing={2} sx={{ paddingInline: "50px" }}>
                        {mobile ? <Grid item xs={12} md={6}>
                            <Typography sx={{ color: "#ffffff", fontSize: "5.5rem", fontWeight: "bold", fontfamily: "Oxanium" }}>06.</Typography>
                            <br />
                            <Typography sx={{ color: "#ffffff", fontSize: mobile ? "1rem" : "1.5rem", fontWeight: mobile ? 600 : "bold" }}>Choose a theme that you prefer or one that suits your business profile for representation.</Typography>
                        </Grid> : <></>}
                        <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <img src={step6} width={mobile ? "80%" : "60%"} style={{ borderRadius: 15 }} alt="step_6" />
                        </Grid>
                        {mobile ? <></> : <Grid item xs={12} md={6}>
                            <Typography sx={{ color: "#ffffff", fontSize: "5.5rem", fontWeight: "bold", fontfamily: "Oxanium" }}>06.</Typography>
                            <br />
                            <Typography sx={{ color: "#ffffff", fontSize: mobile ? "1rem" : "1.5rem", fontWeight: mobile ? 600 : "bold" }}>Choose a theme that you prefer or one that suits your business profile for representation.</Typography>
                        </Grid>}
                    </Grid>
                </Grid>
                <Grid item xs={12} sx={{ mt: "30px" }} >
                    <Grid container spacing={2} sx={{ paddingInline: "50px" }}>
                        <Grid item xs={12} md={6}>
                            <Typography sx={{ color: "#ffffff", fontSize: "5.5rem", fontWeight: "bold", fontfamily: "Oxanium" }}>07.</Typography>
                            <br />
                            <Typography sx={{ color: "#ffffff", fontSize: mobile ? "1rem" : "1.5rem", fontWeight: mobile ? 600 : "bold" }}>
                                Please upload your business or company logo. Fill out your full name, position/designation, phone number, WhatsApp number, address, and email ID.
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <img src={step7} width={mobile ? "80%" : "60%"} style={{ borderRadius: 15 }} alt="step_7" />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} sx={{ mt: "30px" }} >
                    <Grid container spacing={2} sx={{ paddingInline: "50px" }}>
                        {mobile ? <Grid item xs={12} md={6}>
                            <Typography sx={{ color: "#ffffff", fontSize: "5.5rem", fontWeight: "bold", fontfamily: "Oxanium" }}>08.</Typography>
                            <br />
                            <Typography sx={{ color: "#ffffff", fontSize: mobile ? "1rem" : "1.5rem", fontWeight: mobile ? 600 : "bold" }}>
                                Provide your Instagram, Facebook, LinkedIn, Twitter, and YouTube channel social media account links.
                            </Typography>
                        </Grid> : <></>}
                        <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <img src={step8} width={mobile ? "80%" : "60%"} style={{ borderRadius: 15 }} alt="step_8" />
                        </Grid>
                        {mobile ? <></> : <Grid item xs={12} md={6}>
                            <Typography sx={{ color: "#ffffff", fontSize: "5.5rem", fontWeight: "bold", fontfamily: "Oxanium" }}>08.</Typography>
                            <br />
                            <Typography sx={{ color: "#ffffff", fontSize: mobile ? "1rem" : "1.5rem", fontWeight: mobile ? 600 : "bold" }}>
                                Provide your Instagram, Facebook, LinkedIn, Twitter, and YouTube channel social media account links.
                            </Typography>
                        </Grid>}
                    </Grid>
                </Grid>
                <Grid item xs={12} sx={{ mt: "30px" }} >
                    <Grid container spacing={2} sx={{ paddingInline: "50px" }}>
                        {mobile ? <Grid item xs={12} md={6}>
                            <Typography sx={{ color: "#ffffff", fontSize: "5.5rem", fontWeight: "bold", fontfamily: "Oxanium" }}>09.</Typography>
                            <br />
                            <Typography sx={{ color: "#ffffff", fontSize: mobile ? "1rem" : "1.5rem", fontWeight: mobile ? 600 : "bold" }}>
                                Provide your Instagram, Facebook, LinkedIn, Twitter, and YouTube channel social media account links.
                            </Typography>
                        </Grid> : <></>}
                       
                        {mobile ? <></> : <Grid item xs={12} md={6}>
                            <Typography sx={{ color: "#ffffff", fontSize: "5.5rem", fontWeight: "bold", fontfamily: "Oxanium" }}>09.</Typography>
                            <br />
                            <Typography sx={{ color: "#ffffff", fontSize: mobile ? "1rem" : "1.5rem", fontWeight: mobile ? 600 : "bold" }}>
                                Now Go to the dashboard page and Click on the Preview Button
                            </Typography>
                        </Grid>}
                        <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <img src={step9} width={mobile ? "80%" : "60%"} style={{ borderRadius: 15 }} alt="step_8" />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={8} sx={{ display: "flex", justifyContent: "center", alignItems: "center",mt:"50px",mb:"60px" }}>
                    <Typography sx={{ color: "#ffffff", fontSize: mobile ? "1rem" : "1.5rem", fontWeight: mobile ? 600 : "bold",textAlign:"center" }}>
                        Your visually appealing digital business card is ready to use! Design it with contact details, visuals, and clickable links. Optimize for sharing, save in a shareable format, and update regularly. Share via email or social media.
                    </Typography>
                </Grid>
            </Grid>

            <Box sx={{ backgroundImage: `url('${bg}')`, backgroundSize: "cover" }}>
                <Footer />
            </Box>
        </Grid >
    );
};

export default HowToUse;
