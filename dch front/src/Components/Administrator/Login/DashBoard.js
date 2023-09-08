import React,{useState,useEffect} from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";

import TopBar  from "./TopBar";
import SideBar from "./SideBar";
import DisplayAllEnquries from "../DisplayAllEnquries";

import DisplayAllRegistrations from "../DisplayAllRegistrations";

import { Grid } from "@mui/material";
import DisplayAllCards from "../DisplayAllCards";
export default function DashBoard(props){

return(
    <div>
    <TopBar/>
   
        <Grid container spacing={2} style={{display:'flex',flexDirection:'row'}}>
          <Grid item xs={12} sm={2}> 
    <SideBar/>
    </Grid>
    <Grid item xs={12} sm={10}>
       <Routes>
              <Route element={<DisplayAllEnquries/>} path="/displayallenquiries" /> 
            
              <Route element={<DisplayAllRegistrations/>} path="/displayallregistrations" /> 
              <Route element={<DisplayAllCards/>} path="/displayallcards" /> 
  
       </Routes>
       </Grid>
       </Grid>
    </div>
)


}