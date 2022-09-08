import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { IconButton } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import React, { useContext, useEffect, useState } from "react";
import RoleContext from '../context/rolecontext';
import DeleteIcon from '@mui/icons-material/Delete';
import CourseApi from '../api/courseapi';

function createCourseHours(courseHours) {
    const schedule = [[],[],[],[],[]];
    const scheduleObj = [[],[],[],[],[]];
    const hours = [
        "8.40","9.40","10.40","11.40","13.40","14.40","15.40","16.40"
    ];
    const days = [
        "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma"
    ];

    let returnStr = ""

    courseHours.forEach(e => {
        schedule[e.dayOfWeek - 1].push(e.hour - 1);
    });
    

    for(let i = 0; i < 5; i++) {
        console.log(schedule[i]);
        if(schedule[i].length > 0) {
            schedule[i].sort();
            returnStr = returnStr + days[i] + ": ";
            schedule[i].forEach((e) => {returnStr = returnStr + hours[e] + " "});
            returnStr = returnStr + "\n";
        }
    }

    return returnStr;
}

function CoursesListComponent(props) {
    const courseApi = new CourseApi();

    const [courses,setCourses] = useState([]);

    useEffect(() => {
        fetchCourses();
    }, []);

    async function fetchCourses() {
        const response = (await courseApi.getCoursesList()).data;
        setCourses(response);
    }

    return (
        <TableContainer sx={{width: '100%', margin: 'auto', marginTop: '20px'}} >
            <Table sx={{ }} aria-label="simple table">
                <TableHead>
                    <TableRow >
                        <TableCell sx={{ width: '10%' }}>Ders Kodu</TableCell>
                        <TableCell sx={{ width: '30%' }}>Ders Adı</TableCell>
                        <TableCell sx={{ width: '20%' }}>Öğretim Görevlisi</TableCell>
                        <TableCell sx={{ width: '30%' }}>Ders Saatleri</TableCell>
                        <TableCell sx={{ width: '10%' }}></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {courses.map((row) => (
                    <TableRow
                    >
                    <TableCell>{row.code}</TableCell>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.lecturerName}</TableCell>
                    <TableCell>{createCourseHours(row.courseHours)}</TableCell>
                    <TableCell><IconButton><SchoolIcon/></IconButton>
                    {(localStorage.getItem("role") === 'ADMIN') && <IconButton><DeleteIcon/></IconButton>}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default CoursesListComponent;