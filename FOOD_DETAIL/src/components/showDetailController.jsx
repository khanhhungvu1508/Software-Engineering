import "./style.css";
import React, { Component } from 'react';
import Allfood from './food-list';
import Pholist from './pho-list';
import Ricelist from './rice-list';
import Noodlelist from './noodle-list';
import Stickyricelist from './stickyrice-list';
import Dessertlist from './dessert-list';
import Drinklist from './drink-list';

import FoodDetail from "./foodDetail";
import ListItem from "./Grocery/ListItem";

export default class ShowDetailController extends Component {
    constructor(props) {
        super(props);
        this.setFood = this.setFood.bind(this);
    }

    //setFood methods
    setFood(link, name, price){
        this.props.setFood(link, name, price);
    }

    render() {
        return (
            <div>

                {this.props.name === "showAll" && <Allfood setFood={this.setFood}/>}

                {this.props.name === "showRice" && <Ricelist setFood={this.setFood}/>}

                {this.props.name === "showPho" && <Pholist setFood={this.setFood}/>}

                {this.props.name === "showNoodle" && <Noodlelist setFood={this.setFood}/>}

                {this.props.name === "showStickyrice" && <Stickyricelist setFood={this.setFood}/>}

                {this.props.name === "showDessert" && <Dessertlist setFood={this.setFood}/>}

                {this.props.name === "showDrink" && <Drinklist setFood={this.setFood}/>}
         
            </div>
        );
    }
}
