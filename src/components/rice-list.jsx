import "./style.css";
import React, { Component } from 'react';
// import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from "@mui/material/Button";
import { FiShoppingCart } from "react-icons/fi";

export default class Ricelist extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div id="food-list">
                <Grid container spacing={3} id="block-list">           
                    <Grid item sm={3}>
                        <Paper>
                            <div id="content-name-food">
                                <Button id="btn-list-food">
                                    <img id="img-list-food-button" alt="" src="https://dacsandathanh.com/wp-content/uploads/2018/05/com-ga-xoi-mo-4273-min-1.jpg"/>
                                </Button>
                                <div id="space-box"></div>
                                <div id="name-food">Cơm gà</div>
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

                    <Grid item sm={3}>
                        <Paper>
                            <div id="content-name-food">
                                <Button id="btn-list-food">
                                    <img id="img-list-food-button" alt="" src="https://statics.vinpearl.com/com-tam-ngon-o-sai-gon-0_1630562640.jpg"/>
                                </Button>
                                <div id="space-box"></div>
                                <div id="name-food">Cơm tấm</div>
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

                    <Grid item sm={3}>
                        <Paper>
                            <div id="content-name-food">
                                <Button id="btn-list-food">
                                    <img id="img-list-food-button" alt="" src="https://thuvienamthuc.vn/upload/images/2018/10/10/com-chien-duong-chau.jpg"/>
                                </Button>
                                <div id="space-box"></div>
                                <div id="name-food">Cơm chiên dương châu</div>
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

                    <Grid item sm={3}>
                        <Paper>
                            <div id="content-name-food">
                                <Button id="btn-list-food">
                                    <img id="img-list-food-button" alt="" src="https://shipdoandemff.com/wp-content/uploads/2017/06/com-chien-hai-san-nha-hang-shipdoandemFF.png"/>
                                </Button>
                                <div id="space-box"></div>
                                <div id="name-food">Cơm chiên hải sản</div>
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