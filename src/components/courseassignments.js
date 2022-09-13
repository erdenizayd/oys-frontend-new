import { IconButton, Typography, Button, Modal, Box } from "@mui/material";
import { useEffect, useState } from "react";
import CourseApi from "../api/courseapi";
import AddIcon from '@mui/icons-material/Add';
import NewExamFormComponent from "./newexamform";
import NewHwFormComponent from "./newhwform";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius: '5px'
  };

export default function CourseAssignmentsComponent(props) {
    const [examOpen, setExamOpen] = useState(false);
    const [hwOpen, setHwOpen] = useState(false);
    const handleExamOpen = () => {setExamOpen(true);};
    const handleExamClose = () => setExamOpen(false);
    const handleHwOpen = () => setHwOpen(true);
    const handleHwClose = () => setHwOpen(false);


    const courseApi = new CourseApi();
    const [course,setCourse] = useState(
        {
            exams: [],
            homeworks: [],
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
                <Button onClick={handleExamOpen} endIcon={<AddIcon/>}>Sınav Ekle</Button>
                <Typography>Sınavlar</Typography>     
                {course.exams.length > 0 ? course.exams : "Şu anda dersin eklenmiş bir sınavı yok."}
                <Button onClick={handleHwOpen} endIcon={<AddIcon/>}>Ödev Ekle</Button>
                <Typography>Ödevler</Typography>     
                {course.homeworks.length > 0 ? course.homeworks : "Şu anda dersin eklenmiş bir ödevi yok."}
            
                <Modal
                open={examOpen}
                onClose={handleExamClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                >
                <Box sx={style}>
                    <NewExamFormComponent courseCode={props.courseCode} />
                </Box>
                </Modal>  

                <Modal
                open={hwOpen}
                onClose={handleHwClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                >
                <Box sx={style}>
                    <NewHwFormComponent courseCode={props.courseCode} />
                </Box>
                </Modal>  
            </div>
    );
}