import React, { Component } from 'react';

class Product extends Component {
    render() {
        return (
            
                 <div className="col-lg-4 col-md-6 mb-4 zoomout">
          <div className="card h-100">
            <a href="#"><img className="card-img-top" src={this.props.image} alt="" /></a>
            <div className="card-body">
              <h4 className="card-title">
                <a href="/*/*/MOM-SWEATPANTS/6ULY0000000">
                 {this.props.name}
                </a>
              </h4>
              <dd className="format trousers">{this.props.format}</dd>
              <dd className="price">{this.props.price}</dd>
              <dd className="dispatch">{this.props.dispatcha}</dd>
            </div>
          </div>
        </div>
            
        );
    }
}

export default Product;

