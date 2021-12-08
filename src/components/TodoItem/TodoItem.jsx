import React, {useEffect, useState} from 'react';
import {Button, Form} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";
import {deleteTodo, editTodo} from "../../store/reducers/todoSlice";
import deleteIcon from '../../images/20518457671581426692.svg';
import editIcon from '../../images/5899562021543238878.svg'

const TodoItem = ({todo}) => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    setValue(todo.title);
  }, [todo]);

  const editTodoFn = () => {
    dispatch(editTodo({
      id: todo.id,
      data: {
        isEdit: true
      }
    }))
  }
  const cancelTodo = () => {
    dispatch(editTodo({
      id: todo.id,
      data: {
        isEdit: false
      }
    }));
  }
  const updateTodo = () => {
    dispatch(editTodo({
      id: todo.id,
      data: {
        title: value,
        isEdit: false
      }
    }));
  }
  const deleteTodoItem = () => {
    dispatch(deleteTodo(todo.id));
  }
  const completedFn = () => {
    dispatch(editTodo({
      id: todo.id,
      data: {
        completed: !todo.completed
      }
    }));
  }

  return (
    <li className={`todo${todo.completed ? ' done' : ''}`}>
      <Form.Check.Input
        className="todo_checkbox"
        checked={todo.completed}
        onChange={completedFn}
        type={"checkbox"}
        isValid
      />
      <div className='title'>
        {todo.isEdit ? (
          <div className='change_div'>
            <input
              className='todoInput'
              value={value} type="text"
              onChange={(e) => setValue(e.target.value)}
            />
            <Button disabled={!value} onClick={updateTodo} variant='success'>Accept</Button>
            <Button className='cancel_edit' onClick={cancelTodo} variant='danger'>Cancel</Button>
          </div>
        ) : (
          <div className="noEdit">
            <NavLink to={`todo/${todo.id}`} className='todoTitle'>{todo.title}</NavLink>
            <div>
              <Button onClick={editTodoFn} variant="primary" className='editTodo ml-3'>
                <img style={{width: '16px', verticalAlign: 'baseline'}} src={editIcon} alt="edit icon"/>
              </Button>
              <Button onClick={deleteTodoItem} variant="danger" className='ml-3'>
                <img style={{width: '16px', verticalAlign: 'baseline'}} src={deleteIcon} alt="delete icon"/>
              </Button>
            </div>
          </div>
        )}
      </div>
    </li>
  )
}

export default TodoItem;