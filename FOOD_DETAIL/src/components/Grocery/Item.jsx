import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import image from '../../image/phoBo.jpg'
import {Button, Col, Row, Image, ListGroup} from 'react-bootstrap';

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
                    <Image src={image} thumbnail />
                </Col>
                <Col>
                    <Row>
                        <h4 style={{display: 'flex', justifyContent: 'left'}}>
                            {this.props.food.foodName}
                        </h4>
                    </Row>
                    <Row>
                        {/* <ul>{listItems}</ul> */}
                    </Row>
                    
                </Col>
                <Col>
                    <h4 style={{display: 'flex', justifyContent: 'left'}}>
                        {this.props.food.price}
                    </h4>
                </Col>
                <Col>
                    <h4 style={{display: 'flex', justifyContent: 'left'}}>
                        {this.props.food.quantity}
                    </h4>
                </Col>
                <Col>
                    <Button variant="primary" size="lg" onClick={this.handleRemove}>
                    Xóa
                    </Button>{' '}
                </Col>  
                <Col>
                    <h4 style={{display: 'flex', justifyContent: 'center'}}>
                        {this.props.food.totalPrice}
                    </h4>
                </Col>
                </Row>
            </ListGroup.Item>
            );
        }
    }
     
    export default Item;