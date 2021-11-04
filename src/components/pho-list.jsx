import "./style.css";
import React, { Component } from 'react';
// import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from "@mui/material/Button";
import { FiShoppingCart } from "react-icons/fi";
import FoodDetail from "./foodDetail";

export default class Pholist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            showModal: false,
        };
        this.showComponent = this.showComponent.bind(this);
    }
    showComponent(name) {
        console.log(name);
        switch (name) {
            case "showModal":
                this.setState({
                    showModal: true
                });
                break;
            default:
                return null;
        }
    }
    render() {
        const {showModal} = this.state;
        return (
            <div id="food-list">
                <Grid container spacing={3} id="block-list">           
                    <Grid item sm={3}>
                        <Paper>
                            <div id="content-name-food">
                                <Button id="btn-list-food" onClick = {() => this.showComponent("showModal")}>
                                    <img id="img-list-food-button" alt="" src="https://image-us.eva.vn/upload/2-2019/images/2019-06-28/1561709538-885-thumbnail_schema_article.jpg"/>
                                </Button>
                                <div id="space-box"></div>
                                <div id="name-food">Phở bò</div>
                                <div id="space-box"></div>
                                <div id="underline-box"></div>
                                <div id="space-box"></div>
                                <div id="price-buy-food">
                                    35.000 VND
                                    <Button id="buy-button" onClick = {() => this.showComponent("showModal")}>
                                        <FiShoppingCart />
                                    </Button>
                                </div>
                                <div id="space-box"></div>
                            </div>
                        </Paper>
                    </Grid>

                    <Grid item sm={3}>
                        <Paper>
                            <div id="content-name-food">
                                <Button id="btn-list-food">
                                    <img id="img-list-food-button" alt="" src="https://image-us.eva.vn/upload/4-2020/images/2020-12-11/image3-1607656518-418-width512height272.png"/>
                                </Button>
                                <div id="space-box"></div>
                                <div id="name-food">Phở gà</div>
                                <div id="space-box"></div>
                                <div id="underline-box"></div>
                                <div id="space-box"></div>
                                <div id="price-buy-food">
                                    35.000 VND
                                    <Button id="buy-button">
                                        <FiShoppingCart />
                                    </Button>
                                </div>
                                <div id="space-box"></div>
                            </div>
                        </Paper>
                    </Grid>
                </Grid>
                { showModal && <FoodDetail /> }
            </div>
        );
    }
}
