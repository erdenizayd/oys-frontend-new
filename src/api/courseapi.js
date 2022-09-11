import axios from "axios";

export default class CourseApi {
    getCoursesList() {
        return axios.get("/courses");
    }
    createCourse(course) {
        return axios.post("/createCourse",course);
    }
}