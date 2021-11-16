import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import "./Item.css"
import {Col, Row, Image, ListGroup} from 'react-bootstrap';

class Item extends React.Component {
    constructor(props) {
        super(props);
        this.openModal = this.openModal.bind(this);

    }

    openModal() {
        this.props.openModal(
            this.props.food.src,
            this.props.food.name,
            this.props.food.price
        );
    }
    render() { 
        return (
                <div 
                    className="content_item_body" 
                    onClick={this.openModal}>
                    <Row>
                        <Col xs={2}>
                            <Image src={this.props.food.src} thumbnail />
                        </Col>
                        <Col xs={8}>
                            <Row>
                                <div class="content_item_name">{this.props.food.name}</div>
                            </Row>
                            <Row>
                                <div class="content_item_description">
                                    {this.props.food.describe}
                                </div>
                            </Row>
                        </Col>
                        <Col xs={2} >
                            <div class="content_item_price">
                                ${this.props.food.price}
                            </div>
                        </Col>
                    </Row>
                </div>
            );
        }
    }
     
    export default Item;