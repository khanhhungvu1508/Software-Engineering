import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import { Form, Navbar } from 'react-bootstrap';

class SideDishes extends React.Component {
    render() { 
        return (
            <div>
                <Navbar bg="light">
                    <h4 style={{display: 'flex', justifyContent: 'flex-start'}}>
                        <strong>Món ăn kèm</strong>
                    </h4>
                </Navbar>
                <Form.Check type="checkbox" id="autoSizingCheck2" label="Cá viên chiên" />
                <Form.Check type="checkbox" id="autoSizingCheck2" label="Trứng rán" />
            </div>
        );
    }
}
 
export default SideDishes;