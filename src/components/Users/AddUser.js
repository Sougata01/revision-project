import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import "./AddUser.css";

const AddUser = () => {

  const [userName, setUserName] = useState('')
  const [userAge, setUserAge] = useState('')

  const addUserHandler = (event) => {
    event.preventDefault();
    console.log(userName,userAge)
    setUserName('')
    setUserAge('')
  };

  const nameChangeHandler = (event) => {
    setUserName(event.target.value)
  }
  const ageChangeHandler = (event) => {
    setUserAge(event.target.value)
  }

  return (
    <Card className="input">
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" value={userName} onChange={nameChangeHandler} />
        <label htmlFor="age">Age</label>
        <input id="age" type="number" value={userAge} onChange={ageChangeHandler} />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;