import { Box, Typography } from '@mui/material';
import React from 'react';
import Img1 from "../../Digital Card Assets/phone 1.png";
import Img2 from "../../Digital Card Assets/phone 2.png";
import Img3 from "../../Digital Card Assets/phone 3.png";
import Img4 from "../../Digital Card Assets/phone 4.png";
import Img5 from "../../Digital Card Assets/phone 5.png";
import Img6 from "../../Digital Card Assets/phone 6.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation, EffectFlip, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";

const data = [
        { url: Img1 },
        { url: Img2 },
        { url: Img3 },
        { url: Img4 },
        { url: Img5 },
        { url: Img6 },

];

export default function DCSlider() {


        return (
                <Box sx={{
                        background: "transparent",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        height: 800
                }}>
                        <Typography
                                sx={{
                                        fontSize: { xs: "2.3em", lg: "3.8em" },
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
                        <Swiper
                                style={{ height: "300vh" }}
                                effect={"coverflow"}
                                grabCursor={true}
                                centeredSlides={true}
                                slidesPerView={"auto"}
                                loop={true}

                                autoplay={{
                                        delay: 1500,
                                        disableOnInteraction: false,

                                }}
                                coverflowEffect={{
                                        rotate: 50,
                                        stretch: 0,
                                        depth: 100,
                                        modifier: 1,
                                        slideShadows: false,
                                }}
                                pagination={true}
                                modules={[EffectCoverflow, Pagination, Autoplay]}
                                className="mySwiper"
                        >
                                {
                                        data.map((item) => {
                                                return (
                                                        <SwiperSlide style={{height:2000,marginBottom:20}}>
                                                                <img src={item.url} alt="image" style={{ borderRadius: 10, width: "100%" }} />
                                                        </SwiperSlide>
                                                );
                                        })
                                }
                        </Swiper>
                </Box>
        );
}