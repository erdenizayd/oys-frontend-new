import axios from "axios";

export default class CourseApi {
    getCoursesList() {
        return axios.get("/courses");
    }
}