import axios from "axios";

export default class AssistantApi {
    getAssistants() {
        return axios.get("/getAssistants");
    }
}