import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import { Tab } from 'bootstrap'
import React, { Component } from 'react'
import { Col, Form, Table, Tabs } from 'react-bootstrap'
import Button from 'react-bootstrap/esm/Button'
import Row from 'react-bootstrap/esm/Row'
import ReactNotification from 'react-notifications-component'
import { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css'
// import AdminLeft from './AdminLeft'
// import AdminRight from './AdminRight'

class AdminBody extends Component {

    constructor() {
        super()

        this.fileInput = React.createRef();

        this.state = {
            men: [],
            women: [],
            kids: [],
            footwear: [],
            appliances: [],
            books: [],
            title: '',
            type: '',
            price: '',
            img: '',
            id: '',
            enable: true
        }
    }

    componentDidMount = () => {
        this.allData();
    }

    allData = () => {
        this.loadMensData();
        this.loadWomensData();
        this.loadKids();
        this.loadFootwear();
        this.loadAppliances();
        this.loadBooks();
    }

    loadMensData = async () => {
        await axios.get('http://localhost:5555/men')
            .then(response => {
                this.setState({
                    men: response.data
                })
            })
            .catch((err) => {
                console.log('Data is not loading');
            })
    }

    loadWomensData = async () => {
        await axios.get('http://localhost:5555/women')
            .then(response => {
                this.setState({
                    women: response.data
                })
            })
            .catch((err) => {
                console.log('Data is not loading');
            })
    }

    loadKids = async () => {
        await axios.get('http://localhost:5555/kids')
            .then(response => {
                this.setState({
                    kids: response.data
                })
            })
            .catch((err) => {
                console.log('Data is not loading');
            })
    }

    loadFootwear = async () => {
        await axios.get('http://localhost:5555/footwear')
            .then(response => {
                this.setState({
                    footwear: response.data
                })
            })
            .catch((err) => {
                console.log('Data is not loading');
            })
    }

    loadAppliances = async () => {
        await axios.get('http://localhost:5555/appliances')
            .then(response => {
                this.setState({
                    appliances: response.data
                })
            })
            .catch((err) => {
                console.log('Data is not loading');
            })
    }

    loadBooks = async () => {
        await axios.get('http://localhost:5555/books')
            .then(response => {
                this.setState({
                    books: response.data
                })
            })
            .catch((err) => {
                console.log('Data is not loading');
            })
    }

    onChangeHandler = e => {
        this.setState({ [e.target.name]: e.target.value })
        // console.log(e.target.files[0])
    }

    formSubmitHandler = (e) => {
        e.preventDefault();
        let data = {
            title: this.state.title,
            type: this.state.type,
            price: this.state.price,
            img: this.fileInput.current.files[0].name
        }

        let typeValue = this.state.type;

        axios.post(`http://localhost:5555/${typeValue}`, data)
            .then(response => {
                console.log(response);
                store.addNotification({
                    title: "Add Item",
                    message: `Item added successfully to ${typeValue}`,
                    type: "success",
                    container: "top-right",
                    animationIn: ["animate__animated", "animate__fadeIn"],
                    animationOut: ["animate__animated", "animate__fadeOut"],
                    dismiss: {
                        duration: 2000,
                        onScreen: true
                    }
                })
                this.allData();
                this.resetForm();
            }).catch((err) => {
                console.log('Error in add action');
            })
    }

    delete = (item) => {
        console.log(item);
        let id = item.id;
        let typeValue = item.type;
        axios.delete(`http://localhost:5555/${typeValue}/` + id)
            .then((response) => {
                this.allData();

                store.addNotification({
                    title: "Remove Item",
                    message: `Item removed successfully from ${typeValue}`,
                    type: "danger",
                    container: "top-right",
                    animationIn: ["animate__animated", "animate__fadeIn"],
                    animationOut: ["animate__animated", "animate__fadeOut"],
                    dismiss: {
                        duration: 2000,
                        onScreen: true
                    }
                })
            }).catch((err) => {
                console.log('Error in delete action');
            })
    }

    resetForm = () => {
        this.setState({
            title: '',
            type: '',
            price: '',
            img: '',
            id: '',
            enable: true
        });
    }

    edit = (item) => {
        // let typeValue = item.type;
        console.log(item.img);
        console.log(item.id);

        this.setState({
            title: item.title,
            type: item.type,
            price: item.price,
            img: item.img,
            id: item.id,
            enable: false
        })
    }

    editSubmit = (e) => {
        e.preventDefault();

        let data = {
            id: this.state.id,
            title: this.state.title,
            type: this.state.type,
            price: this.state.price,
            img: this.state.img
        }
        axios.put(`http://localhost:5555/${data.type}/${data.id}`, data)
            .then(response => {
                console.log(response);
            });
        this.allData();
        this.resetForm();
        this.setState({
            enable: true
        })
    }

    render() {
        return (
            <div className="bodySection" >
                <ReactNotification />
                <Row style={{ margin: "0px", height: "100%" }}>
                    <Col md={3} className="leftDarkBox">
                        <Form onSubmit={this.formSubmitHandler}>
                            <Form.Group controlId="name">
                                <Form.Label>Product Name</Form.Label>
                                <Form.Control type="text" value={this.state.title} name="title" onChange={this.onChangeHandler} placeholder="Enter Product Name" />
                            </Form.Group>
                            <Form.Group controlId="type">
                                <Form.Label>Product Type</Form.Label>
                                <Form.Control as="select" value={this.state.type} name="type" onChange={this.onChangeHandler}>
                                    <option>- Select Product Type -</option>
                                    <option>Men</option>
                                    <option>Women</option>
                                    <option>Kids</option>
                                    <option>Footware</option>
                                    <option>Appliances</option>
                                    <option>Books</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group controlId="price">
                                <Form.Label>Product Price</Form.Label>
                                <Form.Control type="number" value={this.state.price} name="price" onChange={this.onChangeHandler} placeholder="Enter Product Price" />
                            </Form.Group>
                            <Form.Group>
                                <Form.File id="file" ref={this.fileInput} onChange={this.onChangeHandler} label="Upload Product Image" />
                            </Form.Group>
                            <Row>
                                <Col md={6}>
                                    <Button md={6} variant="warning" type="reset" onClick={this.resetForm}>
                                        Clear
                                </Button>
                                </Col>
                                <Col md={6}>
                                    {
                                        this.state.enable ?
                                            <Button md={6} variant="success" type="submit">
                                                Submit
                                            </Button>
                                            :
                                            <Button md={6} variant="info" type="button" onClick={this.editSubmit}>
                                                Save
                                            </Button>
                                    }


                                </Col>
                            </Row>
                        </Form>
                    </Col>
                    <Col md={9} style={{ padding: '20px' }}>
                        <Tabs defaultActiveKey="men" id="uncontrolled-tab-example">
                            <Tab eventKey="men" title="Men">
                                <div style={{ overflowY: "scroll", height: "63vh" }}>
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
                                                this.state.men.map(item =>
                                                    <tr key={item.id}>
                                                        <td>{item.id}</td>
                                                        <td>{item.title}</td>
                                                        <td>{item.price}</td>
                                                        <td>
                                                            <FontAwesomeIcon icon={faEdit} onClick={() => this.edit(item)} />
                                                        </td>
                                                        <td>
                                                            <FontAwesomeIcon icon={faTrash} onClick={() => this.delete(item)} />
                                                        </td>
                                                    </tr>
                                                )
                                            }
                                        </tbody>
                                    </Table>
                                </div>
                            </Tab>
                            <Tab eventKey="women" title="Women">
                                <div style={{ overflowY: "scroll", height: "63vh" }}>
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
                                                this.state.women.map(item =>
                                                    <tr key={item.id}>
                                                        <td>{item.id}</td>
                                                        <td>{item.title}</td>
                                                        <td>{item.price}</td>
                                                        <td>
                                                            <FontAwesomeIcon icon={faEdit} onClick={() => this.edit(item)} />
                                                        </td>
                                                        <td>
                                                            <FontAwesomeIcon icon={faTrash} onClick={() => this.delete(item)} />
                                                        </td>
                                                    </tr>
                                                )
                                            }
                                        </tbody>
                                    </Table>
                                </div>
                            </Tab>
                            <Tab eventKey="kids" title="Kids">
                                <div style={{ overflowY: "scroll", height: "63vh" }}>
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
                                                this.state.kids.map((item) =>
                                                    <tr key={item.id}>
                                                        <td>{item.id}</td>
                                                        <td>{item.title}</td>
                                                        <td>{item.price}</td>
                                                        <td>
                                                            <FontAwesomeIcon icon={faEdit} onClick={() => this.edit(item)} />
                                                        </td>
                                                        <td>
                                                            <FontAwesomeIcon icon={faTrash} onClick={() => this.delete(item)} />
                                                        </td>
                                                    </tr>
                                                )
                                            }
                                        </tbody>
                                    </Table>
                                </div>
                            </Tab>
                            <Tab eventKey="footwear" title="Footwear">
                                <div style={{ overflowY: "scroll", height: "63vh" }}>
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
                                                this.state.footwear.map((item) =>
                                                    <tr key={item.id}>
                                                        <td>{item.id}</td>
                                                        <td>{item.title}</td>
                                                        <td>{item.price}</td>
                                                        <td>
                                                            <FontAwesomeIcon icon={faEdit} onClick={() => this.edit(item)} />
                                                        </td>
                                                        <td>
                                                            <FontAwesomeIcon icon={faTrash} onClick={() => this.delete(item)} />
                                                        </td>
                                                    </tr>
                                                )
                                            }
                                        </tbody>
                                    </Table>
                                </div>
                            </Tab>
                            <Tab eventKey="appliances" title="Appliances">
                                <div style={{ overflowY: "scroll", height: "63vh" }}>
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
                                                this.state.appliances.map((item) =>
                                                    <tr key={item.id}>
                                                        <td>{item.id}</td>
                                                        <td>{item.title}</td>
                                                        <td>{item.price}</td>
                                                        <td>
                                                            <FontAwesomeIcon icon={faEdit} onClick={() => this.edit(item)} />
                                                        </td>
                                                        <td>
                                                            <FontAwesomeIcon icon={faTrash} onClick={() => this.delete(item)} />
                                                        </td>
                                                    </tr>
                                                )
                                            }
                                        </tbody>
                                    </Table>
                                </div>
                            </Tab>
                            <Tab eventKey="books" title="Books">
                                <div style={{ overflowY: "scroll", height: "63vh" }}>
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
                                                this.state.books.map((item) =>
                                                    <tr key={item.id}>
                                                        <td>{item.id}</td>
                                                        <td>{item.title}</td>
                                                        <td>{item.price}</td>
                                                        <td>
                                                            <FontAwesomeIcon icon={faEdit} onClick={() => this.edit(item)} />
                                                        </td>
                                                        <td>
                                                            <FontAwesomeIcon icon={faTrash} onClick={() => this.delete(item)} />
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
                    {/* <AdminLeft edit={this.editData} />
                    <AdminRight
                        men={this.state.men}
                        women={this.state.women}
                        appliances={this.state.appliances}
                        edit={this.editData}
                        delete={this.deleteData}
                    /> */}
                </Row>
            </div>
        )
    }
}

export default AdminBody