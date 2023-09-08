import { Grid, Typography, Paper, Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";

import bg from "../../Digital Card Assets/footer.png";
import Footer from "./Footer";
const IosDevices = [
  {
    heading: "Apple",
    models: [
      {
        name: "iPhone 7",
      },
      {
        name: "iPhone 7 Plus",
      },
      {
        name: "iPhone 8",
      },
      {
        name: "iPhone 8 Plus",
      },
      {
        name: "iPhone X",
      },
      {
        name: "iPhone XS",
      },
      {
        name: "iPhone XS Max",
      },
      {
        name: "iPhone XR",
      },
      {
        name: "iPhone SE (2020)",
      },
      {
        name: "iPhone 11",
      },
      {
        name: "iPhone 11 Pro",
      },
      {
        name: "iPhone 12",
      },
      {
        name: "iPhone 12 Mini",
      },
      {
        name: "iPhone 12 Pro",
      },
      {
        name: "iPhone 12 Pro Max",
      },
      {
        name: "iPhone 13",
      },
      {
        name: "iPhone 13 Mini",
      },
      {
        name: "iPhone 13 Pro",
      },
      {
        name: "iPhone 13 Pro Max",
      },
      {
        name: "iPhone 14",
      },
      {
        name: "iPhone 14 Plus",
      },
      {
        name: "iPhone 14 Pro",
      },
      {
        name: "iPhone 14 Pro Max",
      },
    ],
  },
];
const AndroidDevices = [
  {
    heading: "Samsung",
    models: [
      {
        name: "Galaxy SIII",
      },

      {
        name: "Galaxy S4",
      },
      {
        name: "Galaxy S5",
      },
      {
        name: "Galaxy S6",
      },
      {
        name: "Galaxy S6 Edge",
      },
      {
        name: "Galaxy S6 Edge+",
      },
      {
        name: "Galaxy S7",
      },
      {
        name: "Galaxy S7 Edge",
      },
      {
        name: "Galaxy S8",
      },
      {
        name: "Galaxy S8+",
      },
      {
        name: "Galaxy S9",
      },
      {
        name: "Galaxy S9+",
      },
      {
        name: "Galaxy S9 Plus",
      },
      {
        name: "Galaxy S10",
      },
      {
        name: "Galaxy S10 Plus",
      },
      {
        name: "Galaxy S21 Plus",
      },
      {
        name: "Galaxy S20 Plus",
      },
      {
        name: "Galaxy S20 Ultra",
      },
      {
        name: "Galaxy S21 Ultra",
      },
      {
        name: "Galaxy S20 FE",
      },
      {
        name: "Galaxy Note 3",
      },
      {
        name: "Galaxy Note 3 NEO",
      },
      {
        name: "Note 5",
      },
      {
        name: "Galaxy Note 5",
      },
      {
        name: "Galaxy Note 10 Lite",
      },
      {
        name: "Galaxy Note 10 Plus",
      },
      {
        name: "Galaxy Alpha",
      },
      {
        name: "Galaxy A32",
      },
      {
        name: "Galaxy A30s",
      },
      {
        name: "Galaxy A5",
      },
      {
        name: "Galaxy A50s",
      },
      {
        name: "Galaxy A51",
      },
      {
        name: "Galaxy A52s",
      },
      {
        name: "Galaxy A52",
      },
      {
        name: "Galaxy A70",
      },
      {
        name: "Galaxy A70s",
      },
      {
        name: "Galaxy A72",
      },
      {
        name: "Galaxy A80",
      },
      {
        name: "Galaxy M32",
      },
      {
        name: "Galaxy M40",
      },
      {
        name: "Galaxy M42",
      },
      {
        name: "Galaxy A50s 6GB RAM",
      },
      {
        name: "Galaxy M51",
      },
      {
        name: "Galaxy F62",
      },
      {
        name: "Galaxy On8",
      },
      {
        name: "Galaxy S3 Neo",
      },
      {
        name: "Galaxy Z Flip 3",
      },
      {
        name: "Galaxy S22+",
      },
      {
        name: "Galaxy Z Fold 4",
      },
      {
        name: "Galaxy S23",
      },
      {
        name: "Galaxy S23+",
      },
      {
        name: "Galaxy S23 Ultra",
      },
    ],
  },
  {
    heading: "One Plus",
    models: [
      {
        name: "OnePlus 3",
      },
      {
        name: "OnePlus 3T",
      },
      {
        name: "OnePlus 5",
      },
      {
        name: "OnePlus 5T",
      },
      {
        name: "OnePlus 6",
      },
      {
        name: "OnePlus 7",
      },
      {
        name: "OnePlus 7T",
      },
      {
        name: "OnePlus 7 Pro",
      },
      {
        name: "7T Pro McLaren Edition",
      },
      {
        name: "OnePlus 8 Pro",
      },
      {
        name: "OnePlus 8",
      },
      {
        name: "OnePlus Nord",
      },
      {
        name: "OnePlus 8T",
      },
      {
        name: "OnePlus 6T",
      },
      {
        name: "OnePlus 9",
      },
      {
        name: "OnePlus 9 Pro",
      },
      {
        name: "OnePlus 9 R",
      },
      {
        name: "OnePlus 10T 5G",
      },
      {
        name: "OnePlus 10R 5G",
      },
      {
        name: "OnePlus 10R Pro 5G",
      },
      {
        name: "OnePlus 9RT 5G",
      },
      {
        name: "OnePlus Nord CE 5G",
      },
      {
        name: "OnePlus Nord 2 5G",
      },
      {
        name: "OnePlus Nord CE 2 5G",
      },
      {
        name: "OnePlus Nord CE 2 Lite 5G",
      },
      {
        name: "OnePlus Nord 2T 5G",
      },
    ],
  },
  {
    heading: "Nokia",
    models: [
      {
        name: "Nokia 3",
      },
      {
        name: "Nokia 3.1",
      },
      {
        name: "Nokia 4.2",
      },
      {
        name: "Nokia 5",
      },
      {
        name: "Nokia 5.1",
      },
      {
        name: "Nokia 6",
      },
      {
        name: "Nokia 6.1",
      },
      {
        name: "Nokia 7",
      },
      {
        name: "Nokia 7 Plus",
      },
      {
        name: "Nokia 8 Sirocco",
      },
      {
        name: "Nokia 8",
      },
      {
        name: "Nokia 8.1",
      },
      {
        name: "Nokia 9",
      },
      {
        name: "Nokia Lumia 920",
      },
      {
        name: "Nokia Lumia 930",
      },
    ],
  },
  {
    heading: "Motorola",
    models: [
      {
        name: "Motorola One",
      },
      {
        name: "Motorola One Vision",
      },
      {
        name: "Motorola One Action",
      },
      {
        name: "Motorola One Vision Plus",
      },
      {
        name: "Moto Z3 Play",
      },
      {
        name: "Moto E4 Plus",
      },
      {
        name: "Moto X4",
      },
      {
        name: "Moto E5/Plus",
      },
      {
        name: "Moto E5 Play/Go",
      },
      {
        name: "Moto G5/G5S Plus",
      },
      {
        name: "Moto G6/Plus/Play",
      },
      {
        name: "Motorola Razr",
      },
      {
        name: "Motorola Moto Turbo",
      },
      {
        name: "Motorola Moto X Force",
      },
      {
        name: "Motorola Moto X Play",
      },
      {
        name: "Motorola Edge S",
      },
      {
        name: "Motorola Edge 20",
      },
      {
        name: "Motorola Edge 20 Fusion",
      },
      {
        name: "Motorola Edge S Pro",
      },
      {
        name: "Motorola Edge 20 Pro",
      },
      {
        name: "Motorola Edge 20 Lite",
      },
      {
        name: "Motorola Edge Plus",
      },
      {
        name: "Motorola Edge",
      },
      {
        name: "Motorola Defy",
      },
      {
        name: "Motorola Moto X",
      },
    ],
  },
  {
    heading: "Nothing",
    models: [
      {
        name: "Nothing Phone(1)",
      },
    ],
  },
  {
    heading: "LG",
    models: [
      {
        name: "LG G3",
      },
      {
        name: "LG G4",
      },
      {
        name: "LG G5",
      },
      {
        name: "LG Nexus 5X",
      },
      {
        name: "LG V10",
      },
      {
        name: "LG V20",
      },
      {
        name: "LG V30",
      },
      {
        name: "LG V30 ThinQ",
      },
      {
        name: "LG V35 ThinQ",
      },
      {
        name: "LG V40 ThinQ",
      },
      {
        name: "LG G6",
      },
      {
        name: "LG Q6",
      },
      {
        name: "LG Q6 Plus",
      },
      {
        name: "LG Q Styus",
      },
      {
        name: "LG Q Stylus 4",
      },
      {
        name: "LG Q7",
      },
      {
        name: "LG G7 ThinQ",
      },
      {
        name: "LG Q8",
      },
      {
        name: "LG G8 ThinQ",
      },
      {
        name: "LG Q92",
      },
      {
        name: "LG K10",
      },
      {
        name: "LG K62",
      },
      {
        name: "LG K92",
      },
      {
        name: "LG V35 ThinQ",
      },
      {
        name: "LG Wing",
      },
      {
        name: "LG G7 Plus ThinQ",
      },
      {
        name: "LG G4 Dual",
      },
      {
        name: "LG G2",
      },
      {
        name: "LG Stylus 2 Plus",
      },
      {
        name: "LG F70",
      },
      {
        name: "LG G Pro 2",
      },
      {
        name: "LG Q7 Plus",
      },
    ],
  },
  {
    heading: "Google",
    models: [
      {
        name: "Google Pixel",
      },
      {
        name: "Google Pixel XL",
      },
      {
        name: "Google Pixel 2",
      },
      {
        name: "Google Pixel 2XL",
      },
      {
        name: "Google Pixel 3XL",
      },
      {
        name: "Google Pixel 3",
      },
      {
        name: "Google Pixel 3A",
      },
      {
        name: "Google Nexus 4",
      },
      {
        name: "Google Pixel 4A",
      },
      {
        name: "Google LG Nexus 5",
      },
      {
        name: "Google Nexus 5X",
      },
      {
        name: "Google Nexus 6P",
      },
      {
        name: "Google Pixel 6a",
      },
      {
        name: "Google Pixel 6",
      },
      {
        name: "Google Pixel Pro",
      },
      {
        name: "Google Pixel 7",
      },
      {
        name: "Google Pixel 7a",
      },
      {
        name: "Google PPixel 7 Pro",
      },
    ],
  },
  {
    heading: "Sony",
    models: [
      {
        name: "XA1/Ultra/Plus",
      },
      {
        name: "XA2/Ultra/Plus",
      },
      {
        name: "XZ1/Compact",
      },
      
      {
        name: "Sony Xperia 10",
      },
      {
        name: "Sony Xperia 10 Lite",
      },
      {
        name: "Sony Xperia 8 Lite",
      },
      {
        name: "Sony Xperia XA1",
      },
      {
        name: "Sony Xperia Z1",
      },
      {
        name: "Sony Xperia C5",
      },
      {
        name: "Sony Xperia XZ1",
      },
      {
        name: "Sony Xperia XA1 Dual",
      },
      {
        name: "Sony Xperia XA1 Ultra",
      },
      {
        name: "Sony Xperia XZ",
      },
      {
        name: "Sony Xperia T3",
      },
      {
        name: "Sony Xperia XA",
      },
      {
        name: "Sony Xperia ZR",
      },
      {
        name: "Sony Xperia Z3+",
      },
      {
        name: "Sony Xperia SP",
      },
      {
        name: "Sony Xperia XA1 Plus",
      },
      {
        name: "Sony Xperia Z2",
      },
      {
        name: "Sony Xperia Z5",
      },
      {
        name: "Sony Xperia T2",
      },
      {
        name: "Sony Xperia E3",
      },
      {
        name: "Sony Xperia Z3",
      },
      {
        name: "Sony Xperia L2",
      },
      {
        name: "Sony Xperia M2",
      },
    ],
  },
  {
    heading: "Asus",
    models: [
      {
        name: "Asus ROG phone",
      },
    ],
  },
  {
    heading: "Honor",
    models: [
      {
        name: "Honor 8",
      },
      {
        name: "Honor View 20",
      },
      {
        name: "Honor V10",
      },
      {
        name: "Honor 8 Pro",
      },
    ],
  },
  {
    heading: "HTC",
    models: [
      {
        name: "HTC One A9",
      },
      {
        name: "HTC Desire 20 Plus",
      },
      {
        name: "HTC U Ultra",
      },
      {
        name: "HTC 10 Evo",
      },
      {
        name: "HTC U11 Plus",
      },
      {
        name: "HTC Desire 10 Pro",
      },
      {
        name: "HTC One E8",
      },
      {
        name: "HTC Desire Eye",
      },
      {
        name: "HTC 10 Lifestyle",
      },
      {
        name: "HTC One ME",
      },
      {
        name: "HTC One E9+",
      },
      {
        name: "HTC One M9 Plus",
      },
    ],
  },
  {
    heading: "Essential",
    models: [
      {
        name: "Essential PH-1",
      },
    ],
  },
  {
    heading: "Poco",
    models: [
      {
        name: "Poco F2 Pro",
      },
      {
        name: "Poco F3",
      },
      {
        name: "Poco X3 GT",
      },
    ],
  },
];

const Compatibility = () => {
  const [iosDevices, setIosDevices] = useState(IosDevices);
  const [androidDevices, setAndroidDevices] = useState(AndroidDevices);

  useEffect(()=>{
    window.scroll({
        top: 0,
        left: 0,
        behavior:'instant',
      });
  },[])

  const IosComponent = () => {
    return iosDevices.map((heading) => {
      return (
        <Paper
          elevation={6}
          sx={{
            display: "flex",
            flexDirection:"column",
            justifyContent:'center',alignItems:'center',
            width: "80%",
            borderRadius: 4,
          }}
        >
          <Grid item xs={12}>
            <Typography sx={{ margin: 1,fontSize:25,fontStyle:'oblique' }}>{heading.heading}</Typography>
          </Grid>
          <Grid sx={{display:'flex',flexWrap:'wrap',margin:1,width:'90%'}}>
          {
            heading.models.map((model)=>{
                return(
                    <Typography sx={{width:{xs:'40%',sm:'30%',md:'20%'},fontSize:{xs:16,sm:20,md:20},margin:1,fontStyle:'italic'}}>{model.name}</Typography>
                )
            })
          }
          </Grid>
        </Paper>
      );
    });
  };
  const AndroidComponent = () => {
    return androidDevices.map((heading) => {
      return (
        <Paper
          elevation={6}
          sx={{
            display: "flex",
            flexDirection:"column",
            alignItems:'center',
            width: "80%",
            borderRadius: 4,
            margin:1
          }}
        >
          <Grid item xs={12}>
            <Typography sx={{ margin: 1,fontSize:25,fontStyle:'oblique' }}>{heading.heading}</Typography>
          </Grid>
          <Grid sx={{display:'flex',flexWrap:'wrap',width:'90%',margin:1}}>
          {
            heading.models.map((model)=>{
                return(
                    <Typography sx={{width:{xs:'40%',sm:'30%',md:'20%'},margin:1,fontSize:{xs:16,sm:20,md:20},fontStyle:'italic'}}>{model.name}</Typography>
                )
            })
          }
          </Grid>
        </Paper>
      );
    });
  };
  return (
    <Grid id='top' sx={{bgcolor:"#001E3C"}}>
        <Navbar/>
      <Grid container spacing={2}>
        <Grid item xs={12} sx={{mt:15}}>
          <Typography sx={{fontSize:{xs:30,sm:40,md:40},color:'#fff',textAlign:"center",fontStyle:'oblique'}}>Compatible Devices</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography  sx={{fontSize:{xs:20,sm:30,md:30},color:'#fff',textAlign:"center",fontStyle:'oblique'}}>
            Here is a List of Devices Which Support Digital Card
          </Typography>
        </Grid>
        <Grid item xs={12} sx={{display:"flex",justifyContent:'center',flexDirection:'column',alignItems:'center'}}>
            <Typography sx={{fontSize:30,fontStyle:'oblique',color:"#fff"}}>Ios Devices</Typography>
          <IosComponent />
        </Grid>
        <Grid item xs={12} sx={{display:"flex",justifyContent:'center',flexDirection:'column',alignItems:'center'}}>
            <Typography sx={{fontSize:30,fontStyle:'oblique',color:'white'}}>Android Devices</Typography>
          <AndroidComponent />
        </Grid>
      </Grid>
      <Box sx={{backgroundImage:`url('${bg}')`,backgroundSize:"cover"}}>
                <Footer />
            </Box>
    </Grid>
  );
};

export default Compatibility;
