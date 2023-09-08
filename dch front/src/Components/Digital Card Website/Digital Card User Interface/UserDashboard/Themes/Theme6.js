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
  YouTube,
} from "@mui/icons-material";
import coverImg from "./ThemeAssets/back.jpg";
import logo from "./ThemeAssets/instagram.png";
import { serverURL } from "../../../../Services/NodeServices";
import { useNavigate } from "react-router-dom";
import ReactPlayer from "react-player";
import bg from "./ThemeAssets/theme6.jpg";
import Clock from "react-live-clock";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { postData } from "../../../../Services/NodeServices";

export default function Theme6({ data, products, gallery, ecommerce }) {
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
  React.useEffect(()=>{
    const section = document.getElementById("hero");
    section.scrollIntoView({ behavior: 'instant' });
  },[])
  return (
    <Box>
      <Container
        maxWidth="sm"
        sx={{
          display: "flex",
          // justifyContent: "center",
          // alignItems: "center",
          flexDirection: "column",
          p: 0,
        }}
      >
        {" "}
        <Grid container spacing={2} sx={{ mt: 1 }}>
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
                backgroundImage: `linear-gradient(to left,#FFDE59,#0CC0DF)`,

                color: "#008069",
                fontWeight: 600,
                borderTopRightRadius: 20,
                borderTopLeftRadius: 20,
                borderBottomRightRadius: 20,
                borderBottomLeftRadius: 20,
                "&:hover": {
                  backgroundImage: `linear-gradient(to left,#FFDE59,#0CC0DF)`,

                  color: "#BDCAB8",
                },
              }}
            >
              <Clock
                format={"h:mm:ssA"}
                ticking={true}
                style={{ color: "#000", fontSize: 15 }}
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
                backgroundImage: `linear-gradient(to left,#FFDE59,#0CC0DF)`,

                color: "#000",
                fontWeight: 600,
                borderTopRightRadius: 20,
                borderTopLeftRadius: 20,
                borderBottomRightRadius: 20,
                borderBottomLeftRadius: 20,
                "&:hover": {
                  backgroundImage: `linear-gradient(to left,#FFDE59,#0CC0DF)`,

                  color: "#000",
                },
              }}
              onClick={() => navigate("/digitalcardlogin")}
            >
              {data.customerId == UserId ? "Login" : "Create Now"}
            </Button>
          </Grid>
        </Grid>
        
        <img
          id="hero"
          src={`${serverURL}/images/${data.companyCoverImage}`}
          width={"100%"}
          style={{ maxHeight: 300,marginTop:12 }}
        />
        <Box
          sx={{
            backgroundImage: `url(${bg})`,
            backgroundSize: "cover",
            width: "100%",
            mt: "-10px",
            display: "flex",
            flexDirection: "column",
            position: "relative",
            top: mobile ? "-10vh" : tablet ? "-12vh" : "-15vh",
          }}
        >
          <img
            src={`${serverURL}/images/${data.companylogo}`}
            width={120}
            height={120}
            style={{
              borderRadius: 100,
              border: "5px solid #FFDE59",
              position: "relative",
              top: mobile ? "-7vh" : tablet ? "-7.5vh" : "-12vh",
              left: mobile ? "" : tablet ? "" : "2vw",
            }}
          />
          <Grid container>
            <Grid
              item
              xs={12}
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "flex-end",
                position: "relative",
                top: mobile ? "-7vh" : tablet ? "-7.5vh" : "-12vh",
                mt:-1
              }}
            >
              <Paper
                sx={{
                  bgcolor: "#FFDE59",
                  color: "#000000",
                  paddingX: "20px",
                  paddingY: "4px",
                  pr: "80px",
                  fontSize: mobile ? "1.5rem" : "1.8rem",
                  fontWeight: 600,
                  borderTopLeftRadius: 30,
                  borderTopRighttRadius: 0,
                  borderBottomLeftRadius: 30,
                  borderBottomRightRadius: 0,
                }}
              >
                {data.fullname}
              </Paper>
            </Grid>
            <Grid
              item
              xs={12}
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "flex-end",
                position: "relative",
                top: mobile ? "-7vh" : tablet ? "-7.5vh" : "-12vh",
                mt: "1vh",
              }}
            >
              <Paper
                sx={{
                  bgcolor: "#FFDE59",
                  color: "#000000",
                  paddingX: "20px",
                  paddingY: "4px",
                  pr: "80px",
                  fontSize: mobile ? "1.1rem" : "1.3rem",
                  fontWeight: 500,
                  borderTopLeftRadius: 30,
                  borderTopRighttRadius: 0,
                  borderBottomLeftRadius: 30,
                  borderBottomRightRadius: 0,
                }}
              >
                {data.position}
              </Paper>
            </Grid>
            <Grid
              item
              xs={2}
              sx={{
                display: data.fbLink == "" ? "none" : "flex",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                position: "relative",
                top: mobile ? "-7vh" : tablet ? "-7.5vh" : "-12vh",
                mt: "1vh",
              }}
            >
              <a href={`https://www.facebook.com/${data.fbLink}`} onClick={() => handleFbUpdate()}>
                <Paper
                  href={`https://www.facebook.com/${data.fbLink}`}
                  sx={{
                    bgcolor: "#FFDE59",
                    color: "#000000",
                    paddingX: "20px",
                    paddingY: "4px",
                    fontSize: "1.3rem",
                    fontWeight: 500,
                    borderRadius: "0px 30px 30px 0px",
                  }}
                >
                  <Facebook sx={{ fontSize: "1.7rem" }} />
                </Paper>
              </a>
            </Grid>
            <Grid
              item
              xs={10}
              sx={{
                display: data.fbLink == "" ? "none" : "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
                textAlign: "left",
                top: mobile ? "-7vh" : tablet ? "-7.5vh" : "-12vh",
                mt: "1vh",
              }}
            >
              <a
                href={`https://www.facebook.com/${data.fbLink}`}
                style={{ textDecoration: "none", color: "black" }}
                onClick={() => handleFbUpdate()}
              >
                <Typography
                  sx={{
                    fontSize: mobile ? "1.1rem" : "1.4rem",
                    fontWeight: 600,
                    textAlign: "left",
                  }}
                >
                  FaceBook
                </Typography>
              </a>
            </Grid>
            <Grid
              item
              xs={2}
              sx={{
                display: data.igLink == "" ? "none" : "flex",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                position: "relative",
                top: mobile ? "-7vh" : tablet ? "-7.5vh" : "-12vh",
                mt: "1vh",
              }}
            >
              <a href={`https://www.instagram.com/${data.igLink}`} onClick={() => handleInstaUpdate()}>
                <Paper
                  sx={{
                    bgcolor: "#FFDE59",
                    color: "#000000",
                    paddingX: "20px",
                    paddingY: "4px",
                    fontSize: "1.3rem",
                    fontWeight: 500,
                    cursor: "pointer",
                    borderRadius: "0px 30px 30px 0px",
                  }}
                >
                  <Instagram sx={{ fontSize: "1.7rem" }} />
                </Paper>{" "}
              </a>
            </Grid>
            <Grid
              item
              xs={10}
              sx={{
                display: data.igLink == "" ? "none" : "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
                textAlign: "left",
                top: mobile ? "-7vh" : tablet ? "-7.5vh" : "-12vh",
                mt: "1vh",
              }}
            >
              <a
                href={`https://www.instagram.com/${data.igLink}`}
                style={{ textDecoration: "none", color: "black" }}
                onClick={() => handleInstaUpdate()}
              >
                <Typography
                  sx={{
                    fontSize: mobile ? "1.1rem" : "1.4rem",
                    fontWeight: 600,
                    textAlign: "left",
                  }}
                >
                  Instagram
                </Typography>
              </a>
            </Grid>

            <Grid
              item
              xs={2}
              sx={{
                display: data.LinkdnLink == "" ? "none" : "flex",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                position: "relative",
                top: mobile ? "-7vh" : tablet ? "-7.5vh" : "-12vh",
                mt: "1vh",
              }}
            >
              <a href={`https://www.linkedin.com/in/${data.LinkdnLink}`} onClick={() => handleLinkdinUpdate()}>
                <Paper
                  href={`https://www.linkedin.com/in/${data.LinkdnLink}`}
                  sx={{
                    bgcolor: "#FFDE59",
                    color: "#000000",
                    paddingX: "20px",
                    paddingY: "4px",
                    fontSize: "1.3rem",
                    fontWeight: 500,
                    borderRadius: "0px 30px 30px 0px",
                  }}
                >
                  <LinkedIn sx={{ fontSize: "1.7rem" }} />
                </Paper>
              </a>
            </Grid>
            <Grid
              item
              xs={10}
              sx={{
                display: data.LinkdnLink == "" ? "none" : "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
                textAlign: "left",
                top: mobile ? "-7vh" : tablet ? "-7.5vh" : "-12vh",
                mt: "1vh",
              }}
            >
              <a
                href={`https://www.linkedin.com/in/${data.LinkdnLink}`}
                style={{ textDecoration: "none", color: "black" }}
                onClick={() => handleLinkdinUpdate()}
              >
                <Typography
                  sx={{
                    fontSize: mobile ? "1.1rem" : "1.4rem",
                    fontWeight: 600,
                    textAlign: "left",
                  }}
                >
                  LinkedIn
                </Typography>
              </a>
            </Grid>
            <Grid
              item
              xs={2}
              sx={{
                display: data.YoutubeLink == "" ? "none" : "flex",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                position: "relative",
                top: mobile ? "-7vh" : tablet ? "-7.5vh" : "-12vh",
                mt: "1vh",
              }}
            >
              <a                  href={`https://www.youtube.com/@${data.YoutubeLink}`} onClick={() => handleLinkdinUpdate()}>
                <Paper
                 href={`https://www.youtube.com/@${data.YoutubeLink}`}
                  sx={{
                    bgcolor: "#FFDE59",
                    color: "#000000",
                    paddingX: "20px",
                    paddingY: "4px",
                    fontSize: "1.3rem",
                    fontWeight: 500,
                    borderRadius: "0px 30px 30px 0px",
                  }}
                >
                  <YouTube sx={{ fontSize: "1.7rem" }} />
                </Paper>
              </a>
            </Grid>
            <Grid
              item
              xs={10}
              sx={{
                display: data.YoutubeLink == "" ? "none" : "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
                textAlign: "left",
                top: mobile ? "-7vh" : tablet ? "-7.5vh" : "-12vh",
                mt: "1vh",
              }}
            >
              <a
                 href={`https://www.youtube.com/@${data.YoutubeLink}`}
                style={{ textDecoration: "none", color: "black" }}
                onClick={() => handleLinkdinUpdate()}
              >
                <Typography
                  sx={{
                    fontSize: mobile ? "1.1rem" : "1.4rem",
                    fontWeight: 600,
                    textAlign: "left",
                  }}
                >
                  Youtube
                </Typography>
              </a>
            </Grid>
            <Grid
              item
              xs={2}
              sx={{
                display: data.Email == "" ? "none" : "flex",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                position: "relative",
                top: mobile ? "-7vh" : tablet ? "-7.5vh" : "-12vh",
                mt: "2vh",
              }}
            >
              <Paper
                sx={{
                  bgcolor: "#FFDE59",
                  color: "#000000",
                  paddingX: "20px",
                  paddingY: "4px",
                  fontSize: "1.3rem",
                  fontWeight: 500,
                  borderRadius: "0px 30px 30px 0px",
                }}
              >
                <Email sx={{ fontSize: "1.7rem" }} />
              </Paper>
            </Grid>
            <Grid
              item
              xs={10}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
                textAlign: "left",
                top: mobile ? "-7vh" : tablet ? "-7.5vh" : "-12vh",
                mt: "2vh",
              }}
            >
              {" "}
              <a
                style={{ textDecoration: "none", color: "black" }}
                href={`mailto:${data.Email}?body=Query%20About%20Business`}
              >
                <Typography
                  sx={{
                    fontSize: mobile ? "1.1rem" : "1.4rem",
                    fontWeight: 600,
                    textAlign: "left",
                  }}
                >
                  {data.Email}
                </Typography>
              </a>
            </Grid>
            <Grid
              item
              xs={12}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
                top: mobile ? "-2vh" : tablet ? "-6.5vh" : "-5vh",
                mb: "1vh",
                mt:-5
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
                    borderRadius: "54px",
                    backgroundColor: "#ffeb99",
                    "&:hover": {
                      borderColor: "#000000",
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
                onChange={(e) => handleMessage(e)}
              />
            </Grid>
            <Grid
              item
              xs={6}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
                top: mobile ? "-2vh" : tablet ? "-6.5vh" : "-5vh",
              }}
            >
              <Button
                sx={{
                  paddingX: "30px",
                  paddingY: "10px",
                  bgcolor: "#FFDE59",
                  color: "#000000",
                  fontWeight: 600,
                  borderRadius: 10,
                  border: "1px solid #000000",
                  "&:hover": {
                    bgcolor: "#0CC0DF",
                    color: "#000000",
                  },
                }}
                onClick={() => handleSave()}
              >
                SAVE &nbsp;&nbsp;&nbsp;
                <SaveAlt />
              </Button>
            </Grid>
            <Grid
              item
              xs={6}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
                top: mobile ? "-2vh" : tablet ? "-6.5vh" : "-5vh",
              }}
            >
              <Button
                sx={{
                  paddingX: "25px",
                  paddingY: "10px",
                  bgcolor: "#FFDE59",
                  color: "#000000",
                  fontWeight: 600,
                  borderRadius: 10,
                  border: "1px solid #000000",
                  "&:hover": {
                    bgcolor: "#0CC0DF",
                    color: "#000000",
                  },
                }}
                onClick={() =>
                  handleClick(
                    `${data.companyId}`,
                    `https://digitalcardhub.in/#/${data.companyId}`
                  )
                }
              >
                <Share />
                &nbsp;&nbsp;&nbsp; SHARE
              </Button>
            </Grid>
            <Grid
              item
              xs={12}
              sx={{
                display: data.profile=='false'?'none':"flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
                mb: "5vh",
                // top: mobile ? "-6vh" : tablet ? "-6.5vh" : "-5vh",
              }}
            >
              <Button
                sx={{
                  paddingX: "25px",
                  paddingY: "10px",
                  bgcolor: "#FFDE59",
                  color: "#000000",
                  fontWeight: 600,
                  borderRadius: 10,
                  border: "1px solid #000000",
                  "&:hover": {
                    bgcolor: "#0CC0DF",
                    color: "#000000",
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
            backgroundImage: `linear-gradient(to left,#FFDE59,#0CC0DF)`,
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
                color: "#000000",
                fontWeight: 700,
                mb: "20px",
                borderBottom: "1.5px solid #000000",
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
                color: "#000000",
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
                color: "#4e4e32",
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
            backgroundImage: `linear-gradient(to left,#FFDE59,#0CC0DF)`,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            paddingY: "16px",
            mb: "20px",
          }}
        >
          <Grid item xs={12}>
            <Typography
              sx={{
                fontSize: "2rem",
                color: "#000000",
                fontWeight: 700,
                mb: "20px",
                borderBottom: "1.5px solid #000000",
                textAlign: "center",
              }}
            >
              OUR PRODUCTS AND SERVICES
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Grid container>
              <Products />
            </Grid>
          </Grid>
        </Grid>
        <Grid
          container
          sx={{
            display: ecommerce.length != 0 && fullCard ? "block" : "none",
            backgroundImage: `linear-gradient(to left,#FFDE59,#0CC0DF)`,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            paddingY: "16px",
            mb: "20px",
          }}
        >
          <Grid item xs={12}>
            <Typography
              sx={{
                fontSize: "2rem",
                color: "#000000",
                fontWeight: 700,
                mb: "20px",
                borderBottom: "1.5px solid #000000",
                textAlign: "center",
              }}
            >
              BUY OUR PRODUCT NOW
            </Typography>
          </Grid>
          <Ecommerce />
        </Grid>
        <Grid
          container
          sx={{
            display: gallery.length != 0 && fullCard ? "block" : "none",
            backgroundImage: `linear-gradient(to left,#FFDE59,#0CC0DF)`,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            paddingY: "16px",
            mb: "20px",
          }}
        >
          <Grid item xs={12}>
            <Typography
              sx={{
                fontSize: "2rem",
                color: "#000000",
                fontWeight: 700,
                mb: "20px",
                borderBottom: "1.5px solid #000000",
                textAlign: "center",
              }}
            >
              OUR GALLERY
            </Typography>
          </Grid>
          <Gallery />
        </Grid>
        <Grid
          container
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
            backgroundImage: `linear-gradient(to left,#FFDE59,#0CC0DF)`,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            paddingY: "16px",
            paddingX: "20px",
            mb: "20px",
          }}
        >
          <Grid item xs={12}>
            <Typography
              sx={{
                fontSize: "2rem",
                color: "#000000",
                fontWeight: 700,
                mb: "20px",
                borderBottom: "1.5px solid #000000",
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
            backgroundImage: `linear-gradient(to left,#FFDE59,#0CC0DF)`,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            paddingY: "16px",
            paddingX: "15px",
            mb: "20px",
          }}
        >
          <Grid item xs={12}>
            <Grid
              container
              sx={{
                display:
                  data.paytmNumber == null &&
                    data.Googlepaynumber == null &&
                    data.phonepenumber == null
                    ? "none"
                    : "flex",
                // flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Grid
                item
                xs={12}
                sx={{
                  fontSize: "2rem",
                  color: "#000000",
                  fontWeight: 700,
                  textAlign: "center",
                  mb: "4vh",
                  mt: "2vh",
                }}
              >
                Payment Info
              </Grid>
              <Grid
                item
                xs={4}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <Typography
                  sx={{
                    display: data.paytmNumber == null ? "none" : "block",
                    fontSize: mobile ? "0.9rem" : "1.1rem",
                    color: "#000000",
                    fontWeight: 700,
                    textAlign: "center",
                  }}
                  color="blue"
                >
                  Paytm :
                </Typography>
                <Typography
                  sx={{
                    fontSize: mobile ? "0.9rem" : "1.1rem",
                    fontWeight: 500,
                    color: "#4e4e32",
                    textAlign: "center",
                  }}
                >
                  {data.paytmNumber}
                </Typography>
              </Grid>
              <Grid
                item
                xs={4}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <Typography
                  sx={{
                    display: data.Googlepaynumber == null ? "none" : "block",
                    fontSize: mobile ? "0.9rem" : "1.1rem",
                    color: "#000000",
                    fontWeight: 700,
                    textAlign: "center",
                  }}
                  color="blue"
                >
                  Google Pay :
                </Typography>
                <Typography
                  sx={{
                    fontSize: mobile ? "0.9rem" : "1.1rem",
                    fontWeight: 500,
                    color: "#4e4e32",
                    textAlign: "center",
                  }}
                >
                  {data.Googlepaynumber}
                </Typography>
              </Grid>
              <Grid
                item
                xs={4}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <Typography
                  sx={{
                    display: data.phonepenumber == null ? "none" : "block",
                    fontSize: mobile ? "0.9rem" : "1.1rem",
                    color: "#000000",
                    fontWeight: 700,
                    textAlign: "center",
                  }}
                  color="blue"
                >
                  Phone Pe :
                </Typography>
                <Typography
                  sx={{
                    fontSize: mobile ? "0.9rem" : "1.1rem",
                    fontWeight: 500,
                    color: "#4e4e32",
                    textAlign: "center",
                  }}
                >
                  {data.phonepenumber}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid
              container
              sx={{
                display:
                  data.Accountholdername == "" &&
                    data.bankaccountnumber == null &&
                    data.bankifsccode == "" &&
                    data.bankname == ""
                    ? "none"
                    : "flex",
                justifyContent: "center",
                borderTop: "1px solid #000000",
                alignItems: "center",
                mt: "2vh",
              }}
            >
              <Grid item xs={12}>
                <Typography
                  sx={{
                    fontSize: mobile ? "1.5rem" : "2rem",
                    color: "#000000",
                    fontWeight: 700,
                    textAlign: "center",
                    mb: "4vh",
                    mt: "3vh",
                  }}
                >
                  Bank Account Details
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography
                  sx={{
                    display: data.Accountholdername == "" ? "none" : "block",
                    fontSize: mobile ? "0.9rem" : "1.1rem",
                    color: "#000000",
                    fontWeight: 700,
                    textAlign: "center",
                  }}
                >
                  Name :
                </Typography>
                <Typography
                  sx={{
                    fontSize: mobile ? "0.9rem" : "1.1rem",
                    fontWeight: 500,
                    color: "#4e4e32",
                    textAlign: "center",
                  }}
                >
                  {data.fullname}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography
                  sx={{
                    display: data.bankaccountnumber == null ? "none" : "block",
                    fontSize: mobile ? "0.9rem" : "1.1rem",
                    color: "#000000",
                    fontWeight: 700,
                    textAlign: "center",
                  }}
                >
                  Account Number :
                </Typography>
                <Typography
                  sx={{
                    fontSize: mobile ? "0.9rem" : "1.1rem",
                    fontWeight: 500,
                    color: "#4e4e32",
                    textAlign: "center",
                  }}
                >
                  {data.bankaccountnumber}
                </Typography>
              </Grid>
              <Grid item xs={6} sx={{ mt: "2vh" }}>
                <Typography
                  sx={{
                    display: data.bankifsccode == "" ? "none" : "block",
                    fontSize: mobile ? "0.9rem" : "1.1rem",
                    color: "#000000",
                    fontWeight: 700,
                    textAlign: "center",
                  }}
                >
                  IFSC Code :
                </Typography>
                <Typography
                  sx={{
                    fontSize: mobile ? "0.9rem" : "1.1rem",
                    fontWeight: 500,
                    color: "#4e4e32",
                    textAlign: "center",
                  }}
                >
                  {data.bankifsccode}
                </Typography>
              </Grid>
              <Grid item xs={6} sx={{ mt: "2vh" }}>
                <Typography
                  sx={{
                    display: data.bankname == "" ? "none" : "block",
                    fontSize: mobile ? "0.9rem" : "1.1rem",
                    color: "#000000",
                    fontWeight: 700,
                    textAlign: "center",
                  }}
                >
                  Name of Bank :
                </Typography>
                <Typography
                  sx={{
                    fontSize: mobile ? "0.9rem" : "1.1rem",
                    fontWeight: 500,
                    color: "#4e4e32",
                    textAlign: "center",
                  }}
                >
                  {data.bankname}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid
              container
              sx={{
                display:
                  data.paytmQrimage == "" &&
                    data.phonepeQrimage == "" &&
                    data.googlepayQrimage == ""
                    ? "none"
                    : "flex",
                justifyContent: "center",
                alignItems: "center",
                borderTop: "1px solid #000000",
                mt: "3vh",
                mb: "3vh",
              }}
            >
              <Grid item xs={12}>
                <Typography
                  sx={{
                    fontSize: "2rem",
                    color: "#000000",
                    fontWeight: 700,
                    textAlign: "center",
                    mb: "4vh",
                  }}
                >
                  QRs To Scan
                </Typography>
              </Grid>
              <Grid
                item
                xs={4}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  paddingInline: "4px",
                }}
              >
                <Typography
                  sx={{
                    fontSize: mobile ? "0.9rem" : "1.1rem",
                    fontWeight: 600,
                    color: "#000000",
                    textAlign: "center",
                  }}
                >
                  Paytm :
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
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  paddingInline: "4px",
                }}
              >
                <Typography
                  sx={{
                    fontSize: mobile ? "0.9rem" : "1.1rem",
                    fontWeight: 600,
                    color: "#000000",
                    textAlign: "center",
                  }}
                >
                  Phone Pe :
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
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  paddingInline: "4px",
                }}
              >
                <Typography
                  sx={{
                    fontSize: mobile ? "0.9rem" : "1.1rem",
                    fontWeight: 600,
                    color: "#000000",
                    textAlign: "center",
                  }}
                >
                  Google Pay :
                </Typography>
                <img
                  src={`${serverURL}/images/${data.googlepayQrimage}`}
                  width={"100%"}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          container
          sx={{
            display: fullCard ? "flex" : "none",
            backgroundImage: `linear-gradient(to left,#FFDE59,#0CC0DF)`,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            paddingY: "16px",
            mb: "20px",
          }}
        >
          <Grid item xs={12}>
            <Typography
              sx={{ fontSize: "2rem", color: "#000000", fontWeight: 700 }}
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
                color: "#000000",
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
                  backgroundColor: "#ebfaeb",
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
                color: "#000000",
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
                  backgroundColor: "#ebfaeb",
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
                color: "#000000",
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
                  backgroundColor: "#ebfaeb",
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
                color: "#000000",
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
                  backgroundColor: "#ebfaeb",
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
                bgcolor: "#FFDE59",
                color: "#000000",
                fontWeight: 600,
                border: "1px solid #000000",
                "&:hover": {
                  bgcolor: "#0CC0DF",
                  color: "#000000",
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
            backgroundImage: `linear-gradient(to left,#FFDE59,#0CC0DF)`,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            paddingY: "30px",
          }}
        >
          <Grid item xs={12}>
            <Typography variant="h4" sx={{ color: "#000000", fontWeight: 700 }}>
              DIGITAL CARD HUB{" "}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography sx={{ color: "#000000", fontWeight: 500 }}>
              Powered by India Buzz
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
