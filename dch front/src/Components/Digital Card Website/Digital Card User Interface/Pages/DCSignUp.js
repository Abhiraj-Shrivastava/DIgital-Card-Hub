import { Box, Button, Grid, TextField, Container, Typography, useTheme, useMediaQuery } from '@mui/material';
import React, { useState } from 'react';
import logo from "../../Digital Card Assets/IndiaBuzz.png";
import bg from "../../Digital Card Assets/signup_img.png";
import { useNavigate } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import { postData } from '../../../Services/NodeServices';
import Swal from "sweetalert2";

export default function DCSignUp() {
    const theme = useTheme();
    const mobile = useMediaQuery(theme.breakpoints.down("sm"));
    const medium = useMediaQuery(theme.breakpoints.down("md"));

    const navigate = useNavigate();
    const [fullName, setFullName] = useState("");
    const [phoneNo, setPhoneNo] = useState("");
    const [emailId, setEmailId] = useState("");
    const [password, setPassword] = useState('');
    const [isError, setIsError] = useState(false);

    const handleChange = (event) => {
        const inputValue = event.target.value;
        setPassword(inputValue);
        validatePassword(inputValue);
    };

    const validatePassword = (value) => {
        // Define the regular expressions to check for lowercase, uppercase, number, and special character.
        const lowercaseRegex = /[a-z]/;
        const uppercaseRegex = /[A-Z]/;
        const numberRegex = /[0-9]/;
        const specialCharacterRegex = /[!@#$%^&*()_+{}\[\]:;<>,.?~\-=/\\|]/;

        // Check if the password meets all the requirements.
        const isValid =
            value.length >= 8 &&
            lowercaseRegex.test(value) &&
            uppercaseRegex.test(value) &&
            numberRegex.test(value) &&
            specialCharacterRegex.test(value);

        setIsError(!isValid);
    };

    const handleSubmit = async () => {
        alert(isError)
        if(isError==false){
        var formData = new FormData()
        formData.append('name', fullName)
        formData.append('email', emailId)
        formData.append('phone', phoneNo)
        formData.append('password', password)


        var result = await postData('customerLogin/customerLogin', formData, true)
        console.log(result)
        if (result.status == 'true') {
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Registered Succesfully',
                showConfirmButton: false,
                timer: 1500
            })
            navigate('/digitalcardlogin')
        }
        else if (result.status == 'exist') {
            Swal.fire({
                title: 'You already have an Account.Do you want to make a new registration',
                showDenyButton: true,
                
                confirmButtonText: 'Log In',
                denyButtonText: `Sign Up`,
                denyButtonColor:`green`,
                confirmButtonColor:"#001E3C"
              }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/digitalcardlogin')
                } else if (result.isDenied) {
                    navigate('/digitalcardsignup')
                }
              })
            //navigate('/digitalcardsignup')
        }
        else {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Fail to Register',
                showConfirmButton: false,
                timer: 1500
            })

        }
    }
    }

    return (
        <Box sx={{ background: "#001E3C", width: "100vw", height: "100vh", overflowX: "hidden" }}>
            <Navbar />
            <Container maxWidth="xl" sx={{ display: "flex", justifyContent: "center", alignItems: "center", mt: "5.5%", pt: "3%" }}>
                <Box sx={{ background: "#ffffff", p: 0, width: { xs: "100vw", md: "80vw" }, borderRadius: { xs: "4%", md: "0%" }, mt: { xs: "22%", lg: "0%" } }}>
                    <Grid container spacing={0}>
                        <Grid item lg={7} sx={{ display: { xs: "none", md: "none", lg: "flex" }, flexDirection: "column", background: "#D4E9FF", pr: "2%" }}>
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
                            <img src={bg} width={"70%"} />
                        </Grid>
                        <Grid item xs={12} lg={5} sx={{ p: { xs: "14% 5%", lg: "3% 5%" } }}>
                            <img src={logo} width={"20%"} style={{ display: mobile ? "block" : medium ? "block" : "none", margin: "auto" }} />
                            <Typography sx={{
                                fontSize: { xs: "1.5em", md: "2.6em", lg: "2.1em" },
                                fontWeight: 700,
                                fontFamily: "OXANIUM",
                                color: "#000000",
                                letterSpacing: "-0.2px",
                                mb: "2.5vh",
                                textAlign: "center"
                            }}>
                                Sign Up Here
                            </Typography>
                            <Grid container spacing={2} sx={{ p: "8% 5%" }}>
                                <Grid item xs={12}>
                                    <TextField label="Full Name" fullWidth value={fullName} onChange={(event) => setFullName(event.target.value)} />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField label="Phone Number" fullWidth value={phoneNo} onChange={(event) => setPhoneNo(event.target.value)} />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField label="Email" fullWidth value={emailId} onChange={(event) => setEmailId(event.target.value)} />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        id="password"
                                        label="Password"
                                        type="password"
                                        variant="outlined"
                                        value={password}
                                        onChange={handleChange}
                                        error={isError}
                                        helperText={
                                            isError
                                                ? 'Password must be at least 8 characters and contain at least one lowercase letter, one uppercase letter, one number, and one special character.'
                                                : ''
                                        }
                                        fullWidth
                                    />
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
                                        Sign up
                                    </Button>
                                </Grid>
                                <Grid item xs={12} sx={{ display: "flex", flexDirection: "row", alignItems: "center", mt: "1%" }}>
                                    <Typography sx={{ fontSize: "0.8em", color: "#696969", fontFamily: "OXANIUM", fontWeight: 600, textAlign: "center" }}>
                                        already have an account
                                    </Typography>
                                    &nbsp;&nbsp;
                                    <Typography onClick={() => navigate("/digitalcardlogin")} sx={{ fontSize: "0.8em", color: "#001E3C", fontFamily: "OXANIUM", fontWeight: 600, textAlign: "center", '&:hover': { color: "red" }, cursor: "pointer" }}>
                                        Log in Now
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>
    )
}
