import React from 'react';
import image from '../image/phoBo.jpg'
import buttonImage from '../image/addToCart.png'

import Overview from './overview'
import Counter from './counter';
import Descritption from './description';
import OrderMethod from './orderMethod';
import SideDishes from './sideDishes';
import SelectButton from './selectButton';
import 'bootstrap/dist/css/bootstrap.css'
import { Modal, Button, Row, Col, Container, Image} from 'react-bootstrap';


class FoodDetail extends React.Component {
    state = {
        showModal: false,
        overview: {
            SKU: 401,
            foodName: 'Pho',
            price: '35,000'
        },
        quantity: 1,
        des: 'Pho is a type of Vietnamese soup that usually consists of bone broth, rice noodles, spices, and thinly sliced meat (usually beef). Though “pho” technically refers to the noodles and not the soup itself, most people consider the dish a singular unit. A popular street food in Vietnam, pho gained popularity around the world after refugees introduced it to other cultures after the Vietnam War.',
        orderMethod: 'Eat in'
    }

    handleOpenModal = () => {
        this.setState({ showModal: true });
    }
      
    handleCloseModal = () => {
       this.setState({ showModal: false });
       console.log(this.state)
    }

    handleIncrement = () => {
        const quantity = (this.state.quantity === 99) ? 99 : this.state.quantity + 1;
        this.setState({ quantity: quantity});
    }

    handleDecrement = () => {
        const quantity = (this.state.quantity === 1) ? 1 : this.state.quantity - 1;
        this.setState({ quantity: quantity})
    }

    handleChange = event => {
        this.setState({orderMethod: event.target.value});
    }

    render() { 
        return (
            <>
            <Button variant="primary" onClick={this.handleOpenModal}>
                Launch demo modal
            </Button>

            <Modal 
                show={this.state.showModal} 
                onHide={this.handleCloseModal} 
                size="xl"
                aria-labelledby="contained-modal-title-vcenter"
                backdrop="static"
                keyboard={true}
                centered
            >
                <Modal.Header 
                    closeButton
                    bsPrefix = 'modal-header bg-light text-dark'
                >
                    <Modal.Title>ADD TO CART</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Container>
                    <Row>
                        <Col xs={4}>
                            <Image src={image} thumbnail />
                        </Col>

                        <Col>
                            <Overview 
                                overview={this.state.overview}
                            />
                            <Counter 
                                value={this.state.quantity}
                                handleIncrement={this.handleIncrement}
                                handleDecrement={this.handleDecrement}
                            />
                            <Descritption
                                des={this.state.des}
                            />
                            <OrderMethod
                                value={this.state.orderMethod}
                                handleChange={this.handleChange}
                            />
                            <SideDishes/>
                        </Col>
                    </Row>
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <SelectButton
                        image={buttonImage}
                        price={this.state.overview.price}
                    />
                </Modal.Footer>
            </Modal>
            </>
        );
    }
}
 
export default FoodDetail;

//https://react-bootstrap.netlify.app/

  