import axios from "axios";

export class LoginApi {
    login(username, password) {
        return axios.post("/login", {username : username, password : password});
    }

}