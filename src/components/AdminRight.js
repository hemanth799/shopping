import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/esm/Button'
import Col from 'react-bootstrap/esm/Col'
import Table from 'react-bootstrap/esm/Table'
import Tab from 'react-bootstrap/esm/Tab'
import Tabs from 'react-bootstrap/esm/Tabs'
import axios from 'axios'

function AdminRight(props) {

    // const [men, setMen] = useState([]);
    // const [women, setWomen] = useState([]);
    // const [appliances, setAppliances] = useState([]);

    // useEffect(() => {
    //     common();
    // }, [])

    // const common = () => {
    //     loadMensData();
    //     loadWomensData();
    //     loadAppliances();
    // }

    // const loadMensData = () => {
    //     axios.get('http://localhost:5555/men')
    //         .then(response => {
    //             setMen(response.data)
    //         })
    //         .catch((err) => {
    //             console.log('Data is not loading');
    //         })
    // }

    // const loadWomensData = () => {
    //     axios.get('http://localhost:5555/women')
    //         .then(response => {
    //             setWomen(response.data)
    //         })
    //         .catch((err) => {
    //             console.log('Data is not loading');
    //         })
    // }

    // const loadAppliances = () => {
    //     axios.get('http://localhost:5555/appliances')
    //         .then(response => {
    //             setAppliances(response.data)
    //         })
    //         .catch((err) => {
    //             console.log('Data is not loading');
    //         })
    // }


    // const remove = (i) => {
    //     let appliances = this.state.appliances;
    //     appliances.splice(i, 1);
    //     setAppliances({
    //         appliances: appliances
    //     })
    // }

    return (
        <React.Fragment>
            <Col md={9} style={{ padding: '20px' }}>
                <Tabs defaultActiveKey="men" id="uncontrolled-tab-example">
                    <Tab eventKey="men" title="Men">
                        <div style={{ overflowY: "scroll", height: "450px" }}>
                            <Table striped bordered hover variant="dark" className="text-center">
                                <thead>
                                    <tr>
                                        <th>S.No.</th>
                                        <th>Product Name</th>
                                        <th>Product Price</th>
                                        <th colSpan="2">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        props.men.map(dress =>
                                            <tr key={dress.id}>
                                                <td>{dress.id}</td>
                                                <td>{dress.title}</td>
                                                <td>{dress.price}</td>
                                                <td>
                                                    <FontAwesomeIcon icon={faEdit} />
                                                </td>
                                                <td>
                                                    <FontAwesomeIcon icon={faTrash} />
                                                </td>
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </Table>
                        </div>
                    </Tab>
                    <Tab eventKey="women" title="Women">
                        <div style={{ overflowY: "scroll", height: "500px" }}>
                            <Table striped bordered hover variant="dark" className="text-center">
                                <thead>
                                    <tr>
                                        <th>S.No.</th>
                                        <th>Product Name</th>
                                        <th>Product Price</th>
                                        <th colSpan="2">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        props.women.map(dress =>
                                            <tr key={dress.id}>
                                                <td>{dress.id}</td>
                                                <td>{dress.title}</td>
                                                <td>{dress.price}</td>
                                                <td>
                                                    <FontAwesomeIcon icon={faEdit} />
                                                </td>
                                                <td>
                                                    <FontAwesomeIcon icon={faTrash} />
                                                </td>
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </Table>
                        </div>
                    </Tab>
                    <Tab eventKey="appliances" title="Appliances">
                        <div style={{ overflowY: "scroll", height: "500px" }}>
                            <Table striped bordered hover variant="dark" className="text-center">
                                <thead>
                                    <tr>
                                        <th>S.No.</th>
                                        <th>Product Name</th>
                                        <th>Product Price</th>
                                        <th colSpan="2">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        props.appliances.map((dress) =>
                                            <tr key={dress.id}>
                                                <td>{dress.id}</td>
                                                <td>{dress.title}</td>
                                                <td>{dress.price}</td>
                                                <td>
                                                    <FontAwesomeIcon icon={faEdit} onClick={() => props.edit(dress.id)} />
                                                </td>
                                                <td>
                                                    <FontAwesomeIcon icon={faTrash} onClick={() => props.delete(dress.id)} />
                                                </td>
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </Table>
                        </div>
                    </Tab>
                </Tabs>
            </Col>
        </React.Fragment >
    )
}

export default AdminRight