import React from "react";
import Slider from 'react-slick';
import { Carousel } from "react-bootstrap";
import { Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import './myBanner.css';

const cssstyle = `
    .navbar-list {
        margin: 0 auto;
        padding: 0px 40px 40px 40px;
        width: 1100px;
    }

    #food-button {
        display: inline;
        color: black;
        background: rgb(250, 251, 253);
        font-family: "Zilla Slab", serif;
    }

    #img-food-button {
        display: flex;
        width: 200px;
        height: 150px;
        object-fit: cover;
        margin: 0 auto;
    }

    .slick-next:before, .slick-prev:before {
        color: red;
    }

    .slick-list{
        height: 200px;
        padding-top: 20px;
    }

    @media only screen and (max-width : 1200px) {
        .navbar-list {
            margin: 0 auto;
            padding: 0px 40px 40px 40px;
            width: 890px;
        }
    }
    
    @media only screen and (max-width : 920px) {
        .navbar-list {
            margin: 0 auto;
            padding: 0px 40px 40px 40px;
            width: 680px;
        }
    }

    @media only screen and (max-width : 680px) {
        .navbar-list {
            margin: 0 auto;
            padding: 0px 40px 40px 40px;
            width: 480px;
        }
    }

    @media only screen and (max-width : 500px) {
        .navbar-list {
            display: none;
        }
    }
`;

class Homepage extends React.Component {
    state = {
        hotLists: [
            {
                src: "https://dacsandathanh.com/wp-content/uploads/2018/05/com-ga-xoi-mo-4273-min-1.jpg",
            },
            {
                src: "https://image-us.eva.vn/upload/2-2019/images/2019-06-28/1561709538-885-thumbnail_schema_article.jpg",
            },
            {
                src: "https://cdn-www.vinid.net/2020/10/488c647a-c%C3%A1ch-l%C3%A0m-m%C3%AC-x%C3%A0o-b%C3%B2.png",
            },
            {
                src: "http://imgs.vietnamnet.vn/Images/2016/07/06/09/20160706093735-1.jpg",
            },
            {
                src: "https://www.phunu8.vn/PhuNu8DuLieu/PhuNu8HinhAnh/user5016/an_trang_mieng_sau_cung_1_0.jpg", 
            },
            {
                src: "https://vnn-imgs-f.vgcloud.vn/2021/07/27/20/che-thai.jpg", 
            },
        ]
    };
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
            centerPadding: '-10px',
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
                        centerPadding: '-10px',
                    }
                },
                {
                    breakpoint: 920,
                    settings: {
                        dots: true,
                        infinite: true,
                        speed: 500,
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        autoplay: true, 
                        centerMode: true,
                        centerPadding: '-10px',
                        autoplayspeed: 3000
                    }
                },
                {
                    breakpoint: 680,
                    settings: {
                        dots: true,
                        infinite: true,
                        speed: 500,
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        autoplay: true, 
                        centerMode: true,
                        centerPadding: '-10px',
                        autoplayspeed: 3000
                    }
                }
            ]
        };
        return(
            <>  
            <Carousel id = "myCarousel">
              <Carousel.Item interval={1000}>
                <img
                  className="d-block min-vh-100"
                  src="http://nunforest.com/koad-demo/upload/slider/slide1.jpg"
                  alt="First slide"
                />
                <Carousel.Caption style ={{
                                          color: '#23292c',
                                          fontFamily: 'Zilla Slab',
                                          transform: 'translateY(-50%)',
                                          bottom: 'initial',
                                          top: '50%',
                                          right: '50%',
                                          minWidth: '250px'
                                          }}>
                  <h1 className="homepage-title">
                      Food for your Soul
                    </h1>
                  <span className="homepage-subtitle">
                      Thưởng thức theo cách của bạn.
                    </span><br />
                  <Button style = {{ color: '#ffffff',
                                     background: '#ea462b',
                                     fontSize: '18px',
                                     fontWeight:'600',
                                     borderWidth: '0px',
                                     margin: '0px',
                                     padding: '10px 33px',
                                     fontFamily:'"Zilla Slab", serif'
                                  }}
                  onClick = {() => this.props.selectPage("menu")}> 
                  View our menu</Button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
              <img
                className="d-block min-vh-100"
                src="http://nunforest.com/koad-demo/upload/slider/slide2.jpg"
                alt="Second slide"
              />
              <Carousel.Caption style ={{margin: 'left',
                                        color: '#23292c',
                                        fontFamily: 'Zilla Slab',
                                        transform: 'translateY(-50%)',
                                        bottom: 'initial',
                                        top: '50%',
                                        right: '50%',
                                        minWidth: '250px'}}>
                <h1 
                    className="homepage-title">
                    Food for your life
                </h1>
                <span 
                    className="homepage-subtitle"
                    >
                        Vị ngon trên từng món ăn.
                </span><br />
                <Button style = {{ color: '#ffffff',
                                     background: '#ea462b',
                                     fontSize: '18px',
                                     fontWeight:'600',
                                     borderWidth: '0px',
                                     margin: '0px',
                                     padding: '10px 33px'
                                  }}
                  onClick = {() => this.props.selectPage("menu")}> 
                  View our menu</Button>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>

          <div className="navbar-list">
              <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
              <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
              <style>{cssstyle}</style>

              <div 
                className="title-list" 
                style = {{
                    display: 'block', 
                    fontSize: '3rem', 
                    paddingTop: '10px', paddingBottom: '10px', paddingLeft: '20px',
                    textAlign: 'center', 
                    fontFamily:'"Zilla Slab", serif'}}>
                Best Seller
            </div>
            
              <Slider {...settings}>
              {
                  this.state.hotLists.map(hotList => (
                      <div>
                          <img id="img-food-button" alt="" src={hotList.src}/>                   
                      </div>
                  ))
              }
              </Slider>
          </div>
        </>
        );
    }
}

export default Homepage;