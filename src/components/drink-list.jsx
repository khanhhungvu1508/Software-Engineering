import "./style.css";
import React, { Component } from 'react';
// import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from "@mui/material/Button";
import { FiShoppingCart } from "react-icons/fi";

export default class Drinklist extends Component {
    constructor() {
        super();
        this.state = {
            mounted: false,
            big: true,
            medium: false,
            small: false
        };
        window.addEventListener("resize", this.update);
    }
    componentDidMount() {
        this.setState({
            mounted: true
        });
        this.update();
    }

    componentWillUnmount() {
        this.setState({
            mounted: false
        });
        window.removeEventListener("resize", this.update);
    }
    
    update = () => {
        if (this.state.mounted)
        {
            if (window.innerWidth >= 1200)
            {
                this.setState({
                    big: true,
                    medium: false,
                    small: false
                });
            }
            else if (window.innerWidth >= 600 && window.innerWidth < 1200)
            {
                this.setState({
                    big: false,
                    medium: true,
                    small: false
                });
            }
            else
            {
                this.setState({
                    big: false,
                    medium: false,
                    small: true
                });
            }
        }      
    };

    render() {
        return (
            <div id="food-list">
            { this.state.big &&
                <Grid container spacing={3} id="block-list">           
                    <Grid item sm={3}>
                        <Paper>
                            <div id="content-name-food">
                                <Button id="btn-list-food">
                                    <img id="img-list-food-button" alt="" src="http://bizweb.dktcdn.net/thumb/large/100/232/204/products/1814990chai-aquaria-moi-jpeg.jpg?v=1499398600903"/>
                                </Button>
                                <div id="space-box"></div>
                                <div id="name-food">Nước lọc</div>
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
                                    <img id="img-list-food-button" alt="" src="https://cdn.tgdd.vn/Products/Images/2443/76446/bhx/nuoc-ngot-7-up-vi-chanh-330ml-201905301056152288.JPG"/>
                                </Button>
                                <div id="space-box"></div>
                                <div id="name-food">7UP</div>
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
                                    <img id="img-list-food-button" alt="" src="https://cf.shopee.vn/file/f6a87bd170eab0d27850ca866bcbc66e"/>
                                </Button>
                                <div id="space-box"></div>
                                <div id="name-food">Coca</div>
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
                                    <img id="img-list-food-button" alt="" src="https://product.hstatic.net/200000122283/product/nuoc-ep-cam-twister-tropicana-320ml-lon-lq5q8_96ca06fcd50644be8e0e46e24ca423d3_master.jpg"/>
                                </Button>
                                <div id="space-box"></div>
                                <div id="name-food">Nước cam</div>
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
            }

            { this.state.medium &&
                <div>
                    <Grid container spacing={3} id="block-list">           
                        <Grid item sm={6}>
                            <Paper>
                                <div id="content-name-food">
                                    <Button id="btn-list-food">
                                        <img id="img-list-food-button" alt="" src="http://bizweb.dktcdn.net/thumb/large/100/232/204/products/1814990chai-aquaria-moi-jpeg.jpg?v=1499398600903"/>
                                    </Button>
                                    <div id="space-box"></div>
                                    <div id="name-food">Nước lọc</div>
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

                        <Grid item sm={6}>
                            <Paper>
                                <div id="content-name-food">
                                    <Button id="btn-list-food">
                                        <img id="img-list-food-button" alt="" src="https://cdn.tgdd.vn/Products/Images/2443/76446/bhx/nuoc-ngot-7-up-vi-chanh-330ml-201905301056152288.JPG"/>
                                    </Button>
                                    <div id="space-box"></div>
                                    <div id="name-food">7UP</div>
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

                    <Grid container spacing={3} id="block-list">           
                        <Grid item sm={6}>
                            <Paper>
                                <div id="content-name-food">
                                    <Button id="btn-list-food">
                                        <img id="img-list-food-button" alt="" src="https://cf.shopee.vn/file/f6a87bd170eab0d27850ca866bcbc66e"/>
                                    </Button>
                                    <div id="space-box"></div>
                                    <div id="name-food">Coca</div>
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

                        <Grid item sm={6}>
                            <Paper>
                                <div id="content-name-food">
                                    <Button id="btn-list-food">
                                        <img id="img-list-food-button" alt="" src="https://product.hstatic.net/200000122283/product/nuoc-ep-cam-twister-tropicana-320ml-lon-lq5q8_96ca06fcd50644be8e0e46e24ca423d3_master.jpg"/>
                                    </Button>
                                    <div id="space-box"></div>
                                    <div id="name-food">Nước cam</div>
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
            }

            { this.state.small &&
                <div>
                    <Grid container spacing={3} id="block-list">           
                        <Grid item sm={12}>
                            <Paper>
                                <div id="content-name-food">
                                    <Button id="btn-list-food">
                                        <img id="img-list-food-button" alt="" src="http://bizweb.dktcdn.net/thumb/large/100/232/204/products/1814990chai-aquaria-moi-jpeg.jpg?v=1499398600903"/>
                                    </Button>
                                    <div id="space-box"></div>
                                    <div id="name-food">Nước lọc</div>
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

                    <Grid container spacing={3} id="block-list">  
                        <Grid item sm={12}>
                            <Paper>
                                <div id="content-name-food">
                                    <Button id="btn-list-food">
                                        <img id="img-list-food-button" alt="" src="https://cdn.tgdd.vn/Products/Images/2443/76446/bhx/nuoc-ngot-7-up-vi-chanh-330ml-201905301056152288.JPG"/>
                                    </Button>
                                    <div id="space-box"></div>
                                    <div id="name-food">7UP</div>
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

                    <Grid container spacing={3} id="block-list">           
                        <Grid item sm={12}>
                            <Paper>
                                <div id="content-name-food">
                                    <Button id="btn-list-food">
                                        <img id="img-list-food-button" alt="" src="https://cf.shopee.vn/file/f6a87bd170eab0d27850ca866bcbc66e"/>
                                    </Button>
                                    <div id="space-box"></div>
                                    <div id="name-food">Coca</div>
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

                    <Grid container spacing={3} id="block-list"> 
                        <Grid item sm={12}>
                            <Paper>
                                <div id="content-name-food">
                                    <Button id="btn-list-food">
                                        <img id="img-list-food-button" alt="" src="https://product.hstatic.net/200000122283/product/nuoc-ep-cam-twister-tropicana-320ml-lon-lq5q8_96ca06fcd50644be8e0e46e24ca423d3_master.jpg"/>
                                    </Button>
                                    <div id="space-box"></div>
                                    <div id="name-food">Nước cam</div>
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
            }
            </div>
        );
    }
}