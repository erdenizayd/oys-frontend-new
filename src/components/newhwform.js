import { TextField, Button, Autocomplete } from "@mui/material";
import { useState, useEffect } from "react";
import CourseApi from "../api/courseapi";
import HwApi from "../api/hwapi";

export default function NewHwFormComponent(props) {
    const [details, setDetails] = useState('');
    const [assistantName, setAssistantName] = useState('');
    const [date,setDate] = useState('');
    const [time,setTime] = useState('');
    const hwApi = new HwApi();
    const courseApi = new CourseApi();

    const [course,setCourse] = useState(
        {
            about: "",
            assistantNames: [],
            code:"",
            courseHours: [],
            exams: [],
            homeworks: [],
            lecturerName:"",
            name: "",
            roomName: "",
            type: ""
        }
    );

    useEffect(() => {
        fetchCourse();
    }, []);

    async function fetchCourse() {
        const response = (await courseApi.getCourse(props.courseCode.toUpperCase())).data;
        setCourse(response);
        console.log(course)
    }

    async function handleClick() {
        const formData = new FormData();
        formData.append('file',details);
        formData.append('date', date);
        formData.append('time', time);
        formData.append('assistantName', assistantName);
        formData.append('courseCode', props.courseCode.toUpperCase());

        const response = (await hwApi.addHomework(formData)).data;
        props.handleClose();
        console.log(response);
    }

    return(
        <div>
            <input type="date" onChange={(e) => setDate(e.target.value)}/>
            <input type="time" onChange={(e) => setTime(e.target.value)}/>
            <Autocomplete
                        inputValue={assistantName}
                        onInputChange={(e,value) => {
                            setAssistantName(value);
                        }}
                        name="assistantName"
                        id="assistantName"
                        options={course.assistantNames}
                        sx={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} label="Asistan" />}
                    />
            <input type="file" onChange={(e) => setDetails(e.target.files[0])}/>

            <Button onClick={handleClick}>Ödev Ekle</Button>
        </div>
    );
}