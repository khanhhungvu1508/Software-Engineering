import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Button} from 'react-bootstrap';
import DisplayPrice from '../FoodDetail/displayPrice';

class Footer extends React.Component{
	handlePaymentClick = () => {
		this.props.goToPay();
	}
	render(){
		return (
			<div>
			<h4>
				Tổng cộng: <DisplayPrice price={this.props.total}/>
		    </h4>
			<h4>
				Thuế VAT (10%): <DisplayPrice price={0.1*this.props.total}/>
		    </h4><h4>
				Thành tiền: <DisplayPrice price={1.1*this.props.total}/>
		    </h4>
			<Button onClick={this.handlePaymentClick}>Thanh toán</Button>
			</div>
		);
	}
}

export default Footer;
