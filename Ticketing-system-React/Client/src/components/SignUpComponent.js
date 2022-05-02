import React, { useState } from 'react'
import './SignUpComponent.css'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { signUp } from '../services/api.js'
import { useNavigate } from 'react-router-dom'
import { validName, validUsername, validPassword } from './regEx';


const initialValue = {
    fullname: '',
    username: '',
    password: ''
}

const initialIsValidValue = {
    isfullname: '',
    isusername: '',
    ispassword: '',
}



const SignUpComponent = () => {

    const [user, setUser] = useState(initialValue);
    const { fullname, username, password } = user;

    const [isValid, setIsValid] = useState(initialIsValidValue);
    const { isfullname, isusername, ispassword } = isValid;

    const navigate = useNavigate();

    const onValueChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const validationMessageCSS = { color: 'red', marginBottom: '20px' }


    const onValidate = (e, regEx) => {
        const RegExObj = new RegExp(regEx);
        const isValidKey = 'is' + e.target.name;

        if (RegExObj.test(e.target.value)) {
            setIsValid({ ...isValid, [isValidKey]: '' });
            setUser({ ...user, [e.target.name]: e.target.value });
        }
        else {
            setIsValid({ ...isValid, [isValidKey]: 'Invalid input..!!' });
        }
    }

    const addUserDetails = async () => {
        await signUp(user);
        navigate('/signIn');
    }

    return (
        <div className='login'>
            <Container>
                <Row>
                    <Col className='offset-3 col-6'>
                        <h3>Create New Account</h3>
                        <Form>
                            <Form.Group>
                                <Form.Label> Name </Form.Label>
                                <Form.Control onChange={(e) => onValidate(e, validName)} onBlur={(e) => onValidate(e, validName)} value={fullname} name='fullname' placeholder='Enter fullname..' />
                                <div style={validationMessageCSS}>{isfullname}</div>

                            </Form.Group>
                            <br />
                            <Form.Group>
                                <Form.Label> Username </Form.Label>
                                <Form.Control onChange={(e) => onValueChange(e)} onBlur={(e) => onValidate(e, validUsername)} value={username} name='username' placeholder='Enter Username..' />
                                <div style={validationMessageCSS}>{isusername}</div>

                            </Form.Group>
                            <br />
                            <Form.Group>
                                <Form.Label> Password </Form.Label>
                                <Form.Control onChange={(e) => onValueChange(e)} onBlur={(e) => onValidate(e, validPassword)} value={password} name='password' placeholder='Enter Password..' />
                                <div style={validationMessageCSS}>{ispassword}</div>

                            </Form.Group>
                            <br />

                            <Button onClick={() => addUserDetails()}>SignUp</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default SignUpComponent