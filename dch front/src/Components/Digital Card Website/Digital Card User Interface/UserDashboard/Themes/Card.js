import React from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { postData } from '../../../../Services/NodeServices';
import Theme1 from './Theme1';
import { Grid } from '@mui/material';
import NFCCard from './NFCCard';
import { useNavigate } from 'react-router-dom';
import Theme2 from './Theme2';
import Theme4 from './Theme4';

import Theme6 from './Theme6';
import Theme5 from './Theme5';
import Theme3 from './Theme3';
import Theme7 from './Theme7';
import Swal from 'sweetalert2';
const Card = () => {
    let navigate = useNavigate()
    const { companyId } = useParams();
    const [data, setData] = useState([]);
    const [products, setProducts] = useState([]);
    const [ecommerce, setEcommerce] = useState([]);
    const [gallery, setGallery] = useState([]);

    React.useEffect(() => {
        fetchCardDetail();

    }, []);

    const fetchCardDetail = async () => {
        var formData = new FormData();
        formData.append("companyId", companyId);
        var result = await postData(
            "carddetails/getcardDetailsbycompanyid",
            formData,
            true
        );
        if (result.status == undefined || result.data.cardStatus=="inActive") {
            navigate('/digitalcardlogin')

        }
        if (result.data != undefined) {
            console.log(result.data.YoutubeVideoLink2 == "undefined");
            setData(result.data);
            setProducts(result.data.products);
        setEcommerce(result.data.ecommerce);
            setGallery(result.data.gallery);
           
            if(result.data.themeid==undefined){
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: 'Choose the Theme First',
                    showConfirmButton: false,
                    timer: 1500
            })
                navigate('/digitalcardlogin')
            }
            updateViewCount(result.data._id,result.data.cardViewCount)
        }
    };
    const updateViewCount = async (id,view) => {
        var formData = new FormData();
        formData.append("_id", id);
        formData.append("cardViewCount", view+1);
        var result = await postData(
            "carddetails/updateViewCount",
            formData,
            true
        );
        if (result.status == undefined ) {
            navigate('/digitalcardlogin')
        }
        if (result.data != undefined) {
            console.log(result)
            console.log(result.data.YoutubeVideoLink2 == "undefined");
            setData(result.data);
            setProducts(result.data.products);
            setEcommerce(result.data.ecommerce);
            setGallery(result.data.gallery);
           
            if(result.data.themeid==undefined){
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: 'Choose the Theme First',
                    showConfirmButton: false,
                    timer: 1500
            })
                navigate('/digitalcardlogin')
            }
        }
    };


    return (
        <Grid style={{width:"100%"}}>
            
               {data.themeid == 1 ? <Theme1 data={data} products={products} gallery={gallery} ecommerce={ecommerce} /> :data.themeid == 2?<Theme2 data={data} products={products} gallery={gallery} ecommerce={ecommerce}/>:data.themeid == 3?<Theme3 data={data} products={products} gallery={gallery} ecommerce={ecommerce}/>:data.themeid == 4?<Theme4 data={data} products={products} gallery={gallery} ecommerce={ecommerce}/>:data.themeid == 6?<Theme6 data={data} products={products} gallery={gallery} ecommerce={ecommerce}/>:data.themeid == 5?<Theme5 data={data} products={products} gallery={gallery} ecommerce={ecommerce}/>:data.themeid == 7?<Theme7 data={data} products={products} gallery={gallery} ecommerce={ecommerce}/>:''}
     </Grid>
    )
}

export default Card
