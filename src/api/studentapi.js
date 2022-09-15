import axios from "axios";

export default class StudentApi {
    attendCourse(course,username) {
        return axios.post("/attendCourse/"+course,{username: username});
    }
    getCourses() {
        return axios.get("/courses/" + localStorage.getItem("username"));
    }
    getImportantDates() {
        return axios.get("/getDates/" + localStorage.getItem("username"));
    }
}