import React from 'react';
import {Link} from "react-router-dom";

function Login(props) {
    return (
        <div>
            <h1>Login Page</h1>
            <Link to="/register">Register Page</Link>
        </div>
    );
}

export default Login;