import { Grid, Typography, Paper, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getData } from "../../../Services/NodeServices";
import { useParams } from "react-router-dom";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { useNavigate } from "react-router-dom";
import HourglassTopIcon from '@mui/icons-material/HourglassTop';
import ErrorIcon from '@mui/icons-material/Error';
import { postData } from "../../../Services/NodeServices";

const PaymentConfirmation = () => {
  const { tmid } = useParams();
  const navigate=useNavigate()
  const [result, setResult] = useState();
  const [status, setStatus] = useState('');
  const [amount, setAmount] = useState(0);

  const cardId = window.localStorage.getItem("CardId");
   

  const handleCheck = async () => {
    const response = await getData(`/check-status?tmid=${tmid}`);
    console.log("bodyyyyyy", response);
    setResult(response);
    setStatus(response.code);
    setAmount(response.data.amount/100);

    if(response.code == "PAYMENT_SUCCESS"){

      var formData=new FormData();
      formData.append("_id",cardId)
      formData.append("paymentStatus","Paid")
      formData.append("createdDate",new Date().toLocaleDateString())
      formData.append("packageAmount",response.data.amount/100)
      var result = await postData("carddetails/updatepaymentstatus", formData, true);       
    }else if(response.code == "PAYMENT_PENDING"){
      var formData=new FormData();
      formData.append("_id",cardId)
      formData.append("paymentStatus","Pending")
      formData.append("createdDate",new Date().toLocaleDateString())

      formData.append("packageAmount",response.data.amount/100)
      var result = await postData("carddetails/updatepaymentstatus", formData, true);       
    }else{

    }


    
  };
  useEffect(() => {
    handleCheck();
  }, []);
  return (
    <Grid sx={{ display: "flex", justifyContent: "center" }}>
      <Paper
        elevation={6}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: 600,
          borderRadius: 4,
          height: 400,
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
          {status == "PAYMENT_SUCCESS" ? <CheckCircleOutlineIcon fontSize='large'/> :status=="PAYMENT_PENDING" ?<HourglassTopIcon fontSize='large'/>:<ErrorIcon fontSize='large'/>}
        
          </Grid>
          <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
                <Typography>
              {status == "PAYMENT_SUCCESS"
                ? "Your Payment is Successful":status=="PAYMENT_PENDING"?"Your Payment is in Pending State"
                : "Payment Failed"}
            </Typography>
          </Grid>
          <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
          {amount==499 || status!="PAYMENT_SUCCESS"?
               <Button variant='contained' onClick={()=>navigate('/userDashboard')}>Go To Home Page</Button>
          :
              
              <Button variant='contained' onClick={()=>navigate('/addresspage')}>Fill The Delivery Details</Button>
          } 
              
               </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default PaymentConfirmation;
