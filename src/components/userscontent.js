import { Box, Tab, Tabs, Typography, Button, Modal} from "@mui/material";
import { useState } from "react";
import PropTypes from 'prop-types';
import UsersListComponent from "./userslist";
import UsersSearchComponent from "./userssearch";
import AddNewUserComponent from "./addnewuser";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius: '5px'
  };

export default function UsersContentComponent() {
    
    const [response, setResponse] = useState('');
    const [open, setOpen] = useState(false);
    const handleOpen = () => {setOpen(true); setResponse();};
    const handleClose = () => setOpen(false);
    const [nameSearch, setNameSearch] = useState('');
    const [usernameSearch, setUsernameSearch] = useState('');

    return (
        <Box sx={{ width: '100%' , gridColumn: 'span 3'}}>
            <div className="title">Kullanıcılar</div>
            <UsersSearchComponent handleOpen={handleOpen}
            nameSearch={nameSearch}
            usernameSearch={usernameSearch} 
            setNameSearch={setNameSearch} 
            setUsernameSearch={setUsernameSearch}/>
            <UsersListComponent response={response}
            nameSearch={nameSearch}
            usernameSearch={usernameSearch} />
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                >
                <Box sx={style}>
                    <AddNewUserComponent setOpen={setOpen} response={response} setResponse={setResponse}/>        
                </Box>
            </Modal>  
        </Box>
    );
}