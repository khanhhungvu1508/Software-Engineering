import React from 'react';
import ListRowTwoCols from './ListRowTwoCols'
import ListRowOneCol from './ListRowOneCol'
import { ListGroup } from 'react-bootstrap';




class ListFood extends React.Component {
    shouldComponentUpdate(nextProps) {
        /*This function call render each time function return true*/
        /*Must measure both window and food list chang */
        if ((this.props.window.width >= 866 && nextProps.window.width < 866) ||
            (this.props.window.width <= 866 && nextProps.window.width > 866) || 
            this.props.foods[0].category != nextProps.foods[0].category) {
            return true;
        }
        return false;
    }


    getRows(window) {
        let itemRows;
        if (this.props.foods.length > 0) {
            if (window.width > 770) {
                itemRows = this.getListRowTwocols(this.props.foods);
                console.log("Two rows");
            }
            else {
                itemRows = this.getListRows(this.props.foods);
                console.log("One rows");
            }
        };
        return itemRows;
    }

    getListRowTwocols(foods) {
        let itemRows = []; 
        for (let i = 0; i < foods.length; i = i + 2) {
            let itemRow = [] /*Each row have 2 item*/ 
            itemRow.push(foods[i]); /*Push first item*/
            if (i + 1 < foods.length) 
                itemRow.push(foods[i + 1]); /*Push second item*/
            itemRows.push(<ListRowTwoCols items={itemRow} openModal={this.props.openModal}/>);
        }
        return itemRows;
    }

    getListRows(foods) {
        return foods.map((food, index) =>
            <ListRowOneCol food={food} openModal={this.props.openModal}/>
        );
    }

    render() { 
        console.log('render called');
        let itemRows = this.getRows(this.props.window);
        return (
            <ListGroup>
                {itemRows}
            </ListGroup>
        );
    }
}
 
export default ListFood;