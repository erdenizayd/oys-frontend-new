import axios from "axios";

export default class ExamApi {
    addExam(examRequest) {
        return axios.post("/addExam", examRequest);
    }
}