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
  Facebook,
  FacebookOutlined,
  Instagram,
  LinkedIn,
  LocationOn,
  MapSharp,
  Save,
  SaveAlt,
  Share,
  WhatsApp,
} from "@mui/icons-material";
import coverImg from "./ThemeAssets/back.jpg";
import logo from "./ThemeAssets/instagram.png";
import { serverURL } from "../../../../Services/NodeServices";
import { useNavigate } from "react-router-dom";
import ReactPlayer from "react-player";
import bg from "./ThemeAssets/theme6.jpg";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Clock from "react-live-clock";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { postData } from "../../../../Services/NodeServices";
import YouTubeIcon from '@mui/icons-material/YouTube';

export default function Theme3({ data, products, gallery, ecommerce }) {
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
                backgroundColor: "#ffffff",
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
                  color: "#000000",
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
                  bgcolor: "#FFDE59",
                  color: "#000000",
                  fontWeight: 600,
                  border: "1px solid #000000",
                  "&:hover": {
                    bgcolor: "#0CC0DF",
                    color: "#000000",
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
                backgroundColor: "#ffffff",
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
                  color: "#000000",
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
                      color: "#000000",
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
                    color: "#000000",
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
                  bgcolor: "#FFDE59",
                  color: "#000000",
                  fontWeight: 600,
                  border: "1px solid #000000",
                  "&:hover": {
                    bgcolor: "#0CC0DF",
                    color: "#000000",
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
    handleContactUpdate();
  };

  const handleWhatsappUpdate = async () => {
    var formData = new FormData();
    formData.append("_id", data._id);
    formData.append("whatsappClickCount", data.whatsappClickCount + 1);
    var result = await postData(
      "carddetails/updateWhatsappClickCount",
      formData,
      true
    );
  };
  const handleInstaUpdate = async () => {
    var formData = new FormData();
    formData.append("_id", data._id);
    formData.append("instaClickCount", data.whatsappClickCount + 1);
    var result = await postData(
      "carddetails/updateInstaClickCount",
      formData,
      true
    );
  };
  const handleFbUpdate = async () => {
    var formData = new FormData();
    formData.append("_id", data._id);
    formData.append("fbClickCount", data.fbClickCount + 1);
    var result = await postData(
      "carddetails/updateFbClickCount",
      formData,
      true
    );
  };
  const handleLinkdinUpdate = async () => {
    var formData = new FormData();
    formData.append("_id", data._id);
    formData.append("linkdinClickCount", data.linkdinClickCount + 1);
    var result = await postData(
      "carddetails/updateLinkdinClickCount",
      formData,
      true
    );
  };
  const handleContactUpdate = async () => {
    var formData = new FormData();
    formData.append("_id", data._id);
    formData.append("contactDownloadCount", data.contactDownloadCount + 1);
    var result = await postData(
      "carddetails/updateContactDownloadCount",
      formData,
      true
    );
  };

  return (
    <Grid
      style={{
        backgroundColor: "wheat",
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
          width: { xs: "100vw", sm: "70%", md: "37%" },
          height: "100%",
          marginTop: 0,
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
              bgcolor: "#ebebeb",
              color: "#008069",
              fontWeight: 600,
              borderTopRightRadius: 20,
              borderTopLeftRadius: 20,
              borderBottomRightRadius: 20,
              borderBottomLeftRadius: 20,
              "&:hover": {
                bgcolor: "#ebebeb",
                color: "#BDCAB8",
              },
            }}
          >
            <Clock
              format={"h:mm:ssA"}
              ticking={true}
              style={{ color: "#0a290a", fontSize: 15 }}
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
            color: "#0a290a",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {data.cardViewCount} <VisibilityIcon sx={{ color: "#0a290a" }} />
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
              bgcolor: "#ebebeb",
              color: "#0a290a",
              fontWeight: 600,
              borderTopRightRadius: 20,
              borderTopLeftRadius: 20,
              borderBottomRightRadius: 20,
              borderBottomLeftRadius: 20,
              "&:hover": {
                bgcolor: "#ebebeb",
                color: "#000",
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
            color: "#fff",
            backgroundImage: `url('${serverURL}/images/${data.companyCoverImage}')`,
            backgroundSize: "cover",
            width: "100%",
            minHeight: { xs: 200 },
            borderTopRightRadius: 5,
            borderTopLeftRadius: 5,
          }}
        >
          {" "}
        </Grid>
        <Grid
          item
          xs={12}
          md={12}
          sx={{
            color: "#fff",
            bgcolor: "#ebebeb",
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
          >
            {" "}
            <Grid item xs={12} sx={{ marginBottom: 1, marginTop: -10 }}>
              <img
                src={`${serverURL}/images/${data.companylogo}`}
                width={120}
                height={120}
                style={{ borderRadius: "60%", boxShadow: "2px 2px 15px 2px" }}
              />
            </Grid>
            <Grid item xs={12} sx={{ marginBottom: 1, marginTop: -3 }}>
              <Typography
                sx={{
                  fontSize: "1.5rem",
                  fontWeight: 600,
                  color: "#0a290a",
                }}
              >
                {data.fullname}
              </Typography>
            </Grid>
            <Grid item xs={12} sx={{ marginBottom: 1, marginTop: -3 }}>
              <Typography
                sx={{
                  fontSize: "1.0rem",
                  fontWeight: 300,
                  color: "#0a290a",
                }}
              >
                {data.position}
              </Typography>
            </Grid>
            <Grid item xs={12} sx={{ marginBottom: 1, marginTop: -3 }}>
              <Typography
                sx={{
                  fontSize: "1.0rem",
                  fontWeight: 300,
                  color: "#0a290a",
                }}
              >
                {data.phoneNumber}
              </Typography>
            </Grid>
            <Grid item xs={12} sx={{ marginBottom: 1, marginTop: -3 }}>
              <Typography
                sx={{
                  fontSize: "1.0rem",
                  fontWeight: 300,
                  color: "#0a290a",
                }}
              >
                {data.Email}
              </Typography>
            </Grid>
            <Grid item xs={2} md={2}>
              <IconButton
                href={`https://wa.me/+91${data.phoneNumber}?text=`}
                onClick={() => handleWhatsappUpdate()}
                sx={{
                  backgroundColor: "#fff",
                  color: "#000",
                  border: 1,
                  "&:hover": {
                    backgroundColor: "wheat",
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
              }}
            >
              <IconButton
                href={`https://www.instagram.com/${data.igLink}`}
                onClick={() => handleInstaUpdate()}
                sx={{
                  backgroundColor: "#fff",
                  color: "#000",
                  border: 1,
                  "&:hover": {
                    backgroundColor: "wheat",
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
                display: data.Email == "" ? "none" : "flex",
              }}
            >
              <IconButton
                href={`mailto:${data.Email}?body=Query%20About%20Business`}
                sx={{
                  backgroundColor: "#fff",
                  color: "#000",
                  border: 1,
                  "&:hover": {
                    backgroundColor: "wheat",
                  },
                }}
              >
                <EmailIcon sx={{ fontSize: { xs: 25, sm: 35, md: 35 } }} />
              </IconButton>
            </Grid>
            <Grid
              item
              xs={2}
              md={2}
              sx={{
                display: data.phoneNumber == null ? "none" : "flex",
              }}
            >
              <IconButton
                href={`tel:${data.phoneNumber}`}
                sx={{
                  backgroundColor: "#fff",
                  color: "#000",
                  border: 1,
                  "&:hover": {
                    backgroundColor: "wheat",
                  },
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
              }}
            >
              <IconButton
                href={`https://www.facebook.com/${data.fbLink}`}
                onClick={() => handleFbUpdate()}
                sx={{
                  backgroundColor: "#fff",
                  color: "#000",
                  border: 1,
                  "&:hover": {
                    backgroundColor: "wheat",
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
                
              }}
            >
              <IconButton
                href={`https://www.youtube.com/@${data.YoutubeLink}`}
                onClick={()=>handleLinkdinUpdate()}
                sx={{
                  backgroundColor: "#fff",
                  color: "#000",
                  border: 1,
                  "&:hover": {
                    backgroundColor: "wheat",
                  },
                }}
              >
                <YouTubeIcon sx={{ fontSize: { xs: 25, sm: 35, md: 35 } }} />
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
                marginTop: { xs: 4, sm: 4, md: 4 },
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
                    backgroundColor: "wheat",
                    "&:hover": {
                      borderColor: "#000000",
                      backgroundColor: "wheat",
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
                onChange={(e) => handleMessage(e)}
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
              xs={10}
              sx={{
                marginTop: { xs: 4, sm: 4, md: 4 },
                display: "flex",
                justifyContent: "flex-start",
                cursor: "pointer",
              }}
              onClick={() => handleSave()}
            >
              <Button
                fullWidth
                sx={{
                  paddingX: "30px",
                  paddingY: "10px",
                  bgcolor: "#ebebeb",
                  color: "#000000",
                  fontWeight: 600,
                  borderRadius: 2,
                  border: "1px solid #000000",
                  "&:hover": {
                    bgcolor: "wheat",
                    color: "#000000",
                  },
                }}
                onClick={() => handleSave()}
              >
                <SaveAlt />
                &nbsp;&nbsp;&nbsp;Add To Contact
              </Button>
            </Grid>
            <Grid
              item
              xs={10}
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                cursor: "pointer",
              }}
              onClick={() =>
                handleClick(
                  `${data.companyId}`,
                  `https://digitalcardhub.in/#/${data.companyId}`
                )
              }
            >
              <Button
                fullWidth
                sx={{
                  paddingX: "25px",
                  paddingY: "10px",
                  bgcolor: "#ebebeb",
                  color: "#000000",
                  fontWeight: 600,
                  borderRadius: 2,
                  border: "1px solid #000000",
                  "&:hover": {
                    bgcolor: "wheat",
                    color: "#000000",
                  },
                }}
                onClick={() =>
                  handleClick(
                    `${data.companyId}`,
                    `http://digitalcardhub.in/#/${data.companyId}`
                  )
                }
              >
                <Share />
                &nbsp;&nbsp;&nbsp; SHARE YOUR DETAIL
              </Button>
            </Grid>
          </Grid>

          <Grid
            item
            xs={12}
            md={12}
            sx={{ display: data.profile=='false'?'none':"flex", justifyContent: "center", margin: 2 }}
          >
            <Button
              variant="contained"
              sx={{
                borderRadius: 2,
                bgcolor: "wheat",
                color: "#000000",
                fontWeight: 600,
                borderRadius: 2,
                border: "1px solid #000000",
                "&:hover": {
                  bgcolor: "#ebebeb",
                  color: "#000000",
                },
              }}
              onClick={() => setFullCard(!fullCard)}
            >
              {fullCard ? "Show Less" : "Show Full Card"}
            </Button>
          </Grid>
        </Grid>

        <Grid
          item
          xs={12}
          md={12}
          sx={{
            display: fullCard ? "block" : "none",
            color: "#fff",

            backgroundColor: "#ebebeb",
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
              <Typography
                textAlign={"center"}
                sx={{ fontSize: 25, color: "#000" }}
              >
                {" "}
                About Us
              </Typography>
            </Grid>
            <Grid item xs={12} md={12}>
              <Typography sx={{ fontSize: 25, color: "#000" }}>
                {" "}
                Establishment Date : {data.CompanyEstDate}
              </Typography>
            </Grid>
            <Grid item xs={12} md={12}>
              <Typography
                textAlign={"center"}
                sx={{ fontSize: 25, color: "#000" }}
              >
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
            backgroundColor: "#ebebeb",
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
              <Typography
                textAlign={"center"}
                sx={{ fontSize: 25, color: "#000" }}
              >
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
            backgroundColor: "#ebebeb",
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
              <Typography
                textAlign={"center"}
                sx={{ fontSize: 25, color: "#000" }}
              >
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
            backgroundColor: "#ebebeb",
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
              <Typography
                textAlign={"center"}
                sx={{ fontSize: 25, color: "#000" }}
              >
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
            backgroundColor: "#ebebeb",
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
            <Typography
              textAlign={"center"}
              sx={{ fontSize: 25, color: "#000" }}
            >
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
            backgroundColor: "#ebebeb",
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
                  style={{ fontSize: 30, textAlign: "center", color: "#000" }}
                >
                  Payment Info
                </Grid>
                <Grid
                  style={{
                    fontSize: { xs: 10, md: 30 },
                    textAlign: "center",
                    color: "#000",
                  }}
                >
                  -------------------------------
                </Grid>
                <Grid style={{ marginTop: 10 }}>
                  <Typography
                    sx={{
                      display: data.paytmNumber == null ? "none" : "block",
                      color: "#000",
                    }}
                  >
                    Paytm
                  </Typography>
                  <Typography color="#00adef" fontSize={20}>
                    {data.paytmNumber}
                  </Typography>
                  <Typography
                    sx={{
                      display: data.Googlepaynumber == null ? "none" : "block",
                      color: "#000",
                    }}
                  >
                    Google Pay
                  </Typography>
                  <Typography color="#00adef" fontSize={20}>
                    {data.Googlepaynumber}
                  </Typography>
                  <Typography
                    sx={{
                      display: data.phonepenumber == null ? "none" : "block",
                      color: "#000",
                    }}
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
                  style={{ fontSize: 30, textAlign: "center", color: "#000" }}
                >
                  Bank Account Details
                </Grid>
                <Grid
                  style={{
                    fontSize: { xs: 10, md: 30 },
                    textAlign: "center",
                    color: "#000",
                  }}
                >
                  -------------------------------
                </Grid>
                <Grid style={{ marginTop: 10, marginBottom: 20 }}>
                  <Typography
                    sx={{
                      display: data.Accountholdername == "" ? "none" : "block",
                      color: "#000",
                    }}
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
                      color: "#000",
                    }}
                  >
                    Account Number:
                  </Typography>
                  <Typography color="#00adef" fontSize={20}>
                    {data.bankaccountnumber}
                  </Typography>
                  <Typography
                    sx={{
                      display: data.bankifsccode == "" ? "none" : "block",
                      color: "#000",
                    }}
                  >
                    IFSC Code:
                  </Typography>
                  <Typography color="#00adef" fontSize={20}>
                    {data.bankifsccode}
                  </Typography>
                  <Typography
                    sx={{
                      display: data.bankname == "" ? "none" : "block",
                      color: "#000",
                    }}
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
                  style={{ fontSize: 30, textAlign: "center", color: "#000" }}
                >
                  QRs
                </Grid>
                <Grid
                  style={{
                    fontSize: { xs: 10, md: 30 },
                    textAlign: "center",
                    color: "#000",
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
                    <Typography color="#000" fontSize={20}>
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
                    <Typography color="#000" fontSize={20}>
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
                    <Typography color="#000" fontSize={20}>
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
            backgroundColor: "#ebebeb",
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
            <Grid item xs={12} md={12} sx={{ color: "#fff", paddingInline: 0 }}>
              <Grid
                style={{
                  fontSize: 30,
                  textAlign: "center",
                  color: "#000",
                  fontWeight: 700,
                }}
              >
                Contact Us
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
                    color: "#000",
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
                    color: "#000",
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
                    color: "#000",
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
                    color: "#000",
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
                    color: "#000",
                    fontWeight: 600,
                    border: "1px solid #ebebeb",
                    "&:hover": {
                      bgcolor: "#fff",
                      color: "#ebebeb",
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
            backgroundColor: "#ebebeb",
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
            <Grid item xs={12} md={12} style={{ color: "#fff" }}>
              <Grid item xs={12}>
                <Typography
                  variant="h4"
                  sx={{ color: "#000", fontWeight: 700, textAlign: "center" }}
                >
                  DIGITAL CARD HUB{" "}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography
                  sx={{ color: "#000", fontWeight: 500, textAlign: "center" }}
                >
                  Powered by India Buzz
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
