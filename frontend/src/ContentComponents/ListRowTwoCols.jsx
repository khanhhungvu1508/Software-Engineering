import React from 'react';
import {Col, Row} from 'react-bootstrap';
import Item from './Item';



class ListRowTwoCols extends React.Component {

    constructor(props) {
        super(props); 
        this.getRow = this.getRow.bind(this);
    }

    getRow(items) {
        let cols = [];
        cols.push(<Col><Item food={items[0]} openModal={this.props.openModal}/></Col>);
        if (items.length > 1){
            cols.push(<Col><Item food={items[1]} openModal={this.props.openModal}/></Col>);
        }
        else{
            /*Push empty item for balance*/
            cols.push(<Col></Col>)
        }
        return cols;
    };

    render() { 
        return (
                <Row style={{margin:"5px 0px 5px 0px"}}>
                    {this.getRow(this.props.items)}
                </Row>
        );
    }
}
 
export default ListRowTwoCols;