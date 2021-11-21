import React from 'react';
import "./LoginRegister.css";
import {Form, Button} from 'react-bootstrap';

class LoginPage extends React.Component {
    state = {
        email: "",
        password: "",
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
                onClick={() => this.props.onSubmitLogin(this.state.email, this.state.password)}
            >
                Đăng nhập
            </Button>
            <div onClick={() => this.props.changePage("forgot")}>Quên mật khẩu? </div>
            <Button 
                className="btn-lg- btn-dark btn-block login-register-button"
                onClick={() => this.props.changePage("register")}
            >
                    Tạo tài khoản
                </Button>
        </Form>)
        ;
    }
}
 
export default LoginPage;