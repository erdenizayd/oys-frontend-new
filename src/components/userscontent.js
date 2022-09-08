import { Box, Tab, Tabs, Typography} from "@mui/material";
import { useState } from "react";
import PropTypes from 'prop-types';
import CourseSearchComponent from "./searchcourse";
import CoursesListComponent from "./courseslist";
import UsersListComponent from "./userslist";
import UsersSearchComponent from "./userssearch";
import AddNewUserComponent from "./addnewuser";


function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
}
  
TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
}
export default function UsersContentComponent() {
    
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };



    return (
        <Box sx={{ width: '100%' , gridColumn: 'span 3'}}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="Kullancılar" {...a11yProps(0)} />
            <Tab label="Yeni Kullanıcı Ekle" {...a11yProps(1)} />
            </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
            <UsersSearchComponent />
            <UsersListComponent/>     
        </TabPanel>
        <TabPanel value={value} index={1}>
            <AddNewUserComponent/>
        </TabPanel>
        </Box>
    );
}