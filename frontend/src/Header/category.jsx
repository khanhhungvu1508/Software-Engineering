import React, { Component } from 'react';
import Slider from 'react-slick';
import "./style.css";
import Button from "@mui/material/Button";

const category = {
    rice: "Món cơm",
    dessert: "Món tráng miệng",
    pho: "Món phở",
    noodle: "Món mì",
    stickyrice: "Món xôi",
    drink: "Thức uống"
}

export default class Category extends Component {
    state = {
        buttonInfos: [
            {
                key: 0, 
                name: category.rice,
                src: "https://previews.123rf.com/images/fendero/fendero1510/fendero151000024/47314180-top-view-shrimp-fried-rice-on-white-background.jpg",
                content: "Cơm" 
            },
            {
                key: 1, 
                name: category.noodle,
                src: "https://previews.123rf.com/images/romastudio/romastudio1309/romastudio130900037/22417682-big-noodle-bowl-top-view-of-a-bowl-of-noodles.jpg",
                content: "Mì" 
            },
            {
                key: 2, 
                name: category.pho,
                src: "https://previews.123rf.com/images/lounom/lounom2002/lounom200200017/140498769-vietnamese-chicken-pho-noodle-soup-bowl-a-classic-authentic-vietnamese-food-this-pho-soup-is-served-.jpg",
                content: "Phở" 
            },
            {
                key: 3, 
                name: category.stickyrice,
                src: "https://previews.123rf.com/images/yufagu/yufagu1508/yufagu150800004/44240617-dessert-sweet-sticky-rice-with-mango-topped-coconut-milk.jpg",
                content: "Xôi" 
            },
            {
                key: 4, 
                name: category.dessert,
                src: "https://nhahanghoankiet.com/wp-content/uploads/2016/12/20171017144313-banh-flan.jpg",
                content: "Tráng miệng" 
            },
            {
                key: 5, 
                name: category.drink,
                src: "https://pastaxi-manager.onepas.vn/content/uploads/articles/thanhmai/do-uong-mua-he/do-uong-mua-he1.jpg",
                content: "Thức uống" 
            },
        ]
    };

    setFood = (link, name, price) => {
        this.props.setFood(link, name, price);
    }

    showComponent = (name) => {
        this.props.changeCategory(name);
        // const list = this.lists.filter(c => c.name === name);
        // this.setState({name: name, list: list[0]});
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
            centerMode: true,
            centerPadding: '-20px',
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        dots: true,
                        infinite: true,
                        speed: 500,
                        slidesToShow: 4,
                        slidesToScroll: 1,
                        autoplay: true, 
                        autoplayspeed: 3000,
                        centerMode: true,
                        centerPadding: '-25px',
                    }
                },
                {
                    breakpoint: 798,
                    settings: {
                        dots: true,
                        infinite: true,
                        speed: 500,
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        autoplay: true, 
                        centerMode: true,
                        centerPadding: '-30px',
                        autoplayspeed: 3000
                    }
                },
                {
                    breakpoint: 650,
                    settings: {
                        dots: true,
                        infinite: true,
                        speed: 500,
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        autoplay: true, 
                        centerMode: true,
                        centerPadding: '-40px',
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
                    {
                        this.state.buttonInfos.map(buttonInfo => (
                            <div>
                                <Button 
                                    key={buttonInfo.key} 
                                    variant="contained" 
                                    color="primary" 
                                    id="food-button" 
                                    onClick = {() => this.showComponent(buttonInfo.name)}>
                                    <img 
                                        id="img-food-button" 
                                        alt="" 
                                        src={buttonInfo.src}
                                        style={{fontFamily:'"Zilla Slab", serif'}}
                                        />
                                    {buttonInfo.content}
                                </Button>                       
                            </div>
                        ))
                    }
                    </Slider>
                </div>
            </div>
        );
    }
}

const cssstyle = `
    .navbar-list {
        margin: 0 auto;
        padding: 0px 40px 40px 40px;
        width: 900px;
    }

    #food-button {
        display: inline;
        color: black;
        background: rgb(250, 251, 253);
        font-family: "Zilla Slab", serif;
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
        height: 170px;
        padding-top: 20px;
    }

    @media only screen and (max-width : 1200px) {
        .navbar-list {
            margin: 0 auto;
            padding: 0px 40px 40px 40px;
            width: 770px;
        }
    }
    
    @media only screen and (max-width : 798px) {
        .navbar-list {
            margin: 0 auto;
            padding: 0px 40px 40px 40px;
            width: 620px;
        }
    }

    @media only screen and (max-width : 650px) {
        .navbar-list {
            margin: 0 auto;
            padding: 0px 40px 40px 40px;
            width: 470px;
        }
    }

    @media only screen and (max-width : 500px) {
        .navbar-list {
            display: none;
        }
    }
`;