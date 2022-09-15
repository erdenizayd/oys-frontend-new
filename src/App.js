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
import ExamPageComponent from './components/exampage';
import HwPageComponent from './components/hwpage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import FooterComponent from './components/footer';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2F9C95',
    },
    secondary: {
      main: '#663F46',
    },
    background: {
      paper: '#E9ECEC',
      default: 'white',
    },
    warning: {
      main: '#E3D081',
    },
    info: {
      main: '#2F9C95',
    },
    success: {
      main: '#2F9C95',
    },
    text: {
      primary: '#3C362A',
      disabled: 'rgba(84,73,75,0.71)',
    },
  },
}
)

function App() {

  const [role,setRole] = useState('');

  const contextData = {
    role,
    setRole
  };

  return (
    <ThemeProvider theme={theme}>
    <RoleContext.Provider value={contextData}>
    <div className='App'>
    <ToastContainer />
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
        <Route path="my_courses/:course/exam/:exam" element={<ExamPageComponent/>}/>
        <Route path="my_courses/:course/hw/:hw" element={<HwPageComponent/>}/>
      </Routes>
    </BrowserRouter>
    
    </div>
    </RoleContext.Provider>
    <FooterComponent/>
    </ThemeProvider>
  );
}

export default App;
