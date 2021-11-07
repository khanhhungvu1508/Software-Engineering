import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import { Container, Col, Row } from 'react-bootstrap';

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
                        {this.props.overview.price} VND
                    </h4>
                </Col>
            </Row>
            </Container>
        );
    }
}
 
export default Overview;

        // <div className="container">
        //     <div className="row">
        //         <div className="col-3">
        //             <span className="badge rounded-pill bg-light text-dark">
        //                 <h5>SKU</h5>
        //             </span>
        //         </div>
        //         <div className="col-6">
        //             <span className="badge rounded-pill bg-light text-dark">
        //                 <h5>NAME</h5>
        //             </span>
        //         </div>
        //         <div className="col">
        //             <span className="badge rounded-pill bg-light text-dark">
        //                 <h5>UNIT PRICE</h5>
        //             </span>
        //         </div>
        //     </div>

        //     <div className="row">
        //         <div className="col-3">
        //             <span className="badge rounded-pill bg-light text-dark">
        //                 <h6>{this.props.SKU}</h6>
        //             </span>
        //         </div>
        //         <div className="col-6">
        //             <span className="badge rounded-pill bg-light text-dark">
        //                 <h6>{this.props.foodName}</h6>
        //             </span>
        //         </div>
        //         <div className="col">
        //             <span className="badge rounded-pill bg-light text-dark">
        //                 <h6>{this.props.price} VND</h6>
        //             </span>
        //         </div>
        //     </div>
        //     </div>