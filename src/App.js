import "./App.css";
import { useState } from "react";
import { connect } from "react-redux";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import reminderimg from './unnamed.png';
import {
  addReminders,
  clearReminders,
  clearAllreminders,
} from "./actions/index";
import moment from "moment";
function App(props) {
  console.log("props", props);
  const [text, setText] = useState("");
  const [date, setDate] = useState(new Date());
  const renderReminders = () => {
    const { reminders } = props;
    return (
      <ul>
        {reminders.map((item) => {
          return (
            <li className="rem" key={item.id}>
              <div>{item.text}</div>
              <div>{moment(new Date(item.date)).fromNow()}</div>
              <div className="delete" onClick={() => props.clearReminders(item.id)}>x</div>
            </li>
          );
        })}
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
            props.addReminders(text, date);
            setText("");
            setDate(new Date());
          }}
        >
          Add Reminder
        </button>
        <button onClick={() => props.clearAllreminders()}>
          Clear Reminders
        </button>
        </div>
      </div>
    </div>
  );
}

export default connect(
  (state) => {
    return { reminders: state };
  },
  { addReminders, clearReminders, clearAllreminders }
)(App);
