import { Box, Button, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import bg from "../../Digital Card Assets/3.png";
import Play from "../../Digital Card Assets/Play.jpg";
import { useNavigate } from "react-router-dom";
// import vid from "../../Digital Card Assets/Hero-vid-1.gif";
import sideimg from "../../Digital Card Assets/hero_img.png";
import './slider.css';
import obj from '../../Digital Card Assets/tire.obj'
export default function Hero() {

    const theme = useTheme();
    const mobile = useMediaQuery(theme.breakpoints.down("sm"));
    const medium = useMediaQuery(theme.breakpoints.down(1100));
    const navigate = useNavigate();
    return (
        <Box
            sx={{
                background: "transparent",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between"
            }}
        >
            <Grid container spacing={3}>
                <Grid
                    item
                    xs={12}
                    md={8}
                    lg={8}
                    sx={{
                        backgroundImage: { xs: "", lg: `url('${bg}')` },
                        backgroundSize: "90% 88%",
                        backgroundRepeat: "no-repeat",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "start",
                        alignItems: "flex-start",
                        mt: { xs: "20%", md: "8%", lg: "6%" }
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: { xs: "1.9em", lg: "2.3rem" },
                            fontWeight: 600,
                            fontFamily: "OXANIUM",
                            color: { xs: "#ffffff", lg: "#043f77" },
                            letterSpacing: "-1.2px",
                            mt: { xs: "5.5vh", md: "10%" },
                            ml: "1.5%",
                            textAlign: { xs: "left" },
                            display: { xs: "none", lg: "flex" },
                            width: "30vw"

                        }}
                    >
                        GET DIGITAL BUSINESS CARD  FOR YOUR BUSINESS
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: { xs: "1.9em", lg: "2.4em" },
                            fontWeight: 600,
                            fontFamily: "OXANIUM",
                            color: { xs: "#ffffff", lg: "#043f77" },
                            letterSpacing: "-1.2px",
                            m: { xs: "auto" },
                            mt: { xs: "5.5vh", md: "10%" },
                            ml: "2.5%",
                            textAlign: "center",
                            display: mobile ? "none" : medium ? "block" : "none"

                        }}
                    >
                        GET DIGITAL <br /> BUSINESS CARD  FOR <br /> YOUR BUSINESS
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: { xs: "1.9em", lg: "2.4em" },
                            fontWeight: 600,
                            fontFamily: "OXANIUM",
                            color: { xs: "#ffffff", lg: "#043f77" },
                            letterSpacing: "-1.2px",
                            m: { xs: "auto" },
                            mt: { xs: "5.5vh", md: "10%" },
                            ml: "2.5%",
                            textAlign: { xs: "center" },
                            display: mobile ? "block" : medium ? "none" : "none"

                        }}
                    >
                        GET DIGITAL <br /> BUSINESS CARD  FOR <br /> YOUR BUSINESS
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: { xs: "1.1em", lg: "1.3em" },
                            fontWeight: 400,
                            fontFamily: "OXANIUM",
                            color: "#000000",
                            letterSpacing: "-0.2px",
                            mt: { xs: "5.5vh", md: "7%" },
                            ml: "1.5%",
                            textAlign: "left",
                            display: { xs: "none", lg: "flex" }
                        }}
                    >
                        digital business card platform makes <br />designing a card simple, convenient, and <br />reliable.
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: { xs: "1.1em", lg: "1.3em" },
                            fontWeight: 400,
                            fontFamily: "OXANIUM",
                            color: { xs: "#ffffff", lg: "#043f77" },
                            letterSpacing: "-0.2px",
                            m: { xs: "auto" },
                            mt: { xs: "5.5vh", md: "7%" },
                            ml: "2.5%",
                            textAlign: { xs: "center", lg: "left" },
                            display: { xs: "block", lg: "none" }
                        }}
                    >
                        digital business card platform makes designing a card simple, convenient, and reliable.create what you need in Just 5 minutes
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: "1.3em",
                            fontWeight: 400,
                            fontFamily: "OXANIUM",
                            color: "#000000",
                            letterSpacing: "-0.2px",
                            mt: "4%",
                            ml: "1.5%",
                            display: { xs: "none", md: "flex" }
                        }}
                    >
                        create what you need in Just 5 minutes
                    </Typography>
                    <Grid container spacing={2} sx={{ mb: { xs: 0, md: "17%" } }}>
                        <Grid
                            item
                            xs={12}
                            md={6}
                            lg={6}
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                mt: "8%",
                            }}
                        >
                            <Button
                                onClick={() => navigate("/digitalcardlogin")}
                                sx={{
                                    backgroundImage: `linear-gradient(to bottom left,#80ffe5,#ffffff,#ffffff)`,
                                    width: mobile ? "50%" : medium ? "35%" : "60%",
                                    p: mobile ? "1.5vh 3vw" : "1.5% 0%",
                                    borderRadius: "3em",
                                    display: { xs: "block", lg: "flex" },
                                    justifyContent: "center",
                                    alignItems: "center",
                                    flexDirection: "row",
                                    // m: "auto",
                                    boxShadow: { xs: "0px 7px 8px 1px #a3a3c2", lg: "5px 5px 8px 2px #a3a3c2" }
                                }}
                            >
                                <Typography
                                    sx={{
                                        textAlign: "center",
                                        fontSize: mobile ? "1.2em" : medium ? "1.6em" : "1.7em",
                                        fontWeight: 700,
                                        fontFamily: "OXANIUM",
                                        color: "#043f77",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        flexDirection: "row",
                                    }}
                                >
                                    Create Now

                                    <img
                                        src={Play}
                                        style={{
                                            borderRadius: "100%",
                                            width: mobile ? "10%" : medium ? "15%" : "18%",
                                            marginLeft: mobile ? "2.9vw" : medium ? "3%" : "2%",
                                        }}
                                    />
                                </Typography>
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={3} lg={3} sx={{ mt:"-8vh",ml:"-5vw", display: mobile ? "none" : medium ? "none" : "flex", justifyContent: "center", alignItems: "center" }}>
                    <img id="img1"  src={sideimg} />
                </Grid>
            </Grid>
        </Box>
    );
}
