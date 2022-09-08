import ContentComponent from "./content";
import HeaderComponent from "./header";
import NavigationComponent from "./navigation";
import ReminderComponent from "./reminder";
import React, { useEffect, useState } from "react";
import { LoginApi } from "../api/loginapi";

function HomePageComponent() {
    const homepage = "homepage";

    return(
        <div className="container">
            <HeaderComponent/>
            <NavigationComponent />
            <ContentComponent page={homepage}/>
            <ReminderComponent />
        </div>
    );
}

export default HomePageComponent;