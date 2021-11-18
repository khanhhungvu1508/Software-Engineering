import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import "../FoodDetail.css"
import {Row} from 'react-bootstrap';
import SideDishItem from './SideDishItem';

class SideDishes extends React.Component {
    render() { 
        let sideDishes= this.props.sideDishes;
        if (sideDishes.length > 0) {
            sideDishes =sideDishes.map((sideDish, index) =>
                <SideDishItem sideDish={sideDish}/>
            );
        }
        
        return (
            <Row style={{margin: "5px 0px 5px 0px"}}>
                <div class="fooddetail_sidedisk_name">
                    <strong> Món ăn kèm </strong>
                </div>
                {sideDishes}
            </Row>
        );
    }
}
 
export default SideDishes;