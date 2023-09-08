import { Grid, IconButton, Typography,TextField } from '@mui/material'
import React from 'react'
import bg from './assets/bg.jpg'
import qr from './assets/qr.png'
import CallIcon from '@mui/icons-material/Call';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PublicIcon from '@mui/icons-material/Public';
import {InputAdornment,Button} from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';
import SimCardDownloadIcon from '@mui/icons-material/SimCardDownload';
import MessageIcon from "@mui/icons-material/Message";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TelegramIcon from "@mui/icons-material/Telegram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import pc from './assets/pc.png'
import ReactPlayer from "react-player"
import Pr from './assets/product.png'
import img from './assets/gallery.png'
import paytm from './assets/paytm.png'
const offersData=[
  {
    name:'Cloud Whatsapp Marketing Portal Reseller Portal ( domain and hosting will be yours )',
    price:'₹12999',
    offerPrice:'₹11999',
    img:pc

  },
  {
    name:'Cloud Whatsapp Marketing Portal Reseller Portal ( domain and hosting will be yours )',
    price:'₹10999',
    offerPrice:'₹8999',
    img:pc
  },
  {
    name:'Cloud Whatsapp Marketing Portal Reseller Portal ( domain and hosting will be yours )',
    price:'₹8999',
    offerPrice:'₹4999',
    img:pc
  },
  {
    name:'Cloud Whatsapp Marketing Portal Reseller Portal ( domain and hosting will be yours )',
    price:'₹14999',
    offerPrice:'₹10999',
    img:pc
  },
  {
    name:'Cloud Whatsapp Marketing Portal Reseller Portal ( domain and hosting will be yours )',
    price:'₹12999',
    offerPrice:'₹11999',
    img:pc

  },
  {
    name:'Cloud Whatsapp Marketing Portal Reseller Portal ( domain and hosting will be yours )',
    price:'₹10999',
    offerPrice:'₹8999',
    img:pc
  },
  {
    name:'Cloud Whatsapp Marketing Portal Reseller Portal ( domain and hosting will be yours )',
    price:'₹8999',
    offerPrice:'₹4999',
    img:pc
  },
  {
    name:'Cloud Whatsapp Marketing Portal Reseller Portal ( domain and hosting will be yours )',
    price:'₹14999',
    offerPrice:'₹10999',
    img:pc
  }
]

const youtubeLinks=[
  {
    link:'https://youtu.be/hAP2QF--2Dg'
  },
  {
    link:'https://youtu.be/9y927xiDtJo'
  },
  {
    link:'https://youtu.be/ZK-rNEhJIDs'
  },
  {
    link:'https://youtu.be/t3tsMEhlvwM'
  },
  {
    link:'https://youtu.be/imBlPXbAv6E'
  },
]

const productandservcies=[
  {
    name:'CLOUD WHATSAPP MARKETING PORTAL WITH NUMBER ROTATION FEATURE ( CLOUD/WEB BASED )',
    img:Pr,
    href:'https://wa.link/owom2u'
  },
  {
    name:'BULK WHATSAPP MARKETING TOOL ( WINDOWS BASED )',
    img:Pr,
    href:'https://wa.link/owom2u'

  },
  {    name:'SOCIAL MEDIA ACCOUNTS GROWTH',
  img:Pr,
  href:'https://wa.link/owom2u'

  },
  {    name:'Explainer Video Create',
  img:Pr,
  href:'https://wa.link/owom2u'

  },
  {
    name:'Google/Meta Ads Management',
    img:Pr,
    href:'https://wa.link/owom2u'
  },
  {
    name:'Website Development',
    img:Pr,
    href:'https://wa.link/owom2u'
  },
  {
    name:'Digital Visiting Card Cum Mini Website',
    img:Pr,
    href:'https://wa.link/owom2u'
  },
  {
    name:'All In One Data Extractor',
    img:Pr,
    href:'https://wa.link/owom2u'
  },
]

const gallery=[
  {
    img:img
  },
  {
    img:img
  },
  {
    img:img
  },
  {
    img:img
  },

]

const DemoPage = ({hero,qr,about,ecommerce,youtube,products,gallery,payment}) => {
 
  const [href, setHref] = React.useState("");
  var contact=hero.contactFile
  const handleMessage = (e) => {
    setHref(
      `https://wa.me/+91${e.target.value}?text=${hero.whatsappLink}`
    );
  };

  const OfferComponent =()=>{
    return ecommerce.map((item)=>{
      return(
        <Grid item xs={5} md={5} style={{border:1,borderStyle:'solid',borderColor:'black',margin:10,display:'flex',justifyContent:'center',flexDirection:'column'}}>
          <Grid style={{display:'flex',justifyContent:'flex-start',alignItems:'center'}}>
          <img
              src={item.image}
              style={{ width: "100%", height: "100%", objectFit: "contain" ,marginLeft:-10,marginTop:-12}}
            />
          </Grid>
          <Grid style={{display:'flex',width:'95%',color:'blue',textAlign:'center'}}>
            {item.name}
          </Grid>
          <Grid style={{display:'flex',justifyContent:'center',width:'95%',color:'blue',}}>
            <Typography style={{textDecorationLine:'line-through'}}>{item.price}</Typography>
          </Grid>
          <Grid style={{display:'flex',justifyContent:'center',width:'95%',color:'blue'}}>
            {item.offerPrice}
          </Grid>
          <Grid style={{display:'flex',justifyContent:'center',width:'95%',color:'blue',margin:5}}>
            <Button variant='contained' onClick={()=>window.open(`${item.whatsappLink}`)}>
              Buy Now
            </Button>
          </Grid>
        </Grid>
      )
    })
  }
  const ProductComponent =()=>{
    return products.map((item)=>{
      return(
        <Grid item xs={11} md={11} style={{border:1,borderStyle:'solid',borderColor:'black',margin:10,display:'flex',justifyContent:'center',flexDirection:'column'}}>
          
          <Grid style={{display:'flex',justifyContent:'center',width:'100%',color:'blue',textAlign:'center'}}>
            {item.name}
          </Grid>
          <Grid style={{display:'flex',justifyContent:'flex-start',alignItems:'center'}}>
          <img
              src={item.image}
              style={{ width: "100%", height: "100%", objectFit: "contain" ,marginLeft:-10,}}
            />
          </Grid>
          
          <Grid style={{display:'flex',justifyContent:'center',width:'95%',color:'blue',margin:5}}>
            <Button variant='contained' href={item.whatsappLink}>
              Enquiry
            </Button>
          </Grid>
        </Grid>
      )
    })
  }
  const GalleryComponent =()=>{
    return gallery.map((item)=>{
      return(
        <Grid item xs={11} md={11} style={{margin:10,display:'flex',justifyContent:'center',flexDirection:'column'}}>
          
         
          <Grid style={{display:'flex',justifyContent:'flex-start',alignItems:'center'}}>
          <img
              src={item.img}
              style={{ width: "100%", height: "100%", objectFit: "contain" ,marginLeft:-10,}}
            />
          </Grid>
          
          
        </Grid>
      )
    })
  }
  const YoutubeComponent =()=>{
    return youtube.map((item)=>{
      return(
        <Grid item xs={11} md={11} style={{margin:10,display:'flex',justifyContent:'center',flexDirection:'column'}}>
          <Grid style={{display:'flex',justifyContent:'flex-start',alignItems:'center'}}>
          <ReactPlayer
          height='300px'
        url={item.link}
      />
          </Grid>
          
        </Grid>
      )
    })
  }

  function handleDownload() {
    const element = document.createElement("a");
  element.href = contact;
  element.download = "yourfile.vcf";
  document.body.appendChild(element);
  element.click();
  }
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

  return (
   <Grid style={{backgroundImage:`url('${hero.background}')`,backgroundSize:'contain',height:'100%',width:'100%',display:'flex',justifyContent:'center'}}>
        <Grid container spacing={2} sx={{width:{xs:'90%',sm:'60%',md:'30%'},marginTop:4}} >
            {/* Hero Section */}
           <Grid item xs={12} md={12} style={{color:'#fff' ,backgroundColor:"blanchedalmond",border:1,borderWidth:4,borderColor:'darkblue',borderStyle:'solid',display:'flex',width:'100%',flexDirection:'column',}}>
           <Grid style={{display:'flex',
              justifyContent:'center',
              alignItems:'center',
              flexDirection:'column',}}>
           <Grid
            style={{
              width: 150,
              height: 150,
              borderRadius: "50%",
              overflow: "hidden",
              borderColor: 'blue',
              borderWidth: 4,
              border:1,
              borderStyle:'solid',
              
              
            }}
          >
            <img
              src={hero.icon}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            
          </Grid>
          <Grid>
          <Typography color='blue' sx={{textDecoration:'underline'}}>{hero.name}</Typography>
          </Grid>
          <Grid style={{display:'flex',flexDirection:'row',marginTop:10,marginBottom:10}}>
            <IconButton style={{color:'white',backgroundColor:"blue",marginLeft:3}} href={`${hero.callLink}`}><CallIcon/></IconButton>
            <IconButton style={{color:'white',backgroundColor:"blue",marginLeft:3}} href={`${hero.whatsappSendLink}`}><WhatsAppIcon/></IconButton>
            <IconButton style={{color:'white',backgroundColor:"blue",marginLeft:3}} href={`${hero.location}`}><LocationOnIcon/></IconButton>
            <IconButton style={{color:'white',backgroundColor:"blue",marginLeft:3}} href={`${hero.emailLink}`}><EmailIcon/></IconButton>
            <IconButton style={{color:'white',backgroundColor:"blue",marginLeft:3}} href={`${hero.website}`}><PublicIcon/></IconButton>

          </Grid>
          </Grid>
          <Grid style={{display:'flex',flexDirection:'column'}}>
            <Grid style={{marginTop:10,display:'flex',flexDirection:"row"}}>
              <Grid style={{backgroundColor:'darkblue',width:'10%',marginLeft:-16,display:'flex',justifyContent:'center',border:1,borderTopRightRadius:20,borderBottomRightRadius:20,height:50,alignItems:'center'}}>
                <CallIcon/>
                
              </Grid>
              <Grid style={{color:'black',display:'flex',justifyContent:'center',textAlign:'center',width:'50%',alignItems:'center'}}>
                {hero.phonenumber1}
              </Grid>

            </Grid>
            <Grid style={{marginTop:10,display:'flex',flexDirection:"row",width:'100%'}}>
              <Grid style={{backgroundColor:'darkblue',width:'10%',marginLeft:-16,display:'flex',justifyContent:'center',border:1,borderTopRightRadius:20,borderBottomRightRadius:20,height:50,alignItems:'center'}}>
                <CallIcon/>  
              </Grid>
              <Grid style={{color:'black',display:'flex',justifyContent:'center',textAlign:'center',width:'50%',alignItems:'center'}}>
              {hero.phonenumber2}
              </Grid>

            </Grid>
            <Grid style={{marginTop:10,display:'flex',flexDirection:"row"}}>
              <Grid style={{backgroundColor:'darkblue',width:'10%',marginLeft:-16,display:'flex',justifyContent:'center',border:1,borderTopRightRadius:20,borderBottomRightRadius:20,height:50,alignItems:'center'}}>
                <EmailIcon/>
                
              </Grid>
              <Grid style={{color:'black',display:'flex',justifyContent:'center',textAlign:'center',width:'80%',alignItems:'center'}}>
             {hero.email}
              </Grid>

            </Grid>
            <Grid style={{marginTop:10,display:'flex',flexDirection:"row"}}>
              <Grid style={{backgroundColor:'darkblue',width:'10%',marginLeft:-16,display:'flex',justifyContent:'center',border:1,borderTopRightRadius:20,borderBottomRightRadius:20,height:50,alignItems:'center'}}>
                <LocationOnIcon/>
                
              </Grid>
              <Grid style={{color:'black',display:'flex',justifyContent:'center',textAlign:'center',width:'72%',alignItems:'center'}}>
              {hero.address}
              </Grid>

            </Grid>

          </Grid>
          <Grid container spacing={2} style={{display:'flex',
              justifyContent:'center',
              alignItems:'center',
              }}>
            <Grid item xs={10} md={8} >
            <TextField
                  style={{width:'100%',backgroundColor:'#fff'}}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">+91</InputAdornment>
                      ),
                      endAdornment:(
                        <Button href={href} endIcon={<WhatsAppIcon />} variant="contained" style={{backgroundColor:'green',color:"white",width:'100%',marginRight:-13}}>
                   Send On
                  </Button>
                      )
                    }}
                    onChange={(e) => handleMessage(e)}
                    size="small"
                  />
                  

            </Grid>
            <Grid item xs={7} md={7} style={{display:'flex',justifyContent:'center'}}>
              <Button variant='contained' endIcon={<SimCardDownloadIcon/>} onClick={handleDownload}>Save To Contacts</Button>
            </Grid>
            <Grid item xs={5} md={5} style={{display:'flex',justifyContent:'center'}}>
            <Button variant='contained' endIcon={<ShareIcon/>} onClick={() =>
                    handleClick(
                     `${hero.title}`,
                      `${hero.titleLink}`
                    )
                    
                  }>Share</Button>
            </Grid>

          </Grid>

          <Grid style={{display:'flex',
              justifyContent:'center',
              alignItems:'center',
              flexDirection:'column'
              }}>
          <Grid container spacing={1} style={{display:'flex',
              justifyContent:'center',
              alignItems:'center',
              flexDirection:'column'
              }}>
                    <Grid item>
                      <IconButton     href={`${hero.fbLink}`}              >
                        <FacebookIcon  />
                      </IconButton>
                    </Grid>
                    <Grid item>
                      <IconButton href={`${hero.twitterLink}`} >
                        <TwitterIcon />
                      </IconButton>
                    </Grid>
                    <Grid item>
                      <IconButton href={`${hero.linkdninLink}`}>
                        <LinkedInIcon />
                      </IconButton>
                    </Grid>
                  </Grid>
                  <Grid container spacing={1} style={{display:'flex',
              justifyContent:'center',
              alignItems:'center',
              flexDirection:'column'
              }}>
                    <Grid item>
                      <IconButton  >
                        <MessageIcon href={`${hero.messageLink}`}/>
                      </IconButton>
                    </Grid>
                    <Grid item>
                      <IconButton  >
                        <InstagramIcon href={`${hero.instaLink}`}/>
                      </IconButton>
                    </Grid>
                    <Grid item>
                      <IconButton  >
                        <PinterestIcon href={`${hero.pinterestLink}`}/>
                      </IconButton>
                    </Grid>
                  </Grid>
                  <Grid container spacing={1} style={{display:'flex',
              justifyContent:'center',
              alignItems:'center',
              flexDirection:'column'
              }}>
                    <Grid item>
                      <IconButton  >
                        <TelegramIcon href={`${hero.telegramLink}`}/>
                      </IconButton>
                    </Grid>
                  
                  </Grid>
          </Grid>


           </Grid>

           {/* Qr Section */}
           <Grid item xs={12} md={12} style={{color:'#fff' ,backgroundColor:"blanchedalmond",marginTop:10,border:1,borderWidth:4,borderColor:'darkblue',borderStyle:'solid'}}>
              <Grid style={{fontSize:30,textAlign:'center',color:'blue'}}>
                Scan QR to download the Contact Details
              </Grid>
              <Grid style={{fontSize:{xs:10,md:30},textAlign:'center',color:'blue'}}>
                -------------------------------
              </Grid>
              <Grid style={{display:'flex',justifyContent:'center'}}>
              <img
              src={qr.qrImage}
              style={{ width: "90%", height: "90%", objectFit: "cover" }}
            />
              </Grid>
           </Grid>

           {/* About Section */}
           <Grid item xs={12} md={12} style={{color:'#fff' ,backgroundColor:"blanchedalmond",marginTop:10,border:1,borderWidth:4,borderColor:'darkblue',borderStyle:'solid'}}>
              <Grid style={{fontSize:30,textAlign:'center',color:'blue'}}>
                About Us
              </Grid>
              <Grid style={{fontSize:{xs:10,md:30},textAlign:'center',color:'blue'}}>
                -------------------------------
              </Grid>
              <Grid style={{color:"blue",marginTop:5}}>
              {about.establish}
              </Grid>
              <Grid style={{color:"blue",marginTop:35}}>
              {about.certificates}
              </Grid>
              <Grid style={{color:"blue",marginTop:45}}>
              {about.description}
              </Grid>
           </Grid>

           {/* Our Offers (Ecommerce Section) */}

           <Grid item xs={12} md={12} style={{color:'#fff' ,backgroundColor:"blanchedalmond",marginTop:10,border:1,borderWidth:4,borderColor:'darkblue',borderStyle:'solid'}}>
              <Grid style={{fontSize:30,textAlign:'center',color:'blue'}}>
                Our Offers
              </Grid>
              <Grid style={{fontSize:{xs:10,md:30},textAlign:'center',color:'blue'}}>
                -------------------------------
              </Grid>
              <Grid container spacing={2} style={{marginTop:10}}>
                <OfferComponent/>

              </Grid>
           </Grid>

           {/* Youtube Section  */}
           <Grid item xs={12} md={12} style={{color:'#fff' ,backgroundColor:"blanchedalmond",marginTop:10,border:1,borderWidth:4,borderColor:'darkblue',borderStyle:'solid'}}>
              <Grid style={{fontSize:30,textAlign:'center',color:'blue'}}>
                Youtube Videos
              </Grid>
              <Grid style={{fontSize:{xs:10,md:30},textAlign:'center',color:'blue'}}>
                -------------------------------
              </Grid>
              <Grid container spacing={2} style={{marginTop:10}}>
                <YoutubeComponent/>

              </Grid>
           </Grid>
           {/* Product And Services */}
           <Grid item xs={12} md={12} style={{color:'#fff' ,backgroundColor:"blanchedalmond",marginTop:10,border:1,borderWidth:4,borderColor:'darkblue',borderStyle:'solid'}}>
              <Grid style={{fontSize:30,textAlign:'center',color:'blue'}}>
                Our Products and Services
              </Grid>
              <Grid style={{fontSize:{xs:10,md:30},textAlign:'center',color:'blue'}}>
                --------------------------------------------------
              </Grid>
              <Grid container spacing={2} style={{marginTop:10}}>
                <ProductComponent/>

              </Grid>
           </Grid>

           {/* Gallery */}
           <Grid item xs={12} md={12} style={{color:'#fff' ,backgroundColor:"blanchedalmond",marginTop:10,border:1,borderWidth:4,borderColor:'darkblue',borderStyle:'solid'}}>
              <Grid style={{fontSize:30,textAlign:'center',color:'blue'}}>
                Our Gallery
              </Grid>
              <Grid style={{fontSize:{xs:10,md:30},textAlign:'center',color:'blue'}}>
                -------------------------------
              </Grid>
              <Grid container spacing={2} style={{marginTop:10}}>
                <GalleryComponent/>

              </Grid>
           </Grid>

           {/* Payment Section */}
           <Grid item xs={12} md={12} style={{color:'#fff' ,backgroundColor:"blanchedalmond",marginTop:10,border:1,borderWidth:4,borderColor:'darkblue',borderStyle:'solid'}}>
              <Grid style={{fontSize:30,textAlign:'center',color:'blue'}}>
                Payment Info
              </Grid>
              <Grid style={{fontSize:{xs:10,md:30},textAlign:'center',color:'blue'}}>
                -------------------------------
              </Grid>
              <Grid  style={{marginTop:10}}>
                <Typography color='blue'>Paytm</Typography>
                <Typography color='black' fontSize={20}>{payment.paytmNumber}</Typography>
                <Typography color='blue'>Google Pay</Typography>
                <Typography color='black' fontSize={20}>{payment.googlePayNumber}</Typography>
                <Typography color='blue'>PhonePe</Typography>
                <Typography color='black' fontSize={20}>{payment.phonePeNumber}</Typography>

              </Grid>
              <Grid style={{fontSize:30,textAlign:'center',color:'blue'}}>
                Bank Account Details
              </Grid>
              <Grid style={{fontSize:{xs:10,md:30},textAlign:'center',color:'blue'}}>
                -------------------------------
              </Grid>
              <Grid  style={{marginTop:10,marginBottom:20}}>
                <Typography color='blue'>Name:</Typography>
                <Typography color='black' fontSize={20}>{payment.name}</Typography>
                <Typography color='blue'>Account Number:</Typography>
                <Typography color='black' fontSize={20}>{payment.accountNumber}</Typography>
                <Typography color='blue'>IFSC Code:</Typography>
                <Typography color='black' fontSize={20}>{payment.ifscCode}</Typography>
                <Typography color='blue'>Bank Name:</Typography>
                <Typography color='black' fontSize={20}>{payment.bankName}</Typography>
              <img src={payment.qrImage} width='90%' height='90%'/>
              </Grid>
           </Grid>
           {/* Enquiry Form Section */}
           <Grid item xs={12} md={12} style={{color:'#fff' ,backgroundColor:"blanchedalmond",marginTop:10,border:1,borderWidth:4,borderColor:'darkblue',borderStyle:'solid'}}>
              <Grid style={{fontSize:30,textAlign:'center',color:'blue'}}>
                Contact Us
              </Grid>
              <Grid style={{fontSize:{xs:10,md:30},textAlign:'center',color:'blue'}}>
                -------------------------------
              </Grid>
              <Grid style={{marginTop:10,width:'90%',display:'flex',justifyContent:'center',flexDirection:"column",alignItems:'center'}}>
                <TextField label='Enter Your Name' style={{backgroundColor:'white',marginTop:8}} fullWidth/>
                <TextField label='Enter Your Mobile No' style={{backgroundColor:'white',marginTop:8}} fullWidth/>
                <TextField label='Enter Your Email Address'style={{backgroundColor:'white',marginTop:8}} fullWidth/>
                <TextField label='Enter Your Message or Query' style={{backgroundColor:'white',marginTop:8}} fullWidth/>
                <Button variant='contained' style={{margin:10}}>
                  Submit
                </Button>
              </Grid>
             
           </Grid>


        </Grid>
   </Grid>
  )
}

export default DemoPage
