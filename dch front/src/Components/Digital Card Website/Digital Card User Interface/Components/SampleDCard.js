import { Box, Typography,Grid, useTheme, useMediaQuery } from '@mui/material'
import React, { useRef } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Img1 from "../../Digital Card Assets/phone 1.png"
import Img2 from "../../Digital Card Assets/phone 2.png"
import Img3 from "../../Digital Card Assets/phone 3.png"

export default function SampleDCard() {

        const theme= useTheme();
        const mobile = useMediaQuery(theme.breakpoints.down("sm"));
        const medium = useMediaQuery(theme.breakpoints.down(1100));

        let REF = useRef();
        let settings = {
                arrows: mobile?false:true,
                infinite: true,
                autoplay: true,
                speed: 700,
                slidesToShow: mobile?1:medium?2:4,
                slidesToScroll: 1,
        };

        const data = [
                { url: Img1 },
                { url: Img2 },
                { url: Img3 },
                { url: Img1 },
                { url: Img2 },
                { url: Img3 },
                { url: Img1 },
                { url: Img2 },
                { url: Img3 }
        ]

        const showImages = () => {
                return data.map((item) => {
                        return (
                                <Box style={{ margin:1 }}>
                                        <div>
                                                <img src={item.url} style={{ width: mobile?"120%":'100%' }} />
                                        </div>
                                </Box>
                        );
                });
        };

        return (
                <Box sx={{
                        background: "transparent",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",

                }}>
                        <Typography
                                sx={{
                                        fontSize: {xs:"2.3em",lg:"3.8em"},
                                        fontWeight: 700,
                                        fontFamily: "OXANIUM",
                                        color: "#FFFFFF",
                                        letterSpacing: "-0.2px",
                                        mt: { xs: "7vh", md: "3%" },
                                        textAlign: "center"
                                }}
                        >
                                Sample Digital Card Templates
                        </Typography>
                        <Box sx={{m:"10px 90px",mt:"10%"}}>
                                <Slider {...settings} ref={REF} >
                                        {showImages()}
                                </Slider>
                        </Box>
                </Box>
        )
}