import React from 'react';
import {Row} from 'react-bootstrap';
import Item from './Item';



class ListRowOneCol extends React.Component {
    render() { 
        return (
                <Row>
                     <Item food={this.props.food} openModal={this.props.openModal}/>
                </Row>
        );
    }
}
 
export default ListRowOneCol;