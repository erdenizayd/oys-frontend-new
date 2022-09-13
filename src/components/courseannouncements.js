import { IconButton, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import CourseApi from "../api/courseapi";

export default function CourseAnnouncementsComponent(props) {
    const courseApi = new CourseApi();
    const [course,setCourse] = useState(
        {
            announcements: []
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
                <Typography>Duyurular</Typography>     
                {course.announcements.length > 0 ? course.announcements : "Şu anda dersin eklenmiş bir duyurusu yok."}
                
                </div>
    );
}