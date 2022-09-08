import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import React, { useEffect, useState } from "react";
import ClassesTimeTableComponent from "./classestimetable";
import { RoomApi } from "../api/roomapi";

export default function ClassesTableComponent() {

    const roomApi = new RoomApi();
    const [classes, setClasses] = useState([]);
    const [currentClass, setCurrentClass] = useState('');
    const [rows, setRows] = useState([
        {
            monday: "",
            tuesday: "",
            wednesday: "",
            thursday: "",
            friday: ""
        },
        {
            monday: "",
            tuesday: "",
            wednesday: "",
            thursday: "",
            friday: ""
        },
        {
            monday: "",
            tuesday: "",
            wednesday: "",
            thursday: "",
            friday: ""
        },
        {
            monday: "",
            tuesday: "",
            wednesday: "",
            thursday: "",
            friday: ""
        },{
            monday: "",
            tuesday: "",
            wednesday: "",
            thursday: "",
            friday: ""
        },
        {
            monday: "",
            tuesday: "",
            wednesday: "",
            thursday: "",
            friday: ""
        },{
            monday: "",
            tuesday: "",
            wednesday: "",
            thursday: "",
            friday: ""
        },
        {
            monday: "",
            tuesday: "",
            wednesday: "",
            thursday: "",
            friday: ""
        }
    ]);
    const emptyRows = [
        {
            monday: "",
            tuesday: "",
            wednesday: "",
            thursday: "",
            friday: ""
        },
        {
            monday: "",
            tuesday: "",
            wednesday: "",
            thursday: "",
            friday: ""
        },
        {
            monday: "",
            tuesday: "",
            wednesday: "",
            thursday: "",
            friday: ""
        },
        {
            monday: "",
            tuesday: "",
            wednesday: "",
            thursday: "",
            friday: ""
        },{
            monday: "",
            tuesday: "",
            wednesday: "",
            thursday: "",
            friday: ""
        },
        {
            monday: "",
            tuesday: "",
            wednesday: "",
            thursday: "",
            friday: ""
        },{
            monday: "",
            tuesday: "",
            wednesday: "",
            thursday: "",
            friday: ""
        },
        {
            monday: "",
            tuesday: "",
            wednesday: "",
            thursday: "",
            friday: ""
        }
    ]

    function createRows(course) {
        const newRows = [...rows];

        switch(course.dayOfWeek){
            case 1:
                newRows[course.hour].monday = course.courseName;
                break;
            case 2:
                newRows[course.hour].tuesday = course.courseName;
                break;
            case 3:
                newRows[course.hour].wednesday = course.courseName;
                break;
            case 4:
                newRows[course.hour].thursday = course.courseName;
                break;
            case 5:
                newRows[course.hour].friday = course.courseName;
                break;
        }

        setRows(newRows);
    }

    useEffect(() => {
        fetchClasses();
    }, [])

    async function fetchClasses() {
        const response = (await roomApi.getRooms()).data;
        console.log(response);
        setClasses(response);
    }

    const handleChange = (event) => {
        setCurrentClass(event.target.value);
        setRows(emptyRows);
        fetchTable(event.target.value);
    };

    async function fetchTable(name) {
        const response = (await roomApi.getRoom(name)).data;
        console.log(name);
        response.map((e) => createRows(e));
    }

    return (
        <div className="classestable">
        <FormControl variant="standard" sx={{ m: 1, minWidth: 300 }}>
            <InputLabel id="select-a-class">Sınıflar</InputLabel>
            <Select
            labelId="select-a-class-label"
            id="select-a-class"
            value={currentClass}
            onChange={handleChange}
            label="Class"
            >
               { classes.map((e) => {return <MenuItem value={e.name}>{e.name}</MenuItem>})}
            </Select>
        </FormControl>
        {(currentClass && <ClassesTimeTableComponent rows={rows}/>
            )}
        </div>
    );
}