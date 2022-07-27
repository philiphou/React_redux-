import React, { Component } from 'react'
import { Button } from 'antd';
import 'antd/dist/antd.css'
//  引入store,用于获取保存在store中的状态
import store from '../../redux/store'

export default class Count extends Component {
    state={car:'benzi'} // 只把需要共享的状态数据 count 交给redux管理，剩下的依然可以有转态，比如 car
    //  组件一挂载，就要检测store里的转态变化，如果变化就重新render, 因为redux 底层设计不会自动更新页面，
    componentDidMount(){
      store.subscribe(()=>{
        // 此处调用 setState()传入一个空对象，这样react也会自动更新渲染component
        this.setState({})
      })
    }
    add=()=>{
        const value = this.selectNumber.value
        store.dispatch({type:'plus',data:value*1})
         
    }
    minus=()=>{
              const value = this.selectNumber.value
              store.dispatch({type:'minus',data:value*1})
         
         }
    plusIfOdd=()=>{
        
        const count = store.getState()
        const value = this.selectNumber.value
        if(count%2!==0){
          store.dispatch({type:'plus',data:value*1})
        }
       

    }
    plusAsync=()=>{
     
        const value = this.selectNumber.value
        setTimeout(()=>{store.dispatch({type:'plus',data:value*1})},500)
     
    }
  render() {
    return (
      <div>
        <h1>The current Sum is:{store.getState()}</h1>
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
