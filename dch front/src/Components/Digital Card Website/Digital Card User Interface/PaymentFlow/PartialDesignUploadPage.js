import { Button, Grid, Paper, Typography,useMediaQuery,useTheme } from "@mui/material";
import React from "react";
import Navbar from "../UserDashboard/UserComponents/Navbar";
import { useNavigate } from "react-router-dom";
import { postData,serverURL } from "../../../Services/NodeServices";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";

import image1 from "./CardDesigns/1.png";
import image2 from "./CardDesigns/2.png";
import image3 from "./CardDesigns/3.png";
import image4 from "./CardDesigns/4.png";
import image5 from "./CardDesigns/5.png";
import image6 from "./CardDesigns/6.png";
import image7 from "./CardDesigns/7.png";
import image8 from "./CardDesigns/8.png";
import image9 from "./CardDesigns/9.png";
import image10 from "./CardDesigns/10.png";
import image11 from "./CardDesigns/11.png";
import image12 from "./CardDesigns/12.png";
import image13 from "./CardDesigns/13.png";
import image14 from "./CardDesigns/14.png";
import image15 from "./CardDesigns/15.png";
import image16 from "./CardDesigns/16.png";
import image17 from "./CardDesigns/17.png";
import image18 from "./CardDesigns/18.png";
import image19 from "./CardDesigns/19.png";
import image20 from "./CardDesigns/20.png";
import image21 from "./CardDesigns/21.png";
import image22 from "./CardDesigns/22.png";
import image23 from "./CardDesigns/23.png";
import image24 from "./CardDesigns/24.png";
import image25 from "./CardDesigns/25.png";
import image26 from "./CardDesigns/26.png";
import image27 from "./CardDesigns/27.png";
import image28 from "./CardDesigns/28.png";
import image29 from "./CardDesigns/29.png";
import image30 from "./CardDesigns/30.png";
import image31 from "./CardDesigns/31.png";
import { Avatar } from "@mui/material";
const Designs = [
  { id: "1", name: "Design1", image: image1 },
  { id: "2", name: "Design2", image: image2 },
  { id: "3", name: "Design3", image: image3 },
  { id: "4", name: "Design4", image: image4 },
  { id: "5", name: "Design5", image: image5 },
  { id: "6", name: "Design6", image: image6 },
  { id: "7", name: "Design7", image: image7 },
  { id: "8", name: "Design8", image: image8 },
  { id: "9", name: "Design9", image: image9 },
  { id: "10", name: "Design10", image: image10 },
  { id: "11", name: "Design11", image: image11 },
  { id: "12", name: "Design12", image: image12 },
  { id: "13", name: "Design13", image: image13 },
  { id: "14", name: "Design14", image: image14 },
  { id: "15", name: "Design15", image: image15 },
  { id: "16", name: "Design16", image: image16 },
  { id: "17", name: "Design17", image: image17 },
  { id: "18", name: "Design18", image: image18 },
  { id: "19", name: "Design19", image: image19 },
  { id: "20", name: "Design20", image: image20 },
  { id: "21", name: "Design21", image: image21 },
  { id: "22", name: "Design22", image: image22 },
  { id: "23", name: "Design8", image: image8 },
  { id: "24", name: "Design24", image: image24 },
  { id: "25", name: "Design25", image: image25 },
  { id: "26", name: "Design26", image: image26 },
  { id: "27", name: "Design27", image: image27 },
  { id: "28", name: "Design28", image: image28 },
  { id: "29", name: "Design29", image: image29 },
  { id: "30", name: "Design30", image: image30 },
  { id: "31", name: "Design31", image: image31 },
];

const PartialDesignUploadPage = () => {
    const navigate = useNavigate();
    const theme = useTheme();
    const xs=useMediaQuery(theme.breakpoints.down('sm'))
    const sm=useMediaQuery(theme.breakpoints.down('md'))
    const cardId = window.localStorage.getItem("CardId");
  
    const userId = window.localStorage.getItem("userId");
  
    const [front, setFront] = React.useState({ url: "", bytes: "" });
    const [back, setBack] = React.useState({ url: "", bytes: "" });
    const [designId, setDesignId] = React.useState('');
    const fetchCardDetail = async () => {
      var formData = new FormData();
      formData.append("customerId", userId);
      var result = await postData("carddetails/getcardDetails", formData, true);
      setDesignId(result.data.designId);
      setFront({url:`${serverURL}/images/${result.data.cardFront}`, bytes: " "})
      setBack({url:`${serverURL}/images/${result.data.cardBack}`, bytes: " "})
  };
  React.useEffect(() => {
      fetchCardDetail();
  }, []);
    const DesignComponent = () => {
      return Designs.map((item) => {
        return (
          <Grid
            item
            xs={5}
            sm={5}
            md={4}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
             
            }}
          >
            <Grid
              sx={{
                border:designId==item.id?3.5:0,
                borderColor:'burlywood',
                "&:hover": {
                 
                  border: 3.5,
                  borderColor:'burlywood',
                  cursor: "pointer",
                },
              }}
              onClick={() => setDesignId(item.id)}
            >
              <img
                src={item.image}
                width={xs?100:sm?250:250}
                style={{ margin: 4, marginBottom: -2 }}
              />
            </Grid>
          </Grid>
        );
      });
    };
    const handleClick = async (designid) => {
      var formData = new FormData();
      formData.append("_id", cardId);
      formData.append("designId", designId);
      formData.append("cardFront",front.bytes);
      formData.append("cardBack",back.bytes);
      var result = await postData("carddetails/updateCardDesign", formData, true);
      console.log(result);
      if (result.status) {
        navigate("/partialPackage")
      } else {
      }
    };
    const handleFrontImage = (event) => {
      setFront({
        bytes: event.target.files[0],
        url: URL.createObjectURL(event.target.files[0]),
      });
    };
    const handleBackImage = (event) => {
      
      setBack({
        bytes: event.target.files[0],
        url: URL.createObjectURL(event.target.files[0]),
      });
    };
    return (
      <Grid>
        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            sx={{
              marginTop: "2vh",
              marginBottom: "2vh",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button
              sx={{
                borderRadius: 10,
                backgroundImage: "linear-gradient(to top left,#48dbfb,#001e3c)",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
                textAlign: "center",
                alignItems: "center",
                fontSize: 15,
              }}
              onClick={() => navigate("/userDashboard")}
              variant="contained"
            >
              Cancel
            </Button>
          </Grid>
          <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
            <Paper
              elevation={6}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: { xs: 380, sm: 700, md: 1000 },
                borderRadius: 4,
              }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography
                    textAlign={"center"}
                    fontSize={25}
                    sx={{ fontSize: { md: 25, xs: 20, sm: 22 } }}
                  >
                    Choose Your Desing Now{" "}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Grid
                    container
                    spacing={2}
                    sx={{ display: "flex", justifyContent: "center" }}
                  >
                    <DesignComponent />
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Typography
                    textAlign={"center"}
                    fontSize={25}
                    sx={{ fontSize: { md: 25, xs: 20, sm: 22 } }}
                  >
                    For Customize Design
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Grid
                    container
                    spacing={2}
                    sx={{ display: "flex", justifyContent: "center" }}
                  >
                    <Grid item xs={12}>
                    <Typography
                      textAlign={"center"}
                      sx={{ fontSize: { md: 25, xs: 18, sm: 22 } }}
                    >
                      Upload Your Image you want on your card
                    </Typography>
                    </Grid>
                  <Grid
                    item
                    xs={12}
                    md={6}
                    sx={{ display: "flex", justifyContent: "center",flexDirection:"column",alignItems:'center' }}
                  >
                    <Typography sx={{fontSize:28}}>Front</Typography>
                    <Avatar
                      fullWidth
                      variant="rounded"
                      alt="Remy Sharp"
                      src={front.url}
                      sx={{
                        width: xs?300:sm?400:400,
                        height: xs?120:sm?180:180,
                        border: 1,
                        borderColor: "black",
                        borderStyle: "solid",
                      }}
                    />
                    <Grid
                    item
                    xs={12}
                    
                    sx={{ display: "flex", justifyContent: "center",margin:1 }}
                  >
                    <label htmlFor="icon-button-file">
                      <input
                        style={{ display: "none" }}
                        accept="image/*"
                        id="icon-button-file"
                        type="file"
                        onChange={handleFrontImage}
                      />
                      <Button
                        color="primary"
                        aria-label="upload picture"
                        variant='contained'
                        component="span"
                      >
                        Upload Front
                      </Button>
                    </label>
                  </Grid>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    md={6}
                    sx={{ display: "flex", justifyContent: "center",flexDirection:"column",alignItems:"center" }}
                  >
                    <Typography sx={{fontSize:28}}>Back </Typography>
                  
                    <Avatar
                      fullWidth
                      variant="rounded"
                      alt="Remy Sharp"
                      src={back.url}
                      sx={{
                        width: xs?300:sm?400:400,
                        height: xs?120:sm?180:180,
                        border: 1,
                        borderColor: "black",
                        borderStyle: "solid",
                      }}
                    />
                     <Grid
                    item
                    xs={12}
                    
                    sx={{ display: "flex", justifyContent: "center",margin:1 }}
                  >
                    <label htmlFor="icon-button-file1">
                      <input
                        style={{ display: "none" }}
                        accept="image/*"
                        id="icon-button-file1"
                        type="file"
                        onChange={handleBackImage}
                      />
                      <Button
                        color="primary"
                        aria-label="upload picture"
                        variant='contained'
                        component="span"
                      >
                        Upload Back
                      </Button>
                    </label>
                  </Grid>
                  </Grid>
                  
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sx={{
                      marginTop: "2vh",
                      marginBottom: "2vh",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <Button
                      sx={{
                        borderRadius: 10,
                        backgroundImage:
                          "linear-gradient(to top left,#48dbfb,#001e3c)",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-evenly",
                        textAlign: "center",
                        alignItems: "center",
                        fontSize: 15,
                      }}
                      onClick={() => handleClick()}
                      variant="contained"
                    >
                      Save
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    );
}

export default PartialDesignUploadPage
