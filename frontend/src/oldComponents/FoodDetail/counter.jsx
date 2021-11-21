import React from 'react';
import "../../FoodDetail/FoodDetail.css"
import { Navbar, Container, Col, Row, Button, Badge } from 'react-bootstrap';

class Counter extends React.Component {
    render() { 
        return (
                <Row style={{margin: "15px 0px 15px 0px"}}>
                    <Col >
                        <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                            <form class="fooddetail_counter_container">
                                <button class="fooddetail_counter_value-button" type="button" onClick={this.props.handleDecrement}>
                                    - 
                                </button>
                                <input  class="fooddetail_counter_input"type="number" id="number" value={this.props.value}/>
                                <button class="fooddetail_counter_value-button" type="button" onClick={this.props.handleIncrement}>
                                    + 
                                </button>
                            </form>
                        </div>
                    </Col>
                </Row>
        );
    }
}
 
export default Counter;