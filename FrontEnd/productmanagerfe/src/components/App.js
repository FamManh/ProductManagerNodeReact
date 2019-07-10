import React, { Component } from 'react';
import Header from './Header'
import Product from './Product';
import AddProductForm from './AddProductForm';
const axios = require('axios');

const getProductData = () => axios.get('/getdata').then((res) => res.data)



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }

  componentWillMount() {
    if (this.state.data.length === 0) {
      getProductData().then((res) => {
        this.setState({
          data: res
        })

      })
    }
  }

  mapProduct = () => this.state.data.map((value, key) =>
    <Product key={key} Name={value.name} Price={value.price} Image={value.image}></Product>)

  render() {
    return (

      <div className="App">
        <Header></Header>
        <AddProductForm></AddProductForm>
        <div className="container">
          <div className="row">
            {/* <Product Name="Pen" Price="12000.đ" Image="http://kenh14cdn.com/zoom/460_289/2019/7/9/untitled-2-15626762890311515904535-crop-15626763093011643121812.png"></Product> */}
            {this.mapProduct()}
          </div>
        </div>

      </div>
    );
  }
}

export default App;
