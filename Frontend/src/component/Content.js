import React, { Component } from 'react';
import Avd from './Avd';
import Product from './Product'

//import {connect} from 'react-redux'
import axios from 'axios';
const host=process.env.Local;
const getproductdata =()=> axios.get('/getdata01').then((res)=>res.data)
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
              
                <div className="container mt-5">
  <div className="row">
    <div className="col-lg-3 ">
      <h1 className=" my-4">Bilie store</h1>
      <div className="list-group adv">
        <h3>Xu hướng</h3>
        <a href="#" className="list-group-item">Phụ Kiện</a>
        <a href="#" className="list-group-item">Billie wear</a>
        <a href="#" className="list-group-item">When we afall asleep where do we go ?</a>       
      </div>
     
    </div>
    {/* /.col-lg-3 */}
    <div className="col-lg-9">
     <Avd/>
      <div className="row mt-5">
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