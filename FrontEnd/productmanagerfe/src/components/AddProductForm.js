import React, { Component } from 'react';
const axios = require('axios');

const addProductData = (productName, productPrice, productImage) => axios.post('/adddata', { productName, productPrice, productImage }).then((res) => res.data)

class AddProductForm extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    isChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({
            [name]: value
        })
    }

    handleClick = () => {
        // let { productName,productPrice,productImage } = this.state;
        let { productName } = this.state;
        let { productPrice } = this.state;
        let { productImage } = this.state;
        if (productName !== undefined && productPrice !== undefined && productImage !== undefined) {
            addProductData(productName, productPrice, productImage).then((res) => {
                console.log(res)
            })
        }

    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-8 mx-auto">
                        <form >
                            <div className="form-group">
                                <label htmlFor="productName">Name of Product</label>
                                <input type="text" className="form-control" name="productName" id="productName" onChange={(event) => this.isChange(event)} placeholder="Name of Product" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="productPrice">Price of Product</label>
                                <input type="text" className="form-control" name="productPrice" id="productPrice" onChange={(event) => this.isChange(event)} placeholder="Price of Product" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="productImage">Image of Product</label>
                                <input type="text" className="form-control" name="productImage" id="productImage" onChange={(event) => this.isChange(event)} placeholder="Image of Product" />
                            </div>
                            <button type="reset" className="btn btn-info btn-block" onClick={() => this.handleClick()}>Submit</button>
                        </form>
                    </div>
                </div>
            </div>

        );
    }
}

export default AddProductForm;