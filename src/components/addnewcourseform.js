import { TextField, Button, Select, InputLabel, MenuItem, Autocomplete} from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import UserApi from "../api/userapi";

export default function AddNewCourseFormComponent(props) {

    const userApi = new UserApi();
    const [lecturers, setLecturers] = useState([]);
    const [formState, setFormState] = useState({});
    const [lecturerName, setLecturerName] = useState('');

    useEffect(() => {
        fetchLecturers();
    }, []);

    function onFormChange(event) {

        const name = event.target.name;
        const value = event.target.value;
        const newState = {...formState};
        newState[name] = value;
        setFormState(newState);

    }

    async function fetchLecturers() {
        const response = (await userApi.getLecturers()).data;
        setLecturers(response);
    }

    return (
        <div>
            <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
        marginTop   : "20px",
      }}
        >
            <div><TextField
                onChange={onFormChange}
                required
                name="name"
                id="outlined-required"
                label="İsim"
                defaultValue=""
            /></div>
            <div><TextField
                onChange={onFormChange}
                required
                name="about"
                id="outlined-required"
                label="Tanım"
                defaultValue=""
            /></div>
            <div>
            <InputLabel id="course-type">Ders Tipi</InputLabel>
            <Select
            name="type"
            labelId="course-type-label"
            id="course-type"
            onChange={(e) => {props.setType(e.target.value)}}
            value={props.type}
            label="CourseType"
            >
                <MenuItem value={"ZORUNLU"}>Zorunlu</MenuItem>
                <MenuItem value={"SEÇMELİ"}>Seçmeli</MenuItem>

            </Select>
            </div>
            <div><TextField
                onChange={onFormChange}
                required
                name="code"
                id="outlined-required"
                label="Ders Kodu"
                defaultValue=""
            /></div>
            <div>
            <Autocomplete
                inputValue={lecturerName}
                onInputChange={(e,value) => {
                    setLecturerName(value);
                    const newState = {...formState};
                    newState["lecturerName"] = value;
                    setFormState(newState);
                }}
                name="lecturerName"
                id="lecturerName"
                options={lecturers}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Öğretim Görevlisi" />}
                />
            </div>
            <div><Button sx={{float: "right"}} onClick={() => {props.submit(formState); props.handleClose();}}>Ders Ekle</Button></div>
            </Box>
        </div>
    );
}