import React, { Component } from 'react'
import { Button } from 'antd';
import 'antd/dist/antd.css'


export default class Count extends Component {
    state={count:0}
    add=()=>{
        const {count}=this.state
        const value = this.selectNumber.value
    
        this.setState({count:count+value*1})

    }
    minus=()=>{
        const {count}=this.state
        const value = this.selectNumber.value

        this.setState({count:count-value*1})

    }
    plusIfOdd=()=>{
        const {count}=this.state
        const value = this.selectNumber.value
    
        if(count%2!==0){
            this.setState({count:count+value*1})
        }
      

    }
    plusAsync=()=>{
        const {count}=this.state
        const value = this.selectNumber.value
        setTimeout(()=>{this.setState({count:count+value*1})},1000)
      

    }
  render() {
    return (
      <div>
        <h1>The current Sum is:{this.state.count}</h1>
        <select ref={c=>this.selectNumber=c}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>&nbsp;
        <Button type="primary" onClick={this.add}>plus</Button >&nbsp;
        <Button type="primary" onClick={this.minus}>minus</Button >&nbsp;
        <Button type="primary" onClick={this.plusIfOdd}>plusIfOdd</Button >&nbsp;
        <Button type="primary" onClick={this.plusAsync}>plusAsync</Button >&nbsp;
      </div>
    )
  }
}
