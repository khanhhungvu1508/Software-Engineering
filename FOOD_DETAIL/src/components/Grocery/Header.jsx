import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import image from '../image/phoBo.jpg'
import { Container, Col, Row, Image} from 'react-bootstrap';

class Header extends React.Component {
    render() { 
        return (
           
                <Row>
                <Col>
                    <Image src={image} thumbnail />
                </Col>
                <Col>
                    <Row>
                        <h4>
                            <strong>{this.props.food.foodName}</strong>
                        </h4>
                    </Row>
                    <Row>
                        <h4>
                            <strong>Side dish</strong>
                        </h4>
                    </Row>
                    
                </Col>
                <Col>
                    <h4>
                        <strong>{this.props.food.price}</strong>
                    </h4>
                </Col>
                <Col>
                    <h4>
                        <strong>{this.props.food.quantity}</strong>
                    </h4>
                </Col>
                <Col>
                    <h4>
                        <strong>Remove</strong>
                    </h4>
                </Col>
                <Col>
                    <h4>
                        <strong>{this.props.food.totalPrice}</strong>
                    </h4>
                </Col>
                </Row>
            
            );
        }
    }
     
    export default Header;