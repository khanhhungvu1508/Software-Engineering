import "../style.css";
import React, { Component } from 'react';
// import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from "@mui/material/Button";
import DisplayPrice from '../FoodDetail/displayPrice'
//import { FiShoppingCart } from "react-icons/fi";

export default class RowItem extends Component {
    render() {
        return (
            <div id="food-list">
                <Grid container spacing={3} id="block-list">     
                {
                    this.props.itemInfos.map(itemInfo => (
                        <Grid item xs={6} key={itemInfo.key}>
                            <Paper>
                                <div id="content-name-food">
                                    <Button id="btn-list-food" onClick = {() => this.props.setFood(itemInfo.src, itemInfo.name, itemInfo.price)}>
                                        <img id="img-list-food-button" alt="" src={itemInfo.src}/>
                                    </Button>
                                    <div id="content-food">
                                        <div id="row-1-content-food">
                                            <div id="food-align">
                                                {itemInfo.name} 
                                            </div>
                                            <div id="price-align">
                                                <DisplayPrice price={itemInfo.price}/>
                                            </div>
                                        </div>
                                        <div id="description-content">
                                            abcdefghijklmnopqrstuvwxyz
                                        </div>
                                    </div>
                                    {/*<div id="price-buy-food">
                                        <Button id="buy-button">
                                            <FiShoppingCart />
                                        </Button>
                                    </div>*/}
                                </div>
                            </Paper>
                        </Grid>
                    ))
                }
                </Grid> 
            </div>
        );
    }
}