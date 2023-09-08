import { Box, Button, Grid, TextField, Typography, useMediaQuery, useTheme } from "@mui/material";
import React, { useState } from "react";
import VCard from "../../Digital Card Assets/Frame_2.png";
import bg from "../../Digital Card Assets/right shape.png";
import { postData } from "../../../Services/NodeServices";
import Swal from "sweetalert2";
import logo1 from '../../Digital Card Assets/dchlogo.png'
export default function Freedom() {
    const theme = useTheme();
    const mobile = useMediaQuery(theme.breakpoints.down("sm"));
    const medium = useMediaQuery(theme.breakpoints.down(1100));
    const [number, setNumber] = useState("");
    const handleSubmit = async () => {
        let formData=new FormData
        formData.append('phoneNumber',number)
        
            let response = await postData("customdesign/addenquiry",formData,true);
            alert(JSON.stringify(response))
            if(response.status==true){
                Swal.fire({
                    title: 'Successfully Submitted!',
                    imageUrl:logo1,
                    imageWidth: 200,
                    imageHeight: 150,
                    imageAlt: 'Custom image',
                    background:'#001e3c',
                    timer:1500,
                    width:500,
                    color:'#fff',
                    showConfirmButton:false
                  })
            }
        // alert("Successful");
      };
    return (
        <Box
            sx={{
                background: "transparent",
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-end",
            }}
        >
            <Grid container spacing={2}>
                {!mobile && (
                    <Grid
                        item
                        xs={false}
                        lg={4}
                        sx={{
                            display: mobile ? "none" : medium ? "none" : "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <img src={VCard} alt="VCard" style={{ width: 700, marginLeft: "10vw" }} />
                    </Grid>
                )}
                <Grid
                    item
                    xs={12}
                    lg={8}
                    sx={{
                        backgroundImage: { xs: "none", lg: `url('${bg}')` },
                        backgroundSize: "120% 100%",
                        backgroundRepeat: "no-repeat",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-end",
                        alignItems: "flex-end",
                        textAlign: "right",
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: { xs: "1.9em", lg: "2.4em" },
                            fontWeight: 600,
                            fontFamily: "OXANIUM",
                            color: { xs: "#ffffff", lg: "#043f77" },
                            letterSpacing: "-1.2px",
                            m: "auto",
                            mt:"25vh" ,
                            mb:"5vh" ,
                            mr: { xs: "0%", lg: "4%" },
                            ml:65,
                            display: mobile?"none":medium?"none":"flex",
                            textAlign:"center"
                        }}
                    >
                     Introducing our Wide Range of Card Designs
                    </Typography>
                    <Typography
                       sx={{
                        fontSize: { xs: "1.1em", lg: "1.4em" },
                        fontWeight: 600,
                        fontFamily: "OXANIUM",
                        color: { xs: "#ffffff", lg: "#043f77" },
                        letterSpacing: "-1.2px",
                        m: "auto",
                        
                        mr: { xs: "0%", lg: "4%" },
                        display: mobile?"none":medium?"none":"flex",
                        textAlign:"center",
                        justifyContent:"flex-end",
                        ml:60
                    }}
                    >
                    we understand that every individual has unique tastes and preferences when it comes to design. That's why we are thrilled to showcase our diverse collection of card designs to cater to your personal style.
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: { xs: "1.9em", lg: "2.4em" },
                            fontWeight: 600,
                            fontFamily: "OXANIUM",
                            color: { xs: "#ffffff", lg: "#043f77" },
                            letterSpacing: "-1.2px",
                            m: "auto",
                            mt:"5vh" ,
                            mb:"5vh" ,
                            mr: { xs: "0%", lg: "4%" },
                            display: mobile?"none":medium?"none":"flex",
                            textAlign:"right"
                        }}
                    >
                       Customize with Our Designer Now!
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: { xs: mobile ? "1.9em" : "2rem", lg: "2.4em" },
                            fontWeight: 600,
                            fontFamily: "OXANIUM",
                            color: { xs: "#ffffff", lg: "#043f77" },
                            letterSpacing: "-1.2px",
                            m: "auto",
                            mt:10,
                            textAlign: "center",
                            
                            display: mobile?"block":medium?"block":"none",
                        }}
                    >
                     Introducing our Wide Range of Card Designs
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: { xs: mobile ? "1em" : "1.5rem", lg: "2.4em" },
                            fontWeight: 400,
                            fontFamily: "OXANIUM",
                            color: { xs: "#ffffff", lg: "#043f77" },
                            letterSpacing: "-1.2px",
                            m: "auto",
                            textAlign: "center",
                            
                            display: mobile?"block":medium?"block":"none",
                        }}
                    >
                    we understand that every individual has unique tastes and preferences when it comes to design. That's why we are thrilled to showcase our diverse collection of card designs to cater to your personal style.
                    </Typography>
                    
                    <Grid
                        container
                        spacing={2}
                        sx={{
                            display: mobile?"none":medium?"none":"flex",
                            justifyContent: "end",
                            alignItems: "end",
                            pr:"2vw",
                            width:"40%"
                        }}
                    >
                        <Grid item xs={12}>
                            <TextField
                            fullWidth
                                onChange={(event) => setNumber(event.target.value)}
                                type="number"
                                // sx={{ width: "30%" }}
                                label="Enter Your Number"
                            />
                        </Grid>
                        <br />
                        <Grid item xs={12}>
                            <Button fullWidth sx={{ paddingX: "80px",mb:"30vh" }} variant="contained" onClick={()=>handleSubmit()}>
                                Send
                            </Button>
                        </Grid>
                    </Grid>
                    <img
                        src={VCard}
                        alt="VCard"
                        style={{
                            display: mobile ? "block" : medium ? "block" : "none",
                            width: "80%",
                            margin: "auto",
                            marginTop: "5vh",
                        }}
                    />
                    <Typography
                        sx={{
                            fontSize: { xs: mobile ? "1.9em" : "2rem", lg: "2.4em" },
                            fontWeight: 600,
                            fontFamily: "OXANIUM",
                            color: { xs: "#ffffff", lg: "#043f77" },
                            letterSpacing: "-1.2px",
                            m: "auto",
                            textAlign: "center",
                            
                            display: mobile?"block":medium?"block":"none",
                        }}
                    >
                       Customize with Our Designer Now!
                    </Typography>
                    <Grid
                        container
                        spacing={2}
                        sx={{
                            display: mobile?"flex":medium?"flex":"none",
                            justifyContent: "center",
                            alignItems: "center",
                            
                            paddingX:"15px",
                            paddingY:"18px",
                        }}
                    > <Grid item xs={12} sx={{display:'flex',justifyContent:'center',mt:2}}>
                    <Typography color={'#fff'}>Enter Your Phone Number</Typography>
                </Grid>
                        
                        <Grid item xs={12} sx={{display:'flex',justifyContent:"center"}} >
                            
                            <TextField
                                onChange={(event) => setNumber(event.target.value)}
                                
                               sx={{bgcolor:"white",borderRadius:1,ml:-1}}
                               value={number}
                              type='number'
                            />
                        </Grid>
                        <Grid item xs={12} sx={{display:'flex',justifyContent:'center',mt:2}}>
                            <Button sx={{ paddingX: "80px",width:180 }} variant="contained" onClick={()=>handleSubmit()}>
                                Send
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
}
