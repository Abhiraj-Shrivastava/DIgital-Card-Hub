import React, { useState } from "react";
import bg from "../Themes/ThemeAssets/theme1back.jpeg";
import { Button, Divider, Grid, TextField, Typography } from "@mui/material";
import theme1 from "../Themes/ThemeAssets/theme.png";
import { useNavigate, useParams } from "react-router-dom";
import { postData, serverURL } from "../../../../Services/NodeServices";
import phoneIcon from "./ThemeAssets/phone number icon.png";
import address from "./ThemeAssets/address icon.png";
import email from "./ThemeAssets/email icon.png";
import website from "./ThemeAssets/website icon.png";
import { InputAdornment } from "@mui/material";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { IconButton } from "@mui/material";
import sendIcon from "./ThemeAssets/sendIcon.png";
import themePage from "./ThemeAssets/theme1page.jpg";
import FacebookIcon from "@mui/icons-material/Facebook";
import Instagram from "./ThemeAssets/instagram.png";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Phone, YouTube, YoutubeSearchedFor } from "@mui/icons-material";
import Saveimg from "./ThemeAssets/save.png";
import Shareimg from "./ThemeAssets/share.png";
import ReactPlayer from "react-player";
import branding from "./ThemeAssets/branding.png";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Clock from "react-live-clock";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { FixedSizeGrid } from "react-window";
import Avatar from "@mui/material/Avatar";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import { useMediaQuery, Box, Paper, useTheme } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { WhatsApp } from "@mui/icons-material";
import InstagramIcon from "@mui/icons-material/Instagram";

const Theme7 = ({ data, products, gallery, ecommerce }) => {
  const navigate = useNavigate();
  const theme = useTheme();
  const UserId = window.localStorage.getItem("userId");
  const [number, setNumber] = React.useState();
  const [href, setHref] = React.useState("");
  const [fullCard, setFullCard] = React.useState(false);
  const mobile = useMediaQuery(theme.breakpoints.down(600));
  const companyId=data.companyId
  const handleMessage = (e) => {
   alert(e.target.value);
    setHref(
      `https://api.whatsapp.com/send?phone=+91${e.target.value}&text=https://digitalcardhub.in/%23/${data.companyId}`
      // `https://wa.me/+91${e.target.value}?text=https://digitalcardhub.in/#/${data.companyId}`
    );
  };
  React.useEffect(()=>{
    const section = document.getElementById("hero");
    section.scrollIntoView({ behavior: 'instant' });
  },[])
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
      if (item != null) {
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
                  bgcolor: "#008069",
                  color: "#f2f2f2",
                  fontWeight: 600,
                  "&:hover": {
                    bgcolor: "#008069",
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
        );
      }
    });
  };

  const Ecommerce = () => {
    return ecommerce.map((item) => {
      if (item != null) {
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
                  bgcolor: "#008069",
                  color: "#f2f2f2",
                  fontWeight: 600,
                  "&:hover": {
                    bgcolor: "#008069",
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
        );
      }
    });
  };

  const Gallery = () => {
    return gallery.map((item) => {
      if (item != null) {
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
        );
      }
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
  };

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
      <Grid
        container
        spacing={2}
        sx={{
          width: { xs: "100%", sm: "70%", md: "37%" },
          height: "100%",
          marginTop: 0,
          position: "relative",
          marginLeft: 0.3,
        }}
      >
        <Grid
          item
          xs={4}
          md={3.5}
          sx={{
            display: "flex",
            justifyContent: "center",
            margin: 1,
            marginTop: -1,
          }}
        >
          <Button
            variant="contained"
            sx={{
              bgcolor: "#008069",
              color: "#fff",
              fontWeight: 600,
              borderTopRightRadius: 20,
              borderTopLeftRadius: 20,
              borderBottomRightRadius: 20,
              borderBottomLeftRadius: 20,
              "&:hover": {
                bgcolor: "#008069",
                color: "#fff",
              },
            }}
          >
            <Clock
              format={"h:mm:ssA"}
              ticking={true}
              style={{ color: "#fff", fontSize: 15 }}
              timezone={"Asia/Calcutta"}
            />
          </Button>
        </Grid>
        <Grid
          item
          xs={2}
          md={3.5}
          sx={{
            display: "flex",
            justifyContent: "center",
            margin: 1,
            marginTop: -1,
            color: "white",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {data.cardViewCount} <VisibilityIcon sx={{ color: "white" }} />
        </Grid>
        <Grid
          item
          xs={4}
          md={3.5}
          sx={{
            display: "flex",
            justifyContent: "center",
            margin: 1,
            marginTop: -1,
          }}
        >
          <Button
            variant="contained"
            sx={{
              bgcolor: "#008069",
              color: "#fff",
              fontWeight: 600,
              borderTopRightRadius: 20,
              borderTopLeftRadius: 20,
              borderBottomRightRadius: 20,
              borderBottomLeftRadius: 20,
              "&:hover": {
                bgcolor: "#008069",
                color: "#fff",
              },
            }}
            onClick={() => navigate("/digitalcardlogin")}
          >
            {data.customerId == UserId ? "Login" : "Create Now"}
          </Button>
        </Grid>
        <Grid
        id="hero"
          item
          xs={12}
          md={12}
          sx={{
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            bgcolor: "#008069",
            width: "100%",
            height: 130,
          }}
        >
          <Grid
            container
            spacing={2}
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <Grid item xs={6} md={6}>
              <Typography
                sx={{
                  textAlign: "center",
                  fontSize: { xs: 20, md: 30 },
                  fontWeight: 600,
                  color: "white",
                }}
              >
                {data.fullname}
              </Typography>
            </Grid>
            <Grid
              item
              xs={3}
              md={3}
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "row",
              }}
            >
              <IconButton
                href={`https://wa.me/+91${data.phoneNumber}?text=`}
                sx={{
                  backgroundColor: "#fff",
                  color: "#008069",
                  border: 1,
                  "&:hover": {
                    backgroundColor: "#fff",
                  },
                  height: 54,
                  width: 54,
                  mr: 1,
                  ml: { xs: -10, md: 0, sm: 0 },
                }}
                variant="outlined"
              >
                <WhatsAppIcon sx={{ fontSize: { xs: 25, sm: 35, md: 35 } }} />
              </IconButton>

              <Avatar
                src={`${serverURL}/images/${data.companylogo}`}
                sx={{ height: 54, width: 54 }}
              ></Avatar>
            </Grid>
          </Grid>
          <Grid
            container
            spacing={2}
            sx={{ display: "flex", justifyContent: "space-between", mt: 1 }}
          >
            <Grid item xs={3} md={3}>
              <CameraAltIcon
                sx={{
                  fontSize: { xs: 40, sm: 40, md: 40 },
                  color: "#d5d1d1",
                  mt: -1,
                }}
              />
            </Grid>
            <Grid
              item
              xs={3}
              md={3}
              sx={{
                borderBottom: fullCard ? 0 : 4,
                borderBottomColor: "white",
              }}
            >
              <Typography color={"white"} fontWeight={600} textAlign={"center"}>
                Profile
              </Typography>
            </Grid>
            <Grid
              item
              xs={3}
              md={3}
              sx={{
                borderBottom: fullCard ? 4 : 0,
                borderBottomColor: "white",
              }}
            >
              <Typography color={"white"} fontWeight={600} textAlign={"center"}>
                Business
              </Typography>
            </Grid>
            <Grid item xs={3} md={3}>
              <Typography color={"white"} fontWeight={600} textAlign={"center"}>
                Calls
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          item
          xs={12}
          md={12}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            bgcolor: "#fff",
            width: "100%",
            minHeight: { xs: 650, sm: 650, md: 650 },
          }}
        >
          <Grid
            container
            spacing={2}
            sx={{ display: "flex", justifyContent: "space-between", mt: -2 }}
          >
            <Grid item xs={12} md={12}>
              <Typography
                color={"black"}
                fontWeight={600}
                textAlign={"center"}
                fontSize={30}
              >
                {data.fullname}
              </Typography>
            </Grid>
            <Grid item xs={12} md={12} sx={{ marginTop: -3 }}>
              <Typography color={"black"} textAlign={"center"} fontSize={18}>
                {data.position}
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              md={12}
              sx={{ marginTop: -1, display: "flex", justifyContent: "center" }}
            >
              <Divider sx={{ width: 150 }} />
            </Grid>
          </Grid>
          <Grid
            container
            spacing={2}
            sx={{ display: "flex", justifyContent: "space-between", mt: 1 }}
          >
            <Grid
              item
              xs={12}
              md={12}
              sx={{ display: "flex", justifyContent: "center", mt: -5 }}
            >
              <IconButton
                href={`tel:${data.phoneNumber}`}
                sx={{
                  backgroundColor: "#008069",
                  color: "#fff",
                  border: 1,
                  "&:hover": {
                    backgroundColor: "#008069",
                  },
                }}
              >
                <CallIcon sx={{ fontSize: { xs: 25, sm: 35, md: 35 } }} />
              </IconButton>
            </Grid>
            <Grid item xs={12} md={12} sx={{ marginTop: -1 }}>
              <Typography color={"black"} textAlign={"center"} fontSize={18}>
                +91 {data.phoneNumber}
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              md={12}
              sx={{ marginTop: -1, display: "flex", justifyContent: "center" }}
            >
              <Divider sx={{ width: 150 }} />
            </Grid>
          </Grid>
          <Grid
            container
            spacing={2}
            sx={{ display: "flex", justifyContent: "space-between", mt: 1 }}
          >
            <Grid
              item
              xs={12}
              md={12}
              sx={{ display: "flex", justifyContent: "center", mt: -5 }}
            >
              <IconButton
                href={`mailto:${data.Email}?body=Query%20About%20Business`}
                sx={{
                  backgroundColor: "#008069",
                  color: "#fff",
                  border: 1,
                  "&:hover": {
                    backgroundColor: "#008069",
                  },
                }}
              >
                <EmailIcon sx={{ fontSize: { xs: 25, sm: 35, md: 35 } }} />
              </IconButton>
            </Grid>
            <Grid item xs={12} md={12} sx={{ marginTop: -1 }}>
              <Typography color={"black"} textAlign={"center"} fontSize={18}>
                {data.Email}
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              md={12}
              sx={{ marginTop: -1, display: "flex", justifyContent: "center" }}
            >
              <Divider sx={{ width: 150 }} />
            </Grid>
          </Grid>
          <Grid
            container
            spacing={2}
            sx={{ display: "flex", justifyContent: "space-between", mt: 1 }}
          >
            <Grid
              item
              xs={12}
              md={12}
              sx={{ display: "flex", justifyContent: "center", mt: -5 }}
            >
              <IconButton
                href={`${data.GoogleMapLink}`}
                sx={{
                  backgroundColor: "#008069",
                  color: "#fff",
                  border: 1,
                  "&:hover": {
                    backgroundColor: "#008069",
                  },
                }}
              >
                <LocationOnIcon sx={{ fontSize: { xs: 25, sm: 35, md: 35 } }} />
              </IconButton>
            </Grid>
            <Grid item xs={12} md={12} sx={{ marginTop: -1 }}>
              <Typography color={"black"} textAlign={"center"} fontSize={18}>
                {data.Address}
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              md={12}
              sx={{ marginTop: -1, display: "flex", justifyContent: "center" }}
            >
              <Divider sx={{ width: 150 }} />
            </Grid>
          </Grid>
          <Grid
            container
            spacing={2}
            sx={{ display: "flex", justifyContent: "space-around" }}
          >
            <Grid
              item
              xs={2}
              md={2}
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <IconButton
                href={`https://wa.me/+91${data.phoneNumber}?text=`}
                sx={{
                  backgroundColor: "#fff",
                  color: "#008069",
                  border: 1,
                  "&:hover": {
                    backgroundColor: "white",
                  },
                }}
                variant="outlined"
              >
                <WhatsAppIcon sx={{ fontSize: { xs: 25, sm: 35, md: 35 } }} />
              </IconButton>
            </Grid>
            <Grid
              item
              xs={2}
              md={2}
              sx={{
                display: data.igLink == "" ? "none" : "flex",
                justifyContent: "center",
              }}
            >
              <IconButton
                href={`https://www.instagram.com/${data.igLink}`}
                sx={{
                  backgroundColor: "#fff",
                  color: "#008069",
                  border: 1,
                  "&:hover": {
                    backgroundColor: "white",
                  },
                }}
              >
                <InstagramIcon sx={{ fontSize: { xs: 25, sm: 35, md: 35 } }} />
              </IconButton>
            </Grid>

            <Grid
              item
              xs={2}
              md={2}
              sx={{
                display: data.phoneNumber == null ? "none" : "flex",
                justifyContent: "center",
              }}
            >
              <IconButton
                href={`tel:${data.phoneNumber}`}
                sx={{
                  backgroundColor: "#fff",
                  color: "#008069",
                  border: 1,
                  "&:hover": { backgroundColor: "white" },
                }}
              >
                <CallIcon sx={{ fontSize: { xs: 25, sm: 35, md: 35 } }} />
              </IconButton>
            </Grid>
            <Grid
              item
              xs={2}
              md={2}
              sx={{
                display: data.fbLink == "" ? "none" : "flex",
                justifyContent: "center",
              }}
            >
              <IconButton
                href={`https://www.facebook.com/${data.fbLink}`}
                sx={{
                  backgroundColor: "#fff",
                  color: "#008069",
                  border: 1,
                  "&:hover": {
                    backgroundColor: "white",
                  },
                }}
              >
                <FacebookIcon sx={{ fontSize: { xs: 25, sm: 35, md: 35 } }} />
              </IconButton>
            </Grid>
            <Grid
              item
              xs={2}
              md={2}
              sx={{
                display: data.YoutubeLink == "" ? "none" : "flex",
                justifyContent: "center",
              }}
            >
              <IconButton
href={`https://www.youtube.com/@${data.YoutubeLink}`}
                sx={{
                  backgroundColor: "#fff",
                  color: "#008069",
                  border: 1,
                  "&:hover": {
                    backgroundColor: "white",
                  },
                }}
              >
                <YouTube sx={{ fontSize: { xs: 25, sm: 35, md: 35 } }} />
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
                margin: { xs: 2, sm: 2, md: 2 },
                fontSize: 25,
                textAlign: "center",
              }}
            >
              <TextField
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "&:hover fieldset": {
                      borderColor: "#000000", // Outline color when hovering
                    },

                    "&.Mui-focused fieldset": {
                      borderColor: "#000000", // Outline color when focused
                    },
                  },

                  "& label": {
                    paddingLeft: (theme) => theme.spacing(2),
                    color: "#000000",
                    "&.Mui-focused": {
                      color: "#000000", // Change label color when focused
                    },
                  },
                  "& input": {
                    paddingLeft: (theme) => theme.spacing(0),
                    color: "#000000",
                    zIndex: 1,
                  },

                  "& fieldset": {
                    paddingLeft: (theme) => theme.spacing(2.5),
                    borderRadius: "15px",
                    backgroundColor: "white",
                    "&:hover": {
                      borderColor: "#000000",
                      backgroundColor: "white",
                    },
                  },
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Typography
                        sx={{
                          textAlign: "center",
                          color: "#000000",
                          zIndex: 1,
                        }}
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
                          borderRadius: 15,
                          zIndex: 1,
                          color: "white",
                          cursor: "pointer",
                          fontSize: "1.1rem",
                          backgroundColor: "#008069",
                        }}
                        href={href}
                       
                      >
                        Send&nbsp;
                        <WhatsApp />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                
                onChange={(e) => handleMessage(e)}
              />
            </Grid>
            <Grid
              item
              xs={12}
              md={12}
              sx={{ display: data.profile=='false'?'none':"flex", justifyContent: "center", margin: 1 }}
            >
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#008069",
                  "&:hover": {
                    backgroundColor: "#008069",
                  },
                }}
                onClick={() => setFullCard(!fullCard)}
              >
                {fullCard ? "Show Less" : "Show Full Card"}
              </Button>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          item
          xs={12}
          md={12}
          sx={{
            display: fullCard ? "block" : "none",
            color: "#fff",

            backgroundColor: "#008069",
            width: "100%",
            minHeight: { xs: "auto", sm: "auto", md: "auto" },
            marginTop: 2,
          }}
        >
          <Grid
            container
            spacing={2}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Grid item xs={12} md={12}>
              <Typography textAlign={"center"} sx={{ fontSize: 25 }}>
                {" "}
                About Us
              </Typography>
            </Grid>
            <Grid item xs={12} md={12}>
              <Typography sx={{ fontSize: 25 }}>
                {" "}
                Establishment Date : {data.CompanyEstDate}
              </Typography>
            </Grid>
            <Grid item xs={12} md={12}>
              <Typography textAlign={"center"} sx={{ fontSize: 25 }}>
                {" "}
                {data.AboutUs}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          md={12}
          sx={{
            display: products.length != 0 && fullCard ? "block" : "none",
            color: "#fff",
            backgroundColor: "#008069",
            width: "100%",
            minHeight: { xs: "auto", sm: "100%", md: "auto" },
            marginTop: 2,
          }}
        >
          <Grid
            container
            spacing={2}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: 2,
            }}
          >
            <Grid item xs={12} md={12}>
              <Typography textAlign={"center"} sx={{ fontSize: 25 }}>
                {" "}
                Our Products and Services
              </Typography>
            </Grid>
            <Products />
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          md={12}
          sx={{
            display: ecommerce.length != 0 && fullCard ? "block" : "none",
            color: "#fff",
            backgroundImage: `url('${themePage}')`,
            backgroundSize: "cover",
            width: "100%",
            minHeight: { xs: "auto", sm: "100%", md: "auto" },
            marginTop: 2,
          }}
        >
          <Grid
            container
            spacing={2}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: 2,
            }}
          >
            <Grid item xs={12} md={12}>
              <Typography textAlign={"center"} sx={{ fontSize: 25 }}>
                Buy Our Product Now
              </Typography>
            </Grid>
            <Ecommerce />
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          md={12}
          sx={{
            display: gallery.length != 0 && fullCard ? "block" : "none",
            color: "#fff",
            backgroundColor: "#008069",
            width: "100%",
            minHeight: { xs: "auto", sm: "100%", md: "auto" },
            marginTop: 2,
          }}
        >
          <Grid
            container
            spacing={2}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: 2,
            }}
          >
            <Grid item xs={12} md={12}>
              <Typography textAlign={"center"} sx={{ fontSize: 25 }}>
                Our Gallery
              </Typography>
            </Grid>
            <Gallery />
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          md={12}
          sx={{
            display:
              (data.YoutubeVideoLink1 != "" ||
                data.YoutubeVideoLink2 != "" ||
                data.YoutubeVideoLink3 != "" ||
                data.YoutubeVideoLink4 != "" ||
                data.YoutubeVideoLink5 != "") &&
              fullCard
                ? "block"
                : "none",
            color: "#fff",
            backgroundColor: "#008069",
            width: "100%",
            minHeight: { xs: "auto", sm: "100%", md: "auto" },
            marginTop: 2,
          }}
        >
          <Grid
            container
            spacing={2}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: 2,
            }}
          >
            <Typography textAlign={"center"} sx={{ fontSize: 25 }}>
              See Our Videos
            </Typography>
            <Grid
              item
              xs={11}
              md={11}
              style={{
                margin: 10,
                display: data.YoutubeVideoLink1 == "" ? "none" : "flex",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <Grid
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                }}
              >
                <ReactPlayer height="300px" url={data.YoutubeVideoLink1} />
              </Grid>
            </Grid>
            <Grid
              item
              xs={11}
              md={11}
              style={{
                margin: 10,
                display: data.YoutubeVideoLink2 == "" ? "none" : "flex",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <Grid
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                }}
              >
                <ReactPlayer height="300px" url={data.YoutubeVideoLink2} />
              </Grid>
            </Grid>
            <Grid
              item
              xs={11}
              md={11}
              style={{
                margin: 10,
                display: data.YoutubeVideoLink3 == "" ? "none" : "flex",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <Grid
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                }}
              >
                <ReactPlayer height="300px" url={data.YoutubeVideoLink3} />
              </Grid>
            </Grid>
            <Grid
              item
              xs={11}
              md={11}
              style={{
                margin: 10,
                display: data.YoutubeVideoLink4 == "" ? "none" : "flex",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <Grid
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                }}
              >
                <ReactPlayer height="300px" url={data.YoutubeVideoLink4} />
              </Grid>
            </Grid>
            <Grid
              item
              xs={11}
              md={11}
              style={{
                margin: 10,
                display: data.YoutubeVideoLink5 == "" ? "none" : "flex",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <Grid
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                }}
              >
                <ReactPlayer height="300px" url={data.YoutubeVideoLink5} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          item
          xs={12}
          md={12}
          sx={{
            display: fullCard ? "flex" : "none",
            color: "#fff",
            backgroundColor: "#008069",
            width: "100%",
            minHeight: { xs: "auto", sm: "100%", md: "auto" },
            marginTop: 2,
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
          }}
        >
          <Grid
            container
            spacing={2}
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
                      : "block",
                }}
              >
                <Grid
                  style={{ fontSize: 30, textAlign: "center", color: "white" }}
                >
                  Payment Info
                </Grid>
                <Grid
                  style={{
                    fontSize: { xs: 10, md: 30 },
                    textAlign: "center",
                    color: "white",
                  }}
                >
                  -------------------------------
                </Grid>
                <Grid style={{ marginTop: 10 }}>
                  <Typography
                    sx={{
                      display: data.paytmNumber == null ? "none" : "block",
                    }}
                    color="white"
                  >
                    Paytm
                  </Typography>
                  <Typography color="#00adef" fontSize={20}>
                    {data.paytmNumber}
                  </Typography>
                  <Typography
                    sx={{
                      display: data.Googlepaynumber == null ? "none" : "block",
                    }}
                    color="white"
                  >
                    Google Pay
                  </Typography>
                  <Typography color="#00adef" fontSize={20}>
                    {data.Googlepaynumber}
                  </Typography>
                  <Typography
                    sx={{
                      display: data.phonepenumber == null ? "none" : "block",
                    }}
                    color="white"
                  >
                    PhonePe
                  </Typography>
                  <Typography color="#00adef" fontSize={20}>
                    {data.phonepenumber}
                  </Typography>
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
                      : "block",
                }}
              >
                <Grid
                  style={{ fontSize: 30, textAlign: "center", color: "white" }}
                >
                  Bank Account Details
                </Grid>
                <Grid
                  style={{
                    fontSize: { xs: 10, md: 30 },
                    textAlign: "center",
                    color: "white",
                  }}
                >
                  -------------------------------
                </Grid>
                <Grid style={{ marginTop: 10, marginBottom: 20 }}>
                  <Typography
                    sx={{
                      display: data.Accountholdername == "" ? "none" : "block",
                    }}
                    color="white"
                  >
                    Name:
                  </Typography>
                  <Typography color="#00adef" fontSize={20}>
                    {data.Accountholdername}
                  </Typography>
                  <Typography
                    sx={{
                      display:
                        data.bankaccountnumber == null ? "none" : "block",
                    }}
                    color="white"
                  >
                    Account Number:
                  </Typography>
                  <Typography color="#00adef" fontSize={20}>
                    {data.bankaccountnumber}
                  </Typography>
                  <Typography
                    sx={{ display: data.bankifsccode == "" ? "none" : "block" }}
                    color="white"
                  >
                    IFSC Code:
                  </Typography>
                  <Typography color="#00adef" fontSize={20}>
                    {data.bankifsccode}
                  </Typography>
                  <Typography
                    sx={{ display: data.bankname == "" ? "none" : "block" }}
                    color="white"
                  >
                    Bank Name:
                  </Typography>
                  <Typography color="#00adef" fontSize={20}>
                    {data.bankname}
                  </Typography>
                </Grid>
              </Grid>
              <Grid
                sx={{
                  display:
                    data.paytmQrimage == "" &&
                    data.phonepeQrimage == "" &&
                    data.googlepayQrimage == ""
                      ? "none"
                      : "block",
                }}
              >
                <Grid
                  style={{ fontSize: 30, textAlign: "center", color: "white" }}
                >
                  QRs
                </Grid>
                <Grid
                  style={{
                    fontSize: { xs: 10, md: 30 },
                    textAlign: "center",
                    color: "white",
                  }}
                >
                  -------------------------------
                </Grid>
                <Grid
                  container
                  spacing={2}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <Grid
                    item
                    xs={5}
                    sx={{ display: data.paytmQrimage == "" ? "none" : "block" }}
                  >
                    <Typography color="#00adef" fontSize={20}>
                      Paytm Qr
                    </Typography>

                    <img
                      src={`${serverURL}/images/${data.paytmQrimage}`}
                      width={"100%"}
                    />
                  </Grid>
                  <Grid
                    item
                    xs={5}
                    sx={{
                      display: data.phonepeQrimage == "" ? "none" : "block",
                    }}
                  >
                    <Typography color="#00adef" fontSize={20}>
                      Phone Pe Qr
                    </Typography>
                    <img
                      src={`${serverURL}/images/${data.phonepeQrimage}`}
                      width={"100%"}
                    />
                  </Grid>
                  <Grid
                    item
                    xs={5}
                    sx={{
                      display: data.googlepayQrimage == "" ? "none" : "block",
                    }}
                  >
                    <Typography color="#00adef" fontSize={20}>
                      Google Pay Qr
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
          item
          xs={12}
          md={12}
          sx={{
            display: fullCard ? "block" : "none",
            color: "#fff",
            backgroundColor: "#008069",
            width: "100%",
            minHeight: { xs: 650, sm: "100%", md: "auto" },
            marginTop: 2,
          }}
        >
          <Grid
            container
            spacing={2}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: 2,
            }}
          >
            <Grid item xs={12} md={12} style={{ color: "#fff" }}>
              <Grid
                style={{ fontSize: 30, textAlign: "center", color: "white" }}
              >
                Contact Us
              </Grid>
              <Grid
                style={{
                  fontSize: { xs: 10, md: 30 },
                  textAlign: "center",
                  color: "white",
                }}
              >
                -------------------------------
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
                    color: "#fff",
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
                        borderColor: "#EBD8B2", // Outline color when hovering
                      },

                      "&.Mui-focused fieldset": {
                        borderColor: "#EBD8B2", // Outline color when focused
                      },
                    },

                    "& label": {
                      paddingLeft: (theme) => theme.spacing(2),
                      color: "#654E92",
                      "&.Mui-focused": {
                        color: "#654E92", // Change label color when focused
                      },
                    },
                    "& input": {
                      paddingLeft: (theme) => theme.spacing(0),
                      color: "#000000",
                      zIndex: 1,
                    },

                    "& fieldset": {
                      paddingLeft: (theme) => theme.spacing(2.5),
                      borderRadius: 2,
                      backgroundColor: "#fff",
                      "&:hover": {
                        borderColor: "#EBD8B2",
                      },
                    },
                    mb: "10px",
                    color: "#654E92",
                  }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Typography
                          sx={{ color: "#654E92", zIndex: 1 }}
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
                    color: "#fff",
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
                        borderColor: "#EBD8B2", // Outline color when hovering
                      },

                      "&.Mui-focused fieldset": {
                        borderColor: "#EBD8B2", // Outline color when focused
                      },
                    },

                    "& label": {
                      paddingLeft: (theme) => theme.spacing(2),
                      color: "#D24A61",
                      "&.Mui-focused": {
                        color: "#EBD8B2", // Change label color when focused
                      },
                    },
                    "& input": {
                      paddingLeft: (theme) => theme.spacing(0),
                      color: "#000000",
                      zIndex: 1,
                    },

                    "& fieldset": {
                      paddingLeft: (theme) => theme.spacing(2.5),
                      borderRadius: 2,
                      backgroundColor: "#fff",
                      "&:hover": {
                        borderColor: "#EBD8B2",
                      },
                    },
                    mb: "10px",
                  }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Typography
                          sx={{ color: "#654E92", zIndex: 1 }}
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
                    color: "#fff",
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
                        borderColor: "#EBD8B2", // Outline color when hovering
                      },

                      "&.Mui-focused fieldset": {
                        borderColor: "#EBD8B2", // Outline color when focused
                      },
                    },

                    "& label": {
                      paddingLeft: (theme) => theme.spacing(2),
                      color: "#D24A61",
                      "&.Mui-focused": {
                        color: "#EBD8B2", // Change label color when focused
                      },
                    },
                    "& input": {
                      paddingLeft: (theme) => theme.spacing(0),
                      color: "#000000",
                      zIndex: 1,
                    },

                    "& fieldset": {
                      paddingLeft: (theme) => theme.spacing(2.5),
                      borderRadius: 2,
                      backgroundColor: "#fff",
                      "&:hover": {
                        borderColor: "#EBD8B2",
                      },
                    },
                    mb: "10px",
                  }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Typography
                          sx={{ color: "#654E92", zIndex: 1 }}
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
                    color: "#fff",
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
                        borderColor: "#EBD8B2", // Outline color when hovering
                      },

                      "&.Mui-focused fieldset": {
                        borderColor: "#EBD8B2", // Outline color when focused
                      },
                    },

                    "& label": {
                      paddingLeft: (theme) => theme.spacing(2),
                      color: "#D24A61",
                      "&.Mui-focused": {
                        color: "#EBD8B2", // Change label color when focused
                      },
                    },
                    "& input": {
                      paddingLeft: (theme) => theme.spacing(0),
                      color: "#000000",
                      zIndex: 1,
                    },

                    "& fieldset": {
                      paddingLeft: (theme) => theme.spacing(2.5),
                      borderRadius: 2,
                      backgroundColor: "#fff",
                      "&:hover": {
                        borderColor: "#EBD8B2",
                      },
                    },
                    mb: "10px",
                  }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Typography
                          sx={{ color: "#654E92", zIndex: 1 }}
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
                    bgcolor: "#fff",
                    color: "#004a89",
                    fontWeight: 600,
                    border: "1px solid #004a89",
                    "&:hover": {
                      bgcolor: "#fff",
                      color: "#004a89",
                    },
                  }}
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          md={12}
          sx={{
            color: "#fff",
            backgroundColor: "#008069",
            width: "100%",
            minHeight: { xs: "auto", sm: "auto", md: "auto" },
            marginTop: 2,
          }}
        >
          <Grid
            container
            spacing={2}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: 2,
            }}
          >
            <Grid item xs={12} md={12} style={{ color: "#fff" }}>
              <Grid
                style={{ fontSize: 30, textAlign: "center", color: "white" }}
              >
                <img src={branding} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Theme7;
