import { TextField, Button} from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";

export default function NewUserFormComponent(props) {

    const [formState, setFormState] = useState({});

    function onFormChange(event) {

        const name = event.target.name;
        const value = event.target.value;
        const newState = {...formState};
        newState[name] = value;
        setFormState(newState);

    }

    return (props.role &&
        <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
        marginTop   : "20px",
      }}
      noValidate
      autoComplete="off"
        >
            <div><TextField
                margin=""
                onChange={onFormChange}
                required
                name="name"
                id="outlined-required"
                label="İsim"
                defaultValue=""
            /></div>
            <div><TextField
                onChange={onFormChange}
                required
                name="surname"
                id="outlined-required"
                label="Soyisim"
                defaultValue=""
            /></div>
            <div><TextField
                onChange={onFormChange}
                required
                name="email"
                id="outlined-required"
                label="Okul Mail Adresi"
                defaultValue="@metu.edu.tr"
            /></div>
            <div><TextField
                onChange={onFormChange}
                required
                name="username"
                id="outlined-required"
                label="Kullanıcı Adı"
            /></div>
            <div><Button sx={{float: "right"}} onClick={() => props.submit(formState)}>Kullanıcı Ekle</Button></div>
            </Box>
    );
}