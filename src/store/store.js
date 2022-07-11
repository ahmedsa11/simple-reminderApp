import { configureStore} from '@reduxjs/toolkit';
import reminderslice from '../reduser/reminderslice';
const store =configureStore({
    reducer: {reminder:reminderslice}
})
export default store;