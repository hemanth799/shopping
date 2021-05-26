import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { faPowerOff } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Header extends Component {

    logoutHandler = () => {
        window.location.href = "/"
    }

    render() {
        const mainLogo = "/assets/images/logo.jpg";
        return (
            <div className="header">
                <Row>
                    <Col md={2}>
                        <div className='logo'><img src={mainLogo} /></div>
                    </Col>
                    <Col md={3}>
                        <div className="contactSection">
                            <p>Email Us:</p>
                            <p>hemanth799@gmail.com</p>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className="contactSection">
                            <p>Reach Us:</p>
                            <p>D.No. 101, Coastal Homes, VSKP</p>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className="contactSection">
                            <p>Call Us:</p>
                            <p>+91 - 94913 83241</p>
                        </div>
                    </Col>
                    <Col md={1}>
                        <FontAwesomeIcon onClick={this.logoutHandler} icon={faPowerOff} />
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Header;