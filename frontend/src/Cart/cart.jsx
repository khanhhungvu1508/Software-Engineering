import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Modal, Button } from 'react-bootstrap';

import cloneDeep from 'lodash/cloneDeep';

import './cart.css'

import { faPlus, faMinus, faTrashAlt, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DisplayPrice from '../DisplayPrice';

class Cart extends React.Component {
    constructor(props) {
        super(props); 
        this.state= {
            foods: [],
            modal: false
        }
    }

    addFood(food) {
        const f = cloneDeep(food);
        this.state.foods = this.state.foods.concat([{food: f}]);
      }

    handleRemove(id) {
        let foods = this.state.foods;
        foods.splice(id, 1);        
        this.setState({
          foods: foods,
        });

    }

    handleIncreaseQuantity(id){
        let temp = [...this.state.foods];
        let temp_element = {...temp[id]};
        temp_element.food.quantity = temp_element.food.quantity + 1;
        temp[id]=temp_element;
        this.setState({foods: temp});
    }

    handleDecreaseQuantity(id){
        let temp = [...this.state.foods];
        let temp_element = {...temp[id]};
        if (temp_element.food.quantity > 0){
            temp_element.food.quantity = temp_element.food.quantity - 1;
        } 
        temp[id]=temp_element;
        this.setState({foods: temp});
    }

    handleOpenModal = () => {
        this.setState({modal: true});
    }

    handleCloseModal = () => {
        this.setState({modal: false});
    }

    // goToPay = () => {
    //     this.props.goToPay();
    // }

    render() { 
        console.log(this.props.food);
        //Initialize data:
        if (this.props.isNeedToAdd()){
            this.addFood(this.props.food);
        }
        const foods = this.state.foods;
        let itemRows;
        if (foods.length > 0) {
            itemRows = foods.map((item, index) =>
                // <Item key={index} id={index} food={item.food} handleRemove = {this.handleRemove}/>
                <tr>
                        <td>
                            <div class="cart-info">
                                <img src={item.food.src}></img>
                                <div class="info">
                                    <strong>{item.food.name}</strong>
                                    <small><div>Price:</div> <DisplayPrice price={item.food.price}/></small>
                                </div>

                            </div>
                        </td>
                        <td>
                            <div class='change-quantity'>
                                <button onClick={() => {this.handleIncreaseQuantity(index)}}><FontAwesomeIcon icon={faPlus} /></button>
                                <div class='box'>{item.food.quantity}</div>
                                <button onClick={() => {this.handleDecreaseQuantity(index)}}><FontAwesomeIcon icon={faMinus} /></button>
                            </div>
                        </td>
                        <td>
                            <div class='sub-total'>
                            <div><strong><DisplayPrice price={item.food.price * item.food.quantity}/></strong></div>
                            <button onClick={() => {this.handleRemove(index)}}><FontAwesomeIcon icon={faTrashAlt} /></button>
                            </div>
                        </td>
                    </tr>
            );
        };

        const total = this.state.foods.reduce((t,v) => t = t + v.food.price*v.food.quantity, 0);

        return (
            <div class="cart">
                <button class="cart-btn" onClick={this.handleOpenModal}> <span>MY CART</span>  <FontAwesomeIcon icon={faShoppingCart}/></button>
                <Modal 
                    show={this.state.modal} 
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
                        <Modal.Title>
                        <span>My Cart</span>  <FontAwesomeIcon icon={faShoppingCart}/>
                        </Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                    <div class="cart-container">
                <table>
                    <tr>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Subtotal</th>
                    </tr>
                    {itemRows}
                </table>

            </div>
                    </Modal.Body>
                    <Modal.Footer>
                    <div class="total-price">
                <table>
                    <tr>
                        <td>Subtotal</td>
                        <td><strong><DisplayPrice price={total}/></strong></td>
                    </tr>
                    <tr>
                        <td>Tax</td>
                        <td><strong><DisplayPrice price={total*0.1}/></strong></td>
                    </tr>
                    <tr>
                        <td>Total</td>
                        <td><strong><DisplayPrice price={total*1.1}/></strong></td>
                    </tr>
                    <tr>
                        <td colSpan={"2"}><Button style={{width: "100%"}}>Thanh toán</Button></td>
                    </tr>
                </table>
            </div>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}
 
export default Cart;