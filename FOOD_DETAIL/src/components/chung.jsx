import ListItem from "./Grocery/ListItem";
import FoodDetail from "./foodDetail";
import Header from './header'
import Category from './category'
import React from 'react';

class Chung extends React.Component{
	food = {
		link: null,
		name: null,
		price: null,
		quantity: null,
		totalPrice: "35,000"
	}
	constructor(props) {
        super(props); 
        this.state = {
			setModal: false,
			needToAdd: false
		}
		//control modal
		this.closeModal = this.closeModal.bind(this);
        this.setFood = this.setFood.bind(this);

		//control grocery
		this.addClick = this.addClick.bind(this);
		this.isNeedToAdd = this.isNeedToAdd.bind(this);
    }

	// control modal
	setFood(link, name, price){
		this.food.link = link;
		this.food.name = name;
		this.food.price = price;
		this.setState({setModal: true});
	}

	closeModal(){
		this.setState({setModal: false});
	}

	//control food
	addClick(quantity){
		this.food.quantity = quantity;
		this.setState({needToAdd: true});
	}
	
	isNeedToAdd(){
		if(this.state.needToAdd){
			this.state.needToAdd = false;
			return true;
		}
		return false;
	}
	

	render(){
		return (
			<div>
	<div id="menu-screen">
      <div id="column1">
        <Header />
        <Category setFood={this.setFood}/>
      </div>

      <div id="column2" style={{backgroundColor: 'white'}}>
        <ListItem isNeedToAdd={this.isNeedToAdd} food={this.food} />
      </div>
    </div>

	{this.state.setModal && <FoodDetail name={this.food.name} img={this.food.link} price={this.food.price} closeModal={this.closeModal} addClick={this.addClick}/>}
	</div>
		)
	}
};

export default Chung;