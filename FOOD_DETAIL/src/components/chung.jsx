import ListItem from "./Grocery/ListItem";
import FoodDetail from "./foodDetail";
import React from 'react';

class Chung extends React.Component{
	constructor(props) {
        super(props); 
        this.state = {
			food: null
		}
		this.isSet = false;
        this.addFood = this.addFood.bind(this);
		this.check = this.check.bind(this);
    }

	check(){
		if(this.isSet){
			this.isSet = false;
			return true;
		}
		return false;
	}
	
	addFood(f){
		this.isSet = true;
		this.setState({ food: f});
	}

	render(){
		console.log(this.isSet);
		return (
			<div>
			<FoodDetail addFood={this.addFood}/>
			<ListItem check={this.check} food={this.state.food}/>
			</div>
		);
	}
};

export default Chung;