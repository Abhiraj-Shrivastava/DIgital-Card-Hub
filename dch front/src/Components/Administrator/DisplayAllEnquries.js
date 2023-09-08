import React,{useState,useEffect} from "react";
import { Button,Grid,TextField } from "@mui/material";
import { getData } from ".././Services/NodeServices";
import MaterialTable from "@material-table/core";
import {useStyles} from "./DisplayAllCategoryCss"
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { postData } from ".././Services/NodeServices";
import Swal from "sweetalert2";
import Dialog from '@mui/material/Dialog';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import { styled } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';

import { useContext } from 'react';

import useMediaQuery from '@mui/material/useMediaQuery';
import {useTheme} from "@mui/material/styles";

const Input = styled('input')({
  display: 'none',
});


export default function DisplayAllEnquries(props){  
  
  var theme =useTheme()
  const classes=useStyles()   
  const matches=useMediaQuery(theme.breakpoints.down(700))
const[enquiries,setEnquiries]=useState([])
const[categoryId,setCategoryId]=useState('')
const[categoryName,setCategoryName]=useState('')
const[message,setMessage]=useState('')
    const[showBtn,setShowBtn]=useState(false)
const[open,setOpen]=useState(false)

const [socket,setSocket]=React.useState()



useEffect(function(){
  
   fetchAllEnquiries()

},[socket])

function displayTable() {
    return (
      <MaterialTable
      title={"Enquiry List"}
        data={enquiries}
        style={{}}
        columns={[
            {
              title: "Enquiry Id",
              field: "_id",
             
            },
            {
              title: " Name",
              field: "name",
            },
          
            {
              title: "Phone Number",
              field: "number",
            },
            {
              title: " Email Id",
              field: "email",
            },
           
            
           
        ]}
        actions={[
          
        
        ]}
       
      />
    );
  }



    const fetchAllEnquiries=async()=>{
        const result=await getData('enquiry/displayallenquiries')
        
        setEnquiries(result.reverse())
    }


    

    return(
      
        
        <Grid container spacing={2} style={{  display:"flex",
        justifyContent:'center',
        alignItems:'center'}}>
          <Grid item xs={12} sm={8} style={{marginTop:20,fontSize:matches?10:20}}>
        {displayTable()}</Grid>  </Grid>

    )
    
}