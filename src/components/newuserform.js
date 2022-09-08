import { TextField, Button} from "@mui/material";
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
        <div>
            <TextField
                onChange={onFormChange}
                required
                name="name"
                id="outlined-required"
                label="İsim"
                defaultValue=""
            />
            <TextField
                onChange={onFormChange}
                required
                name="surname"
                id="outlined-required"
                label="Soyisim"
                defaultValue=""
            />
            <TextField
                onChange={onFormChange}
                required
                name="email"
                id="outlined-required"
                label="Okul Mail Adresi"
                defaultValue="@metu.edu.tr"
            />
            <TextField
                onChange={onFormChange}
                required
                name="username"
                id="outlined-required"
                label="Kullanıcı Adı"
            />
            <Button onClick={() => props.submit(formState)}>Submit</Button>
        </div>
    );
}