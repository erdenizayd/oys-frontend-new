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
    updateCourse(courseCode, course) {
        return axios.put("/updateCourse/" + courseCode, course);
    }
    updateCourseDetails(courseCode, course) {
        console.log(course);
        return axios.put("/updateCourseDetails/" + courseCode, course);
    }

}