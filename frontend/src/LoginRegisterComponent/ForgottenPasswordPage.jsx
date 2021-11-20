import React from 'react';
import "./LoginRegister.css";
import {Form, Button} from 'react-bootstrap';

class ForgottenPagewordPage extends React.Component {
    state = {
        email: "",
    }

    onSubmit() {
        if (this.state.email.length === 0) {
            alert("Email không hợp lệ.");
            return;
        }
        alert("Chức năng này chưa được hiện thực.")
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
            <Button 
                className="btn-lg- btn-dark btn-block login-register-button"
                onClick={() => this.onSubmit()}
                >
                Hoàn tất
            </Button>
            <Button 
                className="btn-lg- btn-dark btn-block login-register-button"
                onClick={() => this.props.changePage("register")}
                >
                Đăng ký
            </Button>
        </Form>)
        ;
    }
}
 
export default ForgottenPagewordPage;