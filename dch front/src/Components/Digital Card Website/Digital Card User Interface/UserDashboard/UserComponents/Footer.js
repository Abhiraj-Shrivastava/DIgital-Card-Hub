import { Grid, Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'

const Footer = () => {
    const theme = useTheme();
    const mobile = useMediaQuery(theme.breakpoints.down(600));
    const tablet = useMediaQuery(theme.breakpoints.down(960));

    return (
        <>
            {mobile ? <><br /><br /></> : <></>}
            <Grid sx={{ backgroundColor: '#001e3c', width: '100%', height: mobile ? "10%" : '2%' }}>
                <Grid>
                    <Typography sx={{ color: "#fff", textAlign: 'center' }}>DigitalCardHub.in || 2023</Typography>
                </Grid>
            </Grid>
        </>
    )
}

export default Footer
