import React, { Component } from 'react';
import axios from 'axios';
const host=process.env.Local;
const addproductaction=(product_name,product_price,product_image,product_format,dispatcha)=>
(axios.post('/add',{product_name,product_price,product_image,product_format,dispatcha})
.then((resp)=>resp.data))
class Addproduct extends Component {
    constructor(props) {
        super(props);
        this.state={
            product_name:'',
            product_price:'',
            product_image:'',
            product_format:'',
            dispatcha:''
        }
    }
    ischange=(event)=>{
        var name=event.target.name;
        var value=event.target.value;
        this.setState({
            [name]:value
        });
    }
    handlclick=()=>{
        var {product_name,product_price,product_image,product_format,dispatcha}=this.state;
        addproductaction(product_name,product_price,product_image,product_format,dispatcha).then((response)=>{console.log(response);});
        //console.log(JSON.stringify(this.state));
    }
    render() {
        return (
            <div className="container">
  <div className="row">
    <div className="col-12">
      <hr />
    </div>
    <div className="col-8 mx-auto">
     
        <div className="form-group">
          <label htmlFor="product_name">Nhập Tên sản phẩm</label>
          <input onChange={(event)=>this.ischange(event)} type="text" name="product_name" id="product_name" className="form-control" placeholder="Nhập Tên sản phẩm" aria-describedby="helpId" />
        </div>
        <div className="form-group">
          <label htmlFor="product_price">Nhập giá sản phẩm</label>
          <input  onChange={(event)=>this.ischange(event)} type="text" name="product_price" id="product_price" className="form-control" placeholder="Nhập giá" aria-describedby="helpId" />
        </div>
        <div className="form-group">
          <label htmlFor="product_image">Đường dẫn link ảnh</label>
          <input onChange={(event)=>this.ischange(event)} type="text" name="product_image" id="product_image" className="form-control" placeholder="Nhập đường dẫn ảnh sản phẩm" aria-describedby="helpId" />
        </div>
        <div className="form-group">
          <label htmlFor="product_format">Loại sản phẩm</label>
          <input onChange={(event)=>this.ischange(event)} type="text" name="product_format" id="product_format" className="form-control" placeholder="Nhập loại sản phẩm" aria-describedby="helpId" />
        </div>
        <div className="form-group">
          <label htmlFor="product_dispathcha">Ưu đãi</label>
          <input onChange={(event)=>this.ischange(event)} type="text" name="product_dispathcha" id="product_dispathcha" className="form-control" placeholder="Nhập ưu đãi" aria-describedby="helpId" />
        </div>
        <button onClick={()=>this.handlclick()} type="reset" className="btn btn-info">Submit</button>

    </div>
  </div>
</div>

        );
    }
}

export default Addproduct;