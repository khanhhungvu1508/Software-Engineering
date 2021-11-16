import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import {Button, Col, Row, Image, ListGroup} from 'react-bootstrap';
import DisplayPrice from '../FoodDetail/displayPrice';

class Item extends React.Component {
    constructor(props) {
        super(props);
        this.id = this.props.id
        //this.sideDishes = this.props.food.sideDishes 
        this.handleRemove = this.handleClick.bind(this)
    } 

    handleClick() {
        this.props.handleRemove(this.id);
    }

    render() { 
        // const listItems = this.sideDishes.map((sideDish) =>
        //     <li key={sideDish}>
        //         {sideDish}
        //     </li>
        // );

        return (
            <ListGroup.Item  >
                <Row>
                <Col >
                    <Image src={this.props.food.link} thumbnail />
                </Col>
                <Col>
                    <Row>
                        <h5 style={{display: 'flex', justifyContent: 'left'}}>
                            {this.props.food.name}
                        </h5>
                    </Row>
                    <Row>
                        {/* <ul>{listItems}</ul> */}
                    </Row>
                    
                </Col>
                <Col>
                    <p style={{display: 'flex', justifyContent: 'left'}}>
                        <DisplayPrice price={this.props.food.price}/>
                    </p>
                </Col>
                <Col>
                    <p style={{display: 'flex', justifyContent: 'left'}}>
                        {this.props.food.quantity}
                    </p>
                </Col>
                <Col>
                    <Button variant="primary" size="lg" onClick={this.handleRemove}>
                    Xóa
                    </Button>{' '}
                </Col>  
                <Col>
                    <p style={{display: 'flex', justifyContent: 'center'}}>
                    <DisplayPrice price={this.props.food.totalPrice}/>
                    </p>
                </Col>
                </Row>
            </ListGroup.Item>
            );
        }
    }
     
    export default Item;