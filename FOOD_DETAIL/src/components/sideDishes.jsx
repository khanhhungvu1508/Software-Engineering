import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import { Form, Navbar } from 'react-bootstrap';

class SideDishes extends React.Component {
    render() { 
        return (
            <div>
                <Navbar bg="light">
                    <h4 style={{display: 'flex', justifyContent: 'flex-start'}}>
                        <strong>Side dishes</strong>
                    </h4>
                </Navbar>
                <Form.Check type="checkbox" id="autoSizingCheck2" label="Crullers" />
                <Form.Check type="checkbox" id="autoSizingCheck2" label="Poached eggs" />
            </div>
        );
    }
}
 
export default SideDishes;