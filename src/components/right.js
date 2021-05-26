import React, { Component, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Right(props) {


    const [displayData, setDisplayData] = useState([]);
    const [showdata, setShowdata] = useState(displayData);

    const appendData = () => {
        displayData.push(
            <Col md={4} key={props.id} className="itemBox">
                <Card>
                    <Card.Header>Box Name<FontAwesomeIcon icon={faMinus} onClick={prependData} /></Card.Header>
                    <Card.Body>
                        <Card.Text>
                            <div>
                                <Row id={props.id} onDrop={drop} onDragOver={dragOver}>
                                    <br /><br /><br /><br /><br /><br />
                                    {props.children}
                                </Row>
                            </div>
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        Total Price:
                    </Card.Footer>
                </Card>
            </Col>
        );
        setShowdata({ displayData });
    }

    const prependData = () => {
        displayData.shift();
        setShowdata({ displayData });
    }

    const drop = (e) => {
        e.preventDefault();
        const card_id = e.dataTransfer.getData('card_id');

        const card = document.getElementById(card_id);
        card.style.display = "inline-table";

        e.target.appendChild(card);

        console.log(e);
    }

    const dragOver = (e) => {
        e.preventDefault();
    }

    return (
        <div>
            <div className="rightControls">
                <span onClick={appendData}><FontAwesomeIcon icon={faPlus} /> Add Box</span>
            </div>
            <div className="boxList">
                <Container>
                    <Row>
                        {displayData}
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default Right;