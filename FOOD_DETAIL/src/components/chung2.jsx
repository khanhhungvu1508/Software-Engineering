import React from 'react';
import Chung from './chung';
import PaymentUI from './payment/Payment'

class Chung2 extends React.Component{
	state = {
		payment: false
	}

	goToPay = () => {
		this.setState({payment: true});
	}

	render() {
		console.log(this.state.payment);
		if  (this.state.payment){
			return <PaymentUI/>
		}
		return <Chung goToPay={this.goToPay}/>
	}
}

export default Chung2;