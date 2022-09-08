import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { IconButton } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import React, { useContext, useState } from "react";
import RoleContext from '../context/rolecontext';
import DeleteIcon from '@mui/icons-material/Delete';

function CoursesListComponent(props) {

    const {role} = useContext(RoleContext);
    const courses = [
        {
            code: "CENG111",
            name: "Introduction to Computer Engineering Concepts",
            instructor: "Memo Ero Ayo",
            time: "Thursday 14.40 - 15.30, Friday 09.40 - 11.30"
        },
        {
            code: "CENG111",
            name: "Introduction to Computer Engineering Concepts",
            instructor: "Memo Ero Ayo",
            time: "Thursday 14.40 - 15.30, Friday 09.40 - 11.30"
        },
        {
            code: "CENG111",
            name: "Introduction to Computer Engineering Concepts",
            instructor: "Memo Ero Ayo",
            time: "Thursday 14.40 - 15.30, Friday 09.40 - 11.30"        },
        {
            code: "CENG111",
            name: "Introduction to Computer Engineering Concepts",
            instructor: "Memo Ero Ayo",
            time: "Thursday 14.40 - 15.30, Friday 09.40 - 11.30"        },
        {
            code: "CENG111",
            name: "Introduction to Computer Engineering Concepts",
            instructor: "Memo Ero Ayo",
            time: "Thursday 14.40 - 15.30, Friday 09.40 - 11.30"        },
        {
            code: "CENG111",
            name: "Introduction to Computer Engineering Concepts",
            instructor: "Memo Ero Ayo",
            time: "Thursday 14.40 - 15.30, Friday 09.40 - 11.30"        },
        {
            code: "CENG250",
            name: "Introduction to Computer Engineering Concepts",
            instructor: "Memo Ero Ayo",
            time: "Thursday 14.40 - 15.30, Friday 09.40 - 11.30"        }
    ];


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
                    <TableCell>{row.instructor}</TableCell>
                    <TableCell>{row.time}</TableCell>
                    <TableCell><IconButton><SchoolIcon/></IconButton></TableCell>
                    {(localStorage.getItem("role") === 'ADMIN') && <TableCell><IconButton><DeleteIcon/></IconButton></TableCell>}
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default CoursesListComponent;