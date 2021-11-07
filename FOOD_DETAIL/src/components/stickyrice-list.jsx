import "./style.css";
import React, { Component } from 'react';
// import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from "@mui/material/Button";
import { FiShoppingCart } from "react-icons/fi";

export default class Stickyricelist extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div id="food-list">
                <Grid container spacing={3} id="block-list">           
                    <Grid item sm={4}>
                        <Paper>
                            <div id="content-name-food">
                                <Button id="btn-list-food">
                                    <img id="img-list-food-button" alt="" src="http://imgs.vietnamnet.vn/Images/2016/07/06/09/20160706093735-1.jpg"/>
                                </Button>
                                <div id="space-box"></div>
                                <div id="name-food">Xôi đậu xanh</div>
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

                    <Grid item sm={4}>
                        <Paper>
                            <div id="content-name-food">
                                <Button id="btn-list-food">
                                    <img id="img-list-food-button" alt="" src="https://images.foody.vn/res/g67/666025/prof/s640x400/foody-mobile-hmb-jpg-573-636328819211018192.jpg"/>
                                </Button>
                                <div id="space-box"></div>
                                <div id="name-food">Xôi thịt</div>
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

                    <Grid item sm={4}>
                        <Paper>
                            <div id="content-name-food">
                                <Button id="btn-list-food">
                                    <img id="img-list-food-button" alt="" src="https://cdn.tgdd.vn/2021/03/CookProduct/t1-1200x676-8.jpg"/>
                                </Button>
                                <div id="space-box"></div>
                                <div id="name-food">Xôi gà</div>
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
            </div>
        );
    }
}