import {
  Facebook,
  Instagram,
  LinkedIn,
  Twitter,
  WhatsApp,
} from "@mui/icons-material";
import {
  Box,
  Grid,
  TextField,
  Typography,
  Button,
  Container,
  Divider,
  IconButton,
} from "@mui/material";
import React, { useState } from "react";
import { postData } from "../../../Services/NodeServices";
import { useNavigate } from "react-router-dom";
export default function Footer() {
  const [name, setName] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [emailId, setEmailId] = useState("");
  const [query, setQuery] = useState("");
  const navigate = useNavigate()
  const handleSubmit = async () => {
    let formData=new FormData
    formData.append('name',name)
    formData.append('number',phoneNo)
    formData.append('query',query)
    formData.append('email',emailId)
        let response = await postData("enquiry/addenquiry",formData,true);
    // alert("Successful");
  };

  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          pt: "6%",
          pb: "2%",
        }}
      >
        <Grid
          container
          spacing={0}
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "column", lg: "row" },
            justifyContent: "center",
          }}
        >
          <Grid
            item
            xs={12}
            lg={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              pl: "5%",
              mb: { xs: "6vh", lg: "0vh" },
              mt: { xs: "4vh", lg: "0vh" },
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "1.6em", lg: "2.4em" },
                fontWeight: 700,
                fontFamily: "OXANIUM",
                color: "#001E3C",
                letterSpacing: "-0.2px",
                mt: { xs: 0, md: "4%" },
                textAlign: "left",
              }}
            >
              digitalcardhub.in
            </Typography>
            <Box>
              <Typography
                sx={{
                  fontSize: "1.1em",
                  fontWeight: 500,
                  fontFamily: "OXANIUM",
                  color: "#001E3C",
                  letterSpacing: "-0.2px",
                  // mt: { xs: 0, md: "4%" },
                  textAlign: "left",
                }}
              >
                +918889430333
              </Typography>
            </Box>
            <Box>
              <Typography
                sx={{
                  fontSize: "1.1em",
                  fontWeight: 500,
                  fontFamily: "OXANIUM",
                  color: "#001E3C",
                  letterSpacing: "-0.2px",
                  textAlign: "left",
                }}
              >
                ibuzz@indiabuzz.co.in
              </Typography>
            </Box>
            <Grid container>
              <Grid item xs={6} sx={{ mt: "4vh" }}>
                <Grid container>
                  <Grid item xs={12}>
                    <Typography
                      sx={{
                        fontSize: "1.5rem",
                        fontFamily: "OXANIUM",
                        fontWeight: 600,
                        textDecoration: "underline",
                      }}
                    >
                      Quick Links
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      mt: "1vh",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "0.9rem",
                        fontFamily: "OXANIUM",
                        color: "#001E3C",
                      }}
                    >
                      Contact Us
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "0.9rem",
                        fontFamily: "OXANIUM",
                        color: "#001E3C",
                      }}
                    >
                      Terms and conditions
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "0.9rem",
                        fontFamily: "OXANIUM",
                        color: "#001E3C",
                      }}
                    >
                      Privacy Policy
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "0.9rem",
                        fontFamily: "OXANIUM",
                        color: "#001E3C",
                      }}
                    >
                      Refund Policy
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "0.9rem",
                        fontFamily: "OXANIUM",
                        color: "#001E3C",
                      }}
                    >
                      Shipping Policy
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={6} sx={{ mt: "4vh" }}>
                <Grid container>
                  <Grid item xs={12}>
                    <Typography
                      sx={{
                        fontSize: "1.5rem",
                        fontFamily: "OXANIUM",
                        fontWeight: 600,
                        textDecoration: "underline",
                      }}
                    >
                      More Links
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      mt: "1vh",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "0.9rem",
                        fontFamily: "OXANIUM",
                        color: "#001E3C",
                      }}
                    >
                      Products
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "0.9rem",
                        fontFamily: "OXANIUM",
                        color: "#001E3C",
                      }}
                    >
                      How It Works
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "0.9rem",
                        fontFamily: "OXANIUM",
                        color: "#001E3C",
                        cursor:'pointer'
                      }}
                      onClick={()=>navigate('/compatible-devices')}
                    >
                      Compatibility Devices
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} sx={{ mt: "4vh" }}>
                <Grid container>
                  <Grid item xs={12}>
                    <Typography
                      sx={{
                        fontSize: "1.5rem",
                        fontWeight: 600,
                        textDecoration: "underline",
                        fontFamily: "OXANIUM",
                      }}
                    >
                      Social Links
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sx={{ mt: "1vh", display: "flex", flexDirection: "row" }}
                  >
                    <IconButton href="https://www.facebook.com/digitalcardhub.in">
                      <Facebook sx={{ color: "#001E3C", fontSize: "2rem" }} />
                    </IconButton>
                    <IconButton href="https://www.instagram.com/digitalcardhub.in/">
                      <Instagram sx={{ color: "#001E3C", fontSize: "2rem" }} />
                    </IconButton>
                    <IconButton  href={`https://wa.me/+918889430333?text=`}>
                      <WhatsApp sx={{ color: "#001E3C", fontSize: "2rem" }} />
                    </IconButton>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            lg={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "1.6em", lg: "2.4em" },
                fontWeight: 700,
                fontFamily: "OXANIUM",
                color: "#001E3C",
                letterSpacing: "-0.2px",
                mb: "2.5vh",
                textAlign: "center",
              }}
            >
              CONTACT US
            </Typography>
            <Grid
              container
              spacing={2}
              sx={{ width: { xs: "100%", lg: "80%" } }}
            >
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  label="Enter your name"
                  fullWidth
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  label="Enter your Phone Number"
                  fullWidth
                  value={phoneNo}
                  onChange={(event) => setPhoneNo(event.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  label="Enter your email"
                  fullWidth
                  value={emailId}
                  onChange={(event) => setEmailId(event.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  label="Enter your query"
                  fullWidth
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  onClick={handleSubmit}
                  fullWidth
                  sx={{
                    borderRadius: "1.4em",
                    background: "#001E3C",
                    color: "#ffffff",
                    p: "2% 40%",
                    fontSize: "1.2em",
                    fontWeight: 600,
                    mt: "2vh",
                    "&:hover": {
                      background: "#9cbccb",
                      color: "#001E3C",
                    },
                  }}
                >
                  Send
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Divider sx={{ backgroundColor: "#001E3C", mt: "6vh", p: "0.1%" }} />
        <Typography
          onClick={() => window.open("https://indiabuzz.co.in/", "_blank")}
          sx={{
            fontSize: "1.5em",
            fontWeight: 500,
            fontFamily: "OXANIUM",
            color: "#001E3C",
            letterSpacing: "-0.2px",
            textAlign: "center",
            mt: "2vh",
            cursor: "pointer",
          }}
        >
          Copyrights © 2022 Powered By IndiaBuzz
        </Typography>
      </Box>
    </Container>
  );
}
