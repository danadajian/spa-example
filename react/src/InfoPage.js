import {LOCAL_HOST} from "./constants";
import React, {useEffect, useState} from "react";

export const InfoPage = (props) => {
    const [username, setUsername] = useState('');
    const [date, setDate] = useState('');
    const [currentWorkingDirectory, setCurrentWorkingDirectory] = useState('');

    useEffect(() => {
        getUserData()
            .then(responseJson => {
                const {username, date, currentWorkingDirectory} = responseJson;
                setUsername(username);
                setDate(date);
                setCurrentWorkingDirectory(currentWorkingDirectory)
            })
    });

    const getUserData = () => {
        return fetch(`${LOCAL_HOST}/user-data`)
            .then(response => response.json())
            .catch(error => alert(`An internal server error occurred:\n${error}`));
    };

    const logOut = () => {
        props.setIsLoggedIn(false)
    };

    return <div className="Info">
        <h3>Username: {username}</h3>
        <h3>Date & Time: {date}</h3>
        <h3>Current Working Directory: {currentWorkingDirectory}</h3>
        <button onClick={logOut}>Log Out</button>
    </div>;
};
