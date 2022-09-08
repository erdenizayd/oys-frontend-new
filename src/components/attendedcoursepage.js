import HeaderComponent from "./header";
import NavigationComponent from "./navigation";
import ContentComponent from "./content";
import ReminderComponent from "./reminder";


function AttendedCoursesPageComponent() {
    return (
        <div className="container">
            <HeaderComponent/>
            <NavigationComponent />
            <ContentComponent page={"my_courses"}/>
            <ReminderComponent />
        </div>
    );
}

export default AttendedCoursesPageComponent;