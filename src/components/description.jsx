import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import { Accordion } from 'react-bootstrap'

class Descritption extends React.Component {
    render() { 
        return (
            <Accordion defaultActiveKey="1">
            <Accordion.Item eventKey="0">
                <Accordion.Header>
                    <h4><strong>Description</strong></h4>
                </Accordion.Header>
                <Accordion.Body>
                    {this.props.des}
                </Accordion.Body>
            </Accordion.Item>
            </Accordion>
        );
    }
}
 
export default Descritption;
