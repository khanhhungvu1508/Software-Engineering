import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Content.css"
import ContentTitle from './ContentTitle';
import ListFood from './ListFood';
import FoodDetail from '../FoodDetail/FoodDetail'

class Content extends React.Component {
    constructor(props) {
        super(props);
        /*Method to listen open, close modal, past to Child component */
        this.closeModal = this.closeModal.bind(this);
        this.openModal = this.openModal.bind(this);
        this.state = {
            setModal: false, /*If setModal == true, modal is shown on screen */
        }
        /*Food info to show on Modal*/
        this.food = {
            src: null,
            name: null,
            price: null,
            quantity: null
        }
        this.addFood = this.addFood.bind(this);
    }

    addFood = (quantity) => {
        /*Add food showing in modal to cart */
        let food = this.food;
        food.quantity = quantity;
        this.props.addFood(food);
    }

    closeModal = () => {
        // control modal
		this.setState({setModal: false});
	}

    
	openModal = (src, name, price) => {
        // control modal
        if (this.state.setModal) {
            /*Don't open modal if Modal is open*/
            return;
        }
		this.food.src = src;
		this.food.name = name;
		this.food.price = price;
		this.setState({setModal: true});
	}

    render() { 
        /*Generate a Array of double items's element*/
        return (
            <div>
                {/* Food Detail */}
                {
                    this.state.setModal && 
                    <FoodDetail food={this.food} 
                                closeModal={this.closeModal} 
                                sideDishes={this.props.sideDishes}
                                window={this.props.window}
                                addFood={this.addFood}
                                />
                }
                {/* foods: Food list past from parent */}
                <div class="content_body">
                    <ContentTitle title={this.props.category} />
                    <ListFood 
                        foods={this.props.foods} 
                        openModal={this.openModal} 
                        window={this.props.window}/>  
                </div>
            </div>
            
        );
    }
}
 
export default Content;