import { Button, Grid, Paper, TextField, Typography } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import { postData } from '../../../Services/NodeServices'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'
import logo1 from '../../Digital Card Assets/dchlogo.png'
const AddressPage = () => {
    const navigate=useNavigate()
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
        formData.append("_id",userId)
       
        const body={"name":name,"phone":phone,"email":email,"fullAddress":address,"city":city,"state":state,"pincode":pincode}
        formData.append("address",JSON.stringify(body))

        const response=await postData('customerLogin/address',formData,true)

        console.log(response.status)

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
              navigate("/userDashboard")
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
        <Grid>
            <Grid container spacing={2} sx={{ display: 'flex', justifyContent: "center", alignItems: 'center', marginTop: 10 }}>
                <Grid xs={10} md={5} sm={10} >
                    <Paper elevation={6} >
                        <Grid container spacing={2} sx={{ display: 'flex', justifyContent: "center",padding:1 }}>
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
                                <Button fullWidth variant='contained' size='large' onClick={()=>handleClick()}>Submit</Button>
                            </Grid>

                        </Grid>
                    </Paper>

                </Grid>

            </Grid>
        </Grid>
    )
}

export default AddressPage
