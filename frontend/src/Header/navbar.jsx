import React from "react";
import { Navbar, Container, Nav, NavDropdown} from "react-bootstrap";
// import { useEffect } from 'react';
// import './myBanner.css';
import "./Navbar.css"

const category = {
  rice: "Món cơm",
  dessert: "Món tráng miệng",
  pho: "Món phở",
  noodle: "Món mì",
  stickyrice: "Món xôi",
  drink: "Thức uống"
}

class MyNavbar extends React.Component {
    getAccountNavBarItem() {
      if (this.props.account === null) {
        return (
            <Nav.Link  
              className="navbar-item"
              style={{margin: "0 25px" }} 
              onClick = {() => this.props.selectPage("login-register")}>
              Login
            </Nav.Link>);
      }
      return (
          <Nav.Link 
            className="navbar-item"
            style={{margin: "0 25px" }} 
            onClick = {() => this.props.selectPage("account")}>
            Account
          </Nav.Link>
        );

    }

    render(){
        let loginNavBar = this.getAccountNavBarItem();
        return(
          <>
          <Navbar bg="light" expand="lg" fixed="top">
            <Container fluid>
              <Navbar.Brand href="#">
                <img src ="https://i.imgur.com/3AUAOKZ.jpg" alt="" width="40" height = "35"></img>
                <span className="navbar-title"> HYPER WINDY </span>
              </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                  <Navbar.Collapse id="navbarScroll">
                    <Nav
                      className="me-auto my-2 my-lg-0"
                      style={{ maxHeight: '100px', 
                               padding: '0.25rem 0.75rem',
                               margin: '0 auto', 
                               fontFamily: 'inherit',
                               fontSize: '20px',
                               fontWeight: '500',
                                 }}
                      navbarScroll
                    >
                  <Nav.Link className="navbar-item" style={{margin: "0 25px" }} onClick = {() => this.props.selectPage("home")}>Home</Nav.Link>
                  <NavDropdown className="navbar-item" title="Menu" id="navbarScrollingDropdown"  style={{margin: "0 25px" }}>
                  <NavDropdown.Item className="navbar-item" onClick = {() => this.props.changeCategory(category.rice)}>Món cơm</NavDropdown.Item>
                  <NavDropdown.Item className="navbar-item" onClick = {() => this.props.changeCategory(category.pho)}>Món phở</NavDropdown.Item>
                  <NavDropdown.Item className="navbar-item" onClick = {() => this.props.changeCategory(category.stickyrice)}>Món xôi</NavDropdown.Item>
                  <NavDropdown.Item className="navbar-item" onClick = {() => this.props.changeCategory(category.noodle)}>Món mì</NavDropdown.Item>
                  <NavDropdown.Item className="navbar-item" onClick = {() => this.props.changeCategory(category.dessert)}>Món tráng miệng</NavDropdown.Item>
                  <NavDropdown.Item className="navbar-item" onClick = {() => this.props.changeCategory(category.drink)}>Thức uống</NavDropdown.Item>
                
          {/* <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
            Something else here */}
          {/* </NavDropdown.Item> */}
                  </NavDropdown>
                  <Nav.Link 
                    className="navbar-item" 
                    href="#action6" 
                    style={{margin: "0 25px" }} 
                    onClick = {() => this.props.selectPage("about")}>
                    About
                  </Nav.Link>
                  <Nav.Link className="navbar-item" href="#action7" style={{margin: "0 25px" }} onClick = {() => this.props.selectPage("contact")}>
                    Contact
                  </Nav.Link>
                  {loginNavBar}
                </Nav>
              {/* <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
              <Button variant="outline-success">Search</Button>
              </Form> */}
            </Navbar.Collapse>
          </Container>
          
        </Navbar>

        
        </>
        );
    }
}
export default MyNavbar;