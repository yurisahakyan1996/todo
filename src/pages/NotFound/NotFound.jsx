import React from 'react';
import {NavLink} from "react-router-dom";
import {Button} from "react-bootstrap";

const NotFound = () => {
  return (
    <div>
      <h1>NOT FOUND PAGE</h1>
      <br/>
      <NavLink to={"/"}>
        <Button variant={"primary"}>Go to Home</Button>
      </NavLink>
    </div>
  );
};

export default NotFound;