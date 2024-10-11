import React, { Component } from 'react'
import Loading from './Loading.gif'

export class Spinner extends Component {
  
  render() {
    return (
      <div className='text-center' >
           <img style ={{width:'50px', height:'50px'}} src={Loading} alt="loading" />
      </div>
    )
  }
}

export default Spinner