import { createSlice } from "@reduxjs/toolkit";
// import { bake_cookie,read_cookie} from "sfcookies";
const reminderSlise = createSlice({
    name: "reminder",
    initialState: {reminder:[]},
    reducers: {
        addReminders: (state, action) => {
           
            state.reminder.push({
                text: action.payload.text,
                date: action.payload.date,
                id: Math.random()
            });
        //     bake_cookie('reminder',state.reminder)
        //    read_cookie('reminder',state.reminder)
        },
        clearReminders: (state, action) => {
          
            state.reminder = state.reminder.filter(
                reminder => reminder.id !== action.payload
            );
            // bake_cookie('reminder',state.reminder)
            // read_cookie('reminder',state.reminder)
        },
        clearAllreminders: (state, action) => {
          
            state.reminder = [];
            // bake_cookie('reminder',state.reminder)
            // read_cookie('reminder',state.reminder)
        },
        savedata : (state,action)=>{
            state.reminder = action.payload
            // bake_cookie('reminder',state.reminder)
            // read_cookie('reminder',state.reminder)
        }
        
    }
});
export const { addReminders, clearReminders, clearAllreminders,savedata } = reminderSlise.actions;
export default reminderSlise.reducer;