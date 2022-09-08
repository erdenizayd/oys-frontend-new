import { TextField } from "@mui/material";

function UsersSearchComponent() {
    return (
        <div>
            <span><TextField id="name" label="İsim" variant="standard" margin='dense' sx={{marginRight: '30px'}} /></span>
            <span><TextField id="username" label="Kullanıcı Adı" variant="standard" margin='dense' /></span>
        </div>
    );
}

export default UsersSearchComponent;