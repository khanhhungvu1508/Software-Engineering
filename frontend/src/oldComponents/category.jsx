import React, { Component } from 'react';
import Slider from 'react-slick';
import "./style.css";
import Button from "@mui/material/Button";
import ListItem from './ListComponents/listItem'

export default class Category extends Component {
    state = {
        buttonInfos: [
            {
                key: 0, 
                name: "showRice",
                src: "https://previews.123rf.com/images/fendero/fendero1510/fendero151000024/47314180-top-view-shrimp-fried-rice-on-white-background.jpg",
                content: "Cơm" 
            },
            {
                key: 1, 
                name: "showNoodle",
                src: "https://previews.123rf.com/images/romastudio/romastudio1309/romastudio130900037/22417682-big-noodle-bowl-top-view-of-a-bowl-of-noodles.jpg",
                content: "Mì" 
            },
            {
                key: 2, 
                name: "showPho",
                src: "https://previews.123rf.com/images/lounom/lounom2002/lounom200200017/140498769-vietnamese-chicken-pho-noodle-soup-bowl-a-classic-authentic-vietnamese-food-this-pho-soup-is-served-.jpg",
                content: "Phở" 
            },
            {
                key: 3, 
                name: "showStickyrice",
                src: "https://previews.123rf.com/images/yufagu/yufagu1508/yufagu150800004/44240617-dessert-sweet-sticky-rice-with-mango-topped-coconut-milk.jpg",
                content: "Xôi" 
            },
            {
                key: 4, 
                name: "showDessert",
                src: "https://nhahanghoankiet.com/wp-content/uploads/2016/12/20171017144313-banh-flan.jpg",
                content: "Tráng miệng" 
            },
            {
                key: 5, 
                name: "showDrink",
                src: "https://pastaxi-manager.onepas.vn/content/uploads/articles/thanhmai/do-uong-mua-he/do-uong-mua-he1.jpg",
                content: "Thức uống" 
            },
        ],
        name: "showRice",
        list: {
            key: 0,
            name: "showRice",
            listInfo: [
                {
                    key: 0,
                    itemInfos: [
                        {
                            key: 0, 
                            name: "Cơm gà",
                            price: 30000,
                            src: "https://dacsandathanh.com/wp-content/uploads/2018/05/com-ga-xoi-mo-4273-min-1.jpg"
                        },
                        {
                            key: 1,
                            name: "Cơm tấm",
                            price: 29000,
                            src: "https://statics.vinpearl.com/com-tam-ngon-o-sai-gon-0_1630562640.jpg"
                        },
                        {
                            key: 2,
                            name: "Cơm chiên dương châu",
                            price: 34000,
                            src: "https://i.ytimg.com/vi/_cdBAMq5KZ0/maxresdefault.jpg"
                        },
                        {
                            key: 3,
                            name: "Cơm gà viên sốt cay",
                            price: 35000,
                            src: "https://xobami.com/hinhanh_flash/san_pham/19-28-06_20190627_204537.jpg"
                        }
                    ]
                },
                {
                    key: 1, 
                    itemInfos: [
                        {
                            key: 5, 
                            name: "Cơm chiên hải sản",
                            price: 33000,
                            src: "https://shipdoandemff.com/wp-content/uploads/2017/06/com-chien-hai-san-nha-hang-shipdoandemFF.png"
                        }
                    ]
                } 
            ]
        },
    };

    lists = [
        // Rice's list
        {
            key: 0,
            name: "showRice",
            listInfo: [
                {
                    key: 0,
                    itemInfos: [
                        {
                            key: 0, 
                            name: "Cơm gà",
                            price: 30000,
                            src: "https://dacsandathanh.com/wp-content/uploads/2018/05/com-ga-xoi-mo-4273-min-1.jpg"
                        },
                        {
                            key: 1,
                            name: "Cơm tấm",
                            price: 29000,
                            src: "https://statics.vinpearl.com/com-tam-ngon-o-sai-gon-0_1630562640.jpg"
                        },
                        {
                            key: 2,
                            name: "Cơm chiên dương châu",
                            price: 34000,
                            src: "https://i.ytimg.com/vi/_cdBAMq5KZ0/maxresdefault.jpg"
                        },
                        {
                            key: 3,
                            name: "Cơm gà viên sốt cay",
                            price: 35000,
                            src: "https://xobami.com/hinhanh_flash/san_pham/19-28-06_20190627_204537.jpg"
                        }
                    ]
                },
                {
                    key: 1, 
                    itemInfos: [
                        {
                            key: 5, 
                            name: "Cơm chiên hải sản",
                            price: 33000,
                            src: "https://shipdoandemff.com/wp-content/uploads/2017/06/com-chien-hai-san-nha-hang-shipdoandemFF.png"
                        }
                    ]
                } 
            ]
        },
        // Pho's list
        {
            key: 1,
            name: "showPho",
            listInfo: [
                {
                    key: 0,
                    itemInfos: [
                        {
                            key: 0, 
                            name: "Phở bò",
                            price: 40000,
                            src: "https://image-us.eva.vn/upload/2-2019/images/2019-06-28/1561709538-885-thumbnail_schema_article.jpg"
                        },
                        {
                            key: 1,
                            name: "Phở gà",
                            price: 36000,
                            src: "https://image-us.eva.vn/upload/4-2020/images/2020-12-11/image3-1607656518-418-width512height272.png"
                        },
                        {
                            key: 2,
                            name: "Phở gói",
                            price: 5000,
                            src: "https://img.my-best.vn/press_component/images/41638f835af7e8b76754a11a1783b1f5.png?ixlib=rails-4.2.0&q=70&lossless=0&w=690&fit=max&s=b24f80e37728e02aba579414318ed9d5"
                        }
                    ]
                }
            ]
        },
        // Noodle's list
        {
            key: 2,
            name: "showNoodle",
            listInfo: [
                {
                    key: 0,
                    itemInfos: [
                        {
                            key: 0, 
                            name: "Mì xào bò",
                            price: 28000,
                            src: "https://cdn-www.vinid.net/2020/10/488c647a-c%C3%A1ch-l%C3%A0m-m%C3%AC-x%C3%A0o-b%C3%B2.png"
                        },
                        {
                            key: 1,
                            name: "Mì xào hải sản",
                            price: 35000,
                            src: "https://cdn.beptruong.edu.vn/wp-content/uploads/2013/08/mon-mi-xao-hai-san.jpg"
                        },
                        {
                            key: 2,
                            name: "Mì xào trứng",
                            price: 24000,
                            src: "https://baconcuu.com.vn/wp-content/uploads/2020/09/cach-lam-mi-xao-trung-800x500.jpg"
                        },
                        {
                            key: 3,
                            name: "Pasta",
                            price: 25000,
                            src: "https://cdn.tgdd.vn/Files/2020/06/03/1260494/pasta-la-gi-phan-loai-cach-lam-va-tao-hinh-pasta-9.jpg"
                        }
                    ]
                },
                {
                    key: 1, 
                    itemInfos: [
                        {
                            key: 5, 
                            name: "Spaghetti",
                            price: 30000,
                            src: "https://www.mybakingaddiction.com/wp-content/uploads/2021/07/one-pot-spaghetti-in-bowl-720x720.jpg"
                        },
                    ]
                } 
            ]
        },
        // Stickyrice's list
        {
            key: 3,
            name: "showStickyrice",
            listInfo: [
                {
                    key: 0,
                    itemInfos: [
                        {
                            key: 0, 
                            name: "Xôi đậu xanh",
                            price: 20000,
                            src: "http://imgs.vietnamnet.vn/Images/2016/07/06/09/20160706093735-1.jpg"
                        },
                        {
                            key: 1,
                            name: "Xôi thịt",
                            price: 20000,
                            src: "https://images.foody.vn/res/g67/666025/prof/s640x400/foody-mobile-hmb-jpg-573-636328819211018192.jpg"
                        },
                        {
                            key: 2,
                            name: "Xôi gà",
                            price: 20000,
                            src: "https://cdn.tgdd.vn/2021/03/CookProduct/t1-1200x676-8.jpg"
                        }
                    ]
                }
            ]
        },
        // Dessert's list
        {
            key: 4,
            name: "showDessert",
            listInfo: [
                {
                    key: 0,
                    itemInfos: [
                        {
                            key: 0, 
                            name: "Bánh flan",
                            price: 10000,
                            src: "https://www.phunu8.vn/PhuNu8DuLieu/PhuNu8HinhAnh/user5016/an_trang_mieng_sau_cung_1_0.jpg"
                        },
                        {
                            key: 1,
                            name: "Kem dâu",
                            price: 10000,
                            src: "https://bacdau.vn/wp-content/uploads/2020/04/kem-fi.jpg"
                        },
                        {
                            key: 2,
                            name: "Thạch rau câu",
                            price: 10000,
                            src: "https://image-us.24h.com.vn/upload/1-2018/images/2018-03-17/1521274130-417-_mg_9636-1521273469-width650height433.jpg"
                        },
                        {
                            key: 3,
                            name: "Chè",
                            price: 10000,
                            src: "https://vnn-imgs-f.vgcloud.vn/2021/07/27/20/che-thai.jpg"
                        },
                    ]
                }
            ]
        },
        // Drink's list
        {
            key: 5,
            name: "showDrink",
            listInfo: [
                {
                    key: 0,
                    itemInfos: [
                        {
                            key: 0, 
                            name: "Nước lọc",
                            price: 5000,
                            src: "http://bizweb.dktcdn.net/thumb/large/100/232/204/products/1814990chai-aquaria-moi-jpeg.jpg?v=1499398600903"
                        },
                        {
                            key: 1,
                            name: "7UP",
                            price: 10000,
                            src: "https://cdn.tgdd.vn/Products/Images/2443/76446/bhx/nuoc-ngot-7-up-vi-chanh-330ml-201905301056152288.JPG"
                        },
                        {
                            key: 2,
                            name: "COCA",
                            price: 10000,
                            src: "https://cf.shopee.vn/file/f6a87bd170eab0d27850ca866bcbc66e"
                        },
                        {
                            key: 3,
                            name: "Nước cam",
                            price: 10000,
                            src: "https://product.hstatic.net/200000122283/product/nuoc-ep-cam-twister-tropicana-320ml-lon-lq5q8_96ca06fcd50644be8e0e46e24ca423d3_master.jpg"
                        },
                    ]
                }
            ]
        },
    ] 

    setFood = (link, name, price) => {
        this.props.setFood(link, name, price);
    }

    showComponent = (name) => {
        const list = this.lists.filter(c => c.name === name);
        this.setState({name: name, list: list[0]});
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
                    {
                        this.state.buttonInfos.map(buttonInfo => (
                            <div>
                                <Button key={buttonInfo.key} variant="contained" color="primary" id="food-button" onClick = {() => this.showComponent(buttonInfo.name)}>
                                    <img id="img-food-button" alt="" src={buttonInfo.src}/>
                                    {buttonInfo.content}
                                </Button>                       
                            </div>
                        ))
                    }
                    </Slider>
                </div>

                <div>
                    <ListItem key={this.state.list.key} setFood={this.setFood} listInfo={this.state.list.listInfo}/>
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