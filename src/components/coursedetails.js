import { IconButton, Typography, Modal, TextField, Autocomplete, Button } from "@mui/material";
import { Box } from "@mui/system";
import AddIcon from '@mui/icons-material/Add';
import { useEffect, useState } from "react";
import CourseApi from "../api/courseapi";
import AssistantApi from "../api/assistantapi";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
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
    const [open, setOpen] = useState(false);
    const [assistantName, setAssistantName] = useState("");
    const [assistants, setAssistants] = useState([]);
    const handleOpen = () => {setOpen(true);};
    const handleClose = () => setOpen(false);
    const courseApi = new CourseApi();
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
    }, []);

    async function fetchAssistants() {
        const response = (await assistantApi.getAssistants()).data;
        setAssistants(response);
    }

    async function fetchCourse() {
        const response = (await courseApi.getCourse(props.courseCode.toUpperCase())).data;
        setCourse(response);
        console.log(course)
    }

    return (
            <div>
                <Typography>Öğretim Görevlisi</Typography>     
                {course.lecturerName }

                <Typography>Hakkında</Typography>
                {course.about}

                <Typography>Ders Tipi</Typography>
                {course.type}

                <Typography>Sınıf</Typography>
                {course.roomName}

                <Typography>Ders Saatleri</Typography>
                {createCourseHours(course.courseHours)}

                <Typography >Ders Asistanları</Typography>
                <IconButton onClick={handleOpen}><AddIcon/></IconButton>
                {course.assistantNames.length > 0 ? course.assistantNames : "Bu dersin henüz asistanı yok." }
                

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

                </div>
    );
}