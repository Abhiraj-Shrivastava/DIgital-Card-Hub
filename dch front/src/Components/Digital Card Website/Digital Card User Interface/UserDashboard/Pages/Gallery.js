import { Grid, Button, Typography, IconButton, TextField, Avatar, useTheme, useMediaQuery } from '@mui/material'
import React from 'react'
import Navbar from '../UserComponents/Navbar'
import Footer from '../UserComponents/Footer'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { postData, serverURL } from '../../../../Services/NodeServices'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import BeenhereIcon from '@mui/icons-material/Beenhere';
import Swal from 'sweetalert2'
const Gallery = () => {

  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down(600));
  const tablet = useMediaQuery(theme.breakpoints.down(960));

  const navigate = useNavigate()
  const [gallery, setGallery] = useState(Array(4).fill(null));
  const [data, setData] = useState(false)
  const [companyId,setCompanyId]=useState('')
  const [temp, setTemp] = useState()

  const cardId = window.localStorage.getItem("CardId")
  const userId = window.localStorage.getItem("userId")
  const oldImg = []
  const fetchCardDetail = async () => {
    var formData = new FormData()
    formData.append("customerId", userId)
    var result = await postData('carddetails/getcardDetails', formData, true)
    console.log(result.data.companyId)
    if (result.data.gallery.length == 0) {
      setGallery(Array(4).fill(null))
      setCompanyId(result.data.companyId)
    }
    else {
      setData(true)
      let gallery = [...result.data.gallery];


      if (gallery.length < 4) {
        const emptyProduct = {
          image: ''
        };

        const emptyProductCount = 4 - gallery.length;
        gallery = [...gallery, ...Array(emptyProductCount).fill(emptyProduct)];
      }

      setGallery(gallery);
      const newData = [...gallery];

      gallery.map((item, index) => {
        if(item!=null){
        oldImg[index] = { image: item.image }
        setTemp(oldImg)
        newData[index] = { ...newData[index], image: { url: `${serverURL}/images/${item.image}` } };

        setGallery(newData);
        }
      })
    }


  }
  React.useEffect(() => {

    fetchCardDetail()
  }, [])


  const handleGalleryImageChange = (index, event) => {
    const newData = [...gallery];
    newData[index] = { ...newData[index], image: { url: URL.createObjectURL(event.target.files[0]), bytes: event.target.files[0] } };
    setGallery(newData);
  };

  const handleSubmit = async () => {
   
    var formData = new FormData

    formData.append("_id", cardId)
    let productsName = []
    gallery.map((item, index) => {

      if (item != null) {

        productsName[index] = { index: index }

        formData.append(`image${index}`, item.image.bytes)
      }

    })

    if (temp != undefined) {
      temp.map((item, index) => {


        productsName[index].image = item.image

      })
    }
    formData.append('gallery', JSON.stringify(productsName))
    formData.append('oldimg', JSON.stringify(temp))



    var response = await postData("carddetails/updategallery", formData, true);
    if (response.status == true) {
      navigate(`/preview`)
    }


  }

  const handleDelete = async (id) => {
    var formData = new FormData
    formData.append('cardId', cardId)
    formData.append('galleryId', id)
    var response = await postData("carddetails/deletegallery", formData, true);
    if (response.status == true) {
      fetchCardDetail()
      window.location.reload()
    }
  }

  const handleAdd=()=>{

    const emptyProduct = {
      image: ''
    };

 if(gallery[0]!=null && gallery[1]!=null && gallery[2]!=null && gallery[3]!=null){


    setGallery([...gallery,...Array(1).fill(emptyProduct)])
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
      <Grid container spacing={2} sx={{ display: 'flex', justifyContent: 'center',paddingX:"20px" }}>
        <Grid item xs={4} style={{ marginTop: "2vh", marginBottom: "2vh" }}>
          <Button sx={{
            borderRadius: 10,
            backgroundImage: "linear-gradient(to top left,#48dbfb,#001e3c)",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            textAlign: "center",
            alignItems: "center",
          }} onClick={() => navigate('/ecommerce')} variant='contained'><NavigateBeforeIcon/>Back</Button>
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
        <Grid item xs={4} style={{ display: 'flex', justifyContent: 'flex-end', marginTop: "2vh", marginBottom: "2vh" }}>
          <Button sx={{
            borderRadius: 10,
            backgroundImage: "linear-gradient(to top left,#48dbfb,#001e3c)",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            textAlign: "center",
            alignItems: "center",
          }} onClick={() => navigate(`/preview`)} variant='contained'>Preview<NavigateNextIcon/></Button>
        </Grid>

        <Grid container spacing={2} sx={{ display: 'flex', justifyContent: 'center', width: '90%' }}>
          <Grid item xs={12}>
            <Typography textAlign='center' sx={{ fontSize: { xs: "1.4rem", md: 28 }, fontWeight: 'bold' }}>Image Gallery</Typography>
          </Grid>
          {gallery.map((item, index) => {
             //{alert(item)}
            return (<Grid
              key={index}
              item
              xs={mobile?12:tablet?5:3}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                alignItems: 'center',
                border: 1,
                marginLeft: 4,
                marginTop: 4,
                paddingX:"10px"
              }}
            >
              <Grid container spacing={2} style={{ display: "flex", height: 60 }}>
                <Grid item xs={9} style={{ display: 'flex', alignItems: 'center' }}>
                  <Typography >{index + 1}</Typography>

                </Grid>
                <Grid item xs={3} style={{ display: 'flex', alignItems: 'center' }}>
                  {item==null ? <></> : <IconButton onClick={() => handleDelete(item._id)}><DeleteOutlineIcon /></IconButton>}
                </Grid>

              </Grid>
              <Button
                style={{ display: 'flex', flexDirection: 'column', fontSize: 12.5, fontWeight: 'bold' }}
                variant="text"
                component="label"
              >
                {/* {alert(JSON.stringify(gallery[index]))} */}
                <Avatar
                  fullWidth
                  variant="rounded"
                  alt="Remy Sharp"
                  src={gallery[index]?.image == null ? '' : gallery[index]?.image.url}
                  sx={{ width: 100, height: 100 }}
                />
                Upload Gallery Image
                <input
                  hidden
                  accept="image/*"
                  onChange={(event) => handleGalleryImageChange(index, event)}
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
          }} variant='contained' onClick={() => handleSubmit()}>Preview</Button>
          </Grid>


        </Grid>
      </Grid>
      <Footer />

    </Grid>
  )
}

export default Gallery
