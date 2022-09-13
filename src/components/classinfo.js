import { useState } from "react";

function ClassInfoComponent(props) {

    const [show, setShow] = useState(false);


    if(props.type == "grades") return (
        <div onClick={() => setShow(!show)} className={show ? "enlargedbox" : "classbox"}>
            {show ? (props.course.code + " - " + props.course.name + " - " + props.course.instructor): <div><div className="ctitle">
                {props.course.code}
            </div>
            <div className="courseName">
                {props.course.name}
            </div>
            <div className="instructor">
                {props.course.lecturerName}
            </div> </div>}
        </div>
    );
    else return (
        <div className="classbox">
            <div className="ctitle">
                {props.course.code}
            </div>
            <div className="courseName">
                <a href={"/my_courses/" + props.course.code.toLowerCase()}>{props.course.name}</a>
            </div>
            <div className="instructor">
                {props.course.lecturerName}
            </div>
        </div>
    );
}

export default ClassInfoComponent;