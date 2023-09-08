import { Avatar, Box, Grid, IconButton, Paper, Typography, Button } from '@mui/material'
import React from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from './Navbar'

import bg from "../../Digital Card Assets/footer.png";
import Footer from "./Footer";
import { Add, Remove } from '@mui/icons-material';
import { useState } from 'react';
import img1 from '../../Digital Card Assets/icons/1.png'
import img2 from '../../Digital Card Assets/icons/2.png'
import img3 from '../../Digital Card Assets/icons/3.png'
import img4 from '../../Digital Card Assets/icons/4.png'
import img5 from '../../Digital Card Assets/icons/5.png'
import img6 from '../../Digital Card Assets/icons/6.png'
import img7 from '../../Digital Card Assets/icons/7.png'
import img8 from '../../Digital Card Assets/icons/8.png'
import img9 from '../../Digital Card Assets/icons/9.png'
import { useNavigate } from 'react-router-dom';

const ProductCompoent = () => {
    const location = useLocation()
    const navigate=useNavigate()
    const [value, setValue] = useState(1)
    const [size, setSize] = useState("70mm")
    const [Icon, setIcon] = React.useState({ url: "", bytes: "" });
    const product = JSON.parse(location.state.product)
    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };
    const handleRemove = () => {
        if (value != 1) {
            setValue(value - 1)
        }
    }
    const handleAdd = () => {

        setValue(value + 1)

    }
    const handleIcon = (event) => {
        setIcon({
            url: URL.createObjectURL(event.target.files[0]),
            bytes: event.target.files[0],
        });
    };
    return (
        <Grid id='top' sx={{ bgcolor: "#001E3C" }}>
            <Navbar />
            <Grid container spacing={2} sx={{ display: "flex", justifyContent: 'center' }} >
                <Grid item xs={12} sx={{ mt: 15, display: { xs: 'block', md: 'none' } }}>
                    <Typography sx={{ fontSize: 25, color: "#fff", textAlign: 'center' }}>{product.name}</Typography>

                </Grid>
                <Grid item xs={10} md={5} sx={{ mt: { xs: 0, md: 15 }, display: 'flex', justifyContent: "center" }}>
                    <Paper elevation={6} sx={{ background: 'transparent' }}><img src={product.img} width={"100%"} /></Paper>
                </Grid>
                <Grid item xs={12} md={6} sx={{ mt: { xs: 0, md: 15 } }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sx={{ display: { xs: 'none', md: 'block' } }}>
                            <Typography sx={{ fontSize: 30, color: "#fff" }}>{product.name}</Typography>

                        </Grid>
                        <Grid item xs={12}>
                            <Typography sx={{ fontSize: 30, color: "#fff" }}>Price</Typography>
                            <Typography sx={{ fontSize: 25, color: "#fff" }}>Rs {product.price}/-</Typography>

                        </Grid>
                        <Grid item xs={12} sx={{ mt: 8 }}>
                            <Typography sx={{ fontSize: 30, color: "#fff" }}>Quantity</Typography>

                        </Grid>
                        <Grid item xs={12} sx={{ display: "flex", fontSize: 30 }}>
                            <Grid><IconButton sx={{ color: '#001E3C', bgcolor: "white", m: 1, "&:hover": { bgcolor: "white" } }} onClick={() => handleRemove()}><Remove /></IconButton></Grid> <Grid sx={{ display: "flex", justifyContent: 'center', alignItems: 'center', color: '#fff' }}>{value}</Grid><Grid><IconButton sx={{ color: '#001E3C', bgcolor: "white", m: 1, "&:hover": { bgcolor: "white" } }} onClick={() => handleAdd()}><Add /></IconButton></Grid>
                        </Grid>
                        <Grid item xs={12} sx={{ display: "flex", fontSize: 30, justifyContent: "center", mb: -3 }}>
                            <Typography sx={{ fontSize: 30, color: "#fff", textAlign: "center" }}>Customize Here</Typography>
                        </Grid>
                        <Grid item xs={10} sm={6} md={6} sx={{ display: "flex", mt: 8, flexDirection: "column" }}>
                            <Typography sx={{ fontSize: 30, color: "#fff" }}>Size</Typography>
                            <Grid sx={{ display: "flex", fontSize: 30 }}>
                                <Grid sx={{ border: size == "70mm" ? 2 : 0, m: 2, padding: 1, color: "#fff", cursor: 'pointer', boxShadow: 20 }} onClick={() => setSize("70mm")}>70mm</Grid>
                                <Grid sx={{ border: size == "120mm" ? 2 : 0, m: 2, padding: 1, color: "#fff", cursor: 'pointer', boxShadow: 20 }} onClick={() => setSize("120mm")}>120mm</Grid>
                            </Grid>
                        </Grid>



                        <Grid item xs={10} sm={6} md={6} sx={{ display: "flex", mt: 8, flexDirection: "column" }}>


                            <Typography sx={{ fontSize: 30, color: "#fff" }}>Logo</Typography>

                            <Grid sx={{ display: 'flex' }}>
                                <Avatar
                                    fullWidth
                                    variant="rounded"
                                    alt="Remy Sharp"
                                    src={Icon.url}
                                    sx={{ width: 80, height: 80, borderRadius: '60%' }}
                                />

                                <Grid item xs={6} sx={{ m: 3 }} >
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
                            </Grid>
                        </Grid>


                        <Grid item xs={12} sx={{ display: 'flex', justifyContent: "center" }}>
                            <Button variant='outlined' onClick={()=>navigate("/orderform",{state:{product:product,size:size,logo:Icon,quantity:value,price:product.price}})} sx={{ fontSize: 20, borderColor: '#fff', color: '#fff', boxShadow: 20, "&:hover": { bgcolor: '#fff', color: '#001E3C' } }}>Buy for One Year in Just ₹{product.price}</Button>

                        </Grid>
                        <Grid item xs={12} sx={{ display: 'flex', justifyContent: "center", m: 1 }}>
                            <Button variant='outlined' onClick={()=>navigate("/orderform",{state:{product:product,size:size,logo:Icon,quantity:value,price:product.price+500}})} sx={{ fontSize: 20, bgcolor: '#fff', color: '#001E3C', boxShadow: 20, "&:hover": { bgcolor: '#001E3C', color: '#fff', borderColor: "#fff" } }}>Buy for Two Year in Just ₹{product.price + 500}</Button>
                        </Grid>


                    </Grid>
                </Grid>

                <Grid item xs={12}>
                    <Grid container spacing={2} sx={{ display: "flex", justifyContent: "center" }}>
                        <Grid item xs={12}>
                            <Typography sx={{ fontSize: 30, color: "#fff", textAlign: 'center' }}>Features</Typography>
                        </Grid>
                        <Grid item xs={10} md={3.5} sx={{ display: "flex" }}>
                            <Grid><img src={img1} width={30} /></Grid><Typography sx={{ fontSize: 17.5, color: "#fff", ml: 1 }}>Boost the number of reviews instantly</Typography>
                        </Grid>
                        <Grid item xs={10} md={3.5} sx={{ display: "flex" }}>
                            <Grid><img src={img2} width={30} /></Grid><Typography sx={{ fontSize: 17.5, color: "#fff", ml: 1 }}>Real-time access to Analytics with TAPS feature</Typography>
                        </Grid>
                        <Grid item xs={10} md={3.5} sx={{ display: "flex" }}>
                            <Grid><img src={img3} width={30} /></Grid><Typography sx={{ fontSize: 17.5, color: "#fff", ml: 1 }}>Versatile 3M Adhesive Back for flexible mounting options</Typography>
                        </Grid>
                        <Grid item xs={10} md={3.5} sx={{ display: "flex" }}>
                            <Grid><img src={img4} width={30} /></Grid><Typography sx={{ fontSize: 17.5, color: "#fff", ml: 1 }}>One-time payment, no recurring fees</Typography>
                        </Grid>
                        <Grid item xs={10} md={3.5} sx={{ display: "flex" }}>
                            <Grid><img src={img5} width={30} /></Grid><Typography sx={{ fontSize: 17.5, color: "#fff", ml: 1 }}>Utilizes NFC & QR code technology for iOS & Android, no App required</Typography>
                        </Grid>
                        <Grid item xs={10} md={3.5} sx={{ display: "flex" }}>
                            <Grid><img src={img7} width={30} /></Grid><Typography sx={{ fontSize: 17.5, color: "#fff", ml: 1 }}>Environmental commitment - a tree planted for each tag sold</Typography>
                        </Grid>
                        <Grid item xs={10} md={3.5} sx={{ display: "flex" }}>
                            <Grid><img src={img8} width={30} /></Grid><Typography sx={{ fontSize: 17.5, color: "#fff", ml: 1 }}>Enjoy free tracked shipping worldwide</Typography>
                        </Grid>
                        <Grid item xs={10} md={3.5} sx={{ display: "flex" }}>
                            <Grid><img src={img9} width={30} /></Grid><Typography sx={{ fontSize: 17.5, color: "#fff", ml: 1 }}>Tags readily available in stock and prepared for immediate shipment.</Typography>
                        </Grid>
                        <Grid item xs={10} md={3.5} sx={{ display: "flex" }}>
                            <Grid><img src={img6} width={30} /></Grid><Typography sx={{ fontSize: 17.5, color: "#fff", ml: 1 }}>
                                iOS & Android | No App needed</Typography>
                        </Grid>
                    </Grid>

                </Grid>

                <Grid item xs={8} sx={{mb:5}}>
                <Grid container spacing={2} sx={{ display: "flex", justifyContent: "center" }}>
                        <Grid item xs={12}>
                            <Typography sx={{ fontSize: 30, color: "#fff", textAlign: 'center' }}>Description</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography sx={{ fontSize: 18, color: "#fff", textAlign: 'center' }}>Welcome to our Digital Card Hub Company, where we revolutionize networking with our state-of-the-art NFC cards, NFC tags, and NFC Google review tags.</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography sx={{ fontSize: 18, color: "#fff", textAlign: 'center' }}>Customize your NFC Business Cards with your name, title, and logo, creating distinctive digital business cards that make a lasting impact.</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography sx={{ fontSize: 18, color: "#fff", textAlign: 'center' }}>Each Business Card is expertly crafted with a premium finish, utilizing durable PVC material to withstand the rigors of daily life.</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography sx={{ fontSize: 18, color: "#fff", textAlign: 'center' }}>Embrace the latest NFC technology and QR functionality, enabling easy sharing of contact information and social media profiles with a simple tap, eliminating the need for traditional paper cards.</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography sx={{ fontSize: 18, color: "#fff", textAlign: 'center' }}>With our NFC Business Cards, networking becomes effortless, providing the fastest way to share your details and gather valuable Google reviews using our NFC tags. Join the digital revolution and unlock the potential of seamless networking with our innovative solutions.</Typography>
                        </Grid>
                        </Grid>

                </Grid>

                

            </Grid>
            <Box sx={{ backgroundImage: `url('${bg}')`, backgroundSize: "cover" }}>
                <Footer />
            </Box>
        </Grid>
    )
}

export default ProductCompoent
