import axios from "axios";

export default class CourseApi {
    getCoursesList() {
        return axios.get("/courses");
    }
    getCourse(courseCode) {
        return axios.get("/course/" + courseCode);  
    }
    addAssistant(courseCode,id) {
        return axios.post("/course/" + courseCode + "/addAssistant", {'id': id});
    }
    getCourseStudents(courseCode) {
        return axios.get("/course/" + courseCode + "/students");  
    }
    createCourse(course) {
        return axios.post("/createCourse",course);
    }
    deleteCourse(courseCode) {
        return axios.delete("/deleteCourse/" + courseCode);
    }
}