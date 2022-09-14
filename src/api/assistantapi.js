import axios from "axios";

export default class AssistantApi {
    getAssistants() {
        return axios.get("/getAssistants");
    }

    getCourses() {
        return axios.get("getCourses/assistant/" + localStorage.getItem("username"));
    }
}