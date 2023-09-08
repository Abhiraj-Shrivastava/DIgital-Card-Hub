import React, { useState } from 'react';
import axios from 'axios';
import { postData } from '../ApiServices/ServerServices';
import { TextField } from '@mui/material';
const Clickpay = () => {
  const [mid,setMid]=useState('')
  const apiUrl = 'http://localhost:5000/api/proxy'; // Your backend endpoint
  const requestBody ={
    "merchantId": "INDIABUZZONLINE",
    "merchantTransactionId": `${mid}`,
    "merchantUserId": "MUID123",
    "amount": 100,
    "redirectUrl": "https://webhook.site/1aa944c0-8c4d-48e0-a4fa-275c490f3c0b",
    "redirectMode": "POST",
    "callbackUrl": "https://webhook.site/1aa944c0-8c4d-48e0-a4fa-275c490f3c0b",
    "mobileNumber": "7225051627",
    "paymentInstrument": {
      "type": "PAY_PAGE"
    }
  }
  const handleClick = async() => {
   const response=await postData('api/proxy',requestBody)
   console.log("bodyyyyyy",response.data.instrumentResponse.redirectInfo.url)
   window.open(response.data.instrumentResponse.redirectInfo.url)
  
  };

  return (
    <div>
    <TextField value={mid} onChange={(e)=>setMid(e.target.value)}/>
    <button onClick={handleClick}>Click to Pay</button>
    </div>
  );
};

export default Clickpay;
