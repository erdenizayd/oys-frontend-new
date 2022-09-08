import { useState } from "react";
import AnnouncementComponent from "./announcement";
import ClassesTableComponent from "./classestable";
import ClassInfoComponent from "./classinfo";
import CoursesContentComponent from "./coursescontent";
import CoursesListComponent from "./courseslist";
import EnrollCourseComponent from "./enrollcourse";
import GradeComponent from "./grade";
import CourseSearchComponent from "./searchcourse";
import UsersListComponent from "./userslist";
import UsersSearchComponent from "./userssearch";

function ContentComponent(props) {

    const [openPop, setOpenPop] = useState(false);

    const classes = [
    <ClassInfoComponent type={"mycourses"} course={
        {
            code: "CENG111",
            name: "Introduction to Computer Engineering Concepts",
            instructor: "Memo Ero Ayo"
        }

    }/>, 
    <ClassInfoComponent type={"mycourses"} course={
        {
            code: "CENG140",
            name: "C Programming",
            instructor: "Memo Ero Ayo"
        }

    }/>, 
    <ClassInfoComponent type={"mycourses"} course={
        {
            code: "CENG213",
            name: "Data Structures",
            instructor: "Memo Ero Ayo"
        }

    }/>, 
    <ClassInfoComponent type={"mycourses"} course={
        {
            code: "CENG280",
            name: "Formal Languages and Abstract Machines",
            instructor: "Memo Ero Ayo"
        }

    }/>, 
    <ClassInfoComponent type={"mycourses"} course={
        {
            code: "CENG240",
            name: "Programming Languages",
            instructor: "Memo Ero Ayo"
        }

    }/>];

    const gradeclasses = [
    <ClassInfoComponent type={"grades"} course={
        {
            code: "CENG111",
            name: "Introduction to Computer Engineering Concepts",
            instructor: "Memo Ero Ayo"
        }

    }/>, 
    <ClassInfoComponent type={"grades"} course={
        {
            code: "CENG140",
            name: "C Programming",
            instructor: "Memo Ero Ayo"
        }

    }/>, 
    <ClassInfoComponent type={"grades"} course={
        {
            code: "CENG213",
            name: "Data Structures",
            instructor: "Memo Ero Ayo"
        }

    }/>, 
    <ClassInfoComponent type={"grades"} course={
        {
            code: "CENG280",
            name: "Formal Languages and Abstract Machines",
            instructor: "Memo Ero Ayo"
        }

    }/>, 
    <ClassInfoComponent type={"grades"} course={
        {
            code: "CENG240",
            name: "Programming Languages",
            instructor: "Memo Ero Ayo"
        }

    }/>];

    const classList = [
        {
            title: "CENG111"
        },
        {
            title: "CENG111"
        },
        {
            title: "CENG111"
        },
        {
            title: "CENG111"
        },
        {
            title: "CENG111"
        }
    ]

    if(props.page === "homepage") {
        return (        
            <div className="content">
                <AnnouncementComponent/>
                {classes}
            </div>
        );
    }
    else if(props.page === "announcements") {
        return (
            <div className="content">
                <div className="title">Duyurular</div>
                <AnnouncementComponent/>
                <AnnouncementComponent/>
                <AnnouncementComponent/>
                <AnnouncementComponent/>
            </div>
        )
    }
    else if(props.page === "my_courses") {
        return (
            <div className="content">
                <div className="title">Kayıtlı Derslerim</div>
                <div className="courseslist">{classes}</div>
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
                <div className="title">Kullanıcılar</div>
                <UsersSearchComponent />
                <UsersListComponent/>
            </div>
        )
    }
    else if(props.page === "grades") {
        return (
            <div className="content">
                <div className="title">Notlarım</div>
                {classList.map((e) => {return <GradeComponent title={e.title}/>})}
            </div>
        )
    }
    else if(props.page === "classes") {
        return (
            <div className="content">
                <ClassesTableComponent />
            </div>
        );
    }
    else return;
}

export default ContentComponent;