import React from 'react'
import r1 from '../../Digital Card Assets/r1.png'
import r2 from '../../Digital Card Assets/r2.png'
import r3 from '../../Digital Card Assets/r3.png'
import r4 from '../../Digital Card Assets/r4.png'
import r5 from '../../Digital Card Assets/r5.png'
import r6 from '../../Digital Card Assets/r6.png'
import r7 from '../../Digital Card Assets/r7.png'
import r8 from '../../Digital Card Assets/r8.png'
import r9 from '../../Digital Card Assets/r9.png'
import r10 from '../../Digital Card Assets/r10.png'
import { Box, Divider, Grid, Paper, Typography } from '@mui/material'
import Navbar from './Navbar'
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from 'react-router-dom'

import bg from "../../Digital Card Assets/footer.png";
import Footer from "./Footer";
const proximity = [
    {
        name: "Google Review NFC Card | Increase your reviews",
        price: 999,
        img: r1,
        
        

    },
    
    {
        name: "Google Review Tag & A5 Display Stand",
        price: 999,
        img: r6,
        

    },
    {
        name: "Instagram NFC TAG | Instantly increase your followers",
        price: 999,
        img: r3,
        

    },
    {
        name: "Facebook NFC TAG | Instantly increase your followers",
        price: 999,
        img: r4,
        

    },
    {
        name: "YouTube NFC TAG | Instantly increase your followers",
        price: 999,
        img: r5,
       

    },
    {
        name: "Whatsapp NFC TAG | Instantly increase your followers",
        price: 999,
        img: r7,
       

    },
    {
        name: "Wooden NFC TAG | Instantly increase your followers",
        price: 999,
        img: r8,
       

    },
    {
        name: "YouTube NFC TAG | Instantly increase your followers",
        price: 999,
        img: r9,
       

    },
    {
        name: "YouTube NFC TAG | Instantly increase your followers",
        price: 999,
        img: r10,
       

    },
]

const ProductsPage = () => {
    const navigate=useNavigate()

    React.useEffect(() => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'instant',
        });
    }, [])

    

    const ProximityComponent = () => {
        return proximity.map((item) => {
            return (
                <Grid item xs={5} md={3.8} sx={{ display: "flex", justifyContent: "center",mb:2,mt:2 }}>
                    <Paper elevation={2} sx={{width:"90%",bgcolor: "#001E3C",cursor:'pointer'}} onClick={()=>navigate('/productscomponent',{state:{product:JSON.stringify(item)}})}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sx={{display:"flex",justifyContent:"center"}}> 
                                <img src={item.img} width={"50%"}/>
                            </Grid>
                            <Divider/>
                            <Grid item xs={12} sx={{display:"flex",justifyContent:"center"}}> 
                               <Typography sx={{color:"#fff"}}>{item.name}</Typography>
                            </Grid>
                            <Grid item xs={12} sx={{display:"flex",justifyContent:"center"}}> 
                            <Typography sx={{color:"#fff",mb:2}}>Rs {item.price}/-</Typography>
                            </Grid>

                        </Grid>
                    </Paper>

                </Grid>

            )

        })
    }
    return (
        <Grid id='top' sx={{ bgcolor: "#001E3C" }}>
            <Navbar />
            <Grid container spacing={2} sx={{ display: "flex", justifyContent: 'center' }} >
                <Grid item xs={12} sx={{ mt: 12 }}>
                    <Typography sx={{ fontSize: 45, textAlign: "center", color: "#fff" }}>Proximity Marketting Tags</Typography>
                </Grid>
                <ProximityComponent />

            </Grid>
            <Box sx={{backgroundImage:`url('${bg}')`,backgroundSize:"cover"}}>
                <Footer />
            </Box>
        </Grid>
    )
}

export default ProductsPage
