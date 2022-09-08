import ContentComponent from "./content";
import HeaderComponent from "./header";
import NavigationComponent from "./navigation";
import ReminderComponent from "./reminder";

function UsersPageComponent() {
    return (
        <div className="container">
            <HeaderComponent/>
            <NavigationComponent />
            <ContentComponent page={"users"}/>
            <ReminderComponent />
        </div>
    );
}

export default UsersPageComponent;