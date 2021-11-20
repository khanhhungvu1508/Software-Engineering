import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import { Col, Row } from 'react-bootstrap';

import DisplayPrice from '../DisplayPrice';

class Overview extends React.Component {
    render() { 
        return (
            <Row style={{margin: "0px 0px 5px 0px"}}>
                <Col>
                        <span class="fooddetail_overview_name">
                            {this.props.overview.foodName}
                        </span>
                </Col>
                
                <Col>
                    <span class="fooddetail_overview_price">
                        <DisplayPrice price={this.props.overview.price}/>
                    </span>
                </Col>
                <div class="fooddetail_overview_describe">
                    {this.props.overview.description}
                </div>
            </Row>
        );
    }
}
 
export default Overview;
