import React from "react";
import { Carousel } from "react-bootstrap";
import { Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import './myBanner.css';
class Homepage extends React.Component {
    render() {
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
                  <h1 style = {{fontSize: '65px'}}>Food for your Soul</h1>
                  <span style = {{fontSize: '30px', fontFamily:'sans-serif'}}>Thưởng thức theo cách của bạn.</span><br />
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
                <h1 style = {{fontSize: '65px'}}>Food for your life</h1>
                <span style = {{fontSize: '30px', fontFamily: 'sans-serif'}}>Vị ngon trên từng món ăn.</span><br />
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
        </>
        );
    }
}

export default Homepage;