import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import {Form, Navbar } from 'react-bootstrap'

class OrderMethod extends React.Component {
    state = {
        value: 'Eat in'
    }

    render() { 
        return (
            <div>
                <Navbar bg="light">
                    <h4 style={{display: 'flex', justifyContent: 'flex-start'}}>
                        <strong>Order method</strong>
                    </h4>
                </Navbar>
                <Form.Select size="lg" value={this.props.value} onChange={this.props.handleChange}>
                    <option value='Eat in'>Eat in</option>
                    <option value='Take away'>Take away</option>
                </Form.Select>
                <br />
            </div>
        );
    }
}
 
export default OrderMethod;