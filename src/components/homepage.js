import ContentComponent from "./content";
import HeaderComponent from "./header";
import NavigationComponent from "./navigation";
import ReminderComponent from "./reminder";
import React, { useEffect, useState } from "react";
import { LoginApi } from "../api/loginapi";
import BreadcrumbsComponent from "./breadcrumbs";
import { useNavigate } from "react-router";

function HomePageComponent() {
    const homepage = "homepage";
    const breadcrumbs = [{name: "Anasayfa", address: "/"}];
    let navigate = useNavigate();
    useEffect(() => {
        isLoggedIn();
    }, []);

    function isLoggedIn() {
        if(localStorage.getItem("username") === null) navigate("/loginn");
    }
    return(
        <div className="container">
            <HeaderComponent/>
            <BreadcrumbsComponent breadcrumbs={breadcrumbs} />
            <NavigationComponent />
            <ContentComponent page={homepage}/>
            <ReminderComponent />
        </div>
    );
}

export default HomePageComponent;