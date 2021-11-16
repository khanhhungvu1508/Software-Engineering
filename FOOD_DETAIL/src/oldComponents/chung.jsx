import ListItem from "./Grocery/ListItem";
import FoodDetail from "./foodDetail";
import Header from './ScreenContent/header';
import Category from './category'
import React from 'react';
// import './style.css';

class Chung extends React.Component{
    state = {
		setModal: false,
		needToAdd: false
	}
	
	food = {
		link: null,
		name: null,
		price: null,
		quantity: null,
		totalPrice: null
	}

	// control modal
	setFood = (link, name, price) => {
		this.food.link = link;
		this.food.name = name;
		this.food.price = price;
		this.setState({setModal: true});
	}

	closeModal = () => {
		this.setState({setModal: false});
	}

	//control food
	addFood = (quantity) => {
		this.food.quantity = quantity;
		this.food.totalPrice = this.food.price * quantity;
		this.setState({needToAdd: true});
	}
	
	isNeedToAdd = () => {
		if(this.state.needToAdd){
			this.state.needToAdd = false;
			return true;
		}
		return false;
	}

	//control payment
	goToPay = () => {
		this.props.goToPay();
	}
	

	render(){
		return (
			<>
				{this.state.setModal && <FoodDetail name={this.food.name} img={this.food.link} price={this.food.price} closeModal={this.closeModal} addFood={this.addFood}/>}

				<div id="menu-screen">
      				<div id="column1">
        				<Header />
        				<Category setFood={this.setFood}/>
      				</div>

      				<div id="column2" style={{backgroundColor: 'white'}}>
        				<ListItem isNeedToAdd={this.isNeedToAdd} food={this.food} goToPay={this.goToPay}/>
      				</div>
    			</div>
			</>
		)
	}
};

export default Chung;