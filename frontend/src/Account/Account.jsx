import React from 'react';
import { Form, Col, Row} from 'react-bootstrap';
import "./Account.css"
import axios from "axios";



function Field(props) {
    return (
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="4">
            {props.name}
            </Form.Label>
            <Col sm="8">
                <Form.Control  
                    plaintext 
                    readOnly 
                    defaultValue={props.value} 
                />
            </Col>
        </Form.Group>
    );
}

// function Transaction(props) {
//     return (
//     <tr>
//         <td>
//             <div >
//                 <div>{props.when}</div>
//             </div>
//         </td>
//         <td>
//             <div >
//                 <div>{props.product}</div>
//             </div>
//         </td>
//         <td>
//             <div >
//                 <div>{props.total}</div>
//             </div>
//         </td>
//         <td>
//             <div >
//                 <div>{props.status}</div>
//             </div>
//         </td>
//     </tr>);
// }

class Account extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            transactionList: [],
        }
    }

    setTransactionList(transactions) {
        if (transactions === null || transactions.length === 0) {
            return;
        }

        let transactionList = transactions.filter(
            transaction => (transaction.uid === this.props.account.id)
        )
        console.log(transactionList);
        this.setState({
            transactionList: transactionList
        });
    }

    componentDidMount() {
        this.refreshList();
    }
    
    refreshList = () => {
        /*Get all User account*/
        axios
            .get("https://pure-retreat-31306.herokuapp.com/api/transHises/")
            .then((res) => this.setTransactionList(res.data))
            .catch((err) => console.log(err));
        };

    render() { 
        // let itemList = this.state.transactionList.map((transaction) => 
        //     <Transaction 
        //         when={transaction.when}
        //         product={transaction.product}
        //         total={transaction.total}
        //         status={transaction.status}/>
        // )
        return (
            <>
                <Form className="account-form">
                    <h4> Thông tin tài khoản</h4>
                    <Field name={"Email"} value={this.props.account.email}/>
                    <Field name={"Tên"} value={this.props.account.name}/>
                    <Field name={"Mật khẩu"} value={this.props.account.password}/>
                    {/* <h4> Lịch sử giao dịch</h4> */}
                </Form>
                {/* <table>
                    <tr>
                        <th>Ngày</th>
                        <th>Sản phẩm</th>
                        <th>Tổng tiền</th>
                        <th>Trạng thái</th>
                    </tr>
                    {itemList}
                </table> */}
            </>
        );
    }
}
 
export default Account;