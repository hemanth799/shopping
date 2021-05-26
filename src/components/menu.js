import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

class Menu extends Component {

    constructor(props) {
        super(props);

        this.state = {
            men: "men",
            women: "women",
            kids: "kids",
            footwear: "footwear",
            appliances: "appliances",
            books: "books"
        };
    }

    navigation = (param) => {
        switch (param) {
            case 'men':
                return (
                    this.props.onChange(this.state.men)
                );
            case 'women':
                return (
                    this.props.onChange(this.state.women)
                );
            case 'kids':
                return (
                    this.props.onChange(this.state.kids)
                );
            case 'footwear':
                return (
                    this.props.onChange(this.state.footwear)
                );
            case 'appliances':
                return (
                    this.props.onChange(this.state.appliances)
                );
            case 'books':
                return (
                    this.props.onChange(this.state.books)
                );
            default:
                return 'home';
        }
    }

    render() {
        return (
            <div className="menu">
                <Navbar bg="light" expand="lg">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link onClick={() => this.navigation('men')}>Mens</Nav.Link>
                            <Nav.Link onClick={() => this.navigation('women')}>Womens</Nav.Link>
                            <Nav.Link onClick={() => this.navigation('kids')}>Kids</Nav.Link>
                            <Nav.Link onClick={() => this.navigation('footwear')}>Footwear</Nav.Link>
                            <Nav.Link onClick={() => this.navigation('appliances')}>Appliances</Nav.Link>
                            <Nav.Link onClick={() => this.navigation('books')}>Books</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

export default Menu