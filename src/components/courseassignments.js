import { IconButton, Typography, Button, Modal, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
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
            <div><Box >
                <Button onClick={handleExamOpen} endIcon={<AddIcon/>} sx={{float:"right"}}>Sınav Ekle</Button>
                {course.exams.length > 0 ?
                <TableContainer sx={{width: '100%', gridColumn: 'span 3'}} >
                <Table sx={{ }} aria-label="simple table">
                    <TableHead>
                        <TableRow >
                            <TableCell sx={{ width: '40%' }}>Sınav</TableCell>
                            <TableCell sx={{ width: '30%' }}>Tarih</TableCell>
                            <TableCell sx={{ width: '30%' }}>Sınıf</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {course.exams.map((row) => (
                        <TableRow>
                        <TableCell><a style={{textDecoration: "none"}} href={"/my_courses/" + props.courseCode + "/exam/" + row.id}>{row.name}</a></TableCell>
                        <TableCell>{row.date}</TableCell>
                        <TableCell>{row.roomName}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer> : "Şu anda dersin eklenmiş bir sınavı yok."}
                </Box>
                <Box  sx={{marginTop:'20px'}}>
                <Button onClick={handleHwOpen} sx={{float:"right"}} endIcon={<AddIcon/>}>Ödev Ekle</Button>
                {course.homeworks.length > 0 ? <TableContainer sx={{width: '100%', gridColumn: 'span 3'}} >
                <Table sx={{ }} aria-label="simple table">
                    <TableHead>
                        <TableRow >
                            <TableCell sx={{ width: '30%' }}>Ödev</TableCell>
                            <TableCell sx={{ width: '30%' }}>Tarih</TableCell>
                            <TableCell sx={{ width: '40%' }}>Sorumlu Asistan</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {course.homeworks.map((row) => (
                        <TableRow>
                        <TableCell><a href={"/my_courses/" + props.courseCode + "/hw/" + row.id}>{"Ödev" + row.id}</a></TableCell>
                        <TableCell>{row.date}</TableCell>
                        <TableCell>{row.assistantName}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer> : "Şu anda dersin eklenmiş bir ödevi yok."}
            </Box>
                <Modal
                open={examOpen}
                onClose={handleExamClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                >
                <Box sx={style}>
                    <NewExamFormComponent handleClose={handleExamClose} courseCode={props.courseCode} />
                </Box>
                </Modal>  

                <Modal
                open={hwOpen}
                onClose={handleHwClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                >
                <Box sx={style}>
                    <NewHwFormComponent handleClose={handleHwClose} courseCode={props.courseCode} />
                </Box>
                </Modal>  
            </div>
    );
}