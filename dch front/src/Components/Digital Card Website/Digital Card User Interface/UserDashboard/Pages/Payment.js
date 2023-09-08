import { Grid, Typography, Avatar } from '@mui/material'
import React from 'react'
import Navbar from '../UserComponents/Navbar'
import Footer from '../UserComponents/Footer'
import { Button, TextField, useTheme, useMediaQuery } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import upload from '../UserAssets/upload.png'
import { postData, serverURL } from '../../../../Services/NodeServices'
import BeenhereIcon from '@mui/icons-material/Beenhere';
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const Payment = () => {

  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down(600));
  const tablet = useMediaQuery(theme.breakpoints.down(960));

  const navigate = useNavigate()
  const cardId = window.localStorage.getItem("CardId")
  const userId = window.localStorage.getItem("userId")

  const [paytmNumber, setPaytmNumber] = useState('')
  const [googlePayNumber, setGooglePayNumber] = useState('')
  const [phonePeNumber, setPhonePeNumber] = useState('')
  const [bankName, setBankName] = useState('')
  const [accountHolderName, setAccountHolderName] = useState('')
  const [bankAccountNumber, setBankAccountNumber] = useState('')
  const [bankIfscCode, setBankIfscCode] = useState('')
  const [gst, setGst] = useState('')
  const [paytmQr, setPaytmQr] = React.useState({ url: `${upload}`, bytes: "" });
  const [googlePayQr, setGooglePayQr] = React.useState({ url: `${upload}`, bytes: "" });
  const [phonePeQr, setPhonePeQr] = React.useState({ url: `${upload}`, bytes: "" });

  const fetchCardDetail = async () => {
    var formData = new FormData()
    formData.append("customerId", userId)
    var result = await postData('carddetails/getcardDetails', formData, true)

    setPaytmNumber(result.data.paytmNumber)
    setPhonePeNumber(result.data.phonepenumber)
    setGooglePayNumber(result.data.Googlepaynumber)
    setAccountHolderName(result.data.Accountholdername)
    setBankAccountNumber(result.data.bankaccountnumber)
    setBankIfscCode(result.data.bankifsccode)
    setGst(result.data.gst)
    setBankName(result.data.bankname)
    setPaytmQr({ url: `${serverURL}/images/${result.data.paytmQrimage}`, bytes: " " });
    setPhonePeQr({ url: `${serverURL}/images/${result.data.phonepeQrimage}`, bytes: " " });
    setGooglePayQr({ url: `${serverURL}/images/${result.data.googlepayQrimage}`, bytes: " " });
  }
  React.useEffect(() => {

    fetchCardDetail()
  }, [])


  const handleSubmit = async () => {
    var formData = new FormData()
    formData.append('_id', cardId)
    formData.append('paytmNumber', paytmNumber)
    formData.append('Googlepaynumber', googlePayNumber)
    formData.append('phonepenumber', phonePeNumber)
    formData.append('bankname', bankName)
    formData.append('Accountholdername', accountHolderName)
    formData.append('bankaccountnumber', bankAccountNumber)
    formData.append('bankifsccode', bankIfscCode)
    formData.append('gst', gst)
    formData.append('paytmQrimage', paytmQr.bytes)
    formData.append('googlepayQrimage', googlePayQr.bytes)
    formData.append('phonepeQrimage', phonePeQr.bytes)
    var response = await postData("carddetails/updatepayment", formData, true);
    if (response.status) {
      navigate('/products')
    } else {

    }
  }

  const handlePaytmIcon = (event) => {
    setPaytmQr({
      url: URL.createObjectURL(event.target.files[0]),
      bytes: event.target.files[0],
    });
  };
  const handleGooglePayIcon = (event) => {
    setGooglePayQr({
      url: URL.createObjectURL(event.target.files[0]),
      bytes: event.target.files[0],
    });
  };
  const handlePhonePeIcon = (event) => {
    setPhonePeQr({
      url: URL.createObjectURL(event.target.files[0]),
      bytes: event.target.files[0],
    });
  };

  return (
    <Grid>
      <Navbar />
      <Grid container spacing={2} sx={{ display: "flex", justifyContent: "center", paddingInline: "20px" }}>
        <Grid item xs={4} sx={{ marginTop: "2vh", marginBottom: "2vh" }}>
          <Button sx={{
            borderRadius: 10,
            backgroundImage: "linear-gradient(to top left,#48dbfb,#001e3c)",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            textAlign: "center",
            alignItems: "center",
          }} onClick={() => navigate('/links')} variant='contained'><NavigateBeforeIcon />Back</Button>
        </Grid>
        <Grid item xs={4} sx={{display:'flex',justifyContent:"center", marginTop: "2vh", marginBottom: "2vh" }}>
                    <Button sx={{
                        borderRadius: 10,
                        backgroundImage: "linear-gradient(to top left,#48dbfb,#001e3c)",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-evenly",
                        textAlign: "center",
                        alignItems: "center",
                    }} onClick={() => handleSubmit()} variant='contained'>Save<BeenhereIcon /></Button>
                </Grid>
        <Grid item xs={4} sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: "2vh", marginBottom: "2vh" }}>
          <Button sx={{
            borderRadius: 10,
            backgroundImage: "linear-gradient(to top left,#48dbfb,#001e3c)",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            textAlign: "center",
            alignItems: "center",
          }} onClick={() => navigate('/products')} variant='contained'>Skip<NavigateNextIcon /></Button>
        </Grid>

        <Grid container spacing={2} sx={{ width: mobile ? "100%" : tablet ? "100%" : '50%', pl: "15px" }}>
          <Grid item xs={12}>
            <Typography textAlign='center' sx={{ fontSize: { xs: "1.3rem", md: 28 }, fontWeight: 'bold' }}>Payment Options</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography textAlign='center' sx={{ fontSize: { xs: "1.2rem", md: 28 }, fontWeight: 'bold' }}>Payment</Typography>
          </Grid>

          <Grid item xs={12} style={{ display: 'flex', justifyContent: "center", marginBottom: 8 }}>
            <TextField value={paytmNumber} onChange={(e) => setPaytmNumber(e.target.value)} sx={{ width: { xs: '100%', md: '60%' } }} label='Paytm Number(Optional)' />
          </Grid>
          <Grid item xs={12} style={{ display: 'flex', justifyContent: "center", marginBottom: 8 }}>
            <TextField value={googlePayNumber} onChange={(e) => setGooglePayNumber(e.target.value)} sx={{ width: { xs: '100%', md: '60%' } }} label='Google Pay(Optional)' />
          </Grid>
          <Grid item xs={12} style={{ display: 'flex', justifyContent: "center", marginBottom: 8 }}>
            <TextField value={phonePeNumber} onChange={(e) => setPhonePeNumber(e.target.value)} sx={{ width: { xs: '100%', md: '60%' } }} label='Phone Pe(Optional)' />
          </Grid>

          <Grid item xs={12}>
            <Typography textAlign='center' sx={{ fontSize: { xs: "1.2rem", md: 28 }, fontWeight: 'bold' }}>Bank Account Details</Typography>
          </Grid>
          <Grid item xs={12} style={{ display: 'flex', justifyContent: "center", marginBottom: 8 }}>
            <TextField value={bankName} onChange={(e) => setBankName(e.target.value)} sx={{ width: { xs: '100%', md: '60%' } }} label='Bank Name(Optional)' />
          </Grid>
          <Grid item xs={12} style={{ display: 'flex', justifyContent: "center", marginBottom: 8 }}>
            <TextField value={accountHolderName} onChange={(e) => setAccountHolderName(e.target.value)} sx={{ width: { xs: '100%', md: '60%' } }} label='Account Holder Name(Optional)' />
          </Grid>
          <Grid item xs={12} style={{ display: 'flex', justifyContent: "center", marginBottom: 8 }}>
            <TextField value={bankAccountNumber} onChange={(e) => setBankAccountNumber(e.target.value)} sx={{ width: { xs: '100%', md: '60%' } }} label='Bank Account Number(Optional)' />
          </Grid>

          <Grid item xs={12} style={{ display: 'flex', justifyContent: "center", marginBottom: 8 }}>
            <TextField value={bankIfscCode} onChange={(e) => setBankIfscCode(e.target.value)} sx={{ width: { xs: '100%', md: '60%' } }} label='Bank IFSC Code(Optional)' />
          </Grid>
          <Grid item xs={12} style={{ display: 'flex', justifyContent: "center", marginBottom: 8 }}>
            <TextField value={gst} onChange={(e) => setGst(e.target.value)} sx={{ width: { xs: '100%', md: '60%' } }} label='Gst(Optional)' />
          </Grid>

          <Grid item xs={12}>
            <Typography textAlign='center' sx={{ fontSize: { xs: "1.2rem", md: 28 }, fontWeight: 'bold' }}>Qr Images</Typography>
          </Grid>

          <Grid item xs={12} md={4} sx={{ display: 'flex', flexDirection: 'column' }} >
            <Button
              style={{ display: 'flex', flexDirection: 'column', fontSize: 12.5, fontWeight: 'bold' }}

              variant="outlined"
              component="label"
            >
              <Avatar
                fullWidth
                variant="rounded"
                alt="Remy Sharp"
                src={paytmQr.url}
                sx={{ width: 100, height: 'auto' }}
              />
              Upload Paytm Qr
              <input
                hidden
                accept="image/*"

                onChange={(event) => handlePaytmIcon(event)}
                multiple
                type="file"
              />
            </Button>
          </Grid>
          <Grid item xs={12} md={4} sx={{ display: 'flex', flexDirection: 'column' }} >
            <Button
              style={{ display: 'flex', flexDirection: 'column', fontSize: 12.5, fontWeight: 'bold' }}

              variant="outlined"
              component="label"
            >
              <Avatar
                fullWidth
                variant="rounded"
                alt="Remy Sharp"
                src={googlePayQr.url}
                sx={{ width: 100, height: 'auto' }}
              />
              Upload Google Pay Qr
              <input
                hidden
                accept="image/*"

                onChange={(event) => handleGooglePayIcon(event)}
                multiple
                type="file"
              />
            </Button>
          </Grid>
          <Grid item xs={12} md={4} sx={{ display: 'flex', justifyContent: "center", flexDirection: 'column' }} >
            <Button
              style={{ display: 'flex', flexDirection: 'column', fontSize: 12.5, fontWeight: 'bold' }}

              variant="outlined"
              component="label"
            >
              <Avatar
                fullWidth
                variant="rounded"
                alt="Remy Sharp"
                src={phonePeQr.url}
                sx={{ width: 100, height: 'auto' }}
              />
              Upload Phone Pe Qr
              <input
                hidden
                accept="image/*"

                onChange={(event) => handlePhonePeIcon(event)}
                multiple
                type="file"
              />
            </Button>
          </Grid>
          <Grid item xs={12} style={{ display: 'flex', justifyContent: "center", marginBottom: 8 }}>
            <Button sx={{
              borderRadius: 10,
              backgroundImage: "linear-gradient(to top left,#48dbfb,#001e3c)",
              display: "flex",
              flexDirection: "row",
              paddingInline:"30px",
              justifyContent: "space-evenly",
              textAlign: "center",
              alignItems: "center",
            }} variant='contained' onClick={() => handleSubmit()}>Next</Button>
          </Grid>
        </Grid>
      </Grid>
      <Footer />
    </Grid>
  )
}

export default Payment
