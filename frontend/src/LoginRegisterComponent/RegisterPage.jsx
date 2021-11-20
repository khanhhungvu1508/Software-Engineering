import React from 'react';
import "./LoginRegister.css";
import {Form, Button} from 'react-bootstrap';

class RegisterPage extends React.Component {
    state = {
        email: "",
        name: "",
        password: "",
    }

    onSubmit() {
    }

    render() { 
        return (
        <Form className="login-form">
            <h2 className="text-center">Restaurant 2.0</h2>
            <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control 
                    type="email" 
                    placeholder="name@example.com" 
                    value={this.state.email}
                    onChange={e => this.setState({ email: e.target.value })}
                    />
            </Form.Group>
            <Form.Group>
                <Form.Label>Tên</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="Nguyen Van A" 
                    value={this.state.name}
                    onChange={e => this.setState({ name: e.target.value })}
                    />
            </Form.Group>
            <Form.Group>
                <Form.Label>Mật khẩu</Form.Label>
                <Form.Control 
                    type="password" 
                    placeholder="Password"
                    value={this.state.password}
                    onChange={e => this.setState({ password: e.target.value })}
                />
            </Form.Group>
            <Button 
                className="btn-lg- btn-dark btn-block login-register-button"
                onClick={() => this.props.onSubmitRegister(this.state.email, this.state.name, this.state.password)}
                >
                Đăng ký
            </Button>
            <Button 
                className="btn-lg- btn-dark btn-block login-register-button"
                onClick={() => this.props.changePage("register")}
                >
                Đã có tải khoản?
            </Button>
        </Form>)
        ;
    }
}
 
export default RegisterPage;