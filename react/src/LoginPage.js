import React, {useState} from "react";
import {LOCAL_HOST} from "./constants";

export const LoginPage = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const submitForm = (event) => {
        fetch(`${LOCAL_HOST}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({username, password})
        }).then(response => {
            return Promise.all([response.status, response.json()])
        }).then(([statusCode, responseJson]) => {
            if (statusCode === 200) {
                props.setIsLoggedIn(true)
            }
            alert(responseJson.message);
        }).catch(error => alert(`An internal server error occurred:\n${error}`));
        event.preventDefault();
    };

    return <form className="Login" onSubmit={event => submitForm(event)}>
        <label>Username</label>
        <input type="text" value={username} onChange={(event => setUsername(event.target.value))}/>
        <label>Password</label>
        <input type="password" value={password} onChange={(event => setPassword(event.target.value))}/>
        <input type="submit" value="Submit"/>
    </form>;
};
