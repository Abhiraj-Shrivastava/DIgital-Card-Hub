import React,{useState,useEffect} from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useStyles } from "./TopBarCss";
import Avatar from '@mui/material/Avatar';

export default function TopBar(props){
    const classes=useStyles()

return(
    <div>
        <AppBar position="static" color="inherit" style={{width:'100%'}}>
        <Toolbar>
        <div className={classes.logoStyle} >
           Digital Card Hub  
          </div>
        <div className={classes.logoStyle} >
          
          </div>

          
        </Toolbar>
      </AppBar>
    
    </div>
)


}