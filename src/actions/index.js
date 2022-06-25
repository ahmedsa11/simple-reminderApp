import { ADD,clear ,clearAll } from "../types"; 
export const addReminders = (text, date) => {
    const action ={
        type:ADD,
        text,
        date
    }
    console.log('add',action);
    return action;
}
export const clearReminders = (id) => {
    const action ={
        type:clear,
        id
    }
    console.log('remove',action);
    return action;
}
export const clearAllreminders = () => {
    const action ={
        type:clearAll
    }
    console.log('remove',action);
    return action;
}