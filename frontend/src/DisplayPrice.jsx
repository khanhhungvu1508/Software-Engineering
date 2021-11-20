import React from 'react';
import NumberFormat from 'react-number-format';
import "./FoodDetail/FoodDetail.css"

class DisplayPrice extends React.Component {
	render() {
		return (
			<NumberFormat 
				value={this.props.price} 
				displayType={'text'} 
				thousandSeparator={true} 
				suffix={'VND'} 
				decimalScale={0}
				class="fooddetail_display_price"
			/>
		);
	}
}

export default DisplayPrice;