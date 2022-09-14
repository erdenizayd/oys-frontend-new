import { Button, Modal, Typography, Box, TextField, Table, TableContainer, TableHead, TableRow, TableCell, TableBody, IconButton } from "@mui/material";
import { useEffect, useState } from "react";
import CourseApi from "../api/courseapi";
import ExamApi from "../api/examapi";
import AddTaskIcon from '@mui/icons-material/AddTask';
import ExamGradeChartComponent from "./examgradecharts";
import ExamGradeDetailComponent from "./examgradedetails";

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

export default function ExamPageContentComponent(props) {
    const examApi = new ExamApi();
    const courseApi = new CourseApi();
    const [exam, setExam] = useState({
        id: -1,
        name: "",
        date: "0.0.0000 Saat: 0.0",
        roomName: "",
        details: "",
        isGraded: false
    });
    const [evaluation, setEvaluation] = useState('');
    const [grade, setGrade] = useState('0');
    const [students, setStudents] = useState([]);
    const [currentStudent, setCurrentStudent] = useState('');
    const [open, setOpen] = useState(false);

    function handleOpen(studentId) {
        setOpen(true);
        setCurrentStudent(studentId);
    };
    const handleClose = () => setOpen(false);

    useEffect(() => {
        fetchExam();
        fetchStudents();
    }, []);

    async function fetchExam() {
        const response = (await examApi.getExam(props.examId)).data;
        setExam(response);
    }

    async function fetchStudents() {
        if(localStorage.getItem("role") !== "student") {
            const response = (await courseApi.getCourseStudents(props.courseCode.toUpperCase())).data;
            setStudents(response);
        }
    }

    async function handleEvaluation() {
        const request = {
            grade: grade,
            evaluation: evaluation
        };
        const response = (await examApi.evaluateExam(props.examId, currentStudent, request)).data;
        console.log(response);
    }

    return (
        <div style={{gridColumn: 'span 3'}}>
            <Box>

                <Typography>{exam.name}</Typography>
                <Typography>Tarih: {exam.date}</Typography>
                <Typography>Sınıf: {exam.roomName}</Typography>
                <Typography>Genel Bilgiler: {exam.details}</Typography>

            </Box>
            {(localStorage.getItem("role") == 'student') ?
                (exam.isGraded ? <Box>
                    <ExamGradeDetailComponent examId={props.examId} />
                    <ExamGradeChartComponent examId={props.examId} />
                </Box> 
                : "Sınavınız henüz notlandırılmadı.") 
                : <Box sx={{ width: "100%" , gridColumn: 'span 3', margin: 'auto'}}>
                    <TableContainer sx={{width: '100%', margin: 'auto', marginTop: '20px', gridColumn: 'span 3'}} >
            <Table sx={{ }} aria-label="simple table">
                <TableHead>
                    <TableRow >
                        <TableCell sx={{ width: '90%' }}>Öğrenci Adı</TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {students.map((row) => (
                    <TableRow>
                    <TableCell>
                        <Typography>{row.name}</Typography>
                    </TableCell>
                    <TableCell>
                        <IconButton onClick={() => {handleOpen(row.studentId)}}><AddTaskIcon/></IconButton>
                    </TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                
            <Box sx={style}>
                <TextField
                    onChange={(e) => setGrade(e.target.value)}
                    id="grade"
                    label="Not"
                    type="number"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    />
                    <TextField
                    onChange={(e) => setEvaluation(e.target.value)}
                    id="about"
                    label="Değerlendirme"
                    multiline
                    rows={4}
                    />
                    <Button onClick={handleEvaluation}>Not Ekle</Button>
            </Box>
            </Modal>  
                </Box>
                
            }


        </div>
    );
}