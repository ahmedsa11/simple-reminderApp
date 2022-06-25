import { ADD,clear,clearAll } from "../types";
import { bake_cookie, read_cookie} from "sfcookies";
const Reduser =(state,action)=>{
    let reminders=[]
    state =read_cookie('reminders');
    if(action.type===ADD){
        bake_cookie('reminders',reminders)
         reminders= [...state,{text:action.text,date:action.date,id:Math.random()}]
        bake_cookie('reminders',reminders)
        return reminders
     
    }
    else if(action.type===clear){
       
         reminders=state.filter(reminder=>reminder.id!==action.id)
         bake_cookie('reminders',reminders)
         return reminders
    }
    else if(action.type===clearAll){
    
         reminders=[]
         bake_cookie('reminders',reminders)
         return reminders
    }
    return state

}
export default Reduser