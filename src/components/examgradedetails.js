import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import ExamApi from "../api/examapi";

export default function ExamGradeDetailComponent(props) {
    const examApi = new ExamApi();
    const [grade, setGrade] = useState({});
    const [average, setAverage] = useState(0);
    const [std, setStd] = useState(0);
    const emptyTable = [0,0,0,0,0,0,0,0,0,0];

    

    useEffect(() => {
        fetchGrades();
    },[]);

    async function fetchGrades() {
        const response = (await examApi.getGrades(props.examId)).data;
        const tempData = [...emptyTable];
        const avg = response.reduce((a, b) => a + b, 0) / response.length;
        const dev = (response.length === 0 ? 0 : Math.sqrt(response.map(x => Math.pow(x - avg, 2)).reduce((a, b) => a + b) / response.length));
        setAverage(avg);
        setStd(dev);
    }

    useEffect(() => {
        fetchGrade();
    }, []);

    async function fetchGrade() {
        const response = (await examApi.getGrade(props.examId)).data;
        setGrade(response);
    }

    return (
        <Box>
            Notunuz: {grade.grade}
            Not Ortalaması: {average}
            Standart Sapma: {std}
            Değerlendirme: {grade.evaluation}
        </Box>
    );
}