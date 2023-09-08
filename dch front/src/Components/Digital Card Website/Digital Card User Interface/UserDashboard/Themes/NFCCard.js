import React from 'react'
import { Grid,IconButton, Typography,TextField, Button } from '@mui/material'
import themePage from './ThemeAssets/theme1page1.jpg'
import bg from './ThemeAssets/bg.jpg'
import back from './ThemeAssets/back.jpg'
import { serverURL } from '../../../../Services/NodeServices'
import Saveimg from "./ThemeAssets/save.png";
import Shareimg from "./ThemeAssets/share.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import Instagram from "./ThemeAssets/instagram.png";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { InputAdornment } from "@mui/material";
import { useNavigate } from 'react-router-dom'

const NFCCard = ({data}) => {
  const navigate=useNavigate()
    const [href, setHref] = React.useState("");
    const [number, setNumber] = React.useState();
    const UserId=window.localStorage.getItem("userId")

 
  const handleMessage = (e) => {
    console.log(e)
    setHref(
      `https://wa.me/+91${number}?text=http://digitalcardhub.in/#/${data.companyId}`
    );
  };
    const handleClick = async (title, url) => {
        try {
          await navigator.share({
            title,
            url,
          });
        } catch (error) {
          console.error("Error sharing:", error);
        }
      };
    const handleSave=()=>{
        var vCardData = "BEGIN:VCARD\r\n" +
          "VERSION:3.0\r\n" +
          "FN:"+data.fullname+"\r\n" +
          "N:"+data.fullname+";;;\r\n" +
          "EMAIL;TYPE=INTERNET:"+data.Email+"\r\n" +
          "TEL;TYPE=CELL:"+data.phoneNumber+"\r\n" +
          "END:VCARD";
      
        var blob = new Blob([vCardData], { type: 'text/vcard' });
      
        var downloadLink = document.createElement('a');
        downloadLink.href = URL.createObjectURL(blob);
        downloadLink.download = 'contact.vcf';
        downloadLink.style.display = 'none';
      
        document.body.appendChild(downloadLink);
      
        downloadLink.click();
      
        document.body.removeChild(downloadLink);
      }

     
  return (
    <Grid
      style={{
        backgroundImage: `url('${bg}')`,
        backgroundSize: "cover",
        height: "100%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid sx={{position:'absolute',top:0,right:0}}>
        <Button variant='contained' onClick={()=>navigate('/digitalcardlogin')}>{data.customerId==UserId?"Login":"Create Now"}</Button>
      </Grid>
      <Grid
        container
        spacing={2}
        sx={{
          width: { xs: "1000px", sm: "70%", md: "37%" },
          height: "100%",
          marginTop: 0,
        }}
      >
        <Grid
          item
          xs={12}
          md={12}
          sx={{
            color: "#fff",
            backgroundImage: `url('${serverURL}/images/${data.companyCoverImage}')`,
            backgroundSize:'cover',
            width: "100%",
            minHeight: { xs: 200 },
            
          }}
        > </Grid>
        {/* Hero Section */}
        <Grid
          item
          xs={12}
          md={12}
          sx={{
            color: "#fff",
            backgroundImage: `url('${themePage}')`,
            backgroundSize: "cover",
            width: "100%",
            minHeight: { xs: 600, sm: 600, md: 600 },
          }}
        >
           <Grid
          container
          spacing={2}
          sx={{
            dispaly: "flex",
            justifyContent: "center",
            alignItems: "center",
          
          }}
        ><Grid item xs={10} sx={{mt:-10,   boxShadow: 'rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px'
        ,border:1

        ,borderRadius:5,animation:'running',animationDuration:4,animationName:'-moz-initial'}}>
          <Grid sx={{  marginBottom: 1,display:'flex',justifyContent:'center', }}>
            <img
              src={`${serverURL}/images/${data.companylogo}`}
              width={120}
              height={120}
              
              style={{ borderRadius: "60%",boxShadow:'2px 2px 15px 2px', }}
            />
          </Grid>
            <Grid item xs={12}>
              
                <Typography textAlign={'center'} fontFamily={'monospace'}>{data.fullname}</Typography>
                <Typography textAlign={'center'}>{data.position}</Typography>

            </Grid>
            </Grid>
            <Grid
              item
              xs={6}
              md={6}
              sx={{ display: data.fbLink==''?'none':"flex", justifyContent: "center" }}
            >
              <IconButton
                href={`${data.fbLink}`}
                sx={{
                  backgroundColor: "#3178bc",
                  color: "white",
                  "&:hover": {
                    backgroundColor: "#3178bc",
                  },
                }}
              >
                <FacebookIcon sx={{ fontSize: 100 }} />
              </IconButton>
            </Grid>
            <Grid
              item
              xs={6}
              md={6}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <IconButton
                href={`https://wa.me/+91${data.phoneNumber}?text=`}
                sx={{
                  backgroundColor: "#00a550",
                  color: "white",
                  "&:hover": {
                    backgroundColor: "#00a550",
                  },
                }}
              >
                <WhatsAppIcon sx={{ fontSize: 100 }} />
              </IconButton>
            </Grid>
            <Grid
              item
              xs={6}
              md={6}
              sx={{ display: data.LinkdnLink==''?'none':"flex", justifyContent: "center" }}
            >
              <IconButton
                href={`${data.LinkdnLink}`}
                sx={{
                  backgroundColor: "#0077b5",
                  color: "#fff",
                  "&:hover": {
                    backgroundColor: "#0077b5",
                  },
                }}
              >
                <LinkedInIcon sx={{ fontSize: 100 }} />
              </IconButton>
            </Grid>
            
            <Grid
              item
              xs={6}
              md={6}
              sx={{ display:data.igLink==''?'none': "flex", justifyContent: "center" }}
            >
              <IconButton
                href={`${data.igLink}`}
                sx={{ color: "#fff", "&:hover": {} }}
              >
                <img src={Instagram} width={115} />
              </IconButton>
            </Grid>
            
          </Grid>
          <Grid
            container
            spacing={2}
            sx={{ dispaly: "flex", justifyContent: "center" }}
          >
            <Grid
              item
              xs={10}
              sx={{
                marginTop: { xs: 8, sm: 16, md: 11.5 },
                fontSize: 25,
                textAlign: "center",
              }}
            >
              <TextField
                sx={{
                  marginLeft: { xs: 3, sm: 3.5, md: 1 },
                  "& .MuiOutlinedInput-root": {
                    "&:hover fieldset": {
                      borderColor: "#00adef", // Outline color when hovering
                    },

                    "&.Mui-focused fieldset": {
                      borderColor: "#00adef", // Outline color when focused
                    },
                  },

                  "& label": {
                    paddingLeft: (theme) => theme.spacing(2),
                    color: "#D24A61",
                    "&.Mui-focused": {
                      color: "#D24A61", // Change label color when focused
                    },
                  },
                  "& input": {
                    paddingLeft: (theme) => theme.spacing(0),
                    color: "#000",
                    zIndex: 1,
                  },

                  "& fieldset": {
                    paddingLeft: (theme) => theme.spacing(2.5),
                    borderRadius: "54px",
                    height: { xs: 45, sm: 45, md: 45 },
                    width: { xs: 258, sm: 298, md: 298 },
                    borderColor: "#00adef",
                    backgroundColor: "#00adef",
                  },
                  
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Typography
                        sx={{ color: "black", zIndex: 1, marginTop: 0 }}
                      >
                        +91
                      </Typography>
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        style={{
                          border: 0,
                          borderRadius: 20,
                          zIndex: 1,
                          color: "#FFD1D9",
                          cursor: "pointer",
                          fontSize: 15,
                          backgroundColor: "#00a550",
                          marginTop: -14.4,
                        }}
                        href={href}
                        onClick={(e)=>handleMessage(e)}
                      >
                        Send
                        <WhatsAppIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                value={number}
                onChange={(e)=>setNumber(e.target.value)}
              />
            </Grid>
          </Grid>
       
       <Grid
            container
            spacing={2}
            sx={{ dispaly: "flex", justifyContent: "center" }}
          >
            <Grid
              item
              xs={6}
              sx={{
                marginTop: { xs: 8, sm: 8, md: 11.5 },
                display: "flex",
                justifyContent: "flex-start",
                cursor: "pointer",
              }}
              onClick={() => handleSave()}
            >
              <img
                src={Saveimg}
                width={150}
                height={70}
                style={{ marginLeft: -16 }}
              />
            </Grid>
            <Grid
              item
              xs={6}
              sx={{
                marginTop: { xs: 8, sm: 8, md: 11.5 },
                display: "flex",
                justifyContent: "flex-end",
                cursor: "pointer",
              }}
              onClick={() =>
                handleClick(
                  `${data.companyId}`,
                  `https://indiabuzz.co.in/${data.companyId}`
                )
              }
            >
              <img src={Shareimg} width={150} height={70} />
            </Grid>
          </Grid>



       </Grid>
       </Grid>
       </Grid>
  )
}

export default NFCCard
