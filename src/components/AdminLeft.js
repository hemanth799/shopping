import React, { Component } from 'react'
import Col from 'react-bootstrap/esm/Col'
import Form from 'react-bootstrap/esm/Form'
import Button from 'react-bootstrap/esm/Button'
import Row from 'react-bootstrap/esm/Row'
import axios from 'axios'

class AdminLeft extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: '',
            type: '',
            price: '',
            img: ''
        }
    }

    onChangeHandler = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    formSubmitHandler = () => {
        axios.post('http://localhost:5555/appliances', this.state)
            .then(response => {
                console.log(response);
            })
    }

    render() {
        return (
            <React.Fragment>
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
                                <option>Articals</option>
                                <option>Mackup</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="price">
                            <Form.Label>Product Price</Form.Label>
                            <Form.Control type="number" value={this.state.price} name="price" onChange={this.onChangeHandler} placeholder="Enter Product Price" />
                        </Form.Group>
                        <Form.Group>
                            <Form.File id="file" value={this.state.img} onChange={this.onChangeHandler} label="Upload Product Image" />
                        </Form.Group>
                        <Row>
                            <Col md={6}>
                                <Button md={6} variant="info" type="reset">
                                    Clear
                                </Button>
                            </Col>
                            <Col md={6}>
                                <Button md={6} variant="success" type="submit">
                                    Submit
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </Col>
            </React.Fragment>
        )
    }
}

export default AdminLeft