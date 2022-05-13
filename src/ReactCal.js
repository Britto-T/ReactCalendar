import { useState} from 'react';
import Calendar from 'react-calendar';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import moment from "moment"
import dateFormat from 'dateformat';
import 'react-calendar/dist/Calendar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faCheckSquare} from '@fortawesome/free-solid-svg-icons'
library.add(fab, faCheckSquare, faCoffee,fas)

function ReactCal() {
  const [date, setDate] = useState(new Date());
  const [month, setMonth] = useState(new Date());
  const [year, setYear] = useState(new Date());

  const handlePrevMonthChange=()=>{
    document.querySelectorAll(".react-calendar__navigation__prev-button").forEach((el) => el.click());
  }
  const handleNextMonthChange=()=>{
    document.querySelectorAll(".react-calendar__navigation__next-button").forEach((el) => el.click());
  }
  const handlePrevYearChange=()=>{
    document.querySelectorAll(".react-calendar__navigation__prev2-button").forEach((el) => el.click());
  }
  const handleNextYearChange=()=>{
    document.querySelectorAll(".react-calendar__navigation__next2-button").forEach((el) => el.click());
  }
  const activeStartDateChange=(e)=>{
    setMonth(e.activeStartDate)
    setYear(e.activeStartDate)
  }
  const yearClickChange=()=>{
    document.querySelectorAll(".react-calendar__navigation__label__labelText--from").forEach((el) => el.click());
  }
 
  return (
    <div className='app'>
      <h1 className='text-center'>React Calendar</h1>
      <div className='calendar-container col-md-6'>
        <Calendar onChange={setDate} value={date}
        onActiveStartDateChange={activeStartDateChange}
        />
      </div>
      <div className='row col-md-5 '>
          <div className='col-md-5 row justify-content-between' >
            <div className='col-md-1'>  
              <label style={{cursor:"pointer"}} onClick={handlePrevMonthChange}>
              <FontAwesomeIcon icon={['fa', 'angle-left']} />
              </label>
            </div>
            <p className='col-md-4'>{dateFormat(month, "mmmm")}</p>
            <div className='col-md-1'>
              <label style={{cursor:"pointer"}} onClick={handleNextMonthChange} >
              <FontAwesomeIcon icon={['fa', 'angle-right']} />
              </label>
            </div>
          </div>

          <div className='col-md-4 row  justify-content-between'>
            <div className='col-md-1'>
              <label className='cursive' style={{cursor:"pointer"}} onClick={handlePrevYearChange}> <FontAwesomeIcon icon={['fa', 'angle-double-left']} /></label></div>
            <p className='col-md-4' onClick={yearClickChange}>{dateFormat(year, "yyyy")}</p>
            <div className='col-md-1'><label style={{cursor:"pointer"}} onClick={handleNextYearChange}> <FontAwesomeIcon icon={['fa', 'angle-double-right']} /></label></div>
          </div>
      </div>

      

      <p className='text-center'>
        <span className='bold'>Selected Date:</span>{' '}
        {/* {date.toDateString() */}
        {moment(date).format("YYYY/MMM/DD kk:mm:ss")}
        <div>{moment(date).format("MMM")}</div>
        <div>{moment(date).format("YYYY")}</div>
        <div>{dateFormat("2019-04-30T08:59:00.000Z", "mmmm dS, yyyy")}</div>
        <div>{dateFormat(date, "mmmm dS, yyyy")}</div>
        <div>{dateFormat(date, "mmmm")}</div>
      </p>
      <FontAwesomeIcon icon={faCoffee} />
      <FontAwesomeIcon icon="check-square" />
      <FontAwesomeIcon icon={['fab', 'apple']} />
      <FontAwesomeIcon icon={['fab', 'microsoft']} />
      <FontAwesomeIcon icon={['fab', 'google']} />
      <FontAwesomeIcon icon={['fas', 'coffee']} />
      <FontAwesomeIcon icon={['fa', 'chevron-left']} />
      <FontAwesomeIcon icon={['fa', 'chevron-right']} />
      <FontAwesomeIcon icon={['fas', 'chevrons-left']} />
      <FontAwesomeIcon icon={['fas', 'chevrons-right']} />
      <FontAwesomeIcon icon={['fa', 'angle-double-right']} />
      <FontAwesomeIcon icon={['fa', 'angle-double-left']} />
      <FontAwesomeIcon icon={['fa', 'angle-right']} />
      <FontAwesomeIcon icon={['fa', 'angle-left']} />
    </div>
  );
}

export default ReactCal;
