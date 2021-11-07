import React from 'react'
import './Payment.css';

class Field extends React.Component {
    render() {
        return (
            <div class="field-container">
                <label for={this.props.id}>{this.props.name}</label>
                <input id={this.props.id} maxlength={this.props.maxlength} inputmode={this.props.inputMode} pattern={this.props.pattern}/>
            </div>
        )
    }
}

class PaymentForm extends React.Component {
    render(){
        return (
            <div class="form-container">
                <Field id="name" name="Name" maxlength="20" inputMode="text" pattern="*"/>
                <Field id="cardnumber" name="Card Number" maxlength="16" inputMode="numeric" pattern="[0-9]*"/>
                <Field id="expirationdate" name="Expiration (mm/yy)" maxlength="5" inputMode="numeric" pattern="[0-9]*"/>
                <Field id="securitycode" name="Security Code" maxlength="16" inputMode="numeric" pattern="[0-9]*"/>
            </div>
        );
    }
}

class PaymentUI extends React.Component {
    render() {
        return (
            <div>
                <div class="payment-title">
                    <h1>Payment Information</h1>
                </div>
                <div>
                    <PaymentForm/>
                </div>
                <div >
                     <a href="something" class="button5" >Thanh toán</a>
                </div>
            </div>
        );
    }
}

export default PaymentUI;