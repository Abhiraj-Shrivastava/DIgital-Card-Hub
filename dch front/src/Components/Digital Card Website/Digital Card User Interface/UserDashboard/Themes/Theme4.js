import {
    Box,
    Button,
    Container,
    Grid,
    IconButton,
    InputAdornment,
    Paper,
    TextField,
    Typography,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import React from "react";
import {
    ArrowDownwardSharp,
    ArrowDropDownSharp,
    ArrowDropUpSharp,
    Email,
    FacebookOutlined,
    Instagram,
    LinkedIn,
    Save,
    Share,
    WhatsApp,
    YouTube,
} from "@mui/icons-material";
import coverImg from "./ThemeAssets/back.jpg";
import logo from "./ThemeAssets/instagram.png";
import { serverURL } from "../../../../Services/NodeServices";
import { useNavigate } from "react-router-dom";
import ReactPlayer from "react-player";
import Clock from 'react-live-clock';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { postData } from "../../../../Services/NodeServices";

export default function Theme4({ data, products, gallery, ecommerce }) {
    const theme = useTheme();
    const mobile = useMediaQuery(theme.breakpoints.down(600));
    const tablet = useMediaQuery(theme.breakpoints.down(960));

    const navigate = useNavigate();
    const UserId = window.localStorage.getItem("userId");
    const [number, setNumber] = React.useState();
    const [href, setHref] = React.useState("");
    const [fullCard, setFullCard] = React.useState(false);
    const handleMessage = (e) => {
        console.log(e);
        setHref(
            `https://api.whatsapp.com/send?phone=+91${e.target.value}&text=https://digitalcardhub.in/%23/${data.companyId}`
           // `https://wa.me/+91${e.target.value}?text=https://digitalcardhub.in/#/${data.companyId}`
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

    const Products = () => {
        return products.map((item) => {
            if(item!=null){
            return (
                <Grid item xs={mobile ? 12 : 6}>
                    <Paper
                        elevation={12}
                        sx={{
                            border: 1,
                            backgroundColor: "#ebfaeb",
                            borderStyle: "solid",
                            borderColor: "white",
                            display: item.productimage == "" ? "none" : "flex",
                            justifyContent: "center",
                            flexDirection: "column",
                            mb: "15px",
                            marginX: "15px",
                            p: 0,
                        }}
                    >
                        <img src={`${serverURL}/images/${item.productimage}`} />
                        <br />
                        <Typography
                            sx={{
                                fontWeight: 500,
                                fontSize: "1.4rem",
                                color: "#0a290a",
                                textAlign: "center",
                            }}
                        >
                            {item.productName}
                        </Typography>
                        <br />
                        <Button
                            variant="contained"
                            sx={{
                                paddingX: "20px",
                                bgcolor: "#0a290a",
                                color: "#f2f2f2",
                                fontWeight: 600,
                                "&:hover": {
                                    bgcolor: "#0f3d0f",
                                    color: "#f2f2f2",
                                },
                            }}
                            onClick={() =>
                                window.open(
                                    `https://wa.me/+91${data.WhatsappNo}?text=Enquiry For ${item.productName}`
                                )
                            }
                        >
                            Enquiry
                        </Button>
                    </Paper>
                </Grid>
            );}
        });
    };

    const Ecommerce = () => {
        return ecommerce.map((item) => {
            if(item!=null)
            {

            
            return (
                <Grid item xs={12}>
                    <Paper
                        elevation={12}
                        sx={{
                            border: 1,
                            backgroundColor: "#ebfaeb",
                            borderStyle: "solid",
                            borderColor: "white",
                            display: "flex",
                            justifyContent: "center",
                            flexDirection: "column",
                            mb: "15px",
                            marginX: "15px",
                            p: 0,
                        }}
                    >
                        <img src={`${serverURL}/images/${item.productimg}`} />
                        <br />
                        <Typography
                            sx={{
                                fontWeight: 500,
                                fontSize: "1.4rem",
                                color: "#0a290a",
                                textAlign: "center",
                            }}
                        >
                            {item.productname}
                        </Typography>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <s>
                                <Typography
                                    sx={{
                                        fontWeight: 500,
                                        fontSize: "1.1rem",
                                        color: "#0a290a",
                                        textAlign: "center",
                                    }}
                                >
                                    ₹{item.price}
                                </Typography>
                            </s>
                            &nbsp;&nbsp;
                            <Typography
                                sx={{
                                    fontWeight: 500,
                                    fontSize: "1.3rem",
                                    color: "#0a290a",
                                    textAlign: "center",
                                }}
                            >
                                ₹{item.offerprice}
                            </Typography>
                        </Box>
                        <br />
                        <Button
                            variant="contained"
                            sx={{
                                paddingX: "20px",
                                bgcolor: "#0a290a",
                                color: "#f2f2f2",
                                fontWeight: 600,
                                "&:hover": {
                                    bgcolor: "#0f3d0f",
                                    color: "#f2f2f2",
                                },
                            }}
                            onClick={() =>
                                window.open(
                                    `https://wa.me/+91${data.WhatsappNo}?text=I Want To Buy Your ${item.productname}`
                                )
                            }
                        >
                            BUY NOW
                        </Button>
                    </Paper>
                </Grid>
            );}
        });
    };

    const Gallery = () => {
        return gallery.map((item) => {
            if(item!=null){
            return (
                <Grid item xs={12}>
                    <Paper
                        elevation={6}
                        sx={{
                            border: 1,
                            borderRadius: 2.5,
                            backgroundColor: "#ebfaeb",
                            borderStyle: "solid",
                            borderColor: "white",
                            display: "flex",
                            justifyContent: "center",
                            flexDirection: "column",
                            mb: "15px",
                            marginX: "15px",
                            p: 0,
                        }}
                    >
                        <img
                            src={`${serverURL}/images/${item.image}`}
                            style={{ borderRadius: 10, width: "auto" }}
                        />
                    </Paper>
                </Grid>
            );}
        });
    };

    const handleSave = () => {
        var vCardData =
            "BEGIN:VCARD\r\n" +
            "VERSION:3.0\r\n" +
            "FN:" +
            data.fullname +
            "\r\n" +
            "N:" +
            data.fullname +
            ";;;\r\n" +
            "EMAIL;TYPE=INTERNET:" +
            data.Email +
            "\r\n" +
            "TEL;TYPE=CELL:" +
            data.phoneNumber +
            "\r\n" +
            "END:VCARD";
        var blob = new Blob([vCardData], { type: "text/vcard" });
        var downloadLink = document.createElement("a");
        downloadLink.href = URL.createObjectURL(blob);
        downloadLink.download = "contact.vcf";
        downloadLink.style.display = "none";
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
        handleContactUpdate()
  };
  React.useEffect(()=>{
    const section = document.getElementById("hero");
    section.scrollIntoView({ behavior: 'instant' });
  },[])
  const handleWhatsappUpdate = async () => {
    var formData = new FormData();
    formData.append("_id", data._id);
    formData.append("whatsappClickCount", data.whatsappClickCount + 1);
    var result = await postData("carddetails/updateWhatsappClickCount", formData, true);
  };
  const handleInstaUpdate = async () => {
    var formData = new FormData();
    formData.append("_id", data._id);
    formData.append("instaClickCount", data.whatsappClickCount + 1);
    var result = await postData("carddetails/updateInstaClickCount", formData, true);
  };
  const handleFbUpdate = async () => {
    var formData = new FormData();
    formData.append("_id", data._id);
    formData.append("fbClickCount", data.fbClickCount + 1);
    var result = await postData("carddetails/updateFbClickCount", formData, true);
  };
  const handleLinkdinUpdate = async () => {
    var formData = new FormData();
    formData.append("_id", data._id);
    formData.append("linkdinClickCount", data.linkdinClickCount + 1);
    var result = await postData("carddetails/updateLinkdinClickCount", formData, true);
  };
  const handleContactUpdate = async () => {
    var formData = new FormData();
    formData.append("_id", data._id);
    formData.append("contactDownloadCount", data.contactDownloadCount + 1);
    var result = await postData("carddetails/updateContactDownloadCount", formData, true);
  };


    return (
        <Box bgcolor={"#ebfaeb"}>
            <Container
                maxWidth="sm"
                sx={{
                    display: "flex",
                    // justifyContent: "center",
                    // alignItems: "center",
                    flexDirection: "column",
                    p: 0,
                }}
            >   <Grid container spacing={2} sx={{mt:1}}>
            <Grid item
      xs={4}
      md={3.5} sx={{display:'flex',justifyContent:'center',margin:1,marginTop:-1}}>
         <Button variant='contained' sx={{  bgcolor: "#BDCAB8",
                                color: "#008069",
                                fontWeight: 600,
                                borderTopRightRadius: 20,
                                borderTopLeftRadius: 20,
                                borderBottomRightRadius: 20,
                                borderBottomLeftRadius: 20,
                                "&:hover": {
                                    bgcolor: "#fff",
                                    color: "#BDCAB8",
                                },}} ><Clock  format={'h:mm:ssA'} ticking={true} style={{color:'#0a290a',fontSize:15}} timezone={'Asia/Calcutta'} /></Button>

  
  </Grid>
  <Grid item
      xs={2}
      md={3.5} sx={{display:'flex',justifyContent:'center',margin:1,marginTop:-1,color:'#0a290a',flexDirection:'column',alignItems:'center'}}>
  {data.cardViewCount} <VisibilityIcon sx={{color:'#0a290a'}}/>
  </Grid>
  <Grid item
      xs={4}
      md={3.5} sx={{display:'flex',justifyContent:'center',margin:1,marginTop:-1}}>
    <Button variant='contained' sx={{  bgcolor: "#BDCAB8",
                                color: "#0a290a",
                                fontWeight: 600,
                                borderTopRightRadius: 20,
                                borderTopLeftRadius: 20,
                                borderBottomRightRadius: 20,
                                borderBottomLeftRadius: 20,
                                "&:hover": {
                                    bgcolor: "#fff",
                                    color: "#BDCAB8",
                                },}} onClick={()=>navigate('/digitalcardlogin')}>{data.customerId==UserId?"Login":"Create Now"}</Button>
  </Grid>
  </Grid>
                <img
                id="hero"
                    src={`${serverURL}/images/${data.companyCoverImage}`}
                    height={300}
                />
                <Box
                    bgcolor={"#BDCAB8"}
                    sx={{
                        width: "100%",
                        mt: "-10px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                        position: "relative",
                        top: mobile ? "-10vh" : tablet ? "-12vh" : "-18vh",
                    }}
                >
                    <img
                        src={`${serverURL}/images/${data.companylogo}`}
                        width={120}
                        height={120}
                        style={{
                            borderRadius: 100,
                            border: "8px solid #f2f2f2",
                            position: "relative",
                            top: mobile ? "-7vh" : tablet ? "-7.5vh" : "-12vh",
                        }}
                    />
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            flexDirection: "column",
                            position: "relative",
                            top: mobile ? "-7vh" : tablet ? "-7.5vh" : "-10vh",
                        }}
                    >
                        <Typography
                            sx={{
                                fontSize: "1.5rem",
                                fontWeight: 600,
                                color: "#0a290a",
                            }}
                        >
                            {data.fullname}
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: "1.1rem",
                                fontWeight: 500,
                                textTransform: "uppercase",
                                color: "#0a290a",
                            }}
                        >
                            {data.position}
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            flexDirection: "row",
                            position: "relative",
                            top: mobile ? "-7vh" : tablet ? "-7.5vh" : "-8vh",
                        }}
                    >
                        <IconButton href={`https://www.facebook.com/${data.fbLink}`} onClick={()=>handleFbUpdate()} sx={{ display: data.fbLink == "" ? "none" : "flex" }}>
                            <FacebookOutlined
                                sx={{ fontSize: "2.5rem", color: "#0a290a", marginX: "5px" }}
                            />
                        </IconButton>
                        <IconButton
                            href={`https://www.instagram.com/${data.igLink}`}
                            onClick={()=>handleInstaUpdate()}
                            sx={{ display: data.igLink == "" ? "none" : "flex" }}
                        >
                            <Instagram
                                sx={{ fontSize: "2.5rem", color: "#0a290a", marginX: "5px" }}
                            />
                        </IconButton>
                        <IconButton
                            href={`https://www.linkedin.com/in/${data.LinkdnLink}`}
                            onClick={()=>handleLinkdinUpdate()}
                            sx={{ display: data.LinkdnLink == "" ? "none" : "flex" }}
                        >
                            <LinkedIn
                                sx={{ fontSize: "2.5rem", color: "#0a290a", marginX: "5px" }}
                            />
                        </IconButton>
                        <IconButton
                            href={`https://wa.me/+91${data.phoneNumber}?text=`}
                            onClick={()=>handleWhatsappUpdate()}
                            sx={{ display: data.fbLink == "" ? "none" : "flex" }}
                        >
                            <WhatsApp
                                sx={{ fontSize: "2.5rem", color: "#0a290a", marginX: "5px" }}
                            />
                        </IconButton>
                        <IconButton
                             href={`https://www.youtube.com/@${data.YoutubeLink}`}
                            onClick={()=>handleWhatsappUpdate()}
                            sx={{ display: data.YoutubeLink == "" ? "none" : "flex" }}
                        >
                            <YouTube
                                sx={{ fontSize: "2.5rem", color: "#0a290a", marginX: "5px" }}
                            />
                        </IconButton>
                    </Box>
                    
                    <Box sx={{ paddingInline: mobile ? "10px" : "" }}>
                        <TextField
                            sx={{
                                "& .MuiOutlinedInput-root": {
                                    "&:hover fieldset": {
                                        borderColor: "#0a290a", // Outline color when hovering
                                    },

                                    "&.Mui-focused fieldset": {
                                        borderColor: "#0a290a", // Outline color when focused
                                    },
                                },

                                "& label": {
                                    paddingLeft: (theme) => theme.spacing(2),
                                    color: "#D24A61",
                                    "&.Mui-focused": {
                                        color: "#0a290a", // Change label color when focused
                                    },
                                },
                                "& input": {
                                    paddingLeft: (theme) => theme.spacing(0),
                                    color: "#0a290a",
                                    zIndex: 1,
                                },

                                "& fieldset": {
                                    paddingLeft: (theme) => theme.spacing(2.5),
                                    borderRadius: "54px",
                                    backgroundColor: "#ebfaeb",
                                    "&:hover": {
                                        borderColor: "#0a290a",
                                    },
                                    // height: { xs: 45, sm: 45, md: 45 },
                                    // width: { xs: 258, sm: 298, md: 298 },
                                    // borderColor: "#0a290a",
                                },
                            }}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Typography
                                            sx={{ textAlign: "center", color: "black", zIndex: 1 }}
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
                                                fontSize: "1.1rem",
                                                backgroundColor: "#00a550",
                                            }}
                                            href={href}
                                         >
                                            Send&nbsp;
                                            <WhatsApp />
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                            value={number}
                            onChange={(e)=>handleMessage(e)}    />
                    </Box>
                    <br />
                    <br />
                    <br />
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <Button
                                sx={{
                                    paddingX: "20px",
                                    paddingY: "20px",
                                    bgcolor: "#0a290a",
                                    color: "#f2f2f2",
                                    fontWeight: 600,
                                    borderTopRightRadius: 20,
                                    borderTopLeftRadius: 0,
                                    borderBottomRightRadius: 20,
                                    borderBottomLeftRadius: 0,
                                    "&:hover": {
                                        bgcolor: "#0f3d0f",
                                        color: "#f2f2f2",
                                    },
                                }}
                                onClick={() => handleSave()}
                            >
                                SAVE&nbsp; <Save />
                            </Button>
                        </Grid>
                        <Grid
                            item
                            xs={6}
                            sx={{
                                display: "flex",
                                justifyContent: "flex-end",
                                alignItems: "flex-end",
                            }}
                        >
                            <Button
                                sx={{
                                    paddingX: "20px",
                                    paddingY: "20px",
                                    bgcolor: "#0a290a",
                                    color: "#f2f2f2",
                                    fontWeight: 600,
                                    borderTopRightRadius: 0,
                                    borderTopLeftRadius: 20,
                                    borderBottomRightRadius: 0,
                                    borderBottomLeftRadius: 20,
                                    "&:hover": {
                                        bgcolor: "#0f3d0f",
                                        color: "#f2f2f2",
                                    },
                                }}
                                onClick={() =>
                                    handleClick(
                                      `${data.companyId}`,
                                      `https://digitalcardhub.in/#/${data.companyId}`
                                    )
                                  }
                            >
                                SHARE
                                <Share />
                            </Button>
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            sx={{ display: data.profile=='false'?'none':"flex", justifyContent: "center", mb: "30px" }}
                        >
                            <Button
                                sx={{
                                    paddingX: "20px",
                                    paddingY: "10px",
                                    borderRadius: 2,
                                    bgcolor: "#0a290a",
                                    color: "#f2f2f2",
                                    fontWeight: 600,
                                    "&:hover": {
                                        bgcolor: "#0f3d0f",
                                        color: "#f2f2f2",
                                    },
                                }}
                                variant="contained"
                                onClick={() => setFullCard(!fullCard)}
                            >
                                {fullCard ? (
                                    <Typography
                                        sx={{
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            flexDirection: "row",
                                        }}
                                    >
                                        Show Less&nbsp;
                                        <ArrowDropUpSharp color="#f2f2f2" />
                                    </Typography>
                                ) : (
                                    <Typography
                                        sx={{
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            flexDirection: "row",
                                        }}
                                    >
                                        Show Full Card&nbsp;
                                        <ArrowDropDownSharp color="#f2f2f2" />
                                    </Typography>
                                )}
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
                <Grid
                    container
                    sx={{
                        display: fullCard ? "block" : "none",
                        bgcolor: "#BDCAB8",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        paddingY: "25px",
                        paddingX: "30px",
                        mb: "20px",
                    }}
                >
                    <Grid item xs={12}>
                        <Typography
                            sx={{
                                fontSize: "2rem",
                                color: "#0a290a",
                                fontWeight: 700,
                                mb: "20px",
                                borderBottom: "1.5px solid #0a290a",
                                textAlign: "center",
                            }}
                        >
                            ABOUT US
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography
                            sx={{
                                fontSize: "1.2rem",
                                color: "#0a290a",
                                fontWeight: 600,
                                mb: "20px",
                                textAlign: "center",
                            }}
                        >
                            Establishment Date : {data.CompanyEstDate}
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography
                            sx={{
                                fontSize: "1rem",
                                color: "#0a290a",
                                fontWeight: 500,
                                mb: "20px",
                                textAlign: "center",
                            }}
                        >
                            {data.AboutUs}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid
                    container
                    sx={{
                        display: products.length != 0 && fullCard ? "block" : "none",
                        bgcolor: "#BDCAB8",
                        // flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        paddingY: "25px",
                        paddingX: "30px",
                        mb: "20px",
                    }}
                >
                    <Grid item xs={12}>
                        <Typography
                            sx={{
                                fontSize: "2rem",
                                color: "#0a290a",
                                fontWeight: 700,
                                mb: "20px",
                                borderBottom: "1.5px solid #0a290a",
                                textAlign: "center",
                            }}
                        >
                            OUR PRODUCTS AND SERVICES
                        </Typography>
                    </Grid>
                    <Grid container>
                        <Products />
                    </Grid>
                </Grid>
                <Grid
                    container
                    sx={{
                        display: ecommerce.length != 0 && fullCard ? "block" : "none",
                        bgcolor: "#BDCAB8",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        paddingY: "25px",
                        paddingX: "30px",
                        mb: "20px",
                    }}
                >
                    <Grid item xs={12}>
                        <Typography
                            sx={{
                                fontSize: "2rem",
                                color: "#0a290a",
                                fontWeight: 700,
                                mb: "20px",
                                borderBottom: "1.5px solid #0a290a",
                                textAlign: "center",
                            }}
                        >
                            BUY OUR PRODUCT NOW
                        </Typography>
                    </Grid>
                    <Grid container>
                        <Ecommerce />
                    </Grid>
                </Grid>
                <Grid
                    container
                    sx={{
                        display: gallery.length != 0 && fullCard ? "block" : "none",
                        bgcolor: "#BDCAB8",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        paddingY: "25px",
                        paddingX: "30px",
                        mb: "20px",
                    }}
                >
                    <Grid item xs={12}>
                        <Typography
                            sx={{
                                fontSize: "2rem",
                                color: "#0a290a",
                                fontWeight: 700,
                                mb: "20px",
                                borderBottom: "1.5px solid #0a290a",
                                textAlign: "center",
                            }}
                        >
                            OUR GALLERY
                        </Typography>
                    </Grid>
                    <Grid container>
                        <Gallery />
                    </Grid>
                </Grid>
                <Grid
                    container
                    so
                    sx={{
                        display:
                            (data.YoutubeVideoLink1 != "" ||
                                data.YoutubeVideoLink2 != "" ||
                                data.YoutubeVideoLink3 != "" ||
                                data.YoutubeVideoLink4 != "" ||
                                data.YoutubeVideoLink5 != "") &&
                                fullCard
                                ? "flex"
                                : "none",
                        bgcolor: "#BDCAB8",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        paddingY: "25px",
                        paddingX: "30px",
                        mb: "20px",
                    }}
                >
                    <Grid item xs={12}>
                        <Typography
                            sx={{
                                fontSize: "2rem",
                                color: "#0a290a",
                                fontWeight: 700,
                                mb: "20px",
                                borderBottom: "1.5px solid #0a290a",
                            }}
                        >
                            SEE OUR VIDEO
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        sx={{
                            display: data.YoutubeVideoLink1 == "" ? "none" : "flex",
                        }}
                    >
                        <ReactPlayer height="300px" url={data.YoutubeVideoLink1} />
                    </Grid>
                    <br />
                    <Grid
                        item
                        xs={12}
                        sx={{
                            display: data.YoutubeVideoLink2 == "" ? "none" : "flex",
                        }}
                    >
                        <ReactPlayer height="300px" url={data.YoutubeVideoLink2} />
                    </Grid>
                    <br />
                    <Grid
                        item
                        xs={12}
                        sx={{
                            display: data.YoutubeVideoLink3 == "" ? "none" : "flex",
                        }}
                    >
                        <ReactPlayer height="300px" url={data.YoutubeVideoLink3} />
                    </Grid>
                    <br />
                    <Grid
                        item
                        xs={12}
                        sx={{
                            display: data.YoutubeVideoLink4 == "" ? "none" : "flex",
                        }}
                    >
                        <ReactPlayer height="300px" url={data.YoutubeVideoLink4} />
                    </Grid>
                    <br />
                    <Grid
                        item
                        xs={12}
                        sx={{
                            display: data.YoutubeVideoLink5 == "" ? "none" : "flex",
                        }}
                    >
                        <ReactPlayer height="300px" url={data.YoutubeVideoLink5} />
                    </Grid>
                </Grid>
                <Grid
                    container
                    sx={{
                        display:
                            (data.paytmNumber != null ||
                                data.Googlepaynumber != null ||
                                data.phonepenumber != null ||
                                data.paytmQrimage != "" ||
                                data.phonepeQrimage != "" ||
                                data.googlepayQrimage != "" ||
                                data.Accountholdername != "" ||
                                data.bankaccountnumber != null ||
                                data.bankifsccode != "" ||
                                data.bankname != "") &&
                                fullCard
                                ? "block"
                                : "none",
                        bgcolor: "#BDCAB8",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        paddingY: "16px",
                        paddingX: "20px",
                        mb: "20px",
                    }}
                >
                    <Grid
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            marginTop: 2,
                        }}
                    >
                        <Grid item xs={12} md={12}>
                            <Grid
                                sx={{
                                    display:
                                        data.paytmNumber == null &&
                                            data.Googlepaynumber == null &&
                                            data.phonepenumber == null
                                            ? "none"
                                            : "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                            >
                                <Grid
                                    sx={{ fontSize: "2rem", color: "#0a290a", fontWeight: 700 }}
                                >
                                    Payment Info
                                </Grid>
                                <Grid container style={{ marginTop: 10 }}>
                                    <Grid item xs={6}>
                                        <Typography
                                            sx={{
                                                display: data.paytmNumber == null ? "none" : "block",
                                                fontSize: mobile ? "0.9rem" : "1.1rem",
                                                color: "#0a290a",
                                                fontWeight: 700,
                                                textAlign: "right",
                                                mr: "10px",
                                            }}
                                            color="blue"
                                        >
                                            Paytm:
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Typography
                                            sx={{
                                                fontSize: mobile ? "0.9rem" : "1.1rem",
                                                fontWeight: 500,
                                                color: "#ffffff",
                                            }}
                                        >
                                            {data.paytmNumber}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Typography
                                            sx={{
                                                display:
                                                    data.Googlepaynumber == null ? "none" : "block",
                                                fontSize: mobile ? "0.9rem" : "1.1rem",
                                                color: "#0a290a",
                                                fontWeight: 700,
                                                textAlign: "right",
                                                mr: "10px",
                                            }}
                                            color="blue"
                                        >
                                            Google Pay:
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Typography
                                            sx={{
                                                fontSize: mobile ? "0.9rem" : "1.1rem",
                                                fontWeight: 500,
                                                color: "#ffffff",
                                            }}
                                        >
                                            {data.Googlepaynumber}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Typography
                                            sx={{
                                                display: data.phonepenumber == null ? "none" : "block",
                                                fontSize: mobile ? "0.9rem" : "1.1rem",
                                                color: "#0a290a",
                                                fontWeight: 700,
                                                textAlign: "right",
                                                mr: "10px",
                                            }}
                                            color="blue"
                                        >
                                            PhonePe:
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Typography
                                            sx={{
                                                fontSize: mobile ? "0.9rem" : "1.1rem",
                                                fontWeight: 500,
                                                color: "#ffffff",
                                            }}
                                        >
                                            {data.phonepenumber}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid
                                sx={{
                                    display:
                                        data.Accountholdername == "" &&
                                            data.bankaccountnumber == null &&
                                            data.bankifsccode == "" &&
                                            data.bankname == ""
                                            ? "none"
                                            : "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    mt: "20px",
                                    borderTop: "1px solid #0a290a",
                                    pt: "10px",
                                    paddingX: "10px",
                                }}
                            >
                                <Grid
                                    sx={{
                                        fontSize: mobile ? "1.5rem" : "2rem",
                                        color: "#0a290a",
                                        fontWeight: 700,
                                    }}
                                >
                                    Bank Account Details
                                </Grid>
                                <Grid container style={{ marginTop: 10, marginBottom: 20 }}>
                                    <Grid item xs={6}>
                                        <Typography
                                            sx={{
                                                display:
                                                    data.Accountholdername == "" ? "none" : "block",
                                                fontSize: mobile ? "0.9rem" : "1.1rem",
                                                color: "#0a290a",
                                                fontWeight: 700,
                                                textAlign: "right",
                                                mr: "10px",
                                            }}
                                            color="blue"
                                        >
                                            Name:
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Typography
                                            sx={{
                                                fontSize: mobile ? "0.9rem" : "1.1rem",
                                                fontWeight: 500,
                                                color: "#ffffff",
                                            }}
                                        >
                                            {data.Accountholdername}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Typography
                                            sx={{
                                                display:
                                                    data.bankaccountnumber == null ? "none" : "block",
                                                fontSize: mobile ? "0.9rem" : "1.1rem",
                                                color: "#0a290a",
                                                fontWeight: 700,
                                                textAlign: "right",
                                                mr: "10px",
                                            }}
                                            color="blue"
                                        >
                                            Account Number:
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Typography
                                            sx={{
                                                fontSize: mobile ? "0.9rem" : "1.1rem",
                                                fontWeight: 500,
                                                color: "#ffffff",
                                            }}
                                        >
                                            {data.bankaccountnumber}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Typography
                                            sx={{
                                                display: data.bankifsccode == "" ? "none" : "block",
                                                fontSize: mobile ? "0.9rem" : "1.1rem",
                                                color: "#0a290a",
                                                fontWeight: 700,
                                                textAlign: "right",
                                                mr: "10px",
                                            }}
                                            color="blue"
                                        >
                                            IFSC Code:
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Typography
                                            sx={{
                                                fontSize: mobile ? "0.9rem" : "1.1rem",
                                                fontWeight: 500,
                                                color: "#ffffff",
                                            }}
                                        >
                                            {data.bankifsccode}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Typography
                                            sx={{
                                                display: data.bankname == "" ? "none" : "block",
                                                fontSize: mobile ? "0.9rem" : "1.1rem",
                                                color: "#0a290a",
                                                fontWeight: 700,
                                                textAlign: "right",
                                                mr: "10px",
                                            }}
                                            color="blue"
                                        >
                                            Bank Name:
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Typography
                                            sx={{
                                                fontSize: mobile ? "0.9rem" : "1.1rem",
                                                fontWeight: 500,
                                                color: "#ffffff",
                                            }}
                                        >
                                            {data.bankname}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid
                                sx={{
                                    display:
                                        data.paytmQrimage == "" &&
                                            data.phonepeQrimage == "" &&
                                            data.googlepayQrimage == ""
                                            ? "none"
                                            : "flex",
                                    justifyContent: "center",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    borderTop: "1px solid #0a290a",
                                    pt: "10px",
                                    paddingX: "10px",
                                }}
                            >
                                <Grid
                                    sx={{
                                        fontSize: "2rem",
                                        color: "#0a290a",
                                        fontWeight: 700,
                                    }}
                                >
                                    QRs
                                </Grid>
                                <br />
                                <br />
                                <Grid
                                    container
                                    sx={{ display: "flex", justifyContent: "center" }}
                                >
                                    <Grid
                                        item
                                        xs={4}
                                        sx={{ display: data.paytmQrimage == "" ? "none" : "block" }}
                                    >
                                        <Typography
                                            sx={{
                                                fontSize: mobile ? "0.9rem" : "1.1rem",
                                                fontWeight: 600,
                                                color: "#0a290a",
                                                textAlign: "center",
                                            }}
                                        >
                                            Paytm:
                                        </Typography>

                                        <img
                                            src={`${serverURL}/images/${data.paytmQrimage}`}
                                            width={"100%"}
                                        />
                                    </Grid>
                                    <Grid
                                        item
                                        xs={4}
                                        sx={{
                                            display: data.phonepeQrimage == "" ? "none" : "block",
                                        }}
                                    >
                                        <Typography
                                            sx={{
                                                fontSize: mobile ? "0.9rem" : "1.1rem",
                                                fontWeight: 600,
                                                color: "#0a290a",
                                                textAlign: "center",
                                            }}
                                        >
                                            Phone Pe:
                                        </Typography>
                                        <img
                                            src={`${serverURL}/images/${data.phonepeQrimage}`}
                                            width={"100%"}
                                        />
                                    </Grid>
                                    <Grid
                                        item
                                        xs={4}
                                        sx={{
                                            display: data.googlepayQrimage == "" ? "none" : "block",
                                        }}
                                    >
                                        <Typography
                                            sx={{
                                                fontSize: mobile ? "0.9rem" : "1.1rem",
                                                fontWeight: 600,
                                                color: "#0a290a",
                                                textAlign: "center",
                                            }}
                                        >
                                            Google Pay:
                                        </Typography>
                                        <img
                                            src={`${serverURL}/images/${data.googlepayQrimage}`}
                                            width={"100%"}
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid
                    container
                    sx={{
                        display: fullCard ? "flex" : "none",
                        bgcolor: "#BDCAB8",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        paddingY: "16px",
                        mb: "20px",
                    }}
                >
                    <Grid item xs={12}>
                        <Typography
                            sx={{ fontSize: "2rem", color: "#0a290a", fontWeight: 700 }}
                        >
                            CONTACT US
                        </Typography>
                    </Grid>
                    <Grid
                        sx={{
                            marginTop: 5,
                            width: "90%",
                            display: "flex",
                            flexDirection: "column",
                            mb: "10px",
                        }}
                    >
                        <Typography
                            sx={{
                                fontSize: "1.1rem",
                                textAlign: "left",
                                fontWeight: 600,
                                ml: "5px",
                                color: "#0a290a",
                                display: "flex",
                                justifyContent: "flex-start",
                                alignItems: "flex-start",
                            }}
                        >
                            Enter Your Name :{" "}
                        </Typography>
                        <TextField
                            fullWidth
                            sx={{
                                "& .MuiOutlinedInput-root": {
                                    "&:hover fieldset": {
                                        borderColor: "#0a290a", // Outline color when hovering
                                    },

                                    "&.Mui-focused fieldset": {
                                        borderColor: "#0a290a", // Outline color when focused
                                    },
                                },

                                "& label": {
                                    paddingLeft: (theme) => theme.spacing(2),
                                    color: "#D24A61",
                                    "&.Mui-focused": {
                                        color: "#0a290a", // Change label color when focused
                                    },
                                },
                                "& input": {
                                    paddingLeft: (theme) => theme.spacing(0),
                                    color: "#0a290a",
                                    zIndex: 1,
                                },

                                "& fieldset": {
                                    paddingLeft: (theme) => theme.spacing(2.5),
                                    borderRadius: 2,
                                    backgroundColor: "#ebfaeb",
                                    "&:hover": {
                                        borderColor: "#0a290a",
                                    },
                                },
                                mb: "10px",
                            }}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Typography
                                            sx={{ color: "#0a290a", zIndex: 1 }}
                                        ></Typography>
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <Typography
                            sx={{
                                fontSize: "1.1rem",
                                textAlign: "left",
                                fontWeight: 600,
                                ml: "5px",
                                color: "#0a290a",
                                display: "flex",
                                justifyContent: "flex-start",
                                alignItems: "flex-start",
                            }}
                        >
                            Enter Your Mobile No :{" "}
                        </Typography>
                        <TextField
                            fullWidth
                            sx={{
                                "& .MuiOutlinedInput-root": {
                                    "&:hover fieldset": {
                                        borderColor: "#0a290a", // Outline color when hovering
                                    },

                                    "&.Mui-focused fieldset": {
                                        borderColor: "#0a290a", // Outline color when focused
                                    },
                                },

                                "& label": {
                                    paddingLeft: (theme) => theme.spacing(2),
                                    color: "#D24A61",
                                    "&.Mui-focused": {
                                        color: "#0a290a", // Change label color when focused
                                    },
                                },
                                "& input": {
                                    paddingLeft: (theme) => theme.spacing(0),
                                    color: "#0a290a",
                                    zIndex: 1,
                                },

                                "& fieldset": {
                                    paddingLeft: (theme) => theme.spacing(2.5),
                                    borderRadius: 2,
                                    backgroundColor: "#ebfaeb",
                                    "&:hover": {
                                        borderColor: "#0a290a",
                                    },
                                },
                                mb: "10px",
                            }}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Typography
                                            sx={{ color: "#0a290a", zIndex: 1 }}
                                        ></Typography>
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <Typography
                            sx={{
                                fontSize: "1.1rem",
                                textAlign: "left",
                                fontWeight: 600,
                                ml: "5px",
                                color: "#0a290a",
                                display: "flex",
                                justifyContent: "flex-start",
                                alignItems: "flex-start",
                            }}
                        >
                            Enter Your Email Address :{" "}
                        </Typography>
                        <TextField
                            fullWidth
                            sx={{
                                "& .MuiOutlinedInput-root": {
                                    "&:hover fieldset": {
                                        borderColor: "#0a290a", // Outline color when hovering
                                    },

                                    "&.Mui-focused fieldset": {
                                        borderColor: "#0a290a", // Outline color when focused
                                    },
                                },

                                "& label": {
                                    paddingLeft: (theme) => theme.spacing(2),
                                    color: "#D24A61",
                                    "&.Mui-focused": {
                                        color: "#0a290a", // Change label color when focused
                                    },
                                },
                                "& input": {
                                    paddingLeft: (theme) => theme.spacing(0),
                                    color: "#0a290a",
                                    zIndex: 1,
                                },

                                "& fieldset": {
                                    paddingLeft: (theme) => theme.spacing(2.5),
                                    borderRadius: 2,
                                    backgroundColor: "#ebfaeb",
                                    "&:hover": {
                                        borderColor: "#0a290a",
                                    },
                                },
                                mb: "10px",
                            }}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Typography
                                            sx={{ color: "#0a290a", zIndex: 1 }}
                                        ></Typography>
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <Typography
                            sx={{
                                fontSize: "1.1rem",
                                textAlign: "left",
                                fontWeight: 600,
                                ml: "5px",
                                color: "#0a290a",
                                display: "flex",
                                justifyContent: "flex-start",
                                alignItems: "flex-start",
                            }}
                        >
                            Enter Your Message or Query :{" "}
                        </Typography>
                        <TextField
                            fullWidth
                            sx={{
                                "& .MuiOutlinedInput-root": {
                                    "&:hover fieldset": {
                                        borderColor: "#0a290a", // Outline color when hovering
                                    },

                                    "&.Mui-focused fieldset": {
                                        borderColor: "#0a290a", // Outline color when focused
                                    },
                                },

                                "& label": {
                                    paddingLeft: (theme) => theme.spacing(2),
                                    color: "#D24A61",
                                    "&.Mui-focused": {
                                        color: "#0a290a", // Change label color when focused
                                    },
                                },
                                "& input": {
                                    paddingLeft: (theme) => theme.spacing(0),
                                    color: "#0a290a",
                                    zIndex: 1,
                                },

                                "& fieldset": {
                                    paddingLeft: (theme) => theme.spacing(2.5),
                                    borderRadius: 2,
                                    backgroundColor: "#ebfaeb",
                                    "&:hover": {
                                        borderColor: "#0a290a",
                                    },
                                },
                                mb: "10px",
                            }}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Typography
                                            sx={{ color: "#0a290a", zIndex: 1 }}
                                        ></Typography>
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <Button
                            variant="contained"
                            sx={{
                                marginY: "12px",
                                paddingX: "20px",
                                bgcolor: "#0a290a",
                                color: "#f2f2f2",
                                fontWeight: 600,
                                "&:hover": {
                                    bgcolor: "#0f3d0f",
                                    color: "#f2f2f2",
                                },
                            }}
                        >
                            Submit
                        </Button>
                    </Grid>
                </Grid>
                <Grid
                    container
                    sx={{
                        bgcolor: "#BDCAB8",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        paddingY: "30px",
                    }}
                >
                    <Grid item xs={12}>
                        <Typography variant="h4" sx={{ color: "#0a290a", fontWeight: 700 }}>
                            DIGITAL CARD HUB{" "}
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography sx={{ color: "#0a290a", fontWeight: 500 }}>
                            Powered by India Buzz
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}