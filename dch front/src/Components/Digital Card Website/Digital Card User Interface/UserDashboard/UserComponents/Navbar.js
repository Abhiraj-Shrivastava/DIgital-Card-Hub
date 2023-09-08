import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Grid, useMediaQuery, useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { postData } from '../../../../Services/NodeServices';
import logo from "../../../Digital Card Assets/dchlogo.png";

const settings = ['Change Password', 'Logout'];
const Navbar = () => {

    const theme = useTheme();
    const mobile = useMediaQuery(theme.breakpoints.down(600));
    const tablet = useMediaQuery(theme.breakpoints.down(960));

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [userData, setUserData] = React.useState([]);
    const userId = window.localStorage.getItem("userId")


    const fetchCardDetail = async () => {
        var formData = new FormData()
        formData.append("_id", userId)
        var result = await postData('customerLogin/getUserDataById', formData, true)
        setUserData(result.data)
        
    }
    React.useEffect(() => {

        fetchCardDetail()
    }, [])


    const navigate = useNavigate()
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElUser(null);
    };

    const handleNavigate = (value) => {
        setAnchorElUser(null);
        navigate('/changepassword', { state: { data: userData } })
    };
    const handleLogout = () => {
        setAnchorElUser(null);
        window.localStorage.clear('User')
        window.localStorage.clear('userId')
        navigate('/digitalcardlogin')
    };

    return (
        <AppBar position="static" sx={{ backgroundColor: "#001e3c" }}>
            <Container maxWidth="xl" >
                <Toolbar disableGutters sx={{
                    display: 'flex', justifyContent: 'space-between'
                }
                }>
                    <img onClick={() => navigate("/digitalcard")} src={logo} style={{ width: mobile ? "51px" :tablet?"52px":"100px" }} />
                    <Box sx={{ flexGrow: 0, display: 'flex', flexDirection: 'row', justifyContent: "space-between" }}>
                        <Grid sx={{ display: mobile?'none':tablet?"flex":"flex", justifyContent: 'center', alignItems: 'center', margin: 1 }}>
                            <Typography >Hey, {userData.name}</Typography>
                        </Grid>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="Remy Sharp" >{userData.name!=undefined?userData.name.slice(0,1):''}</Avatar>
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseNavMenu}
                        >

                            <MenuItem onClick={() => handleNavigate()}>
                                <Typography textAlign="center">Change Password</Typography>
                            </MenuItem>
                            <MenuItem onClick={() => handleLogout()}>
                                <Typography textAlign="center">Logout</Typography>
                            </MenuItem>

                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Navbar
