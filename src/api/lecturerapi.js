import axios from "axios";

export default class LecturerApi {
    getCourses() {
        return axios.get("getCourses/lecturer/" + localStorage.getItem("username"));
    }
}