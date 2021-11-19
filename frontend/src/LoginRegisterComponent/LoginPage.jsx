import React from 'react';
import "LoginRegister.css";
import {Form, Button, FormGroup, Label, Input} from 'react-bootstrap';

class LoginPage extends React.Component {
    render() { 
        return (
        <Form class="login-form">
            <h1>
                <span className="font-weight-bold">Restaurant</span>
            </h1>
            <h2 className="text-center">Welcome</h2>
            <FormGroup>
                <Label>Email</Label>
                <Input type='email' placeholder="Email"/>
            </FormGroup>
            <FormGroup>
                <Label>Password</Label>
                <Input type="password" placeholder="Password"/>
            </FormGroup>
            <Button className="btn-lg- btn-dark btn-block">
                Log in
            </Button>
        </Form>)
        ;
    }
}
 
export default LoginPage;