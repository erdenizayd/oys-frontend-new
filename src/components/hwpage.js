import { useParams } from "react-router";
import HeaderComponent from "./header";
import NavigationComponent from "./navigation";
import ContentComponent from "./content";
import ReminderComponent from "./reminder";

export default function HwPageComponent() {
    let params = useParams();
    return (
        <div className="container">
            <HeaderComponent/>
            <NavigationComponent />
            <ContentComponent page={"homework"} courseCode={params.course} hwId={params.hw}/>
            <ReminderComponent />
        </div>
    );
}