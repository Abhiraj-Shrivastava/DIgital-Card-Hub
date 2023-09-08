import { Grid,Button } from "@mui/material";
import React from "react";
import { Pricing } from "react-pricing";
import { useNavigate } from "react-router-dom";
import { postData,getData } from "../../../Services/NodeServices";
const Packages = () => {
    const navigate = useNavigate();
    function generateRandomCharacter() {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const randomIndex = Math.floor(Math.random() * characters.length);
        return characters[randomIndex];
      }
      
      // Function to generate a random 8-character alphanumeric string
      function generateRandomString() {
        let randomString = '';
        for (let i = 0; i < 8; i++) {
          randomString += generateRandomCharacter();
        }
        return randomString;
      }
      
      // Generate a random string
     

   
      const handlePay= async(price) => {
        let randomString = generateRandomString();
     
        const requestBody ={
            "merchantId": "DIGITALCARDONLINE",
            "merchantTransactionId": `${randomString}`,
            "merchantUserId": "MUID123",
            "amount": price*100,
            "redirectUrl": `https://digitalcardhub.in/#/confirmation/${randomString}`,
            "redirectMode": "POST",
            "callbackUrl": `https://digitalcardhub.in/#/confirmation/${randomString}`,
            "mobileNumber": "8889430333",
            "paymentInstrument": {
              "type": "PAY_PAGE"
            }
          }
       const response=await postData('api/proxy',requestBody)
       console.log("bodyyyyyy",response)
       
       window.open(`${response.data.instrumentResponse.redirectInfo.url}`)
       
      
      };
      

  return (
    <Grid>
      <Grid
        container
        spacing={2}
        sx={{ display: "flex", justifyContent: "center" }}
      >
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
            onClick={() => navigate("/designUpload")}
            variant="contained"
          >
           Back
          </Button>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Pricing
            data={[
                { text: "1 Year Subscription", value: true },
                { text: "Digital Card By Url", value: true },
                { text: "Premium NFC Enabled Physical Card", value: false },
                { text: "Full Dashboard Access", value: false },
                        ]}
            price={499}
            duration="y"
            background="linear-gradient(to right, #fff,grey, #fff)"
            shadow="#96e6a1"
            currency="₹"
            buttonContent={<Button onClick={()=>handlePay(499)} fullWidth size='large' sx={{fontSize:18,color:'#000',"&:hover":{color:"#fff"},height:80}}>PAY NOW</Button>}
            subTitle="Limited Usage"
            priceText="Digital-First Experience: 1-Year Plan Unleashing Virtual Possibilities"
            headerText="Silver"
            
            
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Pricing
            data={[
                { text: "1 Year Subscription", value: true },
                { text: "Digital Card By Url", value: true },
                { text: "Premium NFC Enabled Physical Card", value: true },
                { text: "Full Dashboard Access", value: true },
                        ]}
            price={799}
            duration="y"
            background="linear-gradient(to right,#bf953f,#fcf6ba,#b38728,#fbf5b7,#aa771c)"
            shadow="#96e6a1"
            currency="₹"
            buttonContent={<Button onClick={()=>handlePay(799)} fullWidth size='large' sx={{fontSize:18,color:'#000',"&:hover":{color:"#fff"},height:80}}>PAY NOW</Button>}
            subTitle="Premium Usage"
            priceText="Unleash the Full Potential: Experience Premium Benefits"
            headerText="Gold"
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Pricing
            data={[
              { text: "2 Year Subscription", value: true },
              { text: "Digital Card By Url", value: true },  
              { text: "Premium NFC Enabled Physical Card", value: true },
              { text: "Full Dashboard Access", value: true },
            ]}
            price={999}
            duration="y"
            background="linear-gradient(to right, #cfd6e6,#fff, #cfd6e6)"
            shadow="#96e6a1"
            currency="₹"
            subTitle="Beneficial Plan"
            buttonContent={<Button onClick={()=>handlePay(999)} fullWidth size='large' sx={{fontSize:18,color:'#000',"&:hover":{color:"#fff"},height:80}}>PAY NOW</Button>}
           
            priceText="Budget-Friendly 2-Year Plan: Affordable Long-Term Value"
            headerText="Platinum"
        
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Packages;
