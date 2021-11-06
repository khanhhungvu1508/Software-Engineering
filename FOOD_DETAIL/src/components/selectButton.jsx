import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import { Button } from 'react-bootstrap';

class SelectButton extends React.Component {
    render() { 
        return (
            <Button variant="danger" size="lg">
                <img
                alt=""
                src={this.props.image}
                width="30"
                height="30"
                className="d-inline-block align-top"
                />{' '}
                {this.props.price} VND
            </Button>
        );
    }
}
 
export default SelectButton;