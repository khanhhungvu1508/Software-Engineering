import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Item from "./Item";
import Header from "./Header";
import { ListGroup } from 'react-bootstrap';

import cloneDeep from 'lodash/cloneDeep';

class ListItem extends React.Component {
    constructor(props) {
        super(props); 
        this.state= {
            foods: []
        }
        
        // this.handleAdd = this.handleAdd.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
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

    render() { 
        //Initialize data:
        if (this.props.isNeedToAdd()){
            this.addFood(this.props.food);
        }
        const foods = this.state.foods;
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