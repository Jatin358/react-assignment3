import React from "react";
import { Button, Form } from "react-bootstrap";
import '../component.css';
import { useState } from "react";
import axios from "axios";
import LoginService from "../services/LoginService";
import { useHistory } from "react-router-dom";


function Login() {

    const [state, setState] = useState({ username: '', password: '' });
    const [records, setRecords] = useState([]);
    const history = useHistory();

    function handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        console.log(name, value);
        setState({ ...state, [name]: value });
    }

    function handleSubmit(event) {
        localStorage.setItem('username', state.username);
        event.preventDefault();
        // const newRecord = {...state}
        // setRecords([...records, newRecord]);
        console.log(state);
        LoginService.loginData('http://localhost:3001/auth/v1', state, false).then((response)=>{
            console.log(response);
            localStorage.setItem('token', response.data.token);
            if(response.data.token){
                 LoginService.loginData('http://localhost:3001/auth/v1/isAuthenticated',state,true)
                 .then(() => { 
                    history.push('/dashboard');
                  })
            }
        })
        
    }

    return (
        <div className="container-fluid">
            <div className="login-container">
                <h2>Login</h2>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" placeholder="Enter Username" name="username" value={state.username}
                            onChange={handleChange} />
                        <Form.Text className="text-muted">
                            We'll never share your Username with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" name="password" value={state.password}
                            onChange={handleChange} />
                    </Form.Group>
                    <div className="text-center ">
                        <Button variant="primary" type="submit" className="me-4">
                            Submit
                        </Button>
                          Don't have an account? <a ><span onClick={()=>{ history.push('/register') }}>Register</span></a>

                    </div>
                </Form>

            </div>
        </div>
    )
}

export default Login;