import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import React, { useEffect, useState } from "react";
import ClassesTimeTableComponent from "./classestimetable";
import { RoomApi } from "../api/roomapi";

export default function ClassesTableComponent() {

    const roomApi = new RoomApi();
    const [classes, setClasses] = useState([]);
    const [currentClass, setCurrentClass] = useState('');
    const [rows, setRows] = useState([
        {
            hour: "8.40",
            monday: "",
            tuesday: "",
            wednesday: "",
            thursday: "",
            friday: ""
        },
        {
            hour: "9.40",
            monday: "",
            tuesday: "",
            wednesday: "",
            thursday: "",
            friday: ""
        },
        {
            hour: "10.40",
            monday: "",
            tuesday: "",
            wednesday: "",
            thursday: "",
            friday: ""
        },
        {
            hour: "11.40",
            monday: "",
            tuesday: "",
            wednesday: "",
            thursday: "",
            friday: ""
        },{
            hour: "12.40",
            monday: "",
            tuesday: "",
            wednesday: "",
            thursday: "",
            friday: ""
        },{
            hour: "13.40",
            monday: "",
            tuesday: "",
            wednesday: "",
            thursday: "",
            friday: ""
        },
        {
            hour: "14.40",
            monday: "",
            tuesday: "",
            wednesday: "",
            thursday: "",
            friday: ""
        },{
            hour: "15.40",
            monday: "",
            tuesday: "",
            wednesday: "",
            thursday: "",
            friday: ""
        },
        {
            hour: "16.40",
            monday: "",
            tuesday: "",
            wednesday: "",
            thursday: "",
            friday: ""
        }
    ]);
    const emptyRows = [
        {
            hour: "8.40",
            monday: "",
            tuesday: "",
            wednesday: "",
            thursday: "",
            friday: ""
        },
        {
            hour: "9.40",
            monday: "",
            tuesday: "",
            wednesday: "",
            thursday: "",
            friday: ""
        },
        {
            hour: "10.40",
            monday: "",
            tuesday: "",
            wednesday: "",
            thursday: "",
            friday: ""
        },
        {
            hour: "11.40",
            monday: "",
            tuesday: "",
            wednesday: "",
            thursday: "",
            friday: ""
        },{
            hour: "12.40",
            monday: "",
            tuesday: "",
            wednesday: "",
            thursday: "",
            friday: ""
        },{
            hour: "13.40",
            monday: "",
            tuesday: "",
            wednesday: "",
            thursday: "",
            friday: ""
        },
        {
            hour: "14.40",
            monday: "",
            tuesday: "",
            wednesday: "",
            thursday: "",
            friday: ""
        },{
            hour: "15.40",
            monday: "",
            tuesday: "",
            wednesday: "",
            thursday: "",
            friday: ""
        },
        {
            hour: "16.40",
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
                newRows[course.hour - 1].monday = course.courseName;
                break;
            case 2:
                newRows[course.hour - 1].tuesday = course.courseName;
                break;
            case 3:
                newRows[course.hour - 1].wednesday = course.courseName;
                break;
            case 4:
                newRows[course.hour - 1].thursday = course.courseName;
                break;
            case 5:
                newRows[course.hour - 1].friday = course.courseName;
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