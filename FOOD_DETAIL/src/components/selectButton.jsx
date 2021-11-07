import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from 'react-bootstrap';

import DisplayPrice from './displayPrice';

class SelectButton extends React.Component {
    handleAddFood = () => {
        this.props.addFood();
    }
    render() { 
        return (
            <Button variant="danger" size="lg" onClick={this.handleAddFood}>
                <img
                alt=""
                src={this.props.image}
                width="30"
                height="30"
                className="d-inline-block align-top"
                />
                <DisplayPrice price={this.props.price}/>
            </Button>
        );
    }
}
 
export default SelectButton;