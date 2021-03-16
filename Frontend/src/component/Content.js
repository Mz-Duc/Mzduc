import React, { Component } from 'react';
import Avd from './Avd';
import Product from './Product'
import Background from './Background'
//import {connect} from 'react-redux'
import axios from 'axios';
const getproductdata =()=> axios.get('http://localhost:4000/getdata01').then((res)=>res.data)
class Content extends Component {
  constructor(props) {
    super(props);
    this.state=({
      data:null
    })
  }
  componentWillMount() {
    if(this.state.data===null){
      getproductdata().then((res)=>this.setState({
        data:res
      }))

    }
  }
  
  printdata=()=>{
    if(this.state.data!== null){
      return this.state.data.map((value,key)=> (<Product  key={key} 
        price={value.price} name={value.name} image={value.image} 
       dispatcha={value.dispatcha}/>)
      )
    }
  }
    render() {
   console.log(this.state.data);
        return (
            <div>
              
                <div className="container mt-5"><Background/>
  <div className="row">
    <div className="col-lg-3">
      <h1 className=" my-4">Bilie store</h1>
      <div className="list-group">
        <a href="#" className="list-group-item">Category 1</a>
        <a href="#" className="list-group-item">Category 2</a>
        <a href="#" className="list-group-item">Category 3</a>       
      </div>
    </div>
    {/* /.col-lg-3 */}
    <div className="col-lg-9">
     <Avd/>
      <div className="row">
        {this.printdata()}
      
      </div>
      {/* /.row */}
      </div>
    {/* /.col-lg-9 */}
    </div>
   {/* /.row */}
  </div>
 {/* /.container */}

</div>
        );
    }
}

export default Content;