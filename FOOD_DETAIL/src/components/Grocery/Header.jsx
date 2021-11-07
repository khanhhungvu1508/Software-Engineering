import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import { Col, Row } from 'react-bootstrap';

class Header extends React.Component {
    render() { 
        return (
            <div>
                <Row>
                <Col xs={4}>
                    <Row >
                        <h4 >
                            <strong>Giỏ hàng</strong>
                        </h4>
                    </Row>
                </Col>
                <Col xs={2}>
                    <h4>
                        <strong>Giá cả</strong>
                    </h4>
                </Col>
                <Col xs={4}>
                    <h4>
                        <strong>Số lượng</strong>
                    </h4>
                </Col>
                <Col xs={2}>
                    <h4>
                        <strong>Tổng tiền</strong>
                    </h4>
                </Col>
                </Row>
              </div>
            );
        }
    }
     
    export default Header;