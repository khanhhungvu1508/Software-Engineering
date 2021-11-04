import "./style.css";
import React, { Component } from 'react';
// import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from "@mui/material/Button";
import { FiShoppingCart } from "react-icons/fi";

export default class Dessertlist extends Component {
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
                                    <img id="img-list-food-button" alt="" src="https://www.phunu8.vn/PhuNu8DuLieu/PhuNu8HinhAnh/user5016/an_trang_mieng_sau_cung_1_0.jpg"/>
                                </Button>
                                <div id="space-box"></div>
                                <div id="name-food">Bánh flan</div>
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
                                    <img id="img-list-food-button" alt="" src="https://bacdau.vn/wp-content/uploads/2020/04/kem-fi.jpg"/>
                                </Button>
                                <div id="space-box"></div>
                                <div id="name-food">Kem dâu</div>
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
                                    <img id="img-list-food-button" alt="" src="https://image-us.24h.com.vn/upload/1-2018/images/2018-03-17/1521274130-417-_mg_9636-1521273469-width650height433.jpg"/>
                                </Button>
                                <div id="space-box"></div>
                                <div id="name-food">Thạch rau câu</div>
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
                                    <img id="img-list-food-button" alt="" src="https://vnn-imgs-f.vgcloud.vn/2021/07/27/20/che-thai.jpg"/>
                                </Button>
                                <div id="space-box"></div>
                                <div id="name-food">Chè</div>
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