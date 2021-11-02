import React from 'react';
import { Navbar, Container, Col, Button, Badge } from 'react-bootstrap';

class Counter extends React.Component {
    render() { 
        return (
            <Navbar bg="light">
            <Container>
                <Col sx={9}>
                    <h4 style={{display: 'flex', justifyContent: 'flex-start'}}>
                        <strong>Quantity</strong>
                    </h4>
                </Col>

                <Col>
                    <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                    <Button variant="danger" onClick={this.props.handleDecrement}>
                        <h4>
                            <strong>-</strong>
                        </h4>
                    </Button>

                    <Badge bg="secondary" bsPrefix="badge m-2">
                        <h4>
                            <strong>{this.props.value}</strong>
                        </h4>
                    </Badge>

                    <Button variant="success" onClick={this.props.handleIncrement}>
                        <h4>
                            <strong>+</strong>
                        </h4>
                    </Button>
                    </div>
                </Col>
            </Container>
          </Navbar>
        );
    }
}
 
export default Counter;