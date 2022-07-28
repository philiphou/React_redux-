import React, { Component } from 'react'
//  引入容器组件
import CountContainer from './containers/count'
import Person from './containers/Person'


export default class App extends Component {
  render() {
    return (
      <div>
        <CountContainer/>
        <hr/>
        <Person/>
      </div>
    )
  }
}
