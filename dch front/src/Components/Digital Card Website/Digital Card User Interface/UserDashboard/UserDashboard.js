import {
  Button,
  Container,
  Grid,
  IconButton,
  Paper,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import Navbar from "./UserComponents/Navbar";
import Footer from "./UserComponents/Footer";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import { useLocation, useNavigate } from "react-router-dom";
import { getData, postData } from "../../../Services/NodeServices";
import AddToHomeScreenIcon from "@mui/icons-material/AddToHomeScreen";
import { AddToHomeScreen } from "@mui/icons-material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Swal from "sweetalert2";
import { useEffect } from "react";
import Switch from '@mui/material/Switch';
const UserDashboard = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down(600));
  const tablet = useMediaQuery(theme.breakpoints.down(960));
  const [open, setOpen] = React.useState(false);
  const [cardData, setCardData] = useState([]);
  const location = useLocation();
  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [amount, setAmount] = useState(0);
  const [status, setStatus] = useState("");
  const [createdDate, setCreatedDate] = useState("");

  const handleClose1 = () => {
    setOpen1(false);
    setOpen2(false)
  };

  const userId = window.localStorage.getItem("userId");
  const user = window.localStorage.getItem("User");

  const navigate = useNavigate();
  

  const fetchCardDetail = async () => {
    var formData = new FormData();
    formData.append("customerId", userId);
    var result = await postData("carddetails/getcardDetails", formData, true);
    setCardData(result.data);
    setAmount(result.data.packageAmount);
    setStatus(result.data.paymentStatus);
     setTimeout(handleDialog(result.data.packageAmount), 10000);
    window.localStorage.setItem("CardId", result.data._id);
     var createDate=convertToISODate(result.data.createdDate)
  
     setCreatedDate(createDate)
  };
  

  React.useEffect(() => {
    if (!user) {
      navigate("/digitalcardlogin");
    }
    fetchCardDetail();
  }, []);
  function convertToISODate(dateString) {
    const parts = dateString.split('/'); // Split the date string into an array [month, day, year]
    const year = parts[2];
    const month = parts[0].padStart(2, '0'); // Pad month with leading zero if needed
    const day = parts[1].padStart(2, '0'); // Pad day with leading zero if needed
    return `${year}-${month}-${day}`; // Return the date in ISO 8601 format
  }
  

  useEffect(() => {}, [status]);

  const handleDialog = (amount) => {
    if (amount != 499 && amount!=799 && amount!=999 ) {
      setOpen1(true);
    }

    if(amount==499){
      setOpen2(true)
    }
  };

 
  const targetDate = new Date(createdDate); // Your target date (ISO 8601 format: yyyy-mm-dd)
   
  const currentDate = new Date(); // Current date

  // Calculate the time difference in milliseconds between the target date and current date
  const timeDifference = targetDate.getTime() - currentDate.getTime();
  
  // Calculate the number of days by dividing the time difference by the number of milliseconds in a day
  const daysTillToday = Math.floor(timeDifference / (1000 * 3600 * 24));
 
  // State to hold the calculated days
  const [days, setDays] = useState(daysTillToday);

  useEffect(() => {
    // Recalculate the days every time the component mounts
    if(amount==499)
    {setDays(365+daysTillToday);}
    else if(amount==799)
    {
      setDays(365+daysTillToday);
    }
    else if(amount==999)
    {
      setDays(730+daysTillToday);
    }else{
      setDays(90+daysTillToday)
    }
  }, [createdDate]);





  const handleClickOpen = () => {
    if(amount!=499)
    {setOpen(true);}
    else{
      Swal.fire({title: 'Upgrade Your Package !',
      
      background:'#001e3c',
      timer:1500,
      width:500,
      color:'#fff',
      showConfirmButton:false,
      icon:'warning',
      iconColor:'#fff' 
      })
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const dialogComponent = () => {
    return (
      <Dialog open={open} onClose={handleClose} fullWidth>
        <DialogTitle sx={{ backgroundColor: "#001e3c", color: "white" }}>
          Social Insights
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Grid
              container
              spacing={2}
              sx={{
                backgroundColor: "#001e3c",
                color: "white",
                width: { xs: 329, sm: 600, md: 600 },
                ml: -3,
                mt: 1,
              }}
            >
              <Grid item xs={12}>
                {cardData == undefined ? (
                  <Typography>No Data Available </Typography>
                ) : (
                  <Typography>
                    Whatsapp Clicks:{cardData.whatsappClickCount}
                  </Typography>
                )}
              </Grid>
              <Grid item xs={12}>
                {cardData == undefined ? (
                  <Typography>No Data Available </Typography>
                ) : (
                  <Typography>
                    Instagram Clicks:{cardData.instaClickCount}
                  </Typography>
                )}
              </Grid>
              <Grid item xs={12}>
                {cardData == undefined ? (
                  <Typography>No Data Available </Typography>
                ) : (
                  <Typography>
                    Linkdin Clicks:{cardData.linkdinClickCount}
                  </Typography>
                )}
              </Grid>
              <Grid item xs={12}>
                {cardData == undefined ? (
                  <Typography>No Data Available </Typography>
                ) : (
                  <Typography>
                    Facebook Clicks:{cardData.fbClickCount}
                  </Typography>
                )}
              </Grid>
              <Grid item xs={12}>
                {cardData == undefined ? (
                  <Typography>No Data Available </Typography>
                ) : (
                  <Typography>
                    Contact Downloads:{cardData.contactDownloadCount}
                  </Typography>
                )}
              </Grid>
            </Grid>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="contained">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    );
  };
  const alertDialog = () => {
    return (
      <Dialog
        open={open1}
        onClose={handleClose}
        fullWidth
        sx={{
          width: { xs: 400, sm: 490, md: 490 },
          marginLeft: { xs: "0%", sm: "20%", md: "35%" },
        }}
      >
        <DialogTitle sx={{ backgroundColor: "#001e3c", color: "white" }}>
          Get the Subscription now
        </DialogTitle>
        <DialogContent>
          <DialogContentText sx={{ color: "#001e3c", fontWeight: "bolder" }}>
            Starting From Only ₹499/- For One Year Only.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => navigate("/designUpload")}
            variant="contained"
            sx={{
              backgroundColor: "#001e3c",
              "&:hover": { backgroundColor: "#001e3c" },
            }}
          >
            Get Now
          </Button>
          <Button
            onClick={handleClose1}
            variant="contained"
            sx={{
              backgroundColor: "#001e3c",
              "&:hover": { backgroundColor: "#001e3c" },
            }}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    );
  };
  const alertDialog1 = () => {
    return (
      <Dialog
        open={open2}
        onClose={handleClose}
        fullWidth
        sx={{
          width: { xs: 400, sm: 490, md: 490 },
          marginLeft: { xs: "0%", sm: "20%", md: "35%" },
        }}
      >
        <DialogTitle sx={{ backgroundColor: "#001e3c", color: "white" }}>
          Get Your NFC Card Now
        </DialogTitle>
        <DialogContent>
          <DialogContentText sx={{ color: "#001e3c", fontWeight: "bolder" }}>
            Starting From Only ₹299/- For One Year Only.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => navigate("/partialDesignUpload")}
            variant="contained"
            sx={{
              backgroundColor: "#001e3c",
              "&:hover": { backgroundColor: "#001e3c" },
            }}
          >
            Get Now
          </Button>
          <Button
            onClick={handleClose1}
            variant="contained"
            sx={{
              backgroundColor: "#001e3c",
              "&:hover": { backgroundColor: "#001e3c" },
            }}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    );
  };
  function generateRandomCharacter() {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const randomIndex = Math.floor(Math.random() * characters.length);
    return characters[randomIndex];
  }

  // Function to generate a random 8-character alphanumeric string
  function generateRandomString() {
    let randomString = "";
    for (let i = 0; i < 8; i++) {
      randomString += generateRandomCharacter();
    }
    return randomString;
  }

  // Generate a random string

  const handlePay = async () => {
    let randomString = generateRandomString();
 
    const requestBody = {
      merchantId: "DIGITALCARDONLINE",
      merchantTransactionId: `${randomString}`,
      merchantUserId: "MUID123",
      amount: 100,
      redirectUrl: "https://digitalcardhub.in/#/userdashboard",
      redirectMode: "POST",
      callbackUrl: "https://digitalcardhub.in/#/userdashboard",
      mobileNumber: "8889430333",
      paymentInstrument: {
        type: "PAY_PAGE",
      },
    };
    const response = await postData("api/proxy", requestBody);
    console.log("bodyyyyyy", response);

    navigate(response.data.instrumentResponse.redirectInfo.url);
    handleCheck("DIGITALCARDONLINE", randomString);
  };
  const handleCheck = async (merchantId, transactinId) => {
    const response = await getData(`/check-status?tmid=${transactinId}`);
    console.log("bodyyyyyy", response);
  };

  const handleChange = async(id,status) => {

   
    var formData = new FormData();
    formData.append("_id",id);
    formData.append("profile",status=='false'?'true':'false');
    
    const response= await postData('carddetails/updateProfile',formData,true)

    fetchCardDetail()
     
   };

  return (
    <Grid>
      <Navbar />
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            sx={{
              display:
                cardData == undefined
                  ? mobile
                    ? "flex"
                    : tablet
                    ? "flex"
                    : "block"
                  : "none",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button
              onClick={() => navigate("/companyname")}
              variant="contained"
              sx={{ margin: 1, backgroundColor: "#001e3c" }}
            >
              + Create New Card
            </Button>
          </Grid>
          <Grid
            xs={12}
            item
            sx={{
              mt: "5vh",
              mb: "4vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Paper
              elevation={6}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: 600,
                borderRadius: 4,
              }}
            >
              <Grid
                container
                spacing={2}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: mobile ? "100%" : tablet ? "70%" : "100%",
                  margin: 1,
                }}
              >
                <Grid
                  item
                  xs={6}
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", sm: "column", md: "row" },
                  }}
                >
                  {cardData == undefined ? (
                    <Typography>No Data Available </Typography>
                  ) : (
                    <Typography>To Preview the Card</Typography>
                  )}
                </Grid>
                <Grid
                  item
                  xs={6}
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                  }}
                >
                  {cardData == undefined ? (
                    ""
                  ) : (
                    <Button
                      onClick={() => window.open(`/#/${cardData.companyId}`)}
                      sx={{
                        borderRadius: 2,
                        backgroundImage:
                          "linear-gradient(to top left,#48dbfb,#001e3c)",
                      }}
                      variant="contained"
                    >
                      Preview
                      <AddToHomeScreen />
                    </Button>
                  )}
                </Grid>
                <Grid item xs={6}>
                  <Typography>Company Name : </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography>
                    {cardData == undefined
                      ? "No Data Available"
                      : cardData.companyname}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography>Payment Status : </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography>
                    {cardData == undefined
                      ? "No Data Available"
                      : cardData.paymentStatus}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography>Card Status : </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography>
                    {cardData == undefined
                      ? "No Data Available"
                      : cardData.cardStatus}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography>Created On : </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography>
                    {cardData == undefined
                      ? "No Data Available"
                      : cardData.createdDate}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography>Subscription Validity : </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography>
                    {cardData == undefined
                      ? "No Data Available"
                      : `${days} days Remaining` }
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography>Social Insights : </Typography>
                </Grid>
                <Grid item xs={6}>
                  {cardData == undefined ? (
                    <>
                      <Typography>No Data Available</Typography>
                    </>
                  ) : (
                    <>
                      <Button
                        variant="contained"
                        onClick={() => handleClickOpen()}
                        sx={{
                          borderRadius: 2,
                          backgroundImage:
                            "linear-gradient(to top left,#48dbfb,#001e3c)",
                        }}
                      >
                        See Now
                      </Button>
                    </>
                  )}
                </Grid>
                <Grid item xs={6}>
                  <Typography>Share : </Typography>
                </Grid>
                <Grid item xs={6}>
                  {cardData == undefined ? (
                    <>
                      <Typography>No Data Available</Typography>
                    </>
                  ) : (
                    <>
                      <IconButton  sx={{
                          borderRadius: 2,
                          backgroundImage:
                            "linear-gradient(to top left,#48dbfb,#001e3c)",
                            color:"white",
                            m:1
                        }}>
                        <WhatsAppIcon />
                      </IconButton>
                      <IconButton  sx={{
                          borderRadius: 2,
                          backgroundImage:
                            "linear-gradient(to top left,#48dbfb,#001e3c)",
                            color:'white'
                        }}>
                        <FacebookIcon />
                      </IconButton>
                    </>
                  )}
                </Grid>
                <Grid item xs={6}>
                  <Typography>Show business profile : </Typography>
                </Grid>
                <Grid item xs={6}>
                  {cardData == undefined ? (
                    <>
                      <Typography>No Data Available</Typography>
                    </>
                  ) : (
                    <>
                     <Switch
                  checked={cardData.profile=='true'?true:false}
                  onChange={()=>handleChange(cardData._id,cardData.profile)}
                  inputProps={{ "aria-label": "controlled" }}
                />
                    </>
                  )}
                </Grid>

                <Grid item xs={6}>
                  <Typography>Edit : </Typography>
                </Grid>
                <Grid item xs={6}>
                  {cardData == undefined ? (
                    <>
                      <Typography>No Data Available</Typography>
                    </>
                  ) : (
                    <>
                      <Button  variant="contained"
                        sx={{
                          borderRadius: 2,
                          backgroundImage:
                            "linear-gradient(to top left,#48dbfb,#001e3c)",
                          fontSize: { xs: 10, sm: 13, md: 15 },
                        }} onClick={() => navigate("/companyname")}>
                       Edit <BorderColorIcon />
                      </Button>
                    </>
                  )}
                </Grid>
                {amount == 0 ? (
                <>
                <Grid item xs={6}>
                  <Typography>Card Payment : </Typography>
                </Grid>
                <Grid item xs={6} style={{ marginBottom: 3 }}>
                  {cardData == undefined ? (
                    <>
                      <Typography>No Data Available</Typography>
                    </>
                  ) : (
                    <>
                      <Button
                        variant="contained"
                        sx={{
                          borderRadius: 2,
                          backgroundImage:
                            "linear-gradient(to top left,#48dbfb,#001e3c)",
                          fontSize: { xs: 10, sm: 13, md: 15 },
                        }}
                        onClick={() => navigate("/designUpload")}
                      >
                        Book Your NFC Card
                      </Button>
                    </>
                  )}
                   
                  
                </Grid>
                </>) : (
                  <></>
                )}
                {amount == 499 ? (
                  <>
                    <Grid item xs={6}>
                      <Typography>Card Payment : </Typography>
                    </Grid>
                    <Grid item xs={6} style={{ marginBottom: 3 }}>
                      {cardData == undefined ? (
                        <>
                          <Typography>No Data Available</Typography>
                        </>
                      ) : (
                        <>
                          <Button
                            variant="contained"
                            sx={{
                              borderRadius: 2,
                              backgroundImage:
                                "linear-gradient(to top left,#48dbfb,#001e3c)",
                              fontSize: { xs: 10, sm: 13, md: 15 },
                            }}
                            onClick={() => navigate("/partialDesignUpload")}
                          >
                            Order Your NFC Card
                          </Button>
                        </>
                      )}
                    </Grid>
                  </>
                ) : (
                  <></>
                )}
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Container>
      {alertDialog()}
      {alertDialog1()}
      {dialogComponent()}
      <Footer />
    </Grid>
  );
};

export default UserDashboard;
