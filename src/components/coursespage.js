import HeaderComponent from "./header";
import NavigationComponent from "./navigation";
import ContentComponent from "./content";
import ReminderComponent from "./reminder";


function CoursesPageComponent() {
    return (
        <div className="container">
            <HeaderComponent/>
            <NavigationComponent />
            <ContentComponent page={"courses"}/>
            <ReminderComponent />
        </div>
    );
}

export default CoursesPageComponent;