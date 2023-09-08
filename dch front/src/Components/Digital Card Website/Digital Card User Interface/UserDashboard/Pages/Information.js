import { Grid, Button, Typography, TextField, useTheme, useMediaQuery } from '@mui/material'
import React, { useState } from 'react'
import Navbar from '../UserComponents/Navbar'
import Footer from '../UserComponents/Footer'
import { useNavigate } from 'react-router-dom'
import { Avatar } from '@mui/material'
import { postData } from '../../../../Services/NodeServices'
import { serverURL } from '../../../../Services/NodeServices'
import InputAdornment from '@mui/material/InputAdornment';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CallIcon from '@mui/icons-material/Call';
import { Uploader } from "uploader";
import { UploadButton } from "react-uploader";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import Dropzone from 'react-dropzone';
import { confirmAlert } from 'react-confirm-alert'; // Import
import BeenhereIcon from '@mui/icons-material/Beenhere';

const Information = () => {

    const theme = useTheme();
    const mobile = useMediaQuery(theme.breakpoints.down(600));
    const tablet = useMediaQuery(theme.breakpoints.down(960));
    const [crop, setCrop] = useState({}); // Stores the crop data
  const [image, setImage] = useState(null);

    const navigate = useNavigate()
    const cardId = window.localStorage.getItem("CardId")
    const userId = window.localStorage.getItem("userId")
    const [Icon, setIcon] = React.useState({ url: "", bytes: "" });
    const [companyCover, setCompanyCover] = React.useState({ url: "", bytes: "" });
    const [fullName, setFullName] = useState('')
    const [position, setPosition] = useState('')
    const [phone, setPhone] = useState()
    const [alternatePhone, setAlternatePhone] = useState()
    const [whatsappNo, setWhatsappNo] = useState()
    const [address, setAddress] = useState('')
    const [email, setEmail] = useState('')
    const [website, setWebsite] = useState('')
    const [location, setLocation] = useState('')
    const [companyEstDate, setCompanyEstDate] = useState('')
    const [about, setAbout] = useState('')
    const [message, setMessage] = useState('')
    const uploader = Uploader({ apiKey: "public_kW15bWRB2CmhaFttN2Hz19QJdtXP" });
    const options = {
        multi: false, editor: {
            images: {
                preview: true,          // True by default if cropping is enabled. Supports videos & PDFs too.
                crop: true,             // True by default. False disables the image editor / cropper.
                cropRatio: 5 / 2,
                cropShape: "rect"       // "rect" | "circ"
            }
        },
    }
    const options1 = {
        multi: false, editor: {
            images: {
                preview: true,          // True by default if cropping is enabled. Supports videos & PDFs too.
                crop: true,             // True by default. False disables the image editor / cropper.
                cropRatio: 2 / 1,
                cropShape: "circ"       // "rect" | "circ"
            }
        },
    }

    const fetchCardDetail = async () => {
        var formData = new FormData()
        formData.append("customerId", userId)
        var result = await postData('carddetails/getcardDetails', formData, true)
        console.log(result.data)
        setFullName(result.data.fullname)
        setPosition(result.data.position)
        setPhone(result.data.phoneNumber)
        setAlternatePhone(result.data.AlternatePhoneNumber)
        setWhatsappNo(result.data.WhatsappNo)
        setAddress(result.data.Address)
        setEmail(result.data.Email)
        if (result.data.website != 'undefined') { setWebsite(result.data.website) }
        if (result.data.location != 'undefined') { setLocation(result.data.location) }
        setCompanyEstDate(result.data.CompanyEstDate)
        setAbout(result.data.AboutUs)
        setIcon({ url: `${serverURL}/images/${result.data.companylogo}`, bytes: " " });
        setCompanyCover({ url: `${serverURL}/images/${result.data.companyCoverImage}`, bytes: " " });

    }
    React.useEffect(() => {

        fetchCardDetail()
    }, [])

    const handleSubmit = async () => {
      
        if (Icon.url == '' || fullName == '' || position == '' || phone == '' || whatsappNo == '' || address == '' || email == ''  || about == '' || companyCover.url == '') {
            setMessage("Fill all the required fields")
        }
        else {
            setMessage('')
            var formData = new FormData()
            formData.append('_id', cardId)
            formData.append('companylogo', Icon.bytes)
            formData.append('companyCover', companyCover.bytes)
            formData.append('fullname', fullName)
            formData.append('position', position)
            formData.append('phoneNumber', phone)
            formData.append('AlternatePhoneNumber', alternatePhone)
            formData.append('whatsappNo', whatsappNo)
            formData.append('Address', address)
            formData.append('Email', email)
            formData.append('website', website)
            formData.append('location', location)
            formData.append('AboutUs', about)

            var response = await postData("carddetails/updatepersonelinfo", formData, true);
            if (response.status) {
                navigate('/links')
            } else {

            }

        }
    }

    const handleIcon = (event) => {
        setIcon({
            url: URL.createObjectURL(event.target.files[0]),
            bytes: event.target.files[0],
        });
    };
    const handleCover = (event) => {
        console.log(event.target.files[0])
        setCompanyCover({
            url: URL.createObjectURL(event.target.files[0]),
            bytes: event.target.files[0],
        });
    };


    return (
        <Grid>
            <Navbar />
            <Grid container spacing={2} sx={{ display: 'flex', justifyContent: 'center', paddingX: "20px" }}>
                <Grid item xs={4} sx={{ marginTop: "2vh", marginBottom: "2vh" }}>
                    <Button sx={{
                        borderRadius: 10,
                        backgroundImage: "linear-gradient(to top left,#48dbfb,#001e3c)",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-evenly",
                        textAlign: "center",
                        alignItems: "center",
                    }} onClick={() => navigate('/themepage')} variant='contained'><NavigateBeforeIcon />Back</Button>
                </Grid>
                <Grid item xs={4} sx={{display:'flex',justifyContent:"center", marginTop: "2vh", marginBottom: "2vh" }}>
                    <Button sx={{
                        borderRadius: 10,
                        backgroundImage: "linear-gradient(to top left,#48dbfb,#001e3c)",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-evenly",
                        textAlign: "center",
                        alignItems: "center",
                    }} onClick={() => handleSubmit()} variant='contained'>Save<BeenhereIcon /></Button>
                </Grid>
                <Grid item xs={4} sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: "2vh", marginBottom: "2vh" }}>
                    <Button sx={{
                        borderRadius: 10,
                        backgroundImage: "linear-gradient(to top left,#48dbfb,#001e3c)",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-evenly",
                        textAlign: "center",
                        alignItems: "center",
                    }} onClick={() => navigate('/links')} variant='contained'>Skip<NavigateNextIcon /></Button>
                </Grid>
                <Grid container spacing={2} sx={{ width: mobile ? "90%" : '50%' }}>
                    <Grid item xs={12}>
                        <Typography textAlign='center' sx={{ fontSize: { xs: "1.4rem", md: 28 } }}>Company Details</Typography>
                    </Grid>

                    <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }} >
                        <Avatar
                            fullWidth
                            variant="rounded"
                            alt="Remy Sharp"
                            src={companyCover.url}
                            sx={{ width: 400, height: 200 }}
                        />
                    </Grid>
                    <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }} >
                    <label htmlFor="icon-button-file">
                    <input
                      style={{ display: "none" }}
                      accept="image/*"
                      id="icon-button-file"
                      type="file"
                      onChange={handleCover}
                    />
                    <Button
                      color="primary"
                      aria-label="upload picture"
                      variant='contained'
                      component="span"
                    >
                      Upload Cover Image
                    </Button>
                  </label>
                    </Grid>


                    <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }} >
                        <Avatar
                            fullWidth
                            variant="rounded"
                            alt="Remy Sharp"
                            src={Icon.url}
                            sx={{ width: 120, height: 120, borderRadius: '60%' }}
                        />
                    </Grid>
                    <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }} >
                    <label htmlFor="icon-button-file1">
                    <input
                      style={{ display: "none" }}
                      accept="image/*"
                      id="icon-button-file1"
                      type="file"
                      onChange={handleIcon}
                    />
                    <Button
                      color="primary"
                      aria-label="upload picture"
                      variant='contained'
                      component="span"
                    >
                      Upload Logo
                    </Button>
                  </label>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography textAlign='center' sx={{ fontSize: { xs: 14, md: 28 } }}>Personel Details</Typography>
                    </Grid>
                    <Grid item xs={12} style={{ display: 'flex', justifyContent: "center", marginBottom: 8 }}>
                        <TextField value={fullName} onChange={(e) => setFullName(e.target.value)} sx={{ width: mobile?"95%":tablet?"100%":'60%' }} label='Full Name' required />
                    </Grid>
                    <Grid item xs={12} style={{ display: 'flex', justifyContent: "center", marginBottom: 8 }}>
                        <TextField value={position} onChange={(e) => setPosition(e.target.value)} sx={{ width: mobile?"95%":tablet?"100%":'60%' }} label='Position/Designation' required />
                    </Grid>
                    <Grid item xs={12} style={{ display: 'flex', justifyContent: "center", marginBottom: 8 }}>
                        <TextField value={phone} type='number' InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <CallIcon />
                                </InputAdornment>
                            ),
                        }} onChange={(e) => setPhone(e.target.value)} sx={{ width: mobile?"95%":tablet?"100%":'60%' }} label='Phone Number' required />
                    </Grid>
                    <Grid item xs={12}  style={{ display: 'flex', justifyContent: "center", marginBottom: 8 }}>
                        <TextField value={alternatePhone} InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <CallIcon />
                                </InputAdornment>
                            ),
                        }} type='number' onChange={(e) => setAlternatePhone(e.target.value)} sx={{ width: mobile?"95%":tablet?"100%":'60%' }} label='Alternate Number(Optional)'/>
                    </Grid>
                    <Grid item xs={12} style={{ display: 'flex', justifyContent: "center", marginBottom: 8 }}>
                        <TextField value={whatsappNo} type='number' InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <WhatsAppIcon />
                                </InputAdornment>
                            ),
                        }} onChange={(e) => setWhatsappNo(e.target.value)} sx={{ width: mobile?"95%":tablet?"100%":'60%' }} label= 'Whatsapp Number' required />
                    </Grid>
                    <Grid item xs={12} style={{ display: 'flex', justifyContent: "center", marginBottom: 8 }}>
                        <TextField value={address} onChange={(e) => setAddress(e.target.value)} sx={{ width: mobile?"95%":tablet?"100%":'60%' }} label='Address' required />
                    </Grid>
                    <Grid item xs={12} style={{ display: 'flex', justifyContent: "center", marginBottom: 8 }}>
                        <TextField value={email} type='email' onChange={(e) => setEmail(e.target.value)} sx={{ width: mobile?"95%":tablet?"100%":'60%' }} label='Email Id' required />
                    </Grid>
                    <Grid item xs={12} style={{ display: 'flex', justifyContent: "center", marginBottom: 8 }}>
                        <TextField value={website} onChange={(e) => setWebsite(e.target.value)} sx={{ width: mobile?"95%":tablet?"100%":'60%' }} label='Website(Optional)' />
                    </Grid>
                    <Grid item xs={12} style={{ display: 'flex', justifyContent: "center", marginBottom: 8 }}>
                        <TextField value={location} onChange={(e) => setLocation(e.target.value)} sx={{ width: mobile?"95%":tablet?"100%":'60%' }} label='Location(Optional)' />
                    </Grid>
                    
                    
                    <Grid item xs={12} style={{ display: 'flex', justifyContent: "center", marginBottom: 8 }}>
                        <TextField value={about} onChange={(e) => setAbout(e.target.value)} rows={5} multiline sx={{ width: mobile?"95%":tablet?"100%":'60%' }} label='About Us' required />
                    </Grid>
                    <Grid item xs={12}>
                        <Typography textAlign='center' sx={{ fontSize: { xs: 14, md: 28 }, color: 'red' }}>{message}</Typography>
                    </Grid>
                    <Grid item xs={12} style={{ display: 'flex', justifyContent: "center", marginBottom: 8 }}>
                        <Button sx={{
                            borderRadius: 10,
                            paddingInline:"30px",
                            backgroundImage: "linear-gradient(to top left,#48dbfb,#001e3c)",
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-evenly",
                            textAlign: "center",
                            alignItems: "center",
                        }} variant='contained' onClick={() => handleSubmit()}>Next</Button>
                    </Grid>
                </Grid>
            </Grid>
            <Footer />

        </Grid>
    )
}

export default Information
