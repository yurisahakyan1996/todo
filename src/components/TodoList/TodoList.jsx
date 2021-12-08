import React, {useEffect, useState} from 'react';
import {Button, FormControl, InputGroup, Form} from "react-bootstrap";
import TodoItem from "../TodoItem";
import {useDispatch, useSelector} from "react-redux";
import {addTodo, deleteCompleted, getTodoList, initData} from "../../store/reducers/todoSlice";
import DeleteCompleted from "../DeleteCompleted";

const TodoList = () => {
  const {todoList} = useSelector(getTodoList);
  const [value, setValue] = useState('');
  const [filterValue, setFilterValue] = useState('');
  const [sorted, setSorted] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const list = localStorage.getItem('todoList');
    if (list) {
      dispatch(initData(JSON.parse(list)))
    }
  }, []);

  useEffect(() => {
    const list = localStorage.getItem('todoList');
    if (list || todoList.length === 0) {
      localStorage.removeItem('todoList');
    }
    if (todoList.length) {
      localStorage.setItem('todoList', JSON.stringify(todoList));
    }
  }, [todoList]);

  const addTodoFn = () => {
    if (value.trim()) {
      dispatch(addTodo(value));
    }
    setValue('');
  }
  const deleteCompletedFn = () => {
    dispatch(deleteCompleted());
  }
  const sortToggle = () => {
    setSorted(!sorted);
  }

  let list = [...todoList];
  if (sorted) {
    list = list.sort((item1, item2) =>{
      let x = item1.title.toLowerCase();
      let y = item2.title.toLowerCase();
      if (x < y) {return -1;}
      if (x > y) {return 1;}
      return 0;
    });
  }
  if (filterValue.trim()) {
    list = list.filter(item => item.title.match(filterValue));
  }

  return (
    <div style={{padding: '0 15px'}}>
      <div className="input_group">
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Search..."
            value={filterValue}
            onChange={(e) => setFilterValue(e.target.value)}
          />
          <Form.Check
            type="switch"
            id="custom-switch"
            label="Sort alphabetically"
            onChange={sortToggle}
            className="sort_checkbox"
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <Button className='acceptAdd' variant="success" onClick={addTodoFn}>Accept</Button>
          <Button className='cancelAdd' variant="danger" onClick={() => setValue('')}>Cancel</Button>
          <FormControl value={value} onChange={(e) => setValue(e.target.value)}/>
        </InputGroup>
      </div>
      <ul className='todo_list'>
        {list.map((todo) => {
          return (
            <TodoItem
              todo={todo}
              key={todo.id}
            />
          )
        })}
      </ul>
      <DeleteCompleted deleteCompletedFn={deleteCompletedFn}/>
    </div>
  );
};

export default TodoList;