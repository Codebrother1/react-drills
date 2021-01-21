import React, { Component } from 'react'

 export default class InputBoxComp extends Component {
    constructor(){
      super();
      this.state={
      message: ""
  };
}
handleChange(value){
  this.setState({message: value})
}


  render() {
    return (
      <div className="App">
        <input className="input-box" onChange={(e) => {this.handleChange(e.target.value)}} type="text"/>
        <p>{this.state.message}</p>
      </div>
    );
  }
}

