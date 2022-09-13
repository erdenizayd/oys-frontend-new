import { IconButton, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import CourseApi from "../api/courseapi";

export default function CourseAssignmentsComponent(props) {
    const courseApi = new CourseApi();
    const [course,setCourse] = useState(
        {
            exams: [],
            homeworks: [],
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

    return (
            <div>
                <Typography>Sınavlar</Typography>     
                {course.exams.length > 0 ? course.exams : "Şu anda dersin eklenmiş bir sınavı yok."}
                <Typography>Ödevler</Typography>     
                {course.homeworks.length > 0 ? course.homeworks : "Şu anda dersin eklenmiş bir ödevi yok."}
                </div>
    );
}