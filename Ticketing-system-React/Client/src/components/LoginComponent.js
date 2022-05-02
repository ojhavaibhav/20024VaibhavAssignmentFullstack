import React, { useState } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import './LoginComponent.css'
import { useNavigate } from 'react-router-dom'
import { signIn } from '../services/api'


const initialValue = {
    username: '',
    password: ''
}

const LoginComponent = () => {

    const [user, setUser] = useState(initialValue);
    const { username, password } = user;

    const navigate = useNavigate(); //for navigation

    const changeHandler = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const doLogin = async () => {
        await signIn(user);
        navigate('/profile');
    }



    return (
        <div className='login'>
            <Container>
                <Row>
                    <Col className='offset-3 col-6'>
                        <h3>Login Details</h3>
                        <Form>
                            <Form.Group>
                                <Form.Label> Username </Form.Label>
                                <Form.Control onChange={(e) => { changeHandler(e) }} value={username} name='username' placeholder='Enter username..' required />
                            </Form.Group>
                            <br />
                            <Form.Group>
                                <Form.Label> Password </Form.Label>
                                <Form.Control onChange={(e) => { changeHandler(e) }} value={password} name='password' placeholder='Enter Password..' required />
                            </Form.Group>
                            <br />
                            <Button onClick={doLogin}>Login</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>


    )
}


export default LoginComponent