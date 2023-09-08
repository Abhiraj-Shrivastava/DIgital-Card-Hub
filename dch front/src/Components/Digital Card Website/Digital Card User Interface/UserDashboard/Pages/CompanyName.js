import {
    Button,
    Container,
    Grid,
    TextField,
    Typography,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import React, { useState } from "react";
import Navbar from "../UserComponents/Navbar";
import { useLocation } from "react-router-dom";
import Footer from "../UserComponents/Footer";
import { useNavigate } from "react-router-dom";
import { postData } from "../../../../Services/NodeServices";
import Swal from "sweetalert2";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
const CompanyName = () => {
    const theme = useTheme();
    const mobile = useMediaQuery(theme.breakpoints.down(600));
    const tablet = useMediaQuery(theme.breakpoints.down(960));

    const location = useLocation();
    const navigate = useNavigate();
    const userId = window.localStorage.getItem("userId");
    const [companyName, setCompanyName] = useState("");
    const [cardId, setCardId] = useState("");
    const date = new Date().toLocaleDateString();
    let draftName = "";
    const fetchCardDetail = async () => {
        var formData = new FormData();
        formData.append("customerId", userId);
        var result = await postData("carddetails/getcardDetails", formData, true);
        if (result.data != undefined) {
            setCompanyName(result.data.companyname);
            window.localStorage.setItem("CardId", result.data._id);
            setCardId(result.data._id);
            draftName = result.data.companyname;
        }
    };
    React.useEffect(() => {
        fetchCardDetail();
    }, []);
    const handleSubmit = async () => {
        var formData = new FormData();
        formData.append("companyname", companyName);
        formData.append("companyId", companyName);
        formData.append("customerId", userId);
        formData.append("paymentStatus", "Trial Period");
        formData.append("cardStatus", "Active");
        formData.append("createdDate", date);
        formData.append("cardViewCount", 0);

        var result = await postData("carddetails/addcardDetails", formData, true);
        console.log(result);
        if (result.status) {
            window.localStorage.setItem("CardId", result.data._id);
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Company Name Submitted",
                showConfirmButton: false,
                timer: 1500,
            });
            navigate("/themepage");
        } else {
            Swal.fire({
                position: "center",
                icon: "error",
                title: "Fail to Submit",
                showConfirmButton: false,
                timer: 1500,
            });
        }
    };
    const handleUpdate = async () => {
        var formData = new FormData();
        formData.append("_id", cardId);
        formData.append("companyname", companyName);

        var result = await postData(
            "carddetails/updateCompanyName",
            formData,
            true
        );
        console.log(result);
        if (result.status) {
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Company Name Updated",
                showConfirmButton: false,
                timer: 1500,
            });
            navigate("/themepage");
        } else {
            Swal.fire({
                position: "center",
                icon: "error",
                title: "Fail to Update",
                showConfirmButton: false,
                timer: 1500,
            });
        }
    };
    return (
        <Grid>
            <Navbar />
            <Container maxWidth="xl">
                <Grid container spacing={2} sx={{ paddingInline: "20px" }}>
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
                            onClick={() => navigate("/userDashboard")}
                            variant="contained"
                        >
                            <NavigateBeforeIcon />
                            Back
                        </Button>
                    </Grid>
                    <Grid
                        item
                        xs={6}
                        sx={{
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
                                justifyContent: "space-between",
                                textAlign: "center",
                                alignItems: "center",
                            }}
                            onClick={() => navigate("/themepage")}
                            variant="contained"
                        >
                            Skip<NavigateNextIcon />
                        </Button>
                    </Grid>
                    <Grid item xs={12} sx={{ mt: mobile ? "3vh" : tablet ? "3.5vh" : "" }}>
                        <Typography textAlign="center" sx={{ fontSize: { xs: "1.3rem", md: 28 }, fontWeight: 600 }}>
                            Business or Company Name
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        style={{ display: "flex", justifyContent: "center", marginBottom: 8 }}
                    >
                        <TextField
                            value={companyName}
                            onChange={(e) => setCompanyName(e.target.value)}
                            sx={{ width: mobile ? "80%" : "30%" }}
                            label="Company Name"
                            required
                        />
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        style={{ display: "flex", justifyContent: "center", marginBottom: 8 }}
                    >
                        <Button
                            variant="contained"
                            sx={{
                                borderRadius: 10,
                                backgroundImage: "linear-gradient(to top left,#48dbfb,#001e3c)",
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-evenly",
                                textAlign: "center",
                                alignItems: "center",
                            }}
                            onClick={() => (cardId == "" ? handleSubmit() : handleUpdate())}
                        >
                            Submit and Next
                        </Button>
                    </Grid>
                </Grid>
            </Container>
            {mobile ? <><br /><br /><br /></> : tablet ? <><br /><br /><br /></> : <></>}
            <Footer />
        </Grid>
    );
};

export default CompanyName;
