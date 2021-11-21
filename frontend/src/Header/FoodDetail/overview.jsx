import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import { Container, Col, Row } from 'react-bootstrap';

import DisplayPrice from './displayPrice';

class Overview extends React.Component {
    render() { 
        return (
            <Container>
            <Row>
                <Col xs={1}>
                    <h4 style={{display: 'flex', justifyContent: 'center'}}>
                        <strong>SKU</strong>
                    </h4>
                </Col>
                <Col xs={4}>
                    <h4 style={{display: 'flex', justifyContent: 'center'}}>
                        <strong>Tên</strong>
                    </h4>
                </Col>
                <Col>
                    <h4 style={{display: 'flex', justifyContent: 'flex-end'}}>
                        <strong>Giá tiền</strong>
                    </h4>
                </Col>
            </Row>
            <Row>
                <Col xs={1}>
                    <h5 style={{display: 'flex', justifyContent: 'center'}}>
                        {this.props.overview.SKU}
                    </h5>
                </Col>
                <Col xs={4}>
                    <h5 style={{display: 'flex', justifyContent: 'center'}}>
                        {this.props.overview.foodName}
                    </h5>
                </Col>
                <Col>
                    <h4 style={{display: 'flex', justifyContent: 'flex-end', color: 'red'}}>
                        <DisplayPrice price={this.props.overview.price}/>
                    </h4>
                </Col>
            </Row>
            </Container>
        );
    }
}
 
export default Overview;
