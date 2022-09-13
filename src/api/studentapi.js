import axios from "axios";

export default class StudentApi {
    attendCourse(course,username) {
        return axios.post("/attendCourse/"+course,{username: username});
    }
}