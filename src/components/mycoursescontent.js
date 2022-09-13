import { useEffect, useState } from "react";
import StudentApi from "../api/studentapi";
import ClassInfoComponent from "./classinfo";

export default function MyCoursesContentComponent() {
    const studentApi = new StudentApi();
    const [courses,setCourses] = useState([]);

    useEffect(() => {
        fetchCourses();
    });

    async function fetchCourses() {
        const response = (await studentApi.getCourses()).data;
        setCourses(response);
    }
    return (<div>
        {courses.map((row) => {return <ClassInfoComponent type={"mycourses"} course={row}/>})}
        </div>
    );
}