import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import Item from "./Item"
import Header from "./Header"
import {ListGroup } from 'react-bootstrap'

class ListItem extends React.Component {
    state = {
        
    }

    food1 = {
        showModal: false,
        foodName: 'Pho',
        price: '35,000',
        quantity: 1,
        sideDishs: [],
        totalPrice: "35,000"
    }

    food2 = {
        showModal: false,
        foodName: 'Pho',
        price: '35,000',
        quantity: 1,
        sideDishs: [],
        totalPrice: "35,000"
    }


    food3 = {
        showModal: false,
        foodName: 'Pho',
        price: '35,000',
        quantity: 1,
        sideDishs: [],
        totalPrice: "35,000"
    }

    render() { 
        return (
            <div>
                <Header />
                <ListGroup>
                    <ListGroup.Item>
                        <Item food={this.food1}/>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Item food={this.food2}/>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Item food={this.food3}/>
                    </ListGroup.Item>
                </ListGroup>
                {/* <Footer /> */}
            </div>
        );
    }
}
 
export default ListItem