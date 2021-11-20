import "../style.css";
import React, { Component } from 'react';
// import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from "@mui/material/Button";
import DisplayPrice from '../FoodDetail/displayPrice'
import { FiShoppingCart } from "react-icons/fi";

export default class RowItem extends Component {
    render() {
        return (
            <div id="food-list">
                <Grid container spacing={3} id="block-list">     
                {
                    this.props.itemInfos.map(itemInfo => (
                        <Grid item xs={3} key={itemInfo.key}>
                            <Paper>
                                <div id="content-name-food">
                                    <Button id="btn-list-food" onClick = {() => this.props.setFood(itemInfo.src, itemInfo.name, itemInfo.price)}>
                                        <img id="img-list-food-button" alt="" src={itemInfo.src}/>
                                    </Button>
                                    <div id="space-box"></div>
                                    <div id="name-food">{itemInfo.name}</div>
                                    <div id="space-box"></div>
                                    <div id="underline-box"></div>
                                    <div id="space-box"></div>
                                    <div id="price-buy-food">
                                        <DisplayPrice price={itemInfo.price}/>
                                        <Button id="buy-button">
                                            <FiShoppingCart />
                                        </Button>
                                    </div>
                                    <div id="space-box"></div>
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