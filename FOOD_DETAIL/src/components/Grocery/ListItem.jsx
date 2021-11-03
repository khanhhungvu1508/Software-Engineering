import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import Item from "./Item"
import Header from "./Header"
import {Button, ListGroup } from 'react-bootstrap'

class ListItem extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {  
            foods: [],
            count: 0
        }
        this.handleAdd = this.handleAdd.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
    }

    handleAdd() {
        //Fake data:
        const food = {
            foodName: 'Phở bò',
            price: '35,000',
            quantity: 1,
            sideDishes: ["Chén trứng", "Chén tái em bé"] ,
            totalPrice: "35,000"
        }
        let foods;
        if (this.state.count > 0) {
            foods = this.state.foods.slice(0, this.state.count + 1);
        }
        else {
            foods = []
        }
        const count = this.state.count;
        this.setState({
          foods: foods.concat([{
            food: food
          }]),
          count: count + 1,
        });
      }

    handleRemove(id) {
        console.log(id + " need be removed", this)
        let foods = this.state.foods;
        foods.splice(id, 1);        
        this.setState({
          foods: foods,
          count: foods.length,
        });

    }

    render() { 
        //Initialize data:
        const foods = this.state.foods;
        let itemRows;
        if (foods.length > 0) {
            itemRows = foods.map((item, index) =>
                <Item key={index} id={index} food={item.food} handleRemove = {this.handleRemove}/>
            );
        }

        return (
            <div>
                <Button onClick={this.handleAdd}>Thêm phở bò nha</Button>
                <Header />
                <ListGroup>
                    {itemRows} 
                </ListGroup>
                {/* <Footer /> */}
            </div>
        );
    }
}
 
export default ListItem