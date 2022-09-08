import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { IconButton } from "@mui/material";
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import EmailIcon from '@mui/icons-material/Email';

function HeaderComponent() {

    const [user,setUser] = useState('Memo Ero Aydo');
    const [anchorElP, setAnchorElP] = useState(null);
    const [anchorElM, setAnchorElM] = useState(null);


    let navigate = useNavigate();
    const profileMenu = [
        {
            name: "Profili Görüntüle",
            path: "/profile"
        }, 
        {
            name: "Profili Düzenle",
            path: "/profileSettings"
        }, 
        {
            name: "Çıkış",
            path: "/exit"
        }
    ];
    const messagesMenu = ["asd","asd","asd"];

    const handleMessages = (event) => {
        setAnchorElM(event.currentTarget);
    };

    const handleProfile = (event) => {
        setAnchorElP(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorElP(null);
        setAnchorElM(null);

    };

    return (
        <div className="header">
            <Button className="logo" sx={{
                textTransform: 'none',
                fontSize: "100%"

            }}>Gevir Güvür Üniversitesi</Button>
            <IconButton aria-controls="menu-profile"  color="inherit" className="profile" onClick={handleProfile} sx={{
                textTnansform: 'none',
                fontSize: "100%",
                
            }}><AccountCircle/></IconButton>
            
            <Menu id="menu-profile" 
                anchorEl={anchorElP} 
                anchorOrigin={{
                  vertical: 'bottom',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                    }}
                open={Boolean(anchorElP)}
                onClose={handleClose}>
                    <MenuItem onClick={handleClose}>Profili Görüntüle</MenuItem>
                    <MenuItem onClick={handleClose}>Profili Düzenle</MenuItem>
                    <MenuItem onClick={handleClose}>Çıkış Yap</MenuItem>

            </Menu>

            <IconButton color="inherit" className="messages" onClick={handleMessages} sx={{
                textTransform: 'none',
                fontSize: "100%",
            }}><EmailIcon sx={{color: "#2F9C95"}}/></IconButton>

    
            
                
        </div>
    );
}

export default HeaderComponent;