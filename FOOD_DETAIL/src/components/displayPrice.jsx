import React from 'react';
import NumberFormat from 'react-number-format';

class DisplayPrice extends React.Component {
	render() {
		return (
			<NumberFormat value={this.props.price} displayType={'text'} thousandSeparator={true} suffix={' VND'} decimalScale={0}/>
		);
	}
}

export default DisplayPrice;