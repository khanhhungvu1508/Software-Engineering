import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import "../../ContentComponents/Item.css"
import {Col, Row, Form,} from 'react-bootstrap'
import DisplayPrice from '../DisplayPrice'

class SideDishItem extends React.Component {
    render() { 
        return (
                <Row>
                    <Col xs={7}>
                        <Form.Check type="checkbox" label={this.props.sideDish.name} />
                    </Col>
                    <Col xs={5}>
                        <DisplayPrice price={this.props.sideDish.price}/>
                    </Col>
                </Row>
            );
        }
    }
     
export default SideDishItem;