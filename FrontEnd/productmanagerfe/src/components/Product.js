import React, { Component } from 'react';

class Product extends Component {
    render() {
        return (
            <div className="col-4 mt-2 mb-2">
                <div className="card text-left">
                    <img className="card-img-top" src={this.props.Image} alt="demo" />
                    <div className="card-body">
                        <h5 className="card-title float-left">{this.props.Name}</h5>
                        <h5 className="card-title float-right">{this.props.Price}</h5>
                    </div>
                </div>
            </div>
        );
    }
}

export default Product;
