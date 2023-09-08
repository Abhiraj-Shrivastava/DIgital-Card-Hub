import { Grid, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import Navbar from "../UserComponents/Navbar";
import Footer from "../UserComponents/Footer";
import theme1 from "../UserAssets/theme1.png";
import theme2 from "../UserAssets/theme2.png";
import theme3 from "../UserAssets/theme3.png";
import theme4 from "../UserAssets/theme4.png";
import theme5 from "../UserAssets/theme5.png";
import theme6 from "../UserAssets/theme6.png";
import theme7 from "../UserAssets/theme7.png";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { postData } from "../../../../Services/NodeServices";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const themeData = [
    {
        id: '1',
        name: "theme1",
        img: theme1,
    },
    {
        id: '2',
        name: "theme2",
        img: theme2,
    },
    {
        id: '3',
        name: "theme3",
        img: theme3,
    },
    {
        id: '4',
        name: "theme4",
        img: theme4,
    },
    {
        id: '5',
        name: "theme5",
        img: theme5,
    },
    {
        id: '6',
        name: "theme6",
        img: theme6,
    },
    {
        id: '7',
        name: "theme7",
        img: theme7,
    },
];

const ThemePage = () => {
    const theme = useTheme();
    const mobile = useMediaQuery(theme.breakpoints.down(600));
    const tablet = useMediaQuery(theme.breakpoints.down(960));

    const navigate = useNavigate();
    const cardId = window.localStorage.getItem("CardId");
    const userId = window.localStorage.getItem("userId");
    const [border, setBorder] = React.useState("");
    const fetchCardDetail = async () => {
        var formData = new FormData();
        formData.append("customerId", userId);
        var result = await postData("carddetails/getcardDetails", formData, true);
        setBorder(result.data.themeid);
    };
    React.useEffect(() => {
        fetchCardDetail();
    }, []);

    const update = async () => {
       
    };
    const handleClick = async (themeid) => {
        var formData = new FormData();
        formData.append("_id", cardId);
        formData.append("themeid", themeid);
        var result = await postData("carddetails/updateCardTheme", formData, true);
        console.log(result);
        if (result.status) {
            navigate("/information");
        } else {
        }
    };

    const Component = () => {
        return themeData.map((item) => {
            return (
                <Grid
                    item
                    xs={mobile?11:tablet?5:3.5}
                    onClick={() => handleClick(item.id)}
                    sx={{
                        borderRadius: 5,
                        border: border == item.id ? 3.5: 0,
                        color: "crimson",
                        paddingX:"10px",
                        paddingY:"15px",
                        "&:hover": {
                            color: "crimson",
                           
                            border: 3.5,
                            borderStyle: "solid",
                            cursor: "pointer",
                        },
                        margin:1
                    }}
                >
                    <img src={item.img} width="40%" style={{ borderRadius: 10,display:"block",margin:"auto" }} />
                </Grid>
            );
        });
    };
    return (
        <Grid>
            <Navbar />
            <Grid
                container
                spacing={2}
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: 1,
                    paddingInline: "20px",
                }}
            >
                <Grid item xs={6} sx={{ marginTop: "2vh", marginBottom: "2vh" }}>
                    <Button
                        sx={{
                            borderRadius: 10,
                            backgroundImage: "linear-gradient(to top left,#48dbfb,#001e3c)",
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-evenly",
                            textAlign: "center",
                            alignItems: "center",
                        }}
                        onClick={() => navigate("/companyname")}
                        variant="contained"
                    >
                        <NavigateBeforeIcon />
                        Back
                    </Button>
                </Grid>
                <Grid
                    item
                    xs={6}
                    style={{
                        display: "flex",
                        justifyContent: "flex-end",
                        marginTop: "2vh",
                        marginBottom: "2vh",
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
                        }}
                        variant="contained"
                        onClick={() => navigate("/information")}
                    >
                        Skip
                        <NavigateNextIcon />
                    </Button>
                </Grid>
                <Component />
            </Grid>
            {mobile?"":tablet?"":<><br /><br /></>}
            <Footer />
        </Grid>
    );
};

export default ThemePage;
