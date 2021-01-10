import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

class Header extends React.Component {
  render() {
    return (
      <>
        <div className="header">
          {/* <div className="logo">
                <Link to="/">LOGO</Link>
            </div>
            <div className="navbar">
                <ul>
                    
                </ul>
            </div> 
            */}
          <div className="">
            <Navbar className="px-5 py-3" bg="dark" variant="dark">
              <Navbar.Brand href="#home">Navbar</Navbar.Brand>
              <Nav className="mr-auto">
                <Link to="/About" className="text-white px-2">About Us</Link>
                <Link to="/Contact" className="text-white px-2">Contact Us</Link>
                <Link to="/Users" className="text-white px-2">Users</Link>

              </Nav>
              <Form inline>
                <FormControl
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2"
                />
                <Button variant="outline-info">Search</Button>
              </Form>
            </Navbar>
          </div>
        </div>
      </>
    );
  }
}
export default Header;
