import React from 'react';
import huy_image from "./Image/Huy.jpeg"
import thai_image from "./Image/Thai.jpg"
import phong_image from "./Image/Phong.jpg"
import quang_image from "./Image/Quang.jpg"
import hung_image from "./Image/Hung.jpg"
import {Col, Row, Container} from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook} from "@fortawesome/free-brands-svg-icons";
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
            <h4
                className="info-name"
            >{props.name}</h4>
            <div
                className="info-description"
            >{props.description}</div>
            <div className="about-fa-background">
                <a href={props.facebook} className="about-fa-facebook">
                    <FontAwesomeIcon  icon={faFacebook} />
                </a>
            </div>
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
                        src={quang_image}
                        name={"Nguyễn Văn Vinh Quang"}
                        description={"Passionate about making web Facebook"}
                        facebook={"https://www.facebook.com/gerd.quang.1311/"}
                        />
                </Col>
                <Col>
                    <Info 
                        src={thai_image}
                        name={"Ngô Minh Hồng Thái"}
                        description={"Interested in DSP, Research on Speech"}
                        facebook={"https://www.facebook.com/thai.ngo.94214508"}
                        />
                
                
                </Col>
                <Col>
                    <Info 
                        src={phong_image}
                        name={"Tô Thanh Phong"}
                        description={"Interested in Algorithm, AI/ML."}
                        facebook={"https://www.facebook.com/Hyperwindy/"}
                        />                
                </Col>
            </Row>
            <Row className="about-body">
                <Col>
                    <Info 
                        src={hung_image}
                        name={"Vũ Khánh Hưng"}
                        description={"Interested in Algorithms, Web and embedded. Like playing game and listening to radio"}
                        facebook={"https://www.facebook.com/hung.vu2431508"}
                        />
                </Col>
                <Col>
                    <Info 
                        src={huy_image}
                        name={"Vũ Nguyễn Minh Huy"}
                        description={"Interested in AI/ML, Research on CV"}
                        facebook={"https://www.facebook.com/minhhuy.vunguyen.5/"}
                        />
                </Col>
            </Row>
        </Container>);
    }
}
 
export default AboutPage;