import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import { Button } from "react-bootstrap";
import axios from "axios";

class Demo extends React.Component {
    state = {
        list: [],
    }
    
    componentDidMount = () => {
        this.refreshList();
    }
    
    refreshList = () => {
        axios
          .get("http://127.0.0.1:8000/api/mainFoods/")
          .then((res) => this.setState({ list: res.data }))
          .catch((err) => console.log(err));
        console.log(this.state.list)
    }

    render() { 
        return (    
            <div>
              <Button onClick={this.refreshList}> Hello </Button>
            </div>
        );
    }
}
 
export default Demo;
