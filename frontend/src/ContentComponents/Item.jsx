import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import "./Item.css"
import {Col, Row, Image} from 'react-bootstrap';
import DisplayPrice from "../DisplayPrice"

class Item extends React.Component {
    render() { 
        return (
                <div 
                    className="content_item_body" 
                    onClick={() => this.props.openModal(
                        this.props.food.src,
                        this.props.food.name,
                        this.props.food.price,
                        this.props.food.description
                    )}>
                    <Row>
                        <Col xs={3}>
                            <Image src={this.props.food.src} thumbnail />
                        </Col>
                        <Col xs={6}>
                            <div className="content_item_name">{this.props.food.name}</div>
                            <div className="content_item_description">
                                {this.props.food.description}
                            </div>
                        </Col>
                        <Col xs={2} >
                            <div className="content_item_price">
                                <DisplayPrice price={this.props.food.price}/>
                             </div>
                        </Col>
                    </Row>
                </div>
            );
        }
    }
     
    export default Item;