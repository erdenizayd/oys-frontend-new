import { useParams } from "react-router";
import HeaderComponent from "./header";
import NavigationComponent from "./navigation";
import ContentComponent from "./content";
import ReminderComponent from "./reminder";

export default function ExamPageComponent() {
    let params = useParams();
    return (
        <div className="container">
            <HeaderComponent/>
            <NavigationComponent />
            <ContentComponent page={"exam"} courseCode={params.course} examId={params.exam}/>
            <ReminderComponent />
        </div>
    );
}