import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import Item from "./Item"
import Header from "./Header"
import {Button, ListGroup } from 'react-bootstrap'

class ListItem extends React.Component {
    foods;
    constructor(props) {
        super(props); 
        this.foods = [];
        // this.handleAdd = this.handleAdd.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
    }

    addFood(food) {
        let f = this.foods.slice();
        this.foods = f.concat([{food:food}]);
      }

    handleRemove(id) {
        let foods = this.state.foods;
        foods.splice(id, 1);        
        this.setState({
          foods: foods,
        });

    }

    render() { 
        //Initialize data:
        if (this.props.isNeedToAdd()){
            this.addFood(this.props.food);
        }
        const foods = this.foods;
        let itemRows;
        if (foods.length > 0) {
            itemRows = foods.map((item, index) =>
                <Item key={index} id={index} food={item.food} handleRemove = {this.handleRemove}/>
            );
        }

        return (
            <div>
                {/* <Button onClick={this.handleAdd}>Thêm phở bò nha</Button> */}
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