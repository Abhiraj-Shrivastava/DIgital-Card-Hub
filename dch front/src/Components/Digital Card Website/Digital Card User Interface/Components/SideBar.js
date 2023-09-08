import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Collapse, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';

const pages = [
        { url: "/", name: "Home" },
        // {url:"",name:"Products"},
        // {url:"",name:"Cart"},
        { url: "/compatible-devices", name: "Compatible Devices" },
        { url: "/how_to_create", name: "How To Create" },
        { url: "/digitalcardlogin", name: "Login/Sign Up" },]


export default function TemporaryDrawer() {
        const navigate = useNavigate()
        const [state, setState] = React.useState({
                top: false,
                left: false,
                bottom: false,
                right: false,
        });
        const [open1, setOpen1] = React.useState(false);

        const handleClick = () => {
                setOpen1(!open1);
        };

        const toggleDrawer = (anchor, open) => (event) => {
                if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
                        return;
                }
                setState({ ...state, [anchor]: open });
        };

        const list = (anchor) => (
                <Box
                        sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250, background: "#001E3C", height: "100vh" }}
                        role="presentation"
                       
                >
                        <Typography sx={{ fontSize: "1.5em", fontWeight: 700, color: "#ffffff", textAlign: "center", mt: 2 }}>Digital Card Hub</Typography>
                        <List>
                                {pages.map((text) => (
                                        <ListItem key={text.name} disablePadding>
                                                <ListItemButton onClick={() => navigate(text.url)}>
                                                        <ListItemText sx={{ color: "#ffffff", textAlign: "left", ml: 2 }} primary={text.name} />
                                                </ListItemButton>
                                        </ListItem>
                                ))}
                                 <ListItem key={"Shop"} disablePadding>
                                        <ListItemButton onClick={handleClick}>
                                                <ListItemText sx={{ color: "#ffffff", textAlign: "left", ml: 2 }} primary={"Shop"} />
                                        </ListItemButton>
                                </ListItem>
                                <Collapse in={open1} timeout="auto" unmountOnExit>
                                        <List component="div" disablePadding>
                                                <ListItemButton sx={{ pl: 4 }} onClick={()=>navigate("/productspage")}>
                                                        
                                                        <ListItemText primary="Proximity Marketting Tags"  sx={{ color: '#001E3C', fontWeight: 700, }}/>
                                                </ListItemButton>
                                        </List>
                                </Collapse>
                               
                        </List>
                        
                </Box>
        );

        return (
                <div>
                        {['right'].map((anchor) => (
                                <React.Fragment key={anchor}>
                                        <Button onClick={toggleDrawer(anchor, true)}><MenuIcon sx={{ color: "#ffffff", fontSize: "3em" }} /></Button>
                                        <Drawer
                                                anchor={anchor}
                                                open={state[anchor]}
                                                onClose={toggleDrawer(anchor, false)}
                                        >
                                                {list(anchor)}
                                                
                                        </Drawer>
                                </React.Fragment>
                        ))}
                </div>
        );
}