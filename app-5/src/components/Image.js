import React, { Component } from 'react'

 class Image extends Component {




  render() {
    return (
      <div>
        <img src={this.props.url} alt="cats playing"/>
        <div>Error 409</div>
      </div>
    )
  }
 }
export default Image;
