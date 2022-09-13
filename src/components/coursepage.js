import { useParams } from "react-router"
import ContentComponent from "./content";
import HeaderComponent from "./header";
import NavigationComponent from "./navigation";
import ReminderComponent from "./reminder";

export default function CoursePageComponent() {
    let courseCode = useParams();
    return (
        <div className="container">
            <HeaderComponent/>
            <NavigationComponent />
            <ContentComponent page={"course"} courseCode={courseCode.course}/>
            <ReminderComponent />
        </div>
    );
}