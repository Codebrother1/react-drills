import React, { Component } from 'react'

 class ListOfStuff extends Component {
   constructor(){
    super();
     this.state ={
       food: ["greens", "cornbread", "yams"],
     }

   }
 


  render() {
    let TheFoodsList = this.state.food.map((e, index) =>{
      return <h2 key={index}>{e}</h2>
    })
    return (
      <div className="App">
        {TheFoodsList}
      </div>
    )
  }
}


export default ListOfStuff;
