import logo from './logo.svg';
import './App.css';
import LoginComponent from './components/loginpage';
import HomePageComponent from './components/homepage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AnnouncementPageComponent from './components/announcementpage';
import AttendedCoursesPageComponent from './components/attendedcoursepage';
import CoursesPageComponent from './components/coursespage';
import UsersPageComponent from './components/userspage';
import GradesPageComponent from './components/gradespage';
import ClassesPageComponent from './components/classespage';
import RoleContext from './context/rolecontext';
import { useState } from 'react';
import CoursePageComponent from './components/coursepage';


function App() {

  const [role,setRole] = useState('');

  const contextData = {
    role,
    setRole
  };

  return (
    <RoleContext.Provider value={contextData}>
    <div className='App'>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePageComponent />}/>
        <Route path="loginn" element={<LoginComponent />}/>
        <Route path="announcements" element={<AnnouncementPageComponent />}/>
        <Route path="my_courses" element={<AttendedCoursesPageComponent />}/>
        <Route path="courses" element={<CoursesPageComponent />}/>
        <Route path="users" element={<UsersPageComponent/>}/>
        <Route path="grades" element={<GradesPageComponent/>}/>
        <Route path="classes" element={<ClassesPageComponent/>}/>
        <Route path="my_courses/:course" element={<CoursePageComponent/>}/>
      </Routes>
    </BrowserRouter>
    </div>
    </RoleContext.Provider>
  );
}

export default App;
