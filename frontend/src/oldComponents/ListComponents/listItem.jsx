import "../style.css";
import React, { Component } from 'react';
import RowItem from "./rowItem";


export default class ListItem extends Component {
    render() {
        return (
            <div id="food-list">
            {
                this.props.listInfo.map(element => (
                    <RowItem key={element.key} itemInfos={element.itemInfos} setFood={this.props.setFood}></RowItem> 
                ))
            }
            </div>
        );
    }
}