import React, { Component } from 'react';
import Slider from 'react-slick';
import "./style.css";
import Button from "@mui/material/Button";
import Allfood from './food-list';
import Pholist from './pho-list';
import Ricelist from './rice-list';
import Noodlelist from './noodle-list';
import Stickyricelist from './stickyrice-list';
import Dessertlist from './dessert-list';
import Drinklist from './drink-list';

export default class Category extends Component {
    constructor() {
        super();
        this.state = {
            showAll: true,
            showRice: false,
            showPho: false,
            showNoodle: false,
            showStickyrice:false,
            showDessert: false,
            showDrink: false
        };
        this.showComponent = this.showComponent.bind(this);
    }
    showComponent(name) {
        switch (name) {
            case "showAll":
                this.setState({
                    showAll: true,
                    showRice: false,
                    showPho: false,
                    showNoodle: false,
                    showStickyrice: false,
                    showDessert: false,
                    showDrink: false
                });
                break;
            case "showRice":
                this.setState({ 
                    showRice: true,
                    showAll: false,
                    showNoodle: false,
                    showStickyrice: false,
                    showDessert: false,
                    showDrink: false
                });
                break;
            case "showPho":
                this.setState({
                    showPho: true,
                    showAll: false,
                    showRice: false,
                    showNoodle: false,
                    showStickyrice: false,
                    showDessert: false,
                    showDrink: false
                });
                break;
            case "showNoodle":
                this.setState({
                    showNoodle: true,
                    showAll: false,
                    showRice: false,
                    showPho: false,
                    showStickyrice: false,
                    showDessert: false,
                    showDrink: false
                });
                break;
            case "showStickyrice":
                this.setState({
                    showStickyrice: true,
                    showAll: false,
                    showRice: false,
                    showPho: false,
                    showNoodle: false,
                    showDessert: false,
                    showDrink: false
                });
                break;
            case "showDessert":
                this.setState({
                    showDessert: true,
                    showAll: false,
                    showRice: false,
                    showPho: false,
                    showNoodle: false,
                    showStickyrice: false,
                    showDrink: false,
                });
                break;
            case "showDrink":
                this.setState({
                    showDrink: true,
                    showAll: false,
                    showRice: false,
                    showPho: false,
                    showNoodle: false,
                    showStickyrice: false,
                    showDessert: false
                });
                break;
            default:
                return null;
        }
    }
  
    render() {
        const { showAll, showRice, showPho, showNoodle, showStickyrice, showDessert, showDrink} = this.state;
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
                    breakpoint: 1000,
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
                    breakpoint: 850,
                    settings: {
                        dots: true,
                        infinite: true,
                        speed: 500,
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        autoplay: true, 
                        autoplayspeed: 3000
                    }
                }
            ]
        };
        return (
            <div>
                <div className="container">
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
                    {showAll && <Allfood />}
                    {showRice && <Ricelist />}
                    {showPho && <Pholist />}
                    {showNoodle && <Noodlelist />}
                    {showStickyrice && <Stickyricelist />}
                    {showDessert && <Dessertlist />}
                    {showDrink && <Drinklist />}
                </div>
            </div>
        );
    }
}
  

const cssstyle = `
    .container {
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
        height: 150px;
        padding-top: 20px;
    }

    @media only screen and (max-width : 1000px) {
        .container {
            margin: 0 auto;
            padding: 0px 40px 40px 40px;
            width: 80%;
        }
    }
`