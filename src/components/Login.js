import React from 'react'
import { useDispatch } from 'react-redux';
import {login, logout} from '../features/user';

function Login() {
    const dispatch = useDispatch();

    return (
        <div>
            <button onClick={() => {
                dispatch(login({name: "amit", age: 30, email: "amit@test.com"}))}
            }
            >Login</button>
            <button onClick={() => {
                dispatch(logout())
            }}>logout</button>
        </div>
    )
}

export default Login;
