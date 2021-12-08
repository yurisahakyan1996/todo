import {createSlice} from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    todoList: [],
  },
  reducers: {
    initData: (state, action) => {
      state.todoList = action.payload;
    },
    addTodo: (state, action) => {
      state.todoList.push({
        id: Date.now(),
        title: action.payload,
        completed: false,
        isEdit: false
      });
    },
    deleteTodo: (state, action) => {
      state.todoList = state.todoList.filter(item => item.id !== action.payload);
    },
    editTodo: (state, action) => {
      state.todoList = state.todoList.map(item => item.id === action.payload.id ? {
        ...item,
        ...action.payload.data
      } : item);
    },
    deleteCompleted: (state) => {
      state.todoList = state.todoList.filter(item => !item.completed);
    }
  }
});

export const {
  initData,
  addTodo,
  deleteTodo,
  editTodo,
  deleteCompleted,
} = todoSlice.actions;

export const getTodoList = (state) => state.todo;
export default  todoSlice.reducer