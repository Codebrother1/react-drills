import React, { Component } from 'react'
import Todo from "./Components/Todo"
import "./App.css"


 class App extends Component {
   constructor(){
     super();
     this.state = {
       list: [],
       input: ""
     };
     this.handleAddTask = this.handleAddTask.bind(this);
   }
   handleInputChange(value){
     this.setState({input: value})
   }
   handleAddTask(){
     this.setState({
       list: [...this.state.list, this.state.input],
       input: ""
     });
   }

  render() {
    let list = this.state.list.map((e, index) => {
      return <Todo key={index} task={e}/>
    })
    return (
      <div className='App'>
        <h1>My list of Todo:</h1>
        <div>
          <input 
          value={this.state.input}
          placeholder="Enter new task"
          onChange={e => this.handleInputChange(e.target.value)}
          type="text"/>
          <button onClick={this.handleAddTask} >Add</button>
        </div>
        <br/>
        {list}
      </div>
    )
  }
}

export default App;
