import React from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {Button, Card} from "react-bootstrap";
import {useSelector} from "react-redux";
import {getTodoList} from "../../store/reducers/todoSlice";
import minionImage from "../../images/MINIONS.jpg"

const Todo = () => {
  const {todoList} = useSelector(getTodoList);
  const {id} = useParams();
  const navigate = useNavigate();

  const todo = todoList.filter(item => String(item.id) === id)[0];

  return (
    <div className='todoInfoPage'>
      {todo ? (
        <Card className="myCard bg-dark text-white">
          <Card.Img src={minionImage} alt="Card image" />
          <Card.ImgOverlay>
            <Card.Title className="cardTitle">{todo.title}</Card.Title>
            <Card.Text className="cardText">
              Քանի որ, մեր թուդու լիստում առկա չէ նկարագրություն ես որոշեցի այս տեքստը ստատիկ տպել
            </Card.Text>
          </Card.ImgOverlay>
        </Card>
      ) : (
        <h1>Not found</h1>
      )}
      <Button className='goBack' onClick={() => navigate(-1)}>Go back</Button>
    </div>
  );
};

export default Todo;