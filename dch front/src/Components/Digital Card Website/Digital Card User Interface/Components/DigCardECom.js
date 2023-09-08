import {
  Box,
  Button,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import Car from "../../Digital Card Assets/MobileCard.png";
import bg from "../../Digital Card Assets/3.png";
import Play from "../../Digital Card Assets/Play.jpg";
import Icon from "../../Digital Card Assets/hexa_icon.png";
import { useNavigate } from "react-router-dom";

const data = [
  // { option: "35 Premium themes" },
  { option: " Share cards with anyone, Unlimited times" },
  { option: "Update card Unlimited times." },
  // { option: "Feedback option available." },
  { option: "10+ Products in Ecommerce Store." },
  // { option: "" },
  { option: "Select design from available templates" },
  { option: "10 Products / Photos in Gallery" },
  // { option: "10 Photos in Gallery" },
  { option: "Profile Photo and Social Media Links" },
  { option: "5 Videos in Youtube Video Gallery" },
  { option: "Products with images." },
  { option: "Payment Section and Contact Form Included" },
  // { option: "Contact Form Included" },
];

export default function DigCardECom() {
  const navigate = useNavigate();

  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));
  const medium = useMediaQuery(theme.breakpoints.down(1100));

  const List = () => {
    return data.map((item) => {
      return (
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            mt: "1.5vh",
            ml: "4%",
          }}
        >
          <img src={Icon} width={28} />
          &nbsp;&nbsp;
          <Typography
            sx={{
              fontSize: "1.3em",
              fontWeight: 400,
              fontFamily: "OXANIUM",
              color: "#000000",
            }}
          >
            {item.option}
          </Typography>
        </Box>
      );
    });
  };

  const List1 = () => {
    return data.map((item) => {
      return (
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            mt: "1.5vh",
            ml: "4%",
          }}
        >
          <img src={Icon} width={medium ? 30 : 24} />
          &nbsp;&nbsp;
          <Typography
            sx={{
              fontSize: medium ? "1.3em" : "1em",
              fontWeight: 400,
              fontFamily: "OXANIUM",
              color: "#ffffff",
            }}
          >
            {item.option}
          </Typography>
        </Box>
      );
    });
  };

  return (
    <Box
      sx={{
        background: "transparent",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <Grid container spacing={3}>
        <Grid
          item
          xs={12}
          lg={8}
          sx={{
            backgroundImage: { xs: "", lg: `url('${bg}')` },
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            mt: { xs: 0, md: "8%" },
          }}
        >
          <br /><br /><br />
          <Typography
            sx={{
              fontSize: "2.4em",
              fontWeight: 600,
              fontFamily: "OXANIUM",
              color: "#043f77",
              letterSpacing: "-0.2px",
              lineHeight: "1.2em",
              mb: "4%",
              mt: "6%",
              ml: "4%",
              display: mobile ? "none" : medium ? "none" : "flex",
            }}
          >
            Digital Card with <br />
            Ecommerce
          </Typography>
          <Typography
            sx={{
              fontSize: "2.4em",
              fontWeight: 600,
              fontFamily: "OXANIUM",
              color: "#ffffff",
              textAlign: "center",
              letterSpacing: "-0.2px",
              lineHeight: "1.2em",
              display: mobile ? "none" : medium ? "block" : "none",
              m: "auto",
              mt: "9%",
              mb: "8%",
            }}
          >
            Digital Card with Ecommerce
          </Typography>
          <Typography
            sx={{
              fontSize: "2em",
              fontWeight: 600,
              fontFamily: "OXANIUM",
              color: "#ffffff",
              letterSpacing: "-0.2px",
              lineHeight: "1.2em",
              mb: "4%",
              mt: "6%",
              textAlign: "center",
              display: mobile ? "block" : medium ? "none" : "none",
              m: "auto",
            }}
          >
            Digital Card with <br />
            Ecommerce
          </Typography>
          <img
            src={Car}
            style={{
              display: mobile ? "block" :medium?"block": "none",
              margin: "auto",
              width: "60%",
              marginTop: "4vh",
              marginBottom: "4vh",
            }}
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: mobile ? "column" : medium ? "column" : "row",
              ml: "2.5%",
              mb: "10%",
            }}
          >
            <Box sx={{ display: "block", m: "auto" }}>
              {mobile ? <List1 /> : medium ? <List1 /> : <List />}
            </Box> 
          </Box>
          <br /><br /><br />
        </Grid>
        <Grid
          item
          xs={4}
          sx={{
            display: { xs: "none", lg: "flex" },
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={Car} style={{ marginRight: "20%", width: "150%" }} />
        </Grid>
      </Grid>
    </Box>
  );
}
