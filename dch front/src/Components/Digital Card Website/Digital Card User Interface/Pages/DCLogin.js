import { Box, Button, Grid, TextField, Typography,Container, useTheme, useMediaQuery } from '@mui/material';
import React, { useState } from 'react';
import logo from "../../Digital Card Assets/IndiaBuzz.png";
import bg from "../../Digital Card Assets/login_img.png";
import Navbar from '../Components/Navbar';
import { useNavigate } from 'react-router-dom';
import { postData } from '../../../Services/NodeServices';
import Swal from 'sweetalert2';
import { confirmAlert } from 'react-confirm-alert'; // Import
import logo1 from '../../Digital Card Assets/dchlogo.png'

export default function DCLogin() {
    const theme = useTheme();
    const mobile = useMediaQuery(theme.breakpoints.down("sm"));
    const medium = useMediaQuery(theme.breakpoints.down("md"));
    
    const navigate = useNavigate();
    const [emailId, setEmailId] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit=async()=>{
        var formData = new FormData()
  
        formData.append('email',emailId)
        formData.append('password',password)

        
        var result = await postData('customerLogin/chkLogin', formData, true)
        console.log(result)
       
        if (result.status) {
            window.localStorage.setItem("userId",result.data._id)
                // Swal.fire({
                //         position: 'center',
                //         icon: 'success',
                //         title:'Login Succesfully',
                //         showConfirmButton: false,
                //         timer: 1500
                // })
                Swal.fire({
                    title: 'Successfully Logged In!',
                    imageUrl:logo1,
                    imageWidth: 200,
                    imageHeight: 200,
                    imageAlt: 'Custom image',
                    background:'#001e3c',
                    timer:1500,
                    width:500,
                    padding:15,
                    color:'#fff',
                    showConfirmButton:false,
                    
                  })
                navigate('/userdashboard',{state:{data:result.data}})
                window.localStorage.setItem("User",true)
               
            }
        else {
                Swal.fire({
                        position: 'center',
                        icon: 'error',
                        title: 'Fail to Login',
                        showConfirmButton: false,
                        timer: 1500
                })

        }
      
    }

    return (
        <Box sx={{ background: "#001E3C", width: "100vw", height: "100vh", overflowX: "hidden" }}>
            <Navbar />
            <Container maxWidth="xl" sx={{ display: "flex", justifyContent: "center", alignItems: "center", mt: "5.5%", pt: "3%" }}>
                <Box sx={{ background: "#ffffff", p: 0, width: {xs:"100vw",md:"80vw"},borderRadius:{xs:"4%",md:"0%"}, mt: { xs: "22%", lg: "0%" } }}>
                    <Grid container spacing={0}>
                        <Grid item xs={12} lg={5} sx={{ p: { xs: "14% 5%", lg: "8% 5%" } }}>
                            <img src={logo} width={"20%"} style={{ display: mobile ? "block" : medium ? "block" : "none", margin: "auto" }} />
                            <Typography sx={{
                                fontSize: { xs: "1.5em", md: "2.6em", lg: "2.4em" },
                                fontWeight: 700,
                                fontFamily: "OXANIUM",
                                color: "#000000",
                                letterSpacing: "-0.2px",
                                mb: "2.5vh",
                                textAlign: "center"
                            }}>
                                Welcome Back
                            </Typography>
                            <Grid container spacing={2} sx={{ p: "8% 5%" }}>
                                <Grid item xs={12}>
                                    <TextField label="Email" type='email' fullWidth value={emailId} onChange={(event)=>setEmailId(event.target.value)}  />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField label="Password" type='password' fullWidth value={password} onChange={(event)=>setPassword(event.target.value)}  />
                                </Grid>
                                <Grid item xs={12}>
                                    <Button
                                        fullWidth
                                        onClick={handleSubmit}
                                        sx={{
                                            background: "#001E3C",
                                            color: "#ffffff",
                                            p: "2% 10%",
                                            fontSize: { xs: "0.8em", md: "1.1em", lg: "1.2em" },
                                            fontWeight: 600,
                                            "&:hover": {
                                                background: "#023569",
                                                color: "#ffffff",
                                            }
                                        }}
                                    >
                                        Log in
                                    </Button>
                                </Grid>
                                <Grid item xs={12} sx={{ display: "flex", flexDirection: "row", alignItems: "center", mt: "1%" }}>
                                    <Typography sx={{ fontSize:"0.8em",color: "#696969", fontFamily: "OXANIUM", fontWeight: 600, textAlign: "center" }}>
                                        Don't have an account?
                                    </Typography>
                                    &nbsp;&nbsp;
                                    <Typography onClick={() => navigate("/digitalcardsignup")} sx={{fontSize:"0.8em", color: "#001E3C", fontFamily: "OXANIUM", fontWeight: 600, textAlign: "center", '&:hover': { color: "red" }, cursor: "pointer" }}>
                                        Sign up
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item lg={7} sx={{ display: { xs: "none", md: "none", lg: "flex" }, flexDirection: "column", background: "#DFDFDF", pr: "2%" }}>
                            <Box sx={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "flex-end",
                                mt: "2%"
                            }}>
                                <img src={logo} width={"20%"} />
                                <Typography sx={{ color: "#696969", fontFamily: "OXANIUM", fontWeight: 600, textAlign: "left" }}>
                                    We've got tips and tools to keep your business
                                </Typography>
                                <Typography sx={{ color: "#696969", fontFamily: "OXANIUM", fontWeight: 600, textAlign: "left" }}>
                                    growing while you're out of the office.
                                </Typography>
                            </Box>
                            <img src={bg} width={"60%"} />
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>

    )
}
