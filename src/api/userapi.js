import axios from "axios";

export default class UserApi {
    getUsers(){
        return axios.get("users");
    }
}