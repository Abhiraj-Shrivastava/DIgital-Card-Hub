import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
import Logo from "../../Digital Card Assets/dchlogo.png";
import { Container, List, ListItemButton, ListItemText, useMediaQuery, useTheme } from '@mui/material';
import SideBar from './SideBar';
import { useNavigate } from 'react-router-dom';
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuList from "@mui/material/MenuList";
import { NestedMenuItem } from "mui-nested-menu";
import { MenuItem, Menu } from "@mui/material";
import { ClickAwayListener, Divider } from "@mui/material";
import { ArrowDownwardRounded, ArrowDropDown } from '@mui/icons-material';
import {Grid} from '@mui/material';
export default function Navbar() {

        const navigate = useNavigate();
        const [open, setOpen] = React.useState(false);
        const anchorRef = React.useRef(null);
        const [anchorEl, setAnchorEl] = React.useState(null);
        const handleToggle = () => {
                setOpen((prevOpen) => !prevOpen);
        };
        const theme = useTheme();
        const mobile = useMediaQuery(theme.breakpoints.down("xs"));
        const medium = useMediaQuery(theme.breakpoints.down(900));
        const handleClose = () => {
                setAnchorEl(null);
                setOpen(false);
        };
        function handleListKeyDown(event) {
                if (event.key === "Tab") {
                        event.preventDefault();
                        setOpen(false);
                } else if (event.key === "Escape") {
                        setOpen(false);
                }
        }
        const handleSideBar = () => {
                return (
                        <>
                                <SideBar />
                        </>
                )
        }

        return (
                <Box sx={{ flexGrow: 1 }}>
                        <AppBar position="fixed" sx={{ background: "rgba(0, 30, 60,0.6)", boxShadow: "none", color: "black", display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                                <Container maxWidth="xl" sx={{ background: "transparent", boxShadow: "none", color: "black", display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                                        <Box >
                                                <img onClick={() => navigate("/")} src={Logo} style={{ width: mobile ? "51px" : medium ? "52px" : "100px" }} />
                                        </Box>
                                        <Toolbar>
                                                <Button sx={{ display: { xs: "none", md: "block" }, color: "#ffffff", fontSize: "1em", fontFamily: "Oxanium", letterSpacing: "0.1em", fontWeight: 600, m: "0px 5px" }} onClick={() => navigate("/")}>Home</Button>
                                                <Button onClick={() => navigate("/compatible-devices")} sx={{ display: { xs: "none", md: "block" }, color: "#ffffff", fontSize: "1em", fontFamily: "Oxanium", letterSpacing: "0.1em", fontWeight: 600, m: "0px 5px" }}>Compatible Devices</Button>
                                                <Button onClick={() => navigate("/how_to_create")} sx={{ display: { xs: "none", md: "block" }, color: "#ffffff", fontSize: "1em", fontFamily: "Oxanium", letterSpacing: "0.1em", fontWeight: 600, m: "0px 5px" }}>How To Create</Button>
                                                <Button  id="composition-button"
                                                        aria-controls={open ? "composition-menu" : undefined}
                                                        aria-expanded={open ? "true" : undefined}
                                                        aria-haspopup="true"
                                                        onMouseEnter={handleToggle}
                                                        onMouseLeave={handleToggle} sx={{ display: { xs: "none", md: "flex" }, color: "#ffffff", fontSize: "1em", fontFamily: "Oxanium", letterSpacing: "0.1em", fontWeight: 600, m: "0px 5px" }}>Shop<Grid><ArrowDropDown /></Grid>            
                                                         <Popper
                                                                open={open}
                                                                anchorEl={anchorRef.current}
                                                                role={undefined}
                                                                placement="bottom"
                                                                transition
                                                                disablePortal
                                                                sx={{ zIndex: 1 }}
                                                        >
                                                                {({ TransitionProps, placement }) => (
                                                                        <Grow
                                                                                {...TransitionProps}
                                                                                style={{
                                                                                        transformOrigin:
                                                                                                placement === "bottom-start"
                                                                                                        ? "left top"
                                                                                                        : "left bottom",
                                                                                }}
                                                                        >
                                                                                <Paper sx={{ marginRight: 10 }}>
                                                                                        
                                                                                                <MenuList
                                                                                                        autoFocusItem={open}
                                                                                                        id="composition-menu"
                                                                                                        aria-labelledby="composition-button"
                                                                                                        onKeyDown={handleListKeyDown}
                                                                                                        style={{ fontWeight: "bold", width: 300 }}
                                                                                                >
                                                                                                        <List component="div" >
                                                                                                                <ListItemButton  onClick={()=>navigate("/productspage")}>

                                                                                                                        <ListItemText primary="Proximity Marketting Tags" sx={{ color: '#001E3C', fontWeight: 700, }} />
                                                                                                                </ListItemButton>
                                                                                                        </List>


                                                                                                </MenuList>

                                                                                </Paper>
                                                                        </Grow>
                                                                )}
                                                        </Popper></Button>
                                                <Button onClick={() => navigate("/digitalcardlogin")} sx={{ display: { xs: "none", md: "block" }, color: "#ffffff", fontSize: "1em", fontFamily: "Oxanium", letterSpacing: "0.1em", fontWeight: 600, m: "0px 5px" }} ref={anchorRef}
                                                >Login/Sign Up</Button>
                                                {medium ? <>
                                                        {<SideBar />}
                                                </> : <></>}
                                        </Toolbar>
                                </Container>
                        </AppBar>
                </Box>
        );
}