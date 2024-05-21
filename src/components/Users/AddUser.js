import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import "./AddUser.css";
import ErrorModal from "../UI/ErrorModal";



const AddUser = (props) => {
    const addUserHandler = (event) => {
        event.preventDefault();
        if (userName.length === 0 || userAge.length === 0){
            setError({
                title: "Invalid Input",
                message: "please enter a valid username and age"
            })
            return;
        }
        if ((+userAge) < 1) {
            setError({
                title: "Invalid Input",
                message: "please enter a valid age"
            })
            return;
        }
        props.onAddUser(userName, userAge)

        setUserName('')
        setUserAge('')
    };
    const [userName, setUserName] = useState("")
    const [userAge, setUserAge] = useState("")
    const [error, setError] = useState("")

    const nameChangeHendelar = (event) => {
        setUserName(event.target.value)
    }

    const ageChangeHendelar = (event) => {
        setUserAge(event.target.value)
    }

    const errorHandeler=()=>{
        setError(null)
    }

    return (
        <div>{error &&  <ErrorModal title={error.title} message={error.message} onConfirm={errorHandeler}/>}
                       
            <Card className="input">
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input id="username" type="text" value={userName} onChange={nameChangeHendelar} />
                    <label htmlFor="age">Age</label>
                    <input id="age" type="number" value={userAge} onChange={ageChangeHendelar} />
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </div>
    );
};

export default AddUser;