import { useContext, useState } from "react";
import { TextField, Button } from "@mui/material";
import { LoginApi } from "../api/loginapi";
import { Link, useNavigate } from "react-router-dom";
import RoleContext from "../context/rolecontext";

function LoginComponent() {

    const loginApi = new LoginApi();
    const [valFirst, setValFirst] = useState('');
    const [valSecond, setValSecond] = useState('');
    const {setRole} = useContext(RoleContext);

    let navigate = useNavigate();
    async function handleClick() {
        console.log(valFirst);

        const response = (await loginApi.login(valFirst, valSecond)).data;
        console.log(response);
        localStorage.setItem("role",response);
        setRole(response);
        navigate('/')
    }

    return (
        <div className="loginBox">
            <div><TextField 
                id="username" 
                label="Kullanıcı Adı" 
                variant="standard" 
                value={valFirst} 
                onChange={(e) => setValFirst(e.target.value)}/>
            </div>
            <div><TextField 
                type="password" 
                id="password" 
                label="Şifre" 
                variant="standard" 
                value={valSecond} 
                onChange={(e) => setValSecond(e.target.value)}/>
            </div>
            <div><Button variant="contained" onClick={handleClick}>Giriş Yap</Button></div>

        </div>
    );
}

export default LoginComponent;