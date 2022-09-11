import axios from "axios";

export default class UserApi {
    getUsers(page) {
        return axios.get("/users/" + page);
    }

    getUsersByName(page, name) {
        return axios.get("/users/" + page + "/sbn?name=" + name);
    }

    getUsersByUsername(page, username) {
        return axios.get("/users/" + page + "/sbu?username=" + username);
    }

    getUsersByNameAndUsername(page, name, username) {
        return axios.get("/users/" + page + "/sbnu?name=" + name + "&username=" + username);
    }

    addUser(request){
        return axios.post("/newUser",request);
    }

    disableUser(id) {
        return axios.put("/users/disable/" + id);
    }

    enableUser(id) {
        return axios.put("/users/enable/" + id);
    }

}