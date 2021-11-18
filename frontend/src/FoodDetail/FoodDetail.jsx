import React from 'react';
import Overview from './Overview'
import Counter from './Counter';
import SideDishes from './SideDishes/SideDishes';
import 'bootstrap/dist/css/bootstrap.css'
import { Modal, Col, Row, Image, Button} from 'react-bootstrap';


class FoodDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: true,
            overview: {
                SKU: 401,
                foodName: this.props.name,
                price: this.props.price,
            },
            quantity: 1,
            des: 'Pho is a type of Vietnamese soup that usually consists of bone broth, rice noodles, spices, and thinly sliced meat (usually beef). Though “pho” technically refers to the noodles and not the soup itself, most people consider the dish a singular unit. A popular street food in Vietnam, pho gained popularity around the world after refugees introduced it to other cultures after the Vietnam War.',
            orderMethod: 'Eat in'
        }

        this.handleIncrement = this.handleIncrement.bind(this);
        this.handleDecrement = this.handleDecrement.bind(this);
        
    }

    shouldComponentUpdate(nextProps) {
        if ((this.props.window.width >= 866 && nextProps.window.width < 865) ||
            (this.props.window.width <= 865 && nextProps.window.width > 866)) {
            return true;
        }
        return false;
    }

    getFoodDetailBody(window) {
        console.log("FoodDetail: Window change");
        if (window.width >= 866) {
            return this.getFoodDetailBodyDesktop();
        }
        return this.getFoodDetailBodyMobile();
    }

    getFoodDetailBodyMobile() {
        return <div>
                        <Image src={this.props.src} thumbnail />
                        <Overview  overview={this.state.overview}/>
                        <SideDishes sideDishes={this.props.sideDishes}/>
                </div>
    }

    getFoodDetailBodyDesktop() {
        return <Row>
                    <Col xs={4}>
                        <Image src={this.props.src} thumbnail />
                    </Col>

                    <Col>
                        <Overview  overview={this.state.overview}/>
                        <SideDishes sideDishes={this.props.sideDishes}/>
                    </Col>
                </Row>
    }
    

    //Add to grocery
    addFood = () => {
        this.props.addFood(this.state.quantity);
    }
    handleCloseModal = () => {
        this.props.closeModal();
    }

    handleIncrement = () => {
        console.log("Increment");
        const quantity = (this.state.quantity === 99) ? 99 : this.state.quantity + 1;
        this.setState({ quantity: quantity});
    }

    handleDecrement = () => {
        console.log("Dercement");
        const quantity = (this.state.quantity === 1) ? 1 : this.state.quantity - 1;
        this.setState({ quantity: quantity})
    }

    handleChange = event => {
        this.setState({orderMethod: event.target.value});
    }

    render() { 
        let foodDetailBody = this.getFoodDetailBody(this.props.window);
        return (
            <Modal 
                show={this.state.showModal} 
                onHide={this.handleCloseModal} 
                size="xl"
                aria-labelledby="contained-modal-title-vcenter"
                backdrop="static"
                keyboard={true}
                centered>
                <Modal.Header 
                    closeButton
                    bsPrefix = 'modal-header bg-light text-dark'>
                </Modal.Header>

                <Modal.Body>
                    {foodDetailBody}
                </Modal.Body>

                <Modal.Footer>
                    <Row style={{display: 'flex', justifyContent: 'flex-end'}}>
                        <Col>
                            <Counter 
                                value={this.state.quantity}
                                handleIncrement={this.handleIncrement}
                                handleDecrement={this.handleDecrement}
                            />
                        </Col>
                        <Col><Button
                                variant="secondary"
                                price={this.state.overview.price * this.state.quantity}
                                addFood={this.addFood}>
                                CHỌN
                            </Button></Col>
                    </Row>
                </Modal.Footer>
            </Modal>
        );
    }
}
 
export default FoodDetail;
