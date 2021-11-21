import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import "../../ContentComponents/Item.css"
import {Col, Row, Form,} from 'react-bootstrap'

class SideDishItem extends React.Component {
    render() { 
        return (
                <Row>
                    <Col xs={7}>
                        <Form.Check 
                            style={{
                                fontFamily:'"Zilla Slab", serif'
                            }}
                            type="checkbox" 
                            label={this.props.sideDish.name} />
                    </Col>
                </Row>
            );
        }
    }
     
export default SideDishItem;