import React from 'react';
import Content from '../ContentComponents/Content';
import {Button} from 'react-bootstrap';
import axios from "axios";

import Category from '../components/category';
import MyNavbar from '../components/navbar';
import Banner from '../components/Banner';
import Homepage from '../components/Homepage';
import Cart from '../Cart/cart';
import Footer from '../Footer/footer';
import { ThemeProvider } from 'react-bootstrap';


const category = {
    rice: "Món cơm",
    dessert: "Món tráng miệng",
    pho: "Món phở",
    noodle: "Món mì",
    stickyrice: "Món xôi",
    drink: "Thức uống"
}

/*Hard code food, this's one category*/

let id = 0;

class Controller extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //global:
            window: {/*Default window size */
                width: window.innerWidth,
                height: window.innerHeight
            },
            food: null,
            needToAdd: false,
            // Navbar

            // Category

            // Content
            category: category.trangmieng,
            foods: [],                              //Foods for render to UI
            sideDishes: [],   //sideDishes for render to UI
            mainFoodList: [],                       //All foods from all category 
            sideDishList: [],                       //All side dishes all category
            page: "home"
        }
        this.changeCategory = this.changeCategory.bind(this);
        this.addFood = this.addFood.bind(this);
        this.selectPage = this.selectPage.bind(this);
        this.isNeedToAdd = this.isNeedToAdd.bind(this);
        //add dimensions listener for window resizing
        window.addEventListener('resize', this.getWindowDimensions); 
    }

    isNeedToAdd(){
		if(this.state.needToAdd){
			this.state.needToAdd = false;
			return true;
		}
		return false;
	}

    selectPage = (Page) => {
        if (Page != this.state.page)
        {
            this.setState({
                page: Page
            });
        }
    }

    addFood = (food) => {
        //Foods: src, name, price, quantity, total price
        this.setState({
            food:food, needToAdd: true
        })
    }

    
    //remove listener on page exit
    componentWillUnmount() {
        window.removeEventListener('resize', this.getWindowDimensions); 
    }
    
    getWindowDimensions = () => {
        this.setState({ window: { width: window.innerWidth, height: window.innerHeight} });
    }

    initialFoods(mainFoodList) {
        this.setState({
            foods: mainFoodList.filter(food => food.category === category.trangmieng),
            mainFoodList: mainFoodList,
        }, () => console.log(this.state.foods));
    }

    initialSideDishes(sideDishList) {
        console.log("Request data success");
        console.log(sideDishList);
        this.setState({
            sideDishes: sideDishList.filter(sideDish => 
                sideDish.category.split(",").includes(category.trangmieng)
            ),
            sideDishList: sideDishList,
        }, () => console.log(this.state.sideDishes));
    }

    setFoodsByCategory(category) {
        /*Sell for Main foods and side dishes*/
        if (this.state.category === category) {
            /*Don't render the same category */
            return;
        }
        const mainFoods = this.state.mainFoodList.filter(food => food.category === category);
        const sideDishes = this.state.sideDishList.filter(
                        sideDish => sideDish.category.split(",").includes(category));
        this.setState({category: category, foods: mainFoods, sideDishes: sideDishes});
    }

    changeCategory(category) {
        /*Testing function*/
        if (this.state.page != "menu")
            this.selectPage("menu");
        this.setFoodsByCategory(category);
    }
    
    /*Get data from server*/
    componentDidMount = () => {
        this.refreshList();
    }

    refreshList = () => {
        /*Request both mainfoods and side dishes */
        axios
          .get("https://pure-retreat-31306.herokuapp.com/api/mainFoods/")
          .then((res) => this.initialFoods(res.data))
          .catch((err) => console.log(err));
        axios
          .get("https://pure-retreat-31306.herokuapp.com/api/sideFoods/")
          .then((res) => this.initialSideDishes(res.data))
          .catch((err) => console.log(err));
      };

    render() { 
        return (
            <div>
                {/* Navbar */}
                <MyNavbar changeCategory={this.changeCategory} selectPage={this.selectPage}/>
                {this.state.page == "home" && <Homepage selectPage={this.selectPage}/>}
                
                {this.state.page == "menu" && <>
                <Banner />
                {/* Category */}
                <Category changeCategory={this.changeCategory}/>
                {/* Content */}
                <Content 
                    foods={this.state.foods} 
                    sideDishes={this.state.sideDishes} 
                    category={this.state.category} 
                    window={this.state.window}
                    addFood={this.addFood}
                />
                <Cart isNeedToAdd={this.isNeedToAdd} food={this.state.food}/>
                </>}
                {/* Footer */}
                {/* <Button variant="primary" size="lg" onClick={this.changeCategory}>
                    Testing button
                </Button>{' '} */}
                <Footer/>
            </div>
        );
    }
}
 
export default Controller;