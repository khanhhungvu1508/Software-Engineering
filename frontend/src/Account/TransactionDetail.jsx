import React from 'react';
import { Form, Col, Row, Image, Button} from 'react-bootstrap';
import "./Account.css"

function Product(props) {
    return (
        <tr>
            <td>
                <div >
                    <div>{props.name}</div>
                </div>
            </td>
            <td>
                <div >
                    <div>{props.quantity}</div>
                </div>
            </td>
        </tr>);
}

class TransactionDetail extends React.Component {
    render() { 
        return (
        <div>
            <table>
                <tr>
                    <th>Sản phẩm</th>
                    <th>Số lượng</th>
                </tr>
                {itemList}
            </table>
        </div>);
    }
}
 
export default TransactionDetail;