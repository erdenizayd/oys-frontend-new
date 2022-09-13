import axios from "axios";

export default class HwApi {
    addHomework(formData) {
        return axios.post("/addHomework",formData,{headers: {"content-type": "multipart/form-data"}});
    }
}