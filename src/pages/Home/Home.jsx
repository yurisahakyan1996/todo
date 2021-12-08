import React from 'react';
import TodoList from "../../components/TodoList";

const Home = () => {

  return (
    <div className="App">
      <h1 className='main_title'>This is my Todo list</h1>
      <TodoList />
    </div>
  );
};

export default Home;