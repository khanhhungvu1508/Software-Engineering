import React, { Component } from 'react';
import Slider from 'react-slick';
import "./style.css";
import Button from "@mui/material/Button";
import ShowDetailController from './showDetailController';

export default class Category extends Component {
    constructor() {
        super();
        this.state = {
            name: "showAll"
        };
        this.showComponent = this.showComponent.bind(this);
    }
    showComponent(name) {
        switch (name) {
            case "showAll":
                this.setState({
                    name: "showAll"
                });
                break;
            case "showRice":
                this.setState({ 
                    name: "showRice"
                });
                break;
            case "showPho":
                this.setState({
                    name: "showPho"
                });
                break;
            case "showNoodle":
                this.setState({
                    name: "showNoodle"
                });
                break;
            case "showStickyrice":
                this.setState({
                    name: "showStickyrice"
                });
                break;
            case "showDessert":
                this.setState({
                    name: "showDessert"
                });
                break;
            case "showDrink":
                this.setState({
                    name: "showDrink"
                });
                break;
            default:
                return null;
        }
    }
  
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 1,
            autoplay: true, 
            autoplayspeed: 3000,
            responsive: [
                {
                    breakpoint: 1350,
                    settings: {
                        dots: true,
                        infinite: true,
                        speed: 500,
                        slidesToShow: 4,
                        slidesToScroll: 1,
                        autoplay: true, 
                        autoplayspeed: 3000,
                    }
                },
                {
                    breakpoint: 1050,
                    settings: {
                        dots: true,
                        infinite: true,
                        speed: 500,
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        autoplay: true, 
                        autoplayspeed: 3000,
                    }
                },
                {
                    breakpoint: 950,
                    settings: {
                        dots: true,
                        infinite: true,
                        speed: 500,
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        autoplay: true, 
                        autoplayspeed: 3000
                    }
                },
                {
                    breakpoint: 700,
                    settings: {
                        dots: true,
                        infinite: true,
                        speed: 500,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        autoplay: true, 
                        autoplayspeed: 3000
                    }
                }
            ]
        };
        return (
            <div>
                <div className="navbar-list">
                    <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
                    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
                    <style>{cssstyle}</style>
            
                    <Slider {...settings}>
                        <div>
                            <Button variant="contained" color="primary" id="food-button" onClick = {() => this.showComponent("showAll")}>
                                <img id="img-food-button" alt="" src="https://cdn.daotaobeptruong.vn/wp-content/uploads/2020/09/mon-ngon-cuoi-tuan.jpg"/>
                                Tất cả món ăn 
                            </Button>                       
                        </div>
        
                        <div>
                            <Button variant="contained" color="primary" id="food-button" onClick={() => this.showComponent("showRice")}>
                                <img id="img-food-button" alt="" src="https://previews.123rf.com/images/fendero/fendero1510/fendero151000024/47314180-top-view-shrimp-fried-rice-on-white-background.jpg"/>
                                Cơm
                            </Button>
                        </div>
                        <div>
                            <Button variant="contained" color="primary" id="food-button" onClick={() => this.showComponent("showNoodle")}>
                                <img id="img-food-button" alt="" src="https://previews.123rf.com/images/romastudio/romastudio1309/romastudio130900037/22417682-big-noodle-bowl-top-view-of-a-bowl-of-noodles.jpg"/>
                                Mì 
                            </Button>
                        </div>
                        <div>
                            <Button variant="contained" color="primary" id="food-button" onClick={() => this.showComponent("showPho")}>
                                <img id="img-food-button" alt="" src="https://previews.123rf.com/images/lounom/lounom2002/lounom200200017/140498769-vietnamese-chicken-pho-noodle-soup-bowl-a-classic-authentic-vietnamese-food-this-pho-soup-is-served-.jpg"/>
                                Phở 
                            </Button>
                        </div>
                        <div>
                            <Button variant="contained" color="primary" id="food-button" onClick={() => this.showComponent("showStickyrice")}>
                                <img id="img-food-button" alt="" src="https://previews.123rf.com/images/yufagu/yufagu1508/yufagu150800004/44240617-dessert-sweet-sticky-rice-with-mango-topped-coconut-milk.jpg"/>
                                Xôi
                            </Button>
                        </div>
                        <div>
                            <Button variant="contained" color="primary" id="food-button" onClick={() => this.showComponent("showDessert")}>
                                <img id="img-food-button" alt="" src="https://nhahanghoankiet.com/wp-content/uploads/2016/12/20171017144313-banh-flan.jpg"/>
                                Tráng miệng
                            </Button>
                        </div>
                        <div>
                            <Button variant="contained" color="primary" id="food-button" onClick={() => this.showComponent("showDrink")}>
                                <img id="img-food-button" alt="" src="https://pastaxi-manager.onepas.vn/content/uploads/articles/thanhmai/do-uong-mua-he/do-uong-mua-he1.jpg"/>
                                Thức uống
                            </Button>
                        </div>
                    </Slider>
                </div>

                <div>
                    <ShowDetailController name={this.state.name}/>
                </div>
            </div>
        );
    }
}
  

const cssstyle = `
    .navbar-list {
        margin: 0 auto;
        padding: 0px 40px 40px 40px;
        width: 90%;
    }
    #food-button {
        display: inline;
        color: black;
        background: rgb(250, 251, 253);
    }

    #img-food-button {
        display: flex;
        width: 100px;
        height: 100px;
        object-fit: cover;
        margin: 0 auto;
    }

    .slick-next:before, .slick-prev:before {
        color: red;
    }

    .slick-list{
        height: 200px;
        padding-top: 20px;
        padding-left: 1%;
    }

    @media only screen and (max-width : 1000px) {
        .container {
            margin: 0 auto;
            padding: 0px 40px 40px 40px;
            width: 80%;
        }
    }

    @media only screen and (max-width : 950px) {
        .slick-list{
            height: 200px;
            padding-top: 20px;
            padding-left: 5%;
        }
    }

    @media only screen and (max-width : 700px) {
        .container {
            margin: 0 auto;
            padding: 0px 40px 40px 40px;
            width: 60%;
        }

        .slick-list{
            height: 200px;
            padding-top: 20px;
            padding-left: 18%;
        }
    }
`;