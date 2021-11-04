import Header from './components/header'
import Category from './components/category'
// import './food_menu'
import FoodDetail from './components/foodDetail'
function App() {
  return (
    <div id="menu-screen">
      <div id="column1">
        <Header />
        <Category />
      </div>

      <div id="column2">
        Add your cart in here
      </div>
    </div>
  );
}

export default App;