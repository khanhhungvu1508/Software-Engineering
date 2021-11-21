import React from 'react';
import "./Payment.css"
import {Form, Button} from 'react-bootstrap';
import axios from "axios";



class PaymentUI extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cardNumber: "",
            date: "",
            cvv: ""
        }
        this.onSubmit = this.onSubmit.bind(this);
    }

    refreshList() {
        alert("Thanh toán thành công");
    }


    onSubmit() {
        if (this.state.cardNumber.length === 0) {
            alert("Mã số thẻ bạn nhập không hợp lệ");
            return;
        }
        if (this.state.cvv === 0) {
            alert("Số cvv bạn nhập không hợp lệ");
            return;
        }
        let transaction = this.props.transaction;
        console.log("Log before submit")
        console.log(transaction);
        axios
            .post("https://pure-retreat-31306.herokuapp.com/api/transHises/", transaction)
            .then((res) => {
                this.refreshList();
            }).catch((err) => console.log(err));
        this.props.selectPage("home");
    }

    render() {
        return (
            <Form className="payment-form">
            <h2 className="text-center ">
            Thanh toán
            </h2>
            <Form.Group>
                <Form.Label>Card number</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="1234 7843 1237 1279" 
                    value={this.state.cardNumber}
                    onChange={(e) => this.setState({
                        cardNumber: e.target.value
                    })}
                    />
            </Form.Group>
            <Form.Group>
                <Form.Label>Expiry Date</Form.Label>
                <Form.Control 
                    type="date" 
                    placeholder="19/06/2020" 
                    value={this.state.date}
                    onChange={(e) => this.setState({
                        date: e.target.value
                    })}
                    />
            </Form.Group>
            <Form.Group>
                <Form.Label>CVV</Form.Label>
                <Form.Control 
                    type="number" 
                    placeholder="658"
                    value={this.state.cvv}
                    onChange={(e) => this.setState({
                        cvv: e.target.value
                    })}
                />
            </Form.Group>
            <Button 
                className="btn-lg- btn-dark btn-block payment-button"
                onClick={this.onSubmit}
                >
                Thanh toán
            </Button>
        </Form>
        );
    }
};

export default PaymentUI;