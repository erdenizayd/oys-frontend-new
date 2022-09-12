import { IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import AddIcon from '@mui/icons-material/Add';



export default function CourseDetailsComponent(props) {

    function handleClick() {}

    console.log(props.course);

    return (
        <Box sx={{
            width:'100%',
            p:2,
            borderRadius: '10px',
            backgroundColor: 'cyan'
        }}>
            <Box sx={{
            margin:'5px',
            width:'40%',
            p:2,
            backgroundColor: 'white',
            borderRadius: '10px',
            }}>
                <Typography>Öğretim Görevlisi</Typography>
                
                {props.course.lecturerName}</Box>
            <Box sx={{
            margin:'5px',
            width:'40%',
            p:2,
            backgroundColor: 'white',
            borderRadius: '10px',
            }}>
                <Typography>Hakkında</Typography>
                {props.course.about}</Box>

            <Box sx={{
            margin:'5px',
            width:'40%',
            p:2,
            backgroundColor: 'white',
            borderRadius: '10px',
            }}>
                <Typography>Ders Saatleri</Typography>

                {createCourseHours(props.course.courseHours)}</Box>
            <Box sx={{
            margin:'5px',
            width:'40%',
            p:2,
            backgroundColor: 'white',
            borderRadius: '10px',
            }}>
                <Typography >Ders Asistanları</Typography>
                <IconButton onClick={handleClick}><AddIcon/></IconButton>
                {(props.course.assistantNames.length > 0) ? props.course.assistantNames : "Bu dersin henüz asistanı yok."}</Box>

        </Box>
    );
}