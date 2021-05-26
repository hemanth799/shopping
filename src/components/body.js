import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import Card from './Card';
import Left from './left';
import Right from './right';

const imgPath = "/assets/images/";

function Body(props) {
    const items = props.category;
    // const [category, setCategory] = useState("");
    const url = `http://localhost:5555/${items}`;
    const [dresses, setDresses] = useState([]);

    useEffect(() => {
        // stateChange();
        loadData();
    }, [items])

    // const stateChange = () => {
    //     if (items == undefined || items == null || items == "") {
    //         setCategory("men");
    //     } else {
    //         setCategory(items);
    //     }
    // }

    const loadData = async () => {
        await Axios.get(url).then(response => {
            setDresses(response.data)
        }).catch(error => {
            console.log('Data is not loading');
        })
    }
    return (
        <div className="bodySection">
            <Row style={{ margin: "0px" }}>
                <Col md={3} className="leftDarkBox">
                    <Left id="board-1" className="board">
                        <Col md={12}><p style={{ textTransform: "capitalize" }}>Items: {items}</p></Col>
                        <Card>
                            <Row>
                                {
                                    dresses.map(dress => <Col key={dress.id} md={6} id={`card-${dress.id}`} draggable="true">
                                        <div className="productSection">
                                            <img src={`${imgPath}${dress.img}`} />
                                            <Row>
                                                <Col md={6}>
                                                    <div className="name">{dress.title}</div>
                                                </Col>
                                                <Col md={6}>
                                                    <div className="price">{dress.price}</div>
                                                </Col>
                                            </Row>
                                        </div>
                                    </Col>)
                                }
                            </Row>
                        </Card>
                    </Left>
                </Col>
                <Col md={9} className="rightLightBox">
                    <Right id="board-2" className="board"></Right>
                </Col>
            </Row>
        </div>
    )
}

export default Body;