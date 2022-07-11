import "./App.css";
import React,{ useState } from "react";
import {useDispatch,useSelector} from "react-redux";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import reminderimg from './unnamed.png';
import { addReminders,clearAllreminders,clearReminders } from "./reduser/reminderslice";
import moment from "moment";
// import { read_cookie,bake_cookie} from "sfcookies";
function App() {
  const [text, setText] = useState("");
  const [date, setDate] = useState(new Date());
  const { reminder} = useSelector((state) => state.reminder);
  const dispatch = useDispatch();
  // useEffect(()=>{
  //  dispatch(savedata())
  // },[reminder])
  const renderReminders = () => {
    return (
      <ul>
        {reminder.length>0? 
        reminder.map((item) => 
            <li className="rem" key={item.id}>
              <div>{item.text}</div>
              <div>{moment(new Date(item.date)).fromNow()}</div>
              <div className="delete" onClick={() => dispatch(clearReminders(item.id))}>x</div>
            </li>
        )
      : <div>No Reminders</div>}
      </ul>
    );
  }; 
  return (
    <div className="app">
      <div className="reminder">
        <img src={reminderimg} alt="" />
        <h1>what should you do ? </h1>
        <input
          type="text"
          placeholder="what should i do"
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
        <DatePicker
          placeholder="Enter Date"
          value={date}
          selected={date}
          onChange={(date) => setDate(date)}
          showTimeSelect
          dateFormat="Pp"
        />
        {renderReminders()}
        <div className="buttons">
        <button
          onClick={() => {
          dispatch(addReminders({ text, date }));
            setText("");
            setDate(new Date());
          }}
        >
          Add Reminder
        </button>
        <button onClick={() => dispatch(clearAllreminders())}>
          Clear Reminders
        </button>
        </div>
      </div>
    </div>
  );
}
export default App;
