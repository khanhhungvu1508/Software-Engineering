import React from 'react';
import "./Payment.css"
import {Form, Button} from 'react-bootstrap';
import axios from "axios";



class PaymentUI extends React.Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }

    refreshList() {
        alert("Thanh toán thành công");
    }


    onSubmit() {
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
                    />
            </Form.Group>
            <Form.Group>
                <Form.Label>Expiry Date</Form.Label>
                <Form.Control 
                    type="date" 
                    placeholder="19/06/2020" 
                    />
            </Form.Group>
            <Form.Group>
                <Form.Label>CVV</Form.Label>
                <Form.Control 
                    type="number" 
                    placeholder="658"
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