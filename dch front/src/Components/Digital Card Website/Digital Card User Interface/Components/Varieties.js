import { Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import icon from "../../Digital Card Assets/hexa_icon.png";
import demo1 from "../../Digital Card Assets/demo1.png";
import demo2 from "../../Digital Card Assets/demo2.png";
import demo3 from "../../Digital Card Assets/demo3.png";
import demo4 from "../../Digital Card Assets/demo4.png";
import pvccard from "../../Digital Card Assets/pvccard.png"
import metalcard from "../../Digital Card Assets/metalcard.png"
import woodencard from "../../Digital Card Assets/woodencard.png"
import mobilepops from "../../Digital Card Assets/mobilepops.png"
import nfctags from "../../Digital Card Assets/nfctags.png"
import keychains from "../../Digital Card Assets/keychain.png"
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const data=[
  {
    name:'Pvc Card',
    image:pvccard
  },
  {
    name:'Metal Card',
    image:metalcard
  },
  {
    name:'Wooden Card',
    image:woodencard
  },
  {
    name:'Mobile Pops',
    image:mobilepops
  },
  {
    name:'NFC Tags',
    image:nfctags
  },
  {
    name:'NFC Key Chains',
    image:keychains
  },
]


const Varieties = () => {
  const theme=useTheme()
  const xs=useMediaQuery(theme.breakpoints.down('sm'))
  const sm=useMediaQuery(theme.breakpoints.down('md'))
  const [varietyData,setVarietyData]=useState(data)
  const settings = {
    dots: false,
    slidesToShow:xs?1:sm?2:3,
    slidesToScroll: 1,
    infinite:true,
    speed:1000,
    autoplay:true
};

const card = () => {
  return varietyData.map((items) => {
      return (
          <Grid style={{ display: "flex", flexWrap: "wrap" }}>
              <Grid style={{ width:"100%", height: 280, margin: 2, marginTop: 5,marginLeft:30 }}>
                  <Grid xs={10}  style={{ marginTop: 5 }}>
                      <Card
                          sx={{
                              maxWidth: 345,
                              height:280,
                              minHeight: 180,
                          }}
                          elevation={6}
                      >
                          <CardMedia
                              sx={{ height: 240, width: "100%",backgroundColor:"#fff"}}
                              image={items.image}
                              title="green iguana"
                          />
                          <CardContent>
                              <Typography
                                  gutterBottom
                                  textAlign="center"
                                  sx={{ fontSize: 18,color:"#001E3C",fontWeight:"bolder",marginTop:-1.2 }}
                              >
                                  {items.name}
                              </Typography>
                          </CardContent>
                          {/* <CardActions
                              style={{ display: "flex", justifyContent: "center" }}
                          >
                              <Button variant="filled"
                              sx={{
                                  background: "#d24a61",
                                  fontSize: 6,
                                  color: "#ffffff",
                                  border:"1px solid #d24a61",
                                  width:140,
                                  "&:hover": {
                                      backgroundColor: "#ffffff",
                                      color:"#d24a61"
                                  },
                                  marginTop:-3,
                                  marginBottom:5,
                                  padding:0.4
                              }}
                              onClick={()=>handleCategory(items._id,items.icon,items.categoryname)}
                              >Shop Now</Button>
                          </CardActions> */}
                      </Card>
                  </Grid>
              </Grid>
          </Grid>
      );
  });
};
  return (
    <Grid
      container
      spacing={2}
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid item xs={12}>
        <Typography
          sx={{
            fontSize: { xs: "2.5em", lg: "3.2em" },
            fontFamily: "OXANIUM",
            fontWeight: 700,
            textDecoration: "underline",
            color: "#ffffff",
            textAlign: "center",
            mt: { xs: "4vh", lg: "6vh" },
          }}
        >
          Unveiling the Digital Card Collection
        </Typography>
      </Grid>
      <Grid item xs={12}>
        {" "}
        <Typography
          sx={{
            fontSize: { xs: "2em", lg: "2.4em" },
            fontFamily: "OXANIUM",
            fontWeight: 500,
            color: "#ffffff",
            textAlign: "center",
            mb: { xs: "4vh", lg: "4vh" },
            mt: { xs: "2vh", lg: "2vh" },
          }}
        >
          Materials that Elevate the Experience
        </Typography>
      </Grid>
      <Grid item xs={10} sx={{marginLeft:5,marginRight:5}}>
            <Slider {...settings}>{card()}</Slider>
        </Grid>
    </Grid>
  );
};

export default Varieties;
