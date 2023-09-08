import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import intro from '../UserDashboard/Themes/ThemeAssets/intro.mp4'
import ReactPlayer from 'react-player';
import { RingLoader } from 'react-spinners';
import { Grid, Typography } from '@mui/material';
const LoadingScreen1 = () => {
    const { companyId } = useParams();
    var navigate=useNavigate()
    useEffect(() => {
        const timer = setTimeout(() => {
          navigate(`/home`); // Navigate to the specified route after the delay
        }, 6000); // 10-second delay
    
        return () => clearTimeout(timer);
      }, [navigate]);
  return (
    <Grid style={{backgroundColor:'#001d3e',width:"100%",height:'790px',display:'flex',justifyContent:'center',alignItems:"center",flexDirection:'column'}}>
    <video loop muted autoPlay  width='390px' height='400px'>

      <source type="video/mp4; codecs=&quot;avc1.42E01E, mp4a.40.2&quot;" src={intro}></source>     
</video></Grid>
  )
}

export default LoadingScreen1
