import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className="jumbotron text-center">
                <div className="container">
                    <h1 className="display-3">Hiển thị sản phẩm</h1>
                    <p className="lead">Sử dụng ReactJS lấy dữ liệu từ NodeJS</p>
                </div>
            </div>

        );
    }
}

export default Header;
