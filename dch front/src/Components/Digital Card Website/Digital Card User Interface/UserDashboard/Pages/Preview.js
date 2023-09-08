import { Button, Grid } from '@mui/material'
import React from 'react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { postData } from '../../../../Services/NodeServices'
import Theme1 from '../Themes/Theme1';
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Theme2 from '../Themes/Theme2'
import Theme4 from '../Themes/Theme4'
import Theme6 from '../Themes/Theme6'
import Theme5 from '../Themes/Theme5'
import Theme3 from '../Themes/Theme3'
import Theme7 from '../Themes/Theme7'
import Swal from 'sweetalert2'
const Preview = () => {
    let navigate = useNavigate()

    const [data, setData] = useState([]);
    const [products, setProducts] = useState([]);
    const [ecommerce, setEcommerce] = useState([]);
    const [gallery, setGallery] = useState([]);
    const userId = window.localStorage.getItem("userId")
    React.useEffect(() => {
        fetchCardDetail();

    }, []);

    const fetchCardDetail = async () => {
        var formData = new FormData();
        formData.append("customerId", userId)
        var result = await postData('carddetails/getcardDetails', formData, true)
        if (result.data != undefined) {
            console.log(result.data.YoutubeVideoLink2 == "undefined");
            setData(result.data);
            setProducts(result.data.products);
            setEcommerce(result.data.ecommerce);
            setGallery(result.data.gallery);

            if (result.data.themeid == undefined) {
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: 'Choose the Theme First',
                    showConfirmButton: false,
                    timer: 1500
                })
                navigate('/themepage')
            }
            updateViewCount(result.data._id, result.data.cardViewCount)
        }
    };
    const updateViewCount = async (id, view) => {
        var formData = new FormData();
        formData.append("_id", id);
        formData.append("cardViewCount", view + 1);
        var result = await postData(
            "carddetails/updateViewCount",
            formData,
            true
        );
        if (result.status == undefined) {
            navigate('/digitalcardlogin')
        }
        if (result.data != undefined) {
            console.log(result)
            console.log(result.data.YoutubeVideoLink2 == "undefined");
            setData(result.data);

            setProducts(result.data.products);
            setEcommerce(result.data.ecommerce);
            setGallery(result.data.gallery);
            if (result.data.themeid == undefined) {
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: 'Choose the Theme First',
                    showConfirmButton: false,
                    timer: 1500
                })
                navigate('/themepage')
            }
        }
    };


    return (
        <Grid>
            <Grid sx={{ position: "absolute", left: 10, top: 10 }}><Button sx={{
                borderRadius: 10,
                backgroundImage: "linear-gradient(to top left,#48dbfb,#001e3c)",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
                textAlign: "center",
                alignItems: "center",
            }} onClick={() => navigate('/gallery')} variant='contained'><NavigateBeforeIcon />Back</Button></Grid>
            <Grid>
                {data.themeid == 1 ? <Theme1 data={data} products={products} gallery={gallery} ecommerce={ecommerce} /> : data.themeid == 2 ? <Theme2 data={data} products={products} gallery={gallery} ecommerce={ecommerce} /> : data.themeid == 3 ? <Theme3 data={data} products={products} gallery={gallery} ecommerce={ecommerce} /> : data.themeid == 4 ? <Theme4 data={data} products={products} gallery={gallery} ecommerce={ecommerce} /> : data.themeid == 6 ? <Theme6 data={data} products={products} gallery={gallery} ecommerce={ecommerce} /> : data.themeid == 5 ? <Theme5 data={data} products={products} gallery={gallery} ecommerce={ecommerce} /> : data.themeid == 7 ? <Theme7 data={data} products={products} gallery={gallery} ecommerce={ecommerce} /> : ''}

            </Grid>
            <Grid sx={{ position: "absolute", right: 10, top: 10 }}><Button sx={{
                borderRadius: 10,
                backgroundImage: "linear-gradient(to top left,#48dbfb,#001e3c)",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
                textAlign: "center",
                alignItems: "center",
            }} onClick={() => navigate('/userdashboard')} variant='contained'><NavigateNextIcon />Go to Home</Button></Grid>

        </Grid>
    )
}

export default Preview
