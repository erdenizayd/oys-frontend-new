import { IconButton, Typography, Modal, TextField, Autocomplete, Button } from "@mui/material";
import { Box } from "@mui/system";
import AddIcon from '@mui/icons-material/Add';
import { useEffect, useState } from "react";
import CourseApi from "../api/courseapi";
import AssistantApi from "../api/assistantapi";
import EditIcon from '@mui/icons-material/Edit';
import EditCourseTimeTableComponent from "./editcoursetimetable";


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'white',
    boxShadow: 24,
    p: 4,
    borderRadius: '5px'
  };

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
        if(schedule[i].length > 0) {
            schedule[i].sort();
            returnStr = returnStr + days[i] + ": ";
            schedule[i].forEach((e) => {returnStr = returnStr + hours[e] + " "});
            returnStr = returnStr + "\n";
        }
    }

    return returnStr;
}

export default function CourseDetailsComponent(props) {

    const assistantApi = new AssistantApi();
    const [response, setResponse] = useState('');
    const [open, setOpen] = useState(false);
    const [assistantName, setAssistantName] = useState("");
    const [assistants, setAssistants] = useState([]);
    const handleOpen = () => {setOpen(true);};
    const handleClose = () => setOpen(false);
    const handleEditOpen = () => {setEditOpen(true);};
    const handleEditClose = () => setEditOpen(false);
    const courseApi = new CourseApi();
    const [editOpen, setEditOpen] = useState(false);
    const [hourList,setHourList] = useState([]);
    const [currentClass, setCurrentClass] = useState("");


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

    async function handleClick() {
        const index = assistants.findIndex(object => {
            return object.name === assistantName;
        })
        const response = (await courseApi.addAssistant(props.courseCode.toUpperCase(), assistants[index].id)).data;
        handleClose();
    }
    useEffect(() => {
        fetchCourse();
        fetchAssistants();
    }, [response]);

    async function fetchAssistants() {
        const response = (await assistantApi.getAssistants()).data;
        setAssistants(response);
    }

    async function handleClickEdit() {
        const courseHoursArray = [];
        course.courseHours.map((h) => courseHoursArray.push({first:h.dayOfWeek,second:h.hour}));
        const request = {
            name: course.name,
            about: course.about,
            type: course.type,
            code: course.code,
            roomName: currentClass === "" ? course.roomName : currentClass,
            lecturerName: course.lecturerName,
            hours: currentClass === "" ? courseHoursArray : hourList
        }


        const resp = (await courseApi.updateCourseDetails(props.courseCode.toUpperCase(), request)).data;
        setResponse(resp);
        handleEditClose();
    }

    function onFormChange(event) {
        const newState = {...course};
        const name = event.target.name;
        const value = event.target.value;
        newState[name] = value;
        setCourse(newState);
    }

    async function fetchCourse() {
        const response = (await courseApi.getCourse(props.courseCode.toUpperCase())).data;
        setCourse(response);
        console.log(course)
    }

    return (
            <div>
                {localStorage.getItem("role") === 'student' ?
                 <Button sx={{float: 'right'}} variant="contained" endIcon={<EditIcon/>} onClick={handleEditOpen}>Düzenle</Button>
                : ""}

                <Box sx={{
                    width: '100%',
                    display: 'grid',
                    gridTemplateColumns: ' auto auto'
                }}>
                <Box  sx={{
                    gridColumn:"span 2",
                    borderStyle: "solid",
                    borderWidth: "1px",
                    padding: 2,
                    margin: '10px 0 10px 0',
                    borderRadius: '3px'
                }}>
                <span>
                <Typography>Öğretim Görevlisi: {course.lecturerName}</Typography>     
                
                <Typography>Ders Tipi: {course.type.charAt(0) + course.type.slice(1).toLocaleLowerCase()}</Typography>
                </span>
                <Typography>Hakkında</Typography>
                {course.about}

                
                </Box>
                <Box  sx={{
                    gridColumn:"span 1",
                    borderStyle: "solid",
                    borderWidth: "1px",
                    padding: 2,
                    margin: '10px 0 10px 0',
                    borderRadius: '3px'
                }}>
                <Typography>Sınıf</Typography>
                {course.roomName}

                <Typography>Ders Saatleri</Typography>
                {createCourseHours(course.courseHours)}
                </Box>
                <Box  sx={{
                    gridColumn:"span 1",
                    borderStyle: "solid",
                    borderWidth: "1px",
                    padding: 2,
                    margin: '10px 0 10px 0',
                    borderRadius: '3px'
                }}>
                <Typography >Ders Asistanları 
                    <IconButton sx={{float: 'right'}} onClick={handleOpen}><AddIcon/></IconButton></Typography>
                
                {course.assistantNames.length > 0 ? course.assistantNames : "Bu dersin henüz asistanı yok." }
                </Box>
                </Box>

                <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                >
                <Box sx={style}>
                    <Box sx={{ minWidth: 120 }}>
                    <Autocomplete
                        inputValue={assistantName}
                        onInputChange={(e,value) => {
                            setAssistantName(value);
                        }}
                        name="assistantName"
                        id="assistantName"
                        options={assistants.map((e) => e.name)}
                        sx={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} label="Asistan" />}
                    />
                    <Button onClick={handleClick}>Asistan Ekle</Button>
                    </Box>
                </Box>
                </Modal>  

                <Modal
                open={editOpen}
                onClose={handleEditClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                >
                <Box sx={style}>
                    <Box sx={{ minWidth: "100%"}}>
                    
                    <TextField
                        onChange={onFormChange}
                        name="name"
                        id="name"
                        label="Ders Adı"
                        defaultValue={course.name}
                    />
                    <TextField
                        onChange={onFormChange}
                        name="about"
                        id="about"
                        label="Hakkında"
                        defaultValue={course.about}
                    />
                    <TextField
                        onChange={onFormChange}
                        name="code"
                        id="code"
                        label="Ders Kodu"
                        defaultValue={course.code}
                    />
                    <EditCourseTimeTableComponent setCurrentClass={setCurrentClass} setHourList={setHourList}/>
                    <Button onClick={handleClickEdit}>Düzenle</Button>
                    </Box>
                </Box>
                </Modal>  


                </div>
    );
}