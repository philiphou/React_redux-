import {connect} from 'react-redux'
import {createPlusAction,createMinusAction,createPlusAsyncAction} from '../../redux/actions/count'
import React, { Component } from 'react'



//  定义UI组件
 class Count extends Component {
    state={car:'benzi'} // 只把需要共享的状态数据 count 交给redux管理，剩下的依然可以有转态，比如 car
    //  组件一挂载，就要检测store里的转态变化，如果变化就重新render, 因为redux 底层设计不会自动更新页面，

    add=()=>{
        const value = this.selectNumber.value
        this.props.plus(value*1)

     
         
    }
    minus=()=>{
              const value = this.selectNumber.value
              this.props.minus(value*1)
         
         }
    plusIfOdd=()=>{
         const value = this.selectNumber.value
         if(this.props.count%2!==0){
          this.props.plus(value*1)
         }
     
       

    }
    plusAsync=()=>{
     
        const value = this.selectNumber.value
        this.props.plusAsync(value*1,1000)
    
     
     
    }
  render() {
    console.log(this.props)
    return (
       <div>
        <h2> 我是SUM组件</h2>
        <h4>The current Sum is:{this.props.count}</h4>
        <h4>Persons numberis:{this.props.persons.length}</h4>
        <select ref={c=>this.selectNumber=c}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>&nbsp;
        <button  onClick={this.add}>plus</button >&nbsp;
        <button  onClick={this.minus}>minus</button >&nbsp;
        <button  onClick={this.plusIfOdd}>plusIfOdd</button >&nbsp;
        <button  onClick={this.plusAsync}>plusAsync</button >&nbsp;
      </div>
    )
  }
}



export default connect(state=>({count:state.count,persons:state.persons})
,
// mapDispatchToProps 的函数写法（一般写法），可以优化为直接传入一个action对象
// dispatch=>(
//     {
//             plus:(data)=>{
//                  dispatch(createPlusAction(data))
//             },
//             minus:(data)=>{
//                 dispatch(createMinusAction(data))
//             },
//             plusAsync:(data,time)=>{
//                 dispatch(createPlusAsyncAction(data,time))
//             }
           
           
//         }
//     )
//mapDispatchToProps的精简写法：
 {
    plus:createPlusAction,
    minus:createMinusAction,
    plusAsync:createPlusAsyncAction
 }
    )(Count)


