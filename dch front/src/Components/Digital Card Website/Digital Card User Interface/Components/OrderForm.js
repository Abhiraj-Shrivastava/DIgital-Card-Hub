import { Button, Grid, TextField,Box, Paper,Typography } from '@mui/material'
import React from 'react'
import { useState } from 'react';
import { postData } from '../../../Services/NodeServices';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'
import logo1 from '../../Digital Card Assets/dchlogo.png'
import bg from "../../Digital Card Assets/footer.png";
import Footer from './Footer';
const OrderForm = () => {
    const location=useLocation()
    const navigate=useNavigate()
    const product=location.state.product;
    const size=location.state.size;
    const quantity=location.state.quantity;
    const amount=location.state.price;
    const logo=location.state.logo;


    // alert(JSON.stringify(location.state))
    const [name,setName]=useState('')
    const [phone,setPhone]=useState('')
    const [email,setEmail]=useState('')
    const [address,setAddress]=useState('')
    const [city,setCity]=useState('')
    const [state,setState]=useState('')
    const [pincode,setPincode]=useState('')
    const userId=window.localStorage.getItem("userId")

    const handleClick=async()=>{
       if(name!="" && phone!="" && email!="" && address!="" && city!=""&& state!=""&& pincode!="" )
       { var formData=new FormData
         formData.append("name",name)
         formData.append("phone",phone)
         formData.append("email",email)
         formData.append("fullAddress",address)
         formData.append("city",city)
         formData.append("state",state)
         formData.append("pincode",pincode)
         formData.append("productName",product.name)
         formData.append("size",size)
         formData.append("quantity",quantity)
         formData.append("logo",logo.bytes)

        const response=await postData('orders/addOrderDetails',formData,true)

        console.log(response.data)

        if(response.status==true){
            Swal.fire({
                title: 'Ordered Succesfully!',
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
              navigate("/")
        }
}else{
    Swal.fire({
        title: 'Fill all the Details First!',
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
}

    }
  return (
    <Grid id='top' sx={{ bgcolor: "#001E3C" }}>
    <Navbar />
    <Grid container spacing={2} sx={{display:"flex",justifyContent:"center",}}>
        <Paper elevation={6}  sx={{border:1,borderColor:'#fff',mt:15,mb:10,width:'80%'}}>
            <Grid container spacing={2} sx={{display:"flex",justifyContent:"center",mt:1,mb:1}}>
            <Grid item xs={10} ><Typography textAlign={'center'} sx={{fontSize:25}}>Fill the Delivery Address</Typography></Grid>
                            <Grid item xs={10} sm={5} md={5}>
                                <TextField value={name} onChange={(e)=>setName(e.target.value)} label='Name' fullWidth required/>
                            </Grid>
                            <Grid item xs={10} sm={5} md={5}>
                                <TextField value={phone} onChange={(e)=>setPhone(e.target.value)} label='Phone Number' fullWidth required/>
                            </Grid>
                            <Grid item xs={10}>
                                <TextField label='Email Address' value={email} onChange={(e)=>setEmail(e.target.value)} fullWidth required/>
                            </Grid>
                            <Grid item xs={10}>
                                <TextField label='Full Address' value={address} onChange={(e)=>setAddress(e.target.value)} fullWidth required/>
                            </Grid>
                            <Grid item xs={5}>
                                <TextField label='City' value={city} onChange={(e)=>setCity(e.target.value)} fullWidth required/>
                            </Grid>
                            <Grid item xs={5}>
                                <TextField label='State' value={state} onChange={(e)=>setState(e.target.value)} fullWidth required/>
                            </Grid>
                            <Grid item xs={5}>
                                <TextField label='Pincode' value={pincode} onChange={(e)=>setPincode(e.target.value)} fullWidth  required/>
                            </Grid>
                            
                            <Grid item xs={5} sx={{display:"flex"}}>
                                <Button fullWidth variant='contained' size='large' onClick={()=>handleClick()}>Go to Payment Page</Button>
                            </Grid>
              </Grid>
</Paper>
    </Grid>
    <Box sx={{ backgroundImage: `url('${bg}')`, backgroundSize: "cover" }}>
                <Footer />
            </Box>
   </Grid>
  )
}

export default OrderForm
