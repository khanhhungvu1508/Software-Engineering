import React from 'react';
import huy_image from "./Image/Huy.jpeg"
import {Col, Row, Container} from 'react-bootstrap';
import './About.css'

function Info(props) {
    return (
        <div 
            className="info-body"
        >
            <img 
                alt="Member's image"
                className="info-img"
                src={props.src}
            />
            <h3
                className="info-name"
            >{props.name}</h3>
            <div
                className="info-description"
            >{props.description}</div>
            <a href="https://www.facebook.com/minhhuy.vunguyen.5/" class="fa fa-facebook"></a>
        </div>
    );
}


class AboutPage extends React.Component {
    shouldComponentUpdate(nextProps) {
        /*This function call render each time function return true*/
        /*Must measure both window and food list chang */
        if ((this.props.window.width >= 866 && nextProps.window.width < 865) ||
            (this.props.window.width <= 865 && nextProps.window.width > 866)
            ) {
            return true;
        }
        return false;
    }


    render() { 
        return (
        <Container className="about-container">
            <Row>
                <h1>Giới thiệu</h1>
                <div>Trong thời kỳ Covid, mọi tiếp xúc của con người đều đáng lo ngại, ảnh hưởng lớn đối với dịch vụ nhà hàng.  Mục tiêu của dự án là phát triển một phần mềm bán hàng theo mô hình POS cho nhà hàng, giải quyết vấn đề tiếp xúc gần giữa khách hàng và người bán hàng. Hệ thống sẽ cho phép khách hàng thực hiện các chức năng cơ bản của dịch vụ nhà hàng bao gồm xem món, đặt đồ ăn, thanh toán, ...</div>
                <div>Đây là một dự án từ bài tập lớn môn Công nghệ phần mềm. Trang Web này được xây dựng bằng công nghệ ReactJS, phía backend là Django và cơ sở dự liệu Postgresql.</div>
                <div>Nhóm chúng tôi - Hyper Windy - bao gồm 5 thành viên từ trường Đại học Bách Khoa Thành Phố Hồ Chí Minh.</div>
            </Row>
            <Row className="about-body">
                <Col>
                    <Info 
                        src={huy_image}
                        name={"Vũ Nguyễn Minh Huy"}
                        description={"Interested in AI/ML, Research on CV"}
                        />
                </Col>
                <Col>
                    <Info 
                        src={huy_image}
                        name={"Vũ Nguyễn Minh Huy"}
                        description={"Interested in AI/ML, Research on CV"}
                        />
                
                
                </Col>
                <Col>
                    <Info 
                        src={huy_image}
                        name={"Vũ Nguyễn Minh Huy"}
                        description={"Interested in AI/ML, Research on CV"}
                        />                
                </Col>
            </Row>
            <Row className="about-body">
                <Col>
                    <Info 
                        src={huy_image}
                        name={"Vũ Nguyễn Minh Huy"}
                        description={"Interested in AI/ML, Research on CV"}
                        />
                </Col>
                <Col>
                    <Info 
                        src={huy_image}
                        name={"Vũ Nguyễn Minh Huy"}
                        description={"Interested in AI/ML, Research on CV"}
                        />
                </Col>
            </Row>
        </Container>);
    }
}
 
export default AboutPage;