import React, { useState } from 'react';
import { Link, Route, Routes, NavLink } from 'react-router-dom';
import App from '../App';
import Cards from './Cards';


function Login() {
    const userName = "Laxmanteja23";
    const password = "Lucky";

    const [userNameState, setUserNameState] = useState("");
    const [passwordState, setPasswordState] = useState("");
    const [loginState, setLoginState] = useState(false);

    function login() {
        if (userName === userNameState && passwordState === password) {
            setLoginState(true);
        }
    }
    return (
        
        <div className="App">
            
            <h2>Login</h2>
            <input type='text' onChange={(event) => { setUserNameState(event.target.value) }} />
            
            <input type='password' onChange={(event) => { setPasswordState(event.target.value) }} />
            <button onClick={login}>Submit</button>
            {loginState &&<h1>Logged In</h1>}
            <nav>
            <NavLink to='/cards'>Click here</NavLink>
            </nav>
            
            
        </div>
    );
}

export default Login;






