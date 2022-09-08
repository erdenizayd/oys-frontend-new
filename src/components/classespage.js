import ContentComponent from "./content";
import HeaderComponent from "./header";
import NavigationComponent from "./navigation";
import ReminderComponent from "./reminder";

export default function ClassesPageComponent() {
    return (
        <div className="container">
            <HeaderComponent/>
            <NavigationComponent />
            <ContentComponent page={"classes"}/>
            <ReminderComponent />
        </div>
    );
}