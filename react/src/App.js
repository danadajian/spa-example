import React, {useState} from 'react';
import './App.css';
import {InfoPage} from "./InfoPage";
import {LoginPage} from "./LoginPage";

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const pageToDisplay = isLoggedIn ? <InfoPage setIsLoggedIn={setIsLoggedIn}/> :
        <LoginPage setIsLoggedIn={setIsLoggedIn}/>;

    return (
        <div className="App">
            <header className="App-header">
                <h1>Talagent SPA</h1>
                {pageToDisplay}
            </header>
        </div>
    );
};

export default App;
