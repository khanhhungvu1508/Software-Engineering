import React from 'react';
import Content from '../ContentComponents/Content';
import {Button} from 'react-bootstrap';
import axios from "axios";


const category = {
    com: "Món cơm",
    trangmieng: "Món tráng miệng",
    pho: "Món phở",
    mi: "Món mì",
    xoi: "Món xôi",
}

/*Hard code food, this's one category*/
const lists = [
    {
        id: 0, 
        category: category.trangmieng,
        name: "Bánh flan",
        price: 10000,
        describe: " Bánh Flan được chế biến bằng cách hấp chín các nguyên liệu trứng, sữa và nước caramel",
        src: "https://www.phunu8.vn/PhuNu8DuLieu/PhuNu8HinhAnh/user5016/an_trang_mieng_sau_cung_1_0.jpg",
    },
    {
        id: 1,
        category: category.trangmieng,
        name: "Kem dâu",
        price: 10000,
        describe: " Bánh Flan được chế biến bằng cách hấp chín các nguyên liệu trứng, sữa và nước caramel",
        src: "https://bacdau.vn/wp-content/uploads/2020/04/kem-fi.jpg",
        
    },
    {
        id: 2,
        category: category.trangmieng,
        name: "Thạch rau câu",
        price: 10000,
        describe: " Bánh Flan được chế biến bằng cách hấp chín các nguyên liệu trứng, sữa và nước caramel",
        src: "https://image-us.24h.com.vn/upload/1-2018/images/2018-03-17/1521274130-417-_mg_9636-1521273469-width650height433.jpg"
    },
    {
        id: 3,
        category: category.trangmieng,
        name: "Chè",
        price: 10000,
        describe: " Bánh Flan được chế biến bằng cách hấp chín các nguyên liệu trứng, sữa và nước caramel",
        src: "https://vnn-imgs-f.vgcloud.vn/2021/07/27/20/che-thai.jpg"
    },
    {
        id: 4,
        category: category.trangmieng,
        name: "Chè",
        price: 10000,
        describe: " Bánh Flan được chế biến bằng cách hấp chín các nguyên liệu trứng, sữa và nước caramel",
        src: "https://vnn-imgs-f.vgcloud.vn/2021/07/27/20/che-thai.jpg"
    },
    {
        key: 0, 
        category: category.com,
        name: "Cơm gà",
        price: 30000,
        describe: " Bánh Flan được chế biến bằng cách hấp chín các nguyên liệu trứng, sữa và nước caramel",
        src: "https://dacsandathanh.com/wp-content/uploads/2018/05/com-ga-xoi-mo-4273-min-1.jpg"
    },
    {
        key: 1,
        category: category.com,
        name: "Cơm tấm",
        price: 29000,
        describe: " Bánh Flan được chế biến bằng cách hấp chín các nguyên liệu trứng, sữa và nước caramel",
        src: "https://statics.vinpearl.com/com-tam-ngon-o-sai-gon-0_1630562640.jpg"
    },
    {
        key: 2,
        category: category.com,
        name: "Cơm chiên dương châu",
        price: 34000,
        describe: " Bánh Flan được chế biến bằng cách hấp chín các nguyên liệu trứng, sữa và nước caramel",
        src: "https://i.ytimg.com/vi/_cdBAMq5KZ0/maxresdefault.jpg"
    },
    {
        key: 3,
        category: category.com,
        name: "Cơm gà viên sốt cay",
        price: 35000,
        describe: " Bánh Flan được chế biến bằng cách hấp chín các nguyên liệu trứng, sữa và nước caramel",
        src: "https://xobami.com/hinhanh_flash/san_pham/19-28-06_20190627_204537.jpg"
    },
    {
        key: 0, 
        category: category.pho,
        name: "Phở bò",
        price: 40000,
        describe: " Bánh Flan được chế biến bằng cách hấp chín các nguyên liệu trứng, sữa và nước caramel",
        src: "https://image-us.eva.vn/upload/2-2019/images/2019-06-28/1561709538-885-thumbnail_schema_article.jpg"
    },
    {
        key: 1,
        category: category.pho,
        name: "Phở gà",
        price: 36000,
        describe: " Bánh Flan được chế biến bằng cách hấp chín các nguyên liệu trứng, sữa và nước caramel",
        src: "https://image-us.eva.vn/upload/4-2020/images/2020-12-11/image3-1607656518-418-width512height272.png"
    },
    {
        key: 2,
        category: category.pho,
        name: "Phở gói",
        price: 5000,
        describe: " Bánh Flan được chế biến bằng cách hấp chín các nguyên liệu trứng, sữa và nước caramel",
        src: "https://img.my-best.vn/press_component/images/41638f835af7e8b76754a11a1783b1f5.png?ixlib=rails-4.2.0&q=70&lossless=0&w=690&fit=max&s=b24f80e37728e02aba579414318ed9d5"
    },
    {
        key: 0, 
        category: category.mi,
        name: "Mì xào bò",
        price: 28000,
        describe: " Bánh Flan được chế biến bằng cách hấp chín các nguyên liệu trứng, sữa và nước caramel",
        src: "https://cdn-www.vinid.net/2020/10/488c647a-c%C3%A1ch-l%C3%A0m-m%C3%AC-x%C3%A0o-b%C3%B2.png"
    },
    {
        key: 1,
        category: category.mi,
        name: "Mì xào hải sản",
        price: 35000,
        describe: " Bánh Flan được chế biến bằng cách hấp chín các nguyên liệu trứng, sữa và nước caramel",
        src: "https://cdn.beptruong.edu.vn/wp-content/uploads/2013/08/mon-mi-xao-hai-san.jpg"
    },
    {
        key: 2,
        category: category.mi,
        name: "Mì xào trứng",
        price: 24000,
        describe: " Bánh Flan được chế biến bằng cách hấp chín các nguyên liệu trứng, sữa và nước caramel",
        src: "https://baconcuu.com.vn/wp-content/uploads/2020/09/cach-lam-mi-xao-trung-800x500.jpg"
    },
    {
        key: 3,
        category: category.mi,
        name: "Pasta",
        price: 25000,
        describe: " Bánh Flan được chế biến bằng cách hấp chín các nguyên liệu trứng, sữa và nước caramel",
        src: "https://cdn.tgdd.vn/Files/2020/06/03/1260494/pasta-la-gi-phan-loai-cach-lam-va-tao-hinh-pasta-9.jpg"
    },
    {
        key: 5, 
        category: category.mi,
        name: "Spaghetti",
        price: 30000,
        describe: " Bánh Flan được chế biến bằng cách hấp chín các nguyên liệu trứng, sữa và nước caramel",
        src: "https://www.mybakingaddiction.com/wp-content/uploads/2021/07/one-pot-spaghetti-in-bowl-720x720.jpg"
    },
    {
        key: 0, 
        category: category.xoi,
        name: "Xôi đậu xanh",
        price: 20000,
        describe: " Bánh Flan được chế biến bằng cách hấp chín các nguyên liệu trứng, sữa và nước caramel",
        src: "http://imgs.vietnamnet.vn/Images/2016/07/06/09/20160706093735-1.jpg"
    },
    {
        key: 1,
        category: category.xoi,
        name: "Xôi thịt",
        price: 20000,
        describe: " Bánh Flan được chế biến bằng cách hấp chín các nguyên liệu trứng, sữa và nước caramel",
        src: "https://images.foody.vn/res/g67/666025/prof/s640x400/foody-mobile-hmb-jpg-573-636328819211018192.jpg"
    },
    {
        key: 2,
        category: category.xoi,
        name: "Xôi gà",
        price: 20000,
        describe: " Bánh Flan được chế biến bằng cách hấp chín các nguyên liệu trứng, sữa và nước caramel",
        src: "https://cdn.tgdd.vn/2021/03/CookProduct/t1-1200x676-8.jpg"
    }
];

const sideDishList = [
    {
		id: 0,
		name: "Trứng chiên",
		price: "5000",
		category: [
			category.com,
			category.mi,
            category.xoi,
		]
	},
	{
		id: 1,
		name: "Cơm thêm",
		price: "3000",
		category: [
			category.com,
		]
	},
    {
		id: 2,
		name: "Mì thêm",
		price: "3000",
		category: [
			category.mi,
		]
	},
    {
		id: 3,
		name: "Táo",
		price: "3000",
		category: [
			category.trangmieng,
		]
	},
    {
		id: 4,
		name: "Sữa tươi",
		price: "3000",
		category: [
			category.trangmieng,
		]
	},
    {
		id: 5,
		name: "Trân châu",
		price: "3000",
		category: [
			category.trangmieng,
		]
	}
];

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
            // Navbar

            // Category

            // Content
            category: category.trangmieng,
            foods: [],                              //Foods for render to UI
            sideDishes: [],   //sideDishes for render to UI
            mainFoodList: [],                       //All foods from all category 
            sideDishList: [],                       //All side dishes all category
        }
        this.changeCategory = this.changeCategory.bind(this);
    
        //add dimensions listener for window resizing
        window.addEventListener('resize', this.getWindowDimensions); 
    }

    
    //remove listener on page exit
    componentWillUnmount() {
        window.removeEventListener('resize', this.getWindowDimensions); 
    }
    
    //actually set the state to the window dimensions
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
        console.log("Food change");
        const mainFoods = this.state.mainFoodList.filter(food => food.category === category);
        const sideDishes = this.state.sideDishList.filter(
                        sideDish => sideDish.category.split(",").includes(category));
        this.setState({category: category, foods: mainFoods, sideDishes: sideDishes});
    }

    changeCategory() {
        /*Testing function*/
        id = (id + 1) % 5;
        const fake = [
            category.com,
            category.pho,
            category.trangmieng,
            category.mi,
            category.xoi
        ];
        this.setFoodsByCategory(fake[id]);
    }
    
    /*Get data from server*/
    componentDidMount = () => {
        this.refreshList();
    }

    refreshList = () => {
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

                {/* Category */}

                {/* Content */}
                <Content foods={this.state.foods} sideDishes={this.state.sideDishes} category={this.state.category} window={this.state.window}/>
                {/* Footer */}
                <Button variant="primary" size="lg" onClick={this.changeCategory}>
                    Testing button
                </Button>{' '}

            </div>
        );
    }
}
 
export default Controller;