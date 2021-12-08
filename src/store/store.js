import {configureStore} from "@reduxjs/toolkit";
import todoReducer from './reducers/todoSlice'

export default configureStore({
  reducer: {
    todo: todoReducer,
  }
})