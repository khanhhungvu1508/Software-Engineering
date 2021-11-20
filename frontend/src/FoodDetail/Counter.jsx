import React from 'react';
import "./FoodDetail.css"

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quantity: 1
        }
        this.increase = this.increase.bind(this);
        this.decrease = this.decrease.bind(this);
    }

    increase = () => {
        const quantity = (this.state.quantity === 99) ? 99 : this.state.quantity + 1;
        this.setState({ quantity: quantity});
        this.props.handleIncrement();
		
	}

    decrease = () => {
        const quantity = (this.state.quantity === 1) ? 1 : this.state.quantity - 1;
        this.setState({ quantity: quantity})
		this.props.handleDecrement()
	}


    render() { 
        return (
                    <form className="fooddetail_counter_container">
                        <button className="fooddetail_counter_value-button" type="button" onClick={this.decrease}>
                            - 
                        </button>
                        <div className="fooddetail_counter_input">{this.state.quantity}</div>
                        <button className="fooddetail_counter_value-button" type="button" onClick={this.increase}>
                            + 
                        </button>
                    </form>
                );
    }
}
 
export default Counter;