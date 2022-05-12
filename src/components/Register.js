import React from "react";
import { Button, Form } from "react-bootstrap";
import '../component.css';
import { useHistory } from "react-router-dom";



function Register() {

    const history = useHistory();

    return (
        <div className="container-fluid">
            <div className="login-container">
                <h2>Regsiter</h2>
                <Form>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="email" placeholder="Enter Name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter Email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="email" placeholder="Enter Username" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Mobile</Form.Label>
                        <Form.Control type="email" placeholder="Enter Mobile No." />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <div className="text-center ">
                    <Button variant="primary" type="submit" className="me-4">
                        Submit
                    </Button>
                    Already have an account? <a ><span onClick={()=>{ history.push('/') }}>Login</span></a>
                    </div>
                </Form>

            </div>
        </div>
    )
}

export default Register;