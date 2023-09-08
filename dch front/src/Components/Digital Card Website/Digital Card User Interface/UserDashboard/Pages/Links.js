import React from 'react'
import Navbar from '../UserComponents/Navbar'
import Footer from '../UserComponents/Footer'
import { Grid, Button, Typography, TextField, useTheme, useMediaQuery } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { postData } from '../../../../Services/NodeServices'
import BeenhereIcon from '@mui/icons-material/Beenhere';
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const Links = () => {

    const theme = useTheme();
    const mobile = useMediaQuery(theme.breakpoints.down(600));
    const tablet = useMediaQuery(theme.breakpoints.down(960));

    const navigate = useNavigate()
    const cardId = window.localStorage.getItem("CardId")
    const userId = window.localStorage.getItem("userId")

    const [fbLink, setFbLink] = useState('')
    const [twitterLink, setTwitterLink] = useState('')
    const [instaLink, setInstaLink] = useState('')
    const [linkedlnLink, setLinkedlnLink] = useState('')
    const [youtubeLink, setYoutubeLink] = useState('')
    const [pinterestLink, setPinterestLink] = useState('')
    const [youtubeLink1, setYoutubeLink1] = useState('')
    const [youtubeLink2, setYoutubeLink2] = useState('')
    const [youtubeLink3, setYoutubeLink3] = useState('')
    const [youtubeLink4, setYoutubeLink4] = useState('')
    const [youtubeLink5, setYoutubeLink5] = useState('')
    const [googleMapLink, setGoogleMapLink] = useState('')

    const fetchCardDetail = async () => {
        var formData = new FormData()
        formData.append("customerId", userId)
        var result = await postData('carddetails/getcardDetails', formData, true)
        console.log(result.data)
        setFbLink(result.data.fbLink)
        setInstaLink(result.data.igLink)
        setLinkedlnLink(result.data.LinkdnLink)
        setPinterestLink(result.data.PinterestLink)
        setTwitterLink(result.data.TwitterLink)
        setYoutubeLink(result.data.YoutubeLink)
        setYoutubeLink1(result.data.YoutubeVideoLink1)
        setYoutubeLink2(result.data.YoutubeVideoLink2)
        setYoutubeLink3(result.data.YoutubeVideoLink3)
        setYoutubeLink4(result.data.YoutubeVideoLink4)
        setYoutubeLink5(result.data.YoutubeVideoLink5)
        setGoogleMapLink(result.data.GoogleMapLink)

    }
    React.useEffect(() => {

        fetchCardDetail()
    }, [])

    const handleSubmit = async () => {
        var formData = new FormData()
        formData.append('_id', cardId)
        formData.append('fbLink', fbLink)
        formData.append('igLink', instaLink)
        formData.append('TwitterLink', twitterLink)
        formData.append('YoutubeLink', youtubeLink)
        formData.append('PinterestLink', pinterestLink)
        formData.append('LinkdnLink', linkedlnLink)
        formData.append('YoutubeVideoLink1', youtubeLink1)
        formData.append('YoutubeVideoLink2', youtubeLink2)
        formData.append('YoutubeVideoLink3', youtubeLink3)
        formData.append('YoutubeVideoLink4', youtubeLink4)
        formData.append('YoutubeVideoLink5', youtubeLink5)
        formData.append('GoogleMapLink', googleMapLink)

        var response = await postData("carddetails/updatesociallinks", formData, true);
        if (response.status) {
            navigate('/payment')
        } else {

        }
    }
    return (
        <Grid>
            <Navbar />
            <Grid container spacing={2} sx={{ display: 'flex',alignItems:"center", justifyContent: 'center',paddingInline:"20px" }}>
                <Grid item xs={4} sx={{ marginTop: "2vh", marginBottom: "2vh" }}>
                    <Button sx={{
                        borderRadius: 10,
                        backgroundImage: "linear-gradient(to top left,#48dbfb,#001e3c)",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-evenly",
                        textAlign: "center",
                        alignItems: "center",
                    }} onClick={() => navigate('/information')} variant='contained'><NavigateBeforeIcon/>Back</Button>
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
                    }} onClick={() => navigate('/payment')} variant='contained'>Skip<NavigateNextIcon/></Button>
                </Grid>
                <Grid container spacing={2} sx={{ width: mobile?"100%":tablet?"100%":'70%',display:mobile?"flex":tablet?"":"",justifyContent:mobile?"center":tablet?"":"" ,alignItems:mobile?"center":tablet?"":"",flexDirection:mobile?"column":tablet?"":""}}>
                    <Grid item xs={12}>
                        <Typography textAlign='center' sx={{ fontSize: { xs: "1.3rem", md: 28 }, fontWeight: 'bold' }}>Social Links</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography textAlign='center' sx={{ fontSize: { xs: "1.2rem", md: 28 }, fontWeight: 'bold' }}>Social Media Links</Typography>
                    </Grid>
                    <Grid item xs={12} style={{ display: 'flex', justifyContent: "center", marginBottom: 8 }}>
                        <TextField value={fbLink} onChange={(e) => setFbLink(e.target.value)} sx={{ width: { xs: '100%', md: '60%' } }} label='Facebook Username(Optional)' />
                    </Grid>
                    <Grid item xs={12} style={{ display: 'flex', justifyContent: "center", marginBottom: 8 }}>
                        <TextField value={twitterLink} onChange={(e) => setTwitterLink(e.target.value)} sx={{ width: { xs: '100%', md: '60%' } }} label='Twitter Username(Optional)' />
                    </Grid>
                    <Grid item xs={12} style={{ display: 'flex', justifyContent: "center", marginBottom: 8 }}>
                        <TextField value={instaLink} onChange={(e) => setInstaLink(e.target.value)} sx={{ width: { xs: '100%', md: '60%' } }} label='Instagram Username(Optional)' />
                    </Grid>
                    <Grid item xs={12} style={{ display: 'flex', justifyContent: "center", marginBottom: 8 }}>
                        <TextField value={linkedlnLink} onChange={(e) => setLinkedlnLink(e.target.value)} sx={{ width: { xs: '100%', md: '60%' } }} label='Linkedln Username(Optional)' />
                    </Grid>
                    <Grid item xs={12} style={{ display: 'flex', justifyContent: "center", marginBottom: 8 }}>
                        <TextField value={youtubeLink} onChange={(e) => setYoutubeLink(e.target.value)} sx={{ width: { xs: '100%', md: '60%' } }} label='Youtube Channel Name(Optional)' />
                    </Grid>
                   
                    <Grid item xs={12}>
                        <Typography textAlign='center' sx={{ fontSize: { xs: "1.2rem", md: 28 }, fontWeight: 'bold' }}>Youtube Video Links</Typography>
                    </Grid>
                    <Grid item xs={12} style={{ display: 'flex', justifyContent: "center", marginBottom: 8 }}>
                        <TextField value={youtubeLink1} onChange={(e) => setYoutubeLink1(e.target.value)} sx={{ width: { xs: '100%', md: '60%' } }} label='Youtube Video Link(Optional)' />
                    </Grid>
                    <Grid item xs={12} style={{ display: 'flex', justifyContent: "center", marginBottom: 8 }}>
                        <TextField value={youtubeLink2} onChange={(e) => setYoutubeLink2(e.target.value)} sx={{ width: { xs: '100%', md: '60%' } }} label='Youtube Video Link 2(Optional)' />
                    </Grid>
                    <Grid item xs={12} style={{ display: 'flex', justifyContent: "center", marginBottom: 8 }}>
                        <TextField value={youtubeLink3} onChange={(e) => setYoutubeLink3(e.target.value)} sx={{ width: { xs: '100%', md: '60%' } }} label='Youtube Video Link 3(Optional)' />
                    </Grid>
                    <Grid item xs={12} style={{ display: 'flex', justifyContent: "center", marginBottom: 8 }}>
                        <TextField value={youtubeLink4} onChange={(e) => setYoutubeLink4(e.target.value)} sx={{ width: { xs: '100%', md: '60%' } }} label='Youtube Video Link 4(Optional)' />
                    </Grid>
                    <Grid item xs={12} style={{ display: 'flex', justifyContent: "center", marginBottom: 8 }}>
                        <TextField value={youtubeLink5} onChange={(e) => setYoutubeLink5(e.target.value)} sx={{ width: { xs: '100%', md: '60%' } }} label='Youtube Video Link 5(Optional)' />
                    </Grid>
                    <Grid item xs={12}>
                        <Typography textAlign='center' sx={{ fontSize: { xs: "1.2rem", md: 28 }, fontWeight: 'bold' }}>Google Map Review Links</Typography>
                    </Grid>
                    <Grid item xs={12} style={{ display: 'flex', justifyContent: "center", marginBottom: 8 }}>
                        <TextField value={googleMapLink} onChange={(e) => setGoogleMapLink(e.target.value)} sx={{ width: { xs: '100%', md: '60%' } }} label='Review Link(Optional)' />
                    </Grid>
                    <Grid item xs={12} style={{ display: 'flex', justifyContent: "center", marginBottom: 8 }}>
                        <Button sx={{
                        borderRadius: 10,
                        backgroundImage: "linear-gradient(to top left,#48dbfb,#001e3c)",
                        display: "flex",
                        paddingX:"30px",
                        flexDirection: "row",
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

export default Links
