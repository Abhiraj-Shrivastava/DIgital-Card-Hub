import { Button, Grid, TextField, Typography, useTheme, useMediaQuery } from '@mui/material'
import React, { useState } from 'react'
import Navbar from '../UserComponents/Navbar'
import { useLocation } from 'react-router-dom'
import Footer from '../UserComponents/Footer'
import { postData } from '../../../../Services/NodeServices'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";

const ChangePassword = () => {
    const theme = useTheme();
    const mobile = useMediaQuery(theme.breakpoints.down(600));
    const tablet = useMediaQuery(theme.breakpoints.down(960));

    const location = useLocation()
    const data = location.state.data
    const navigate = useNavigate()
    const [password, setPassword] = useState(data.password);
    const [isError, setIsError] = useState(false);

    const handleChangePassword = (event) => {
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
    const handleChange = async () => {
        var formData = new FormData()

        formData.append('email', data.email)
        formData.append('password', password)


        var result = await postData('customerLogin/updatePassword', formData, true)
        console.log(result)
        if (result.status) {
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Password Succesfully Changed',
                showConfirmButton: false,
                timer: 1500
            })
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
        <Grid>
            <Navbar />
            <Grid container spacing={2} sx={{ marginTop: 1, marginBottom: 1,display:"flex",justifyContent:"center" }}>
                <Grid item xs={12} sx={{ backgroundColor: 'lightblue' }}>
                    <Typography fontWeight='bolder'>Change Your Password</Typography>
                </Grid>
                <Grid item xs={12} sx={{ height: '20%', display: 'flex', justifyContent: 'center' }}>
                    <Button sx={{
                        borderRadius: 10,
                        backgroundImage: "linear-gradient(to top left,#48dbfb,#001e3c)",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-evenly",
                        textAlign: "center",
                        alignItems: "center",
                    }} variant='contained' onClick={() => navigate('/userDashboard')}><NavigateBeforeIcon />Back</Button>
                </Grid>
                <Grid item xs={8} md={2} sx={{ mt: mobile ? "2vh" : tablet ? "2vh" : "5vh", height: '20%', display: 'flex', justifyContent: 'center',alignItems:"center" }}>
                    <TextField id="password"
                                        label="Change Your Password"
                                        type="password"
                                        variant="outlined"
                                        value={password}
                                        onChange={handleChangePassword}
                                        error={isError}
                                        helperText={
                                            isError
                                                ? 'Password must be at least 8 characters and contain at least one lowercase letter, one uppercase letter, one number, and one special character.'
                                                : ''
                                        }  />
                </Grid>
                <Grid item xs={12} sx={{ mb:mobile?"2vh":tablet?"2vh":"5vh",height: '20%', display: 'flex', justifyContent: 'center' }}>
                    <Button sx={{
                        borderRadius: 10,
                        backgroundImage: "linear-gradient(to top left,#48dbfb,#001e3c)",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-evenly",
                        textAlign: "center",
                        alignItems: "center",
                    }} variant='contained' onClick={() => handleChange()}>Change Password</Button>
                </Grid>
            </Grid>
            <Footer />
        </Grid>
    )
}

export default ChangePassword
