import React from 'react';
import Content from './ContentComponents/Content';
import axios from "axios";

import Category from './Header/category';
import MyNavbar from './Header/navbar';
import Banner from './Header/Banner';
import Homepage from './Header/Homepage';
import Cart from './Cart/cart';
import Footer from './Footer/footer';
import Payment from './Payment/Payment'
import LoginRegisterPage from './LoginRegisterComponent/LoginRegisterPage';
import Account from './Account/Account';
import AboutPage from './About/About';


const category = {
    rice: "Món cơm",
    dessert: "Món tráng miệng",
    pho: "Món phở",
    noodle: "Món mì",
    stickyrice: "Món xôi",
    drink: "Thức uống"
}

/*Hard code food, this's one category*/

class Controller extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //global:
            window: {/*Default window size */
                width: window.innerWidth,
                height: window.innerHeight
            },
            
            page: "home",                           //Use for change page
            // Navbar

            // Category

            // Content
            category: category.trangmieng,          
            foods: [],                              //Foods for render to UI
            sideDishes: [],                         //sideDishes for render to UI
            mainFoodList: [],                       //All foods from all category 
            sideDishList: [],                       //All side dishes all category
            food: null,
            needToAdd: false,
            // Login-Register:
            account: null,                           //account's user 
            //Payment 
            transaction: {
                Uid: null,
                When: null,
                Product: null,
                Total: null,
                Status: null,
            }                                
        }

        this.changeCategory = this.changeCategory.bind(this);
        this.addFood = this.addFood.bind(this);
        this.selectPage = this.selectPage.bind(this);
        this.isNeedToAdd = this.isNeedToAdd.bind(this);
        this.setAccount = this.setAccount.bind(this);
        this.goToPay = this.goToPay.bind(this);

        //add dimensions listener for window resizing
        window.addEventListener('resize', this.getWindowDimensions); 
    }



    isNeedToAdd(){
		if(this.state.needToAdd){
			this.setState({
                needToAdd: false,   
            })
			return true;
		}
		return false;
	}

    goToPay(Product, Total) {
        let Uid;
        if (this.state.account === null) {
            /*Guest transaction is -1*/
            Uid = -1;
        }
        else {
            Uid = this.state.account.id;
        }
        console.log(Product);
        this.setState({
            transaction: {
                uid: Uid,
                when: new Date().toISOString(),
                product: Product,
                total: Total,
                status: "Thanh toán thành công"

            }
        })
        this.selectPage("payment");
    }

    selectPage = (Page) => {
        if (Page !== this.state.page)
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

    setAccount(account) {
        this.setState({
            account: account[0],
            page: "home",
        })
        console.log("Home")
        console.log(account);
    }

    
    //remove listener on page exit
    componentWillUnmount() {
        window.removeEventListener('resize', this.getWindowDimensions); 
    }
    
    getWindowDimensions = () => {
        this.setState(
            { window: { width: window.innerWidth, height: window.innerHeight}
        });
    }

    initialFoods(mainFoodList) {
        console.log("MainFoodList: ");
        console.log(mainFoodList);
        this.setState({
            category: category.rice,
            foods: mainFoodList.filter(food => food.category === category.rice),
            mainFoodList: mainFoodList,
        }, () => console.log(this.state.foods));
    }

    initialSideDishes(sideDishList) {
        console.log("Request data success");
        console.log(sideDishList);
        this.setState({
            sideDishes: sideDishList.filter(sideDish => 
                sideDish.category.split(",").includes(category.rice)
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
        if (this.state.page !== "menu")
            this.selectPage("menu");
        this.setFoodsByCategory(category);
    }

    // import axios from "axios";
    
    /*Get data from server*/
    componentDidMount = () => {
        window.scrollTo(0, 0);
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
        /*Default position on top of page*/
        return (
            <div
                style={{background: "#FFFFFF"}}
            >
                {/* Navbar */}
                    <MyNavbar 
                        changeCategory={this.changeCategory} 
                        selectPage={this.selectPage} 
                        account={this.state.account}
                    />
                {   /* Home page */
                    this.state.page === "home" && 
                    <Homepage selectPage={this.selectPage}/>
                }
                
                
                {   /* Menu page */
                    this.state.page === "menu" && 
                    <>
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
                        <Cart 
                            isNeedToAdd={this.isNeedToAdd} 
                            food={this.state.food}
                            goToPay={this.goToPay}
                        />
                    </>
                }
                {   /*Login page*/
                    this.state.page === "login-register" &&
                    <LoginRegisterPage setAccount={this.setAccount}/>

                }
                {
                    /*Payment page*/
                    this.state.page === "payment" && 
                    <Payment 
                        account={this.state.account}
                        transaction={this.state.transaction}
                        selectPage={this.selectPage}
                    />
                
                }
                {
                    /*Payment page*/
                    this.state.page === "account" && 
                    <Account 
                        account={this.state.account}
                    />
                
                }
                {
                    /*About page*/
                    this.state.page === "about" &&
                    <AboutPage  window={this.state.window} />
                }
                {/* Footer */}
                    <Footer/>
            </div>
        );
    }
}
 
export default Controller;