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
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import useMediaQuery from '@mui/material/useMediaQuery';
import {useTheme} from "@mui/material/styles";



export default function DisplayAllRegistrations(props){  

  var theme =useTheme()
  const classes=useStyles()   
  const matches=useMediaQuery(theme.breakpoints.down(700))  
  const[registrations,setRegistrations]=useState([])

  const [socket,setSocket]=React.useState()




function displayTable() {
    return (
      <MaterialTable
      title={"Sub Category List"}
        data={registrations}
        columns={[
            {
              title: "Id",
              field: "_id",
             
            },
          
            {
              title: "Student Phone Number",
              field: "phoneNumber",
            },
           
            
           
        ]}
        actions={[
          
        ]}
       
      />
    );
  }


 

    const fetchAllRegistrations=async()=>{
        const result=await getData('customdesign/displayallenquiries')
        
    setRegistrations(result)
    }


    useEffect(function(){
      
       fetchAllRegistrations()

    },[])

    return(
 
      <Grid container spacing={2} style={{  display:"flex",
      justifyContent:'center',
      alignItems:'center'}}>
        <Grid item xs={12} sm={8} style={{marginTop:20,fontSize:matches?10:20}}>
      {displayTable()}</Grid>
      </Grid>

    )
    
}