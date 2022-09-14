import { TextField, FormControl, InputLabel, Select, MenuItem, Button } from "@mui/material";
import { RoomApi } from "../api/roomapi";
import { useState, useEffect } from "react";
import ExamApi from "../api/examapi";

export default function NewExamFormComponent(props) {
    const examApi = new ExamApi();
    const roomApi = new RoomApi();
    const [classes, setClasses] = useState([]);
    const [currentClass, setCurrentClass] = useState('');
    const [date,setDate] = useState('');
    const [time,setTime] = useState('');
    const [name,setName] = useState("");
    const [details,setDetails] = useState("");

    function handleChange(event) {
        setCurrentClass(event.target.value);
    };

    useEffect(() => {
        fetchClasses();
    }, [])

    async function fetchClasses() {
        const response = (await roomApi.getRooms()).data;
        setClasses(response);
    }

    async function handleClick() {
        const request = {
            name: name,
            details: details,
            roomName: currentClass,
            date: date,
            time: time,
            courseCode: props.courseCode.toUpperCase(),
            roomName: currentClass
        }
        
        const response = (await examApi.addExam(request)).class;
        props.handleClose();
        console.log(response.message);

    }

    return (
        <div>
            <TextField
                onChange={(e) => setName(e.target.value)}
                required
                name="name"
                id="name"
                label="Sınav Adı:"
            />
            <TextField
                onChange={(e) => setDetails(e.target.value)}
                required
                name="details"
                id="details"
                label="Detay"
            />
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

            <input type="date" onChange={(e) => setDate(e.target.value)}/>
            <input type="time" onChange={(e) => setTime(e.target.value)}/>

            <Button onClick={handleClick}>Sınav Ekle</Button>

        </div>

    );
}