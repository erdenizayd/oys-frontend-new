import { useState } from "react";
import { useParams } from "react-router";
import AnnouncementComponent from "./announcement";
import ClassesTableComponent from "./classestable";
import ClassInfoComponent from "./classinfo";
import CoursePageContentComponent from "./coursepagecontent";
import CoursesContentComponent from "./coursescontent";
import CoursesListComponent from "./courseslist";
import EnrollCourseComponent from "./enrollcourse";
import ExamPageComponent from "./exampage";
import ExamPageContentComponent from "./exampagecontent";
import GradeComponent from "./grade";
import HwPageContentComponent from "./hwpagecontent";
import MyCoursesContentComponent from "./mycoursescontent";
import CourseSearchComponent from "./searchcourse";
import UsersContentComponent from "./userscontent";
import UsersListComponent from "./userslist";
import UsersSearchComponent from "./userssearch";

function ContentComponent(props) {


    if(props.page === "homepage") {
        return (        
            <div className="content">
                <div style={{minHeight: "500px"}}></div>
            </div>
        );
    }
    /*else if(props.page === "announcements") {
        return (
            <div className="content">
                <div className="title">Duyurular</div>
                <AnnouncementComponent/>
                <AnnouncementComponent/>
                <AnnouncementComponent/>
                <AnnouncementComponent/>
            </div>
        )
    }*/
    else if(props.page === "my_courses") {
        return (
            <div className="content">
                <MyCoursesContentComponent/>
            </div>
        )
    }
    else if(props.page === "courses") {
        return (
            <div className="content">
                <CoursesContentComponent/>
            </div>
        )
    }
    else if(props.page === "users") {
        return (
            <div className="content">
                <UsersContentComponent />
            </div>
        )
    }
    else if(props.page === "classes") {
        return (
            <div className="content"  style={{minHeight: "500px"}}>
                <ClassesTableComponent />
            </div>
        );
    }
    else if(props.page === "course") {
        return (
            <div className="content">
                <CoursePageContentComponent courseCode={props.courseCode}/>
            </div>
        );
    }
    else if(props.page === "exam") {
        return (
            <div className="content">
                <ExamPageContentComponent examId={props.examId} courseCode={props.courseCode}/>
            </div>
        );
    }
    else if(props.page === "homework") {
        return (
            <div className="content">
                <HwPageContentComponent hwId={props.hwId} courseCode={props.courseCode}/>
            </div>
        );
    }
    else return;
}

export default ContentComponent;