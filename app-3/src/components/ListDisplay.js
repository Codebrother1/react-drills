import React, { Component } from 'react'

 class ListDisplay extends Component {
constructor(){
  super();


  this.state = {
    filterString: "",
    food: ["greens", "yams", "cornbread"]
  }
}

changeList(filter){
  this.setState({filterString: filter})
}

  render() {
    let foodListDisplay = this.state.food
    .filter((e, index) =>{
      return e.includes(this.state.filterString)
    })
    .map((e, index) => {
      return <h2 key={index}>{e}</h2>
    })
  
    return (
      <div>
        <input className="" onChange={e => this.changeList(e.target.value)} type="text"/>
        {foodListDisplay}
      </div>
    )
  }
}


export default ListDisplay;
