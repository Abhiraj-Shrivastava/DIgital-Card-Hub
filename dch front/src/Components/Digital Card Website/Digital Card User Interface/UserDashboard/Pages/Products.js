import { Grid, Button, Typography, TextField, Avatar, IconButton, useTheme, useMediaQuery } from '@mui/material'
import React, { useEffect } from 'react'
import Navbar from '../UserComponents/Navbar'
import Footer from '../UserComponents/Footer'
import { useNavigate } from 'react-router-dom'
import upload from '../UserAssets/upload.png'
import { useState } from 'react'
import { postData, serverURL } from '../../../../Services/NodeServices'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import BeenhereIcon from '@mui/icons-material/Beenhere';
import Swal from 'sweetalert2'
const Products = () => {

  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down(600));
  const tablet = useMediaQuery(theme.breakpoints.down(960));

  const navigate = useNavigate()
  const [count,setCount]=useState()
  const [productData, setProductData] = useState(Array(4).fill(null));
  const [data, setData] = useState(false)
  const [temp, setTemp] = useState()
 

  const cardId = window.localStorage.getItem("CardId")
  const userId = window.localStorage.getItem("userId")
  const oldImg = []
  const fetchCardDetail = async () => {
    var formData = new FormData()
    formData.append("customerId", userId)
    var result = await postData('carddetails/getcardDetails', formData, true)
    console.log(result.data.products)
    if (result.data.products.length == 0) {
     
      setProductData(Array(4).fill(null))
      setData(false)
    }
    else {
      setData(true)
      let productData = [...result.data.products];


      if (productData.length < 4) {
        const emptyProduct = {
          productName: '',
          productimage: '',
        };

        const emptyProductCount = 4 - productData.length;
        productData = [...productData, ...Array(emptyProductCount).fill(emptyProduct)];
      }

      setProductData(productData);
      const newData = [...productData];

      productData.map((item, index) => {
        if(item!=null){
      
        oldImg[index] = { productimg: item.productimage }
        setTemp(oldImg)
        newData[index] = { ...newData[index], productimage: { url: `${serverURL}/images/${item.productimage}` } };

        setProductData(newData);
        }

      })
    }


  }
  React.useEffect(() => {

    fetchCardDetail()
  }, [])

  const handleProductNameChange = (index, value) => {
    const newData = [...productData];
    newData[index] = { ...newData[index], productName: value };
    setProductData(newData);
  };

  const handleProductImageChange = (index, event) => {
    const newData = [...productData];
    newData[index] = { ...newData[index], productimage: { url: URL.createObjectURL(event.target.files[0]), bytes: event.target.files[0] } };
    setProductData(newData);
  };

  const handleSubmit = async () => {
    var formData = new FormData
    formData.append("_id", cardId)
    let productsName = []
    productData.map((item, index) => {

      if (item != null) {

        productsName[index] = { index: index, productName: item.productName }

        formData.append(`productImage${index}`, item.productimage.bytes)
      }

    })
    if (temp != undefined) {
      temp.map((item, index) => {
        productsName[index].productimage = item.productimg

      })
    }
    console.log('update', productsName)
    formData.append('productName', JSON.stringify(productsName))
    formData.append('oldimg', JSON.stringify(temp))



    var response = await postData("carddetails/updateproduct", formData, true);
    if (response.status == true) {
      navigate('/ecommerce')
    }


  }

  const handleDelete = async (id) => {
    alert(id)
    var formData = new FormData
    formData.append('cardId', cardId)
    formData.append('productId', id)
    var response = await postData("carddetails/deleteproduct", formData, true);
    if (response.status == true) {
      fetchCardDetail()
      window.location.reload();
    }
  }

  const handleAdd=()=>{

    const emptyProduct = {
      productName: '',
      productimage: '',
    };

    if(productData[0]!=null && productData[1]!=null && productData[2]!=null && productData[3]!=null){
    
    
      setProductData([...productData,...Array(1).fill(emptyProduct)])
   }else {
      Swal.fire({
          position: 'center',
          icon: 'warning',
          title: 'Fill The Empty Columns',
          showConfirmButton: false,
          timer: 1500
      })
   }
  }
  return (
    <Grid>
      <Navbar />
      <Grid container spacing={2} sx={{ display: 'flex', justifyContent: 'center', paddingX: "20px" }}>
        <Grid item xs={4} sx={{ marginTop: "2vh", marginBottom: '2vh' }}>
          <Button sx={{
            borderRadius: 10,
            backgroundImage: "linear-gradient(to top left,#48dbfb,#001e3c)",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            textAlign: "center",
            alignItems: "center",
          }} onClick={() => navigate('/payment')} variant='contained'><NavigateBeforeIcon />Back</Button>
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
          }} onClick={() => navigate('/ecommerce')} variant='contained'>Skip<NavigateNextIcon /></Button>
        </Grid>
        <Grid container spacing={2} sx={{ display: 'flex', justifyContent: 'center', width: '90%' }}>
          <Grid item xs={12}>
            <Typography textAlign='center' sx={{ fontSize: { xs: "1.4rem", md: 28 }, fontWeight: 'bold', mt: mobile ? "2vh" : tablet ? "2vh" : "" }}>Products / Services</Typography>
          </Grid>
          {productData.map((item, index) => {
            return (<Grid
              key={index}
              item
              xs={mobile?12:tablet?5:2.5}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                alignItems: 'center',
                border: 1,
                marginLeft: 4,
                marginTop: 4,
                paddingX: "15px"
              }}
            >
              <Grid container spacing={2} style={{ display: "flex", height: 60 }}>
                <Grid item xs={9} style={{ display: 'flex', alignItems: 'center' }}>
                  <Typography >{index + 1}</Typography>
                </Grid>
                <Grid item xs={3} style={{ display: 'flex', alignItems: 'center' }}>
                  {productData[index]?.productName == '' || data == false ? <></> : <IconButton onClick={() => handleDelete(item._id)}><DeleteOutlineIcon /></IconButton>}
                </Grid>
              </Grid>
              <TextField
                sx={{ width: '100%' }}
                label="Product/Service Name"
                value={productData[index]?.productName || ''}
                onChange={(event) => handleProductNameChange(index, event.target.value)}
              />
              <Button
                style={{ display: 'flex', flexDirection: 'column', fontSize: 12.5, fontWeight: 'bold' }}
                variant="text"
                component="label"
              >
                {/* {alert(JSON.stringify(productData[index]))} */}
                <Avatar
                  fullWidth
                  variant="rounded"
                  alt="Remy Sharp"
                  src={productData[index]?.productimage == null ? '' : productData[index]?.productimage.url}
                  sx={{ width: 100, height: 100 }}
                />
                Upload Product Image
                <input
                  hidden
                  accept="image/*"
                  onChange={(event) => handleProductImageChange(index, event)}
                  type="file"
                />
              </Button>
            </Grid>
            )
          })

          }

          <Grid item xs={12} style={{ display: 'flex', justifyContent: "center", marginBottom: 8 }}>
            <Button sx={{
              borderRadius: 10,
              backgroundImage: "linear-gradient(to top left,#48dbfb,#001e3c)",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              paddingX:"30px",
              textAlign: "center",
              alignItems: "center",
            }} variant='contained' onClick={() => handleAdd()}>Add More Products</Button>
          </Grid>
          <Grid item xs={12} style={{ display: 'flex', justifyContent: "center", marginBottom: 8 }}>
            <Button sx={{
              borderRadius: 10,
              backgroundImage: "linear-gradient(to top left,#48dbfb,#001e3c)",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              paddingX:"30px",
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

export default Products
