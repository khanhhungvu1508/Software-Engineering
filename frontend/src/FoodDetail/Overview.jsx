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
                    Những Món Cơm Gà Sốt Đậm Đà Hương Vị Việt Được Hòa Quyện Nước Sốt Trứ Danh Độc Quyền. Mang Đến Cho Bạn Trải Nghiệm Khó Quên Ngay Từ Lần Thử Đầu Tiên! Rice Bento.
                </div>
            </Row>
        );
    }
}
 
export default Overview;
