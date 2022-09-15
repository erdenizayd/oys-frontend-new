import { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import StudentApi from '../api/studentapi';

import { differenceInCalendarDays } from 'date-fns';
import { useNavigate } from 'react-router';

function isSameDay(a, b) {
  return differenceInCalendarDays(a, b) === 0;
}

function ReminderComponent() {
    const [value, setValue] = useState(new Date());
    const studentApi = new StudentApi();
    const [dates,setDates] = useState([]);
    const [dateObj, setDateObj] = useState([]);
    let navigate = useNavigate();

    function onChange(nextValue) {
        setValue(nextValue);
    }

    function tileContent({ date, view }) {
        if (view === 'month') {
          if (dates.find(dDate => isSameDay(dDate, date))) {
            return '';
          }
        }
      }
    
    function tileClassName({ date, view }) {
      if (view === 'month') {
        if (dates.find(dDate => isSameDay(dDate, date))) {
          return 'importantDate';
        }
      }
    }

    useEffect(() => {
        fetchDates();
    },[]);

    async function fetchDates() {
        const response = (await studentApi.getImportantDates()).data;
        const newDates = [];
        response.map(d => newDates.push(Date.parse(d.date)));
        setDates(newDates);
        setDateObj(response);
    }

    function handleClick(date,event) {
        dateObj.forEach((dDate) => {
            if(isSameDay(Date.parse(dDate.date), date)) {
                navigate(dDate.address);
            }
        })
    }

    return (
        <div className="reminder">
            <Calendar
            onClickDay={handleClick}
            onChange={onChange}
            value={value}
            tileContent={tileContent}
            tileClassName={tileClassName}/>
            
        </div>
    );
}

export default ReminderComponent;